// atom-chat v2 · Reemplazo de slots por componentes reales de la Web Library
// Corre en Figma desktop (Plugins → Development → Import plugin from manifest…) con la Web Library abierta.
// Reemplaza dentro de la section «atom-chat v2 — componente unificado»:
//   icon-slot/<glyph>                      → ❖ atom-icon (Icon Name = glyph)
//   button-slot/<Type>/<size>[/<glyph>]    → ❖ atom-button (Label, icono izquierdo)
//   link-slot/s[/left:<g>][/right:<g>][/disabled] → ❖ atom-link-button
//   icon-button-slot/<Type>/<size>/<glyph> → ❖ atom-icon-button
//   instance-slot/<nodeId | name:Set|Variant> → instancia con overrides (prop:/text:/textIdx:/icon:/tag:)
// No borra nada original: solo reemplaza los frames placeholder que creó Claude.

const PAGE_ID = '3215:20665';
const SECTION_ID = '12639:5926';
const ICON_SET_KEY = '4cd26eac74667a30dddfe8249656cd0d1411a516';
const BUTTON_SET = '251:2769';
const ICON_BUTTON_SET = '1005:17207';
const LINK_SET = '1944:32916';
const META_FLAGS = { forwarded: 'share', starred: 'star', pinned: 'thumbtack' };
const report = { icon: 0, button: 0, link: 0, iconButton: 0, instance: 0, errors: [] };

async function loadFonts() {
  const fonts = [['Inter','Regular'],['Inter','Medium'],['Inter','Semi Bold'],['Inter','Bold'],['Inter','Italic'],
    ['Font Awesome 7 Pro','Regular'],['Font Awesome 7 Pro','Solid'],['Font Awesome 7 Pro','Light'],['Font Awesome 7 Brands','Regular']];
  for (const [family, style] of fonts) { try { await figma.loadFontAsync({ family, style }); } catch (e) {} }
}
async function loadNodeFonts(node) {
  const texts = node.type === 'TEXT' ? [node] : node.findAll(n => n.type === 'TEXT');
  for (const t of texts) { for (const f of t.getRangeAllFontNames(0, t.characters.length)) { try { await figma.loadFontAsync(f); } catch (e) {} } }
}
function isIcon(t) { return /font-icon/.test(t.name) || (typeof t.fontName === 'object' && /Awesome/.test(t.fontName.family)); }
function inInstance(n) { let p = n.parent; while (p) { if (p.type === 'INSTANCE') return true; p = p.parent; } return false; }
function variantOf(set, wanted) {
  return set.children.find(c => Object.entries(wanted).every(([k, v]) => c.name.split(', ').includes(k + '=' + v))) || set.defaultVariant;
}
function propKey(inst, name) { return Object.keys(inst.componentProperties).find(k => k === name || k.split('#')[0] === name); }
function iconsIn(inst) { return inst.findAll(n => n.type === 'INSTANCE' && n.visible && n.componentProperties && Object.keys(n.componentProperties).some(k => k.startsWith('Icon Name'))); }
async function setGlyph(iconInst, glyph) {
  const k = Object.keys(iconInst.componentProperties).find(k => k.startsWith('Icon Name'));
  await loadNodeFonts(iconInst);
  iconInst.setProperties({ [k]: glyph });
}
function swap(slot, inst) {
  const parent = slot.parent;
  parent.insertChild(parent.children.indexOf(slot), inst);
  inst.visible = slot.visible;
  if (slot.componentPropertyReferences && slot.componentPropertyReferences.visible) inst.componentPropertyReferences = { visible: slot.componentPropertyReferences.visible };
  if ('layoutMode' in parent && parent.layoutMode !== 'NONE') {
    if (slot.layoutSizingHorizontal === 'FILL') inst.layoutSizingHorizontal = 'FILL';
    inst.layoutGrow = slot.layoutGrow;
    if (slot.layoutAlign && slot.layoutAlign !== 'INHERIT') inst.layoutAlign = slot.layoutAlign;
  } else { inst.x = slot.x; inst.y = slot.y; }
  slot.remove();
}
function slotLabel(slot) { const t = slot.findOne(n => n.type === 'TEXT' && n.name === 'Label') || slot.findOne(n => n.type === 'TEXT'); return t ? t.characters : ''; }
function collect(root, prefix) { return root.findAll(n => (n.type === 'FRAME') && n.name.startsWith(prefix) && !inInstance(n)); }

async function main() {
  const page = await figma.getNodeByIdAsync(PAGE_ID);
  await figma.setCurrentPageAsync(page);
  const root = await figma.getNodeByIdAsync(SECTION_ID);
  if (!root) { figma.closePlugin('No encontré la section atom-chat v2'); return; }
  await loadFonts();
  const iconSet = await figma.importComponentSetByKeyAsync(ICON_SET_KEY);
  const iconRegular = variantOf(iconSet, { Weight: 'Regular' });
  const buttonSet = await figma.getNodeByIdAsync(BUTTON_SET);
  const iconButtonSet = await figma.getNodeByIdAsync(ICON_BUTTON_SET);
  const linkSet = await figma.getNodeByIdAsync(LINK_SET);
  let allPagesLoaded = false;

  // 1 · instance-slot
  for (const slot of collect(root, 'instance-slot/')) {
    try {
      const target = slot.name.slice('instance-slot/'.length);
      let comp;
      if (target.startsWith('name:')) {
        const [setName, variantName] = target.slice(5).split('|');
        if (!allPagesLoaded) { await figma.loadAllPagesAsync(); allPagesLoaded = true; }
        const set = figma.root.findAllWithCriteria({ types: ['COMPONENT_SET'] }).find(s => s.name === setName && !s.remote);
        comp = set && (set.children.find(c => c.name === variantName) || set.defaultVariant);
      } else {
        const n = await figma.getNodeByIdAsync(target);
        comp = n && (n.type === 'COMPONENT_SET' ? n.defaultVariant : n);
      }
      if (!comp) throw new Error('componente no encontrado');
      const inst = comp.createInstance();
      await loadNodeFonts(inst);
      const specs = slot.children.filter(c => c.type === 'TEXT' && c.name.includes(':') && c.name !== 'label').map(t => [t.name, t.characters]);
      const props = {};
      for (const [k, v] of specs) if (k.startsWith('prop:')) { const key = propKey(inst, k.slice(5)); if (key) props[key] = v === 'true' ? true : v === 'false' ? false : v; }
      if (Object.keys(props).length) inst.setProperties(props);
      await loadNodeFonts(inst);
      for (const [k, v] of specs) {
        if (k.startsWith('text:')) { const m = k.slice(5); const t = inst.findOne(n => n.type === 'TEXT' && n.visible && n.characters === m && !isIcon(n)) || inst.findOne(n => n.type === 'TEXT' && n.visible && n.name === m && !isIcon(n)); if (t) t.characters = v; }
        else if (k.startsWith('textIdx:')) { const ts = inst.findAll(n => n.type === 'TEXT' && n.visible && !isIcon(n)); const t = ts[+k.slice(8)]; if (t) t.characters = v; }
        else if (k.startsWith('icon:')) { const ic = iconsIn(inst)[+k.slice(5)]; if (ic) await setGlyph(ic, v); }
        else if (k.startsWith('tag:')) { const tag = inst.findOne(n => n.type === 'INSTANCE' && n.name.includes('atom-tag')); if (tag) { const key = Object.keys(tag.componentProperties).find(p => p.includes('label') && tag.componentProperties[p].type === 'TEXT'); if (key) tag.setProperties({ [key]: v }); } }
      }
      swap(slot, inst); report.instance++;
    } catch (e) { report.errors.push(slot.name + ' → ' + e.message); }
  }
  // 2 · button-slot
  for (const slot of collect(root, 'button-slot/')) {
    try {
      const [, type, size, glyph] = slot.name.split('/');
      const inst = variantOf(buttonSet, { Size: size, Type: type, State: 'Enabled' }).createInstance();
      await loadNodeFonts(inst);
      const p = {}; const lk = propKey(inst, 'Label'); if (lk) p[lk] = slotLabel(slot);
      const l = propKey(inst, 'hasLeftIcon'); const r = propKey(inst, 'hasRightIcon');
      if (l) p[l] = !!glyph; if (r) p[r] = false;
      inst.setProperties(p);
      if (glyph) { const ic = iconsIn(inst)[0]; if (ic) await setGlyph(ic, glyph); }
      swap(slot, inst); report.button++;
    } catch (e) { report.errors.push(slot.name + ' → ' + e.message); }
  }
  // 3 · link-slot
  for (const slot of collect(root, 'link-slot/')) {
    try {
      const parts = slot.name.split('/');
      const left = (parts.find(p => p.startsWith('left:')) || '').slice(5);
      const right = (parts.find(p => p.startsWith('right:')) || '').slice(6);
      const disabled = parts.includes('disabled');
      const inst = variantOf(linkSet, { Size: 's', State: disabled ? 'Disabled' : 'Enabled' }).createInstance();
      await loadNodeFonts(inst);
      const p = {}; const lk = propKey(inst, 'Label'); if (lk) p[lk] = slotLabel(slot);
      const l = propKey(inst, 'hasLeftIcon'); const r = propKey(inst, 'hasRightIcon');
      if (l) p[l] = !!left; if (r) p[r] = !!right;
      inst.setProperties(p);
      const ics = iconsIn(inst);
      if (left && ics[0]) await setGlyph(ics[0], left);
      if (right && ics[left ? 1 : 0]) await setGlyph(ics[left ? 1 : 0], right);
      const lt = slot.findOne(n => n.type === 'TEXT' && n.name === 'Label');
      const bound = lt && lt.componentPropertyReferences && lt.componentPropertyReferences.characters;
      swap(slot, inst); report.link++;
      if (bound) { try { inst.isExposedInstance = true; } catch (e) {} }
    } catch (e) { report.errors.push(slot.name + ' → ' + e.message); }
  }
  // 4 · icon-button-slot
  for (const slot of collect(root, 'icon-button-slot/')) {
    try {
      const [, type, size, glyph] = slot.name.split('/');
      const inst = variantOf(iconButtonSet, { Size: size, Type: type, State: 'Enabled' }).createInstance();
      const ic = iconsIn(inst)[0]; if (ic) await setGlyph(ic, glyph);
      swap(slot, inst); report.iconButton++;
    } catch (e) { report.errors.push(slot.name + ' → ' + e.message); }
  }
  // 5 · icon-slot (+ flags de _atom-chat-meta)
  const iconSlots = root.findAll(n => n.type === 'FRAME' && !inInstance(n) && (n.name.startsWith('icon-slot/') || (META_FLAGS[n.name] && n.parent && n.parent.parent && n.parent.parent.name === '_atom-chat-meta')));
  for (const slot of iconSlots) {
    try {
      const glyph = slot.name.startsWith('icon-slot/') ? slot.name.slice(10) : META_FLAGS[slot.name];
      const inst = iconRegular.createInstance();
      await setGlyph(inst, glyph);
      inst.name = '❖ atom-icon · ' + glyph;
      swap(slot, inst); report.icon++;
    } catch (e) { report.errors.push(slot.name + ' → ' + e.message); }
  }
  // 6 · _atom-chat-card-action: pasa la propiedad label al atom-link-button expuesto y elimina la prop temporal
  const ca = root.findOne(n => n.type === 'COMPONENT_SET' && n.name === '_atom-chat-card-action');
  if (ca) {
    const labelKey = Object.keys(ca.componentPropertyDefinitions).find(k => k.startsWith('label'));
    for (const v of ca.children) { const l = v.findOne(n => n.type === 'INSTANCE' && n.name.includes('atom-link-button')); if (l) { try { l.isExposedInstance = true; } catch (e) {} } }
    const uses = root.findAll(n => n.type === 'INSTANCE' && n.mainComponent && n.mainComponent.parent === ca);
    for (const u of uses) {
      try {
        const val = labelKey && u.componentProperties[labelKey] ? u.componentProperties[labelKey].value : null;
        const l = u.findOne(n => n.type === 'INSTANCE' && n.name.includes('atom-link-button'));
        if (val && l) { await loadNodeFonts(l); const k = propKey(l, 'Label'); if (k) l.setProperties({ [k]: val }); }
        report.cardAction = (report.cardAction || 0) + 1;
      } catch (e) { report.errors.push('card-action → ' + e.message); }
    }
    if (labelKey) { try { ca.deleteComponentProperty(labelKey); } catch (e) {} }
  }
  console.log('atom-chat v2 · reemplazo', report);
  figma.closePlugin(`Listo: ${report.icon} iconos, ${report.button} botones, ${report.link} link buttons, ${report.iconButton} icon buttons, ${report.instance} instancias` + (report.errors.length ? ` · ${report.errors.length} errores (ver consola)` : ''));
}
main().catch(e => figma.closePlugin('Error: ' + e.message));
