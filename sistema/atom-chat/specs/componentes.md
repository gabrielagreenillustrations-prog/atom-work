# Atom chat components — HTML spec (from Figma LuBN4kYfYJDwqNeWUoyFTr)

Conventions: token vars resolved to Figma fallbacks; `data-if="prop"` marks an element shown only when that boolean prop is true; `<i data-ic>` = Font Awesome icon (weight noted in data-w when known); `<img data-asset>` = image placeholder. Fonts: titles Inter Bold, content Inter Regular.

## _atom-chat-header (12639:5927)

Conversation header: avatar, title, subtitle and actions. type: default (assistant, contact, simulator) | integration (MCP / external connection — provider logo + connection status). title / subtitle / showSubtitle: counterpart name and secondary line ("Conectado · MCP Server"). showAvatar: exposed avatar instance — outname for contacts, icon (sparkles) for AI, image for logos. showRestartChat / showClose: built-in actions. showActions / actions: slot for context actions (atom-icon-button or atom-button). type=contact (v2): header de la bandeja Agente/Cliente — nombre del contacto + fila de metadatos (teléfono · grupo · agente) en subtitle; acciones (Etapa del cliente, transferir, etiquetas, llamar, bloquear) en el slot actions.
Defaults: showActions=false, showAvatar=true, showClose=true, showRestartChat=true, showSubtitle=false, title="Asistente IA", subtitle="Conectado · MCP Server".

```html
<!-- type=default -->
<div class="bg-[white] border-[#e4e4e7] border-b border-solid flex gap-[8px] items-center px-[16px] py-[8px] relative w-[382px]">
  <!-- avatar (showAvatar) -->
  <div data-if="showAvatar" class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[1000px] shrink-0 size-[24px]">
    <div class="flex items-center justify-center p-px"><i data-ic="sparkles" data-w="solid" data-size="12px" data-color="#8023ff"></i></div>
  </div>
  <div class="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip">
    <p class="font-bold leading-[24px] text-[#18181b] text-[16px] w-full">Asistente IA</p>
    <p data-if="showSubtitle" class="font-normal h-[15px] leading-[16px] text-[#52525c] text-[8px] w-full">Conectado · MCP Server</p>
  </div>
  <!-- icon-button new chat (showRestartChat) -->
  <div data-if="showRestartChat" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]">
    <div class="flex items-center justify-center p-[1.6px]"><i data-ic="pen-to-square" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div>
  </div>
  <!-- icon-button close (showClose) -->
  <div data-if="showClose" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]">
    <div class="flex items-center justify-center p-[1.6px]"><i data-ic="xmark" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div>
  </div>
  <div data-if="showActions" class="relative shrink-0"><!-- actions slot (100px placeholder) --></div>
</div>
```

```html
<!-- type=integration (no close button) -->
<div class="bg-[white] border-[#e4e4e7] border-b border-solid flex gap-[8px] items-center px-[16px] py-[8px] relative w-[382px]">
  <div data-if="showAvatar" class="bg-[#f4f4f5] flex items-center p-[2px] rounded-[12px] shrink-0 size-[24px]">
    <img data-asset class="flex-[1_0_0] h-full object-contain rounded-[50px]" alt="provider logo">
  </div>
  <div class="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip">
    <p class="font-bold leading-[24px] text-[#18181b] text-[16px] w-full">Asistente IA</p>
    <p data-if="showSubtitle" class="font-normal h-[15px] leading-[16px] text-[#52525c] text-[8px] w-full">Conectado · MCP Server</p>
  </div>
  <div data-if="showRestartChat" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]">
    <div class="flex items-center justify-center p-[1.6px]"><i data-ic="pen-to-square" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div>
  </div>
  <div data-if="showActions" class="relative shrink-0"><!-- actions slot --></div>
</div>
```

## _atom-chat-composer (12639:5941)

Message input with actions. Wraps atom-rich-text. state: enabled | focused | disabled. showAccessory / accessory: slot above the input — attachment chips, reply-quote preview, AI suggestion, quick replies. showBanner / bannerText / bannerAction: reason the composer is blocked (24 h window closed, conversation closed, AI responding, read-only) — use with state=disabled. showScrollToBottom: jump-to-latest button. atom-rich-text is exposed: left actions, send button, placeholder. In the simulator (observer mode) hide the composer (showComposer=false). Code: `<ChatComposer state accessory={…} blockedReason={{text, action}} />`
Defaults: state=focused, showAccessory/showBanner/showScrollToBottom=false, bannerText="La ventana de 24 h cerró. Envía una plantilla para continuar.", bannerAction="Enviar plantilla".

```html
<!-- state=focused (default) — optional rows shown with data-if -->
<div class="flex flex-col gap-[8px] items-center p-[8px] relative w-[319px]">
  <!-- scroll to bottom button (secondary atom-button) -->
  <div data-if="showScrollToBottom" class="bg-[white] border-[1px] border-[#d4d4d8] border-solid flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
    <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="flex flex-col items-center justify-center p-[2px]"><i data-ic="add" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
    <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Ir al mensaje más reciente</p>
  </div>
  <div data-if="showAccessory" class="h-[100px] relative shrink-0 w-full"><!-- accessory slot --></div>
  <!-- blocked banner -->
  <div data-if="showBanner" class="bg-[#fefce8] border border-[#d08800] border-solid flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 w-full">
    <p class="flex-[1_0_0] font-normal leading-[16px] min-w-px text-[#a76000] text-[8px]">La ventana de 24 h cerró. Envía una plantilla para continuar.</p>
    <p class="font-medium leading-[16px] shrink-0 text-[#2c7fff] text-[12px] whitespace-nowrap">Enviar plantilla</p>
  </div>
  <!-- atom-rich-text -->
  <div class="flex flex-col gap-[8px] items-start shrink-0 w-full max-h-[144px]">
    <div class="bg-[white] border border-solid border-[#18181b] shadow-[0px_0px_0px_2px_rgba(161,161,161,0.7)] flex flex-col gap-[4px] items-start justify-center overflow-clip pb-[8px] pt-[12px] px-[12px] rounded-[4px] shrink-0 w-full">
      <div class="flex gap-[4px] items-center justify-center overflow-clip shrink-0 w-full">
        <p class="flex-[1_0_0] font-normal h-full leading-[16px] min-w-px text-[12px] text-[#52525c]">Hola, quisiera información sobre los Toyota Corolla 2026. Vi una publicidad por instagram que mencionaba sobre la oferta del mes con un bono para el pie y crédito directo. Quiero conseguir la mejor oferta. ¿Puedo agendar una prueba de manejo para poder decidir?|</p>
      </div>
      <div class="flex gap-[12px] items-center justify-between shrink-0 w-full">
        <div class="flex gap-[4px] h-[24px] items-center shrink-0">
          <div class="bg-white flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex flex-col items-center justify-center p-[1.6px]"><i data-ic="paperclip" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div>
          <div class="bg-white flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex flex-col items-center justify-center p-[1.6px]"><i data-ic="face-smile" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div>
        </div>
        <div class="flex h-[24px] items-end justify-center shrink-0">
          <div class="flex gap-[8px] h-[24px] items-start shrink-0">
            <!-- send (primary icon-button) -->
            <div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex flex-col items-center justify-center p-[2px]"><i data-ic="paper-plane" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```html
<!-- state=enabled — differences vs focused: no max-h on rich-text wrapper; input border #d4d4d8, no shadow; placeholder text; send button disabled look -->
<div class="flex flex-col gap-[8px] items-start shrink-0 w-full">
  <div class="bg-[white] border border-solid border-[#d4d4d8] flex flex-col gap-[4px] items-start justify-center overflow-clip pb-[8px] pt-[12px] px-[12px] rounded-[4px] shrink-0 w-full">
    <div class="flex gap-[4px] items-center justify-center overflow-clip shrink-0 w-full">
      <p class="flex-[1_0_0] font-normal h-full leading-[16px] min-w-px text-[12px] text-[#52525c]">Escribe un mensaje...</p>
    </div>
    <div class="flex gap-[12px] items-center justify-between shrink-0 w-full">
      <div class="flex gap-[4px] h-[24px] items-center shrink-0">
        <div class="bg-white flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><i data-ic="paperclip" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div>
        <div class="bg-white flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><i data-ic="face-smile" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div>
      </div>
      <div class="flex h-[24px] items-end justify-center shrink-0"><div class="flex gap-[8px] h-[24px] items-start">
        <div class="bg-[#f4f4f5] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><div class="p-[2px]"><i data-ic="paper-plane" data-w="regular" data-size="28px" data-color="#9f9fa9"></i></div></div>
      </div></div>
    </div>
  </div>
</div>
```

```html
<!-- state=disabled — like enabled (border #d4d4d8, placeholder) but left icon-buttons disabled; send button keeps primary enabled colors -->
<div class="flex flex-col gap-[8px] items-start shrink-0 w-full">
  <div class="bg-[white] border border-solid border-[#d4d4d8] flex flex-col gap-[4px] items-start justify-center overflow-clip pb-[8px] pt-[12px] px-[12px] rounded-[4px] shrink-0 w-full">
    <div class="flex gap-[4px] items-center justify-center overflow-clip shrink-0 w-full">
      <p class="flex-[1_0_0] font-normal h-full leading-[16px] min-w-px text-[12px] text-[#52525c]">Escribe un mensaje...</p>
    </div>
    <div class="flex gap-[12px] items-center justify-between shrink-0 w-full">
      <div class="flex gap-[4px] h-[24px] items-center shrink-0">
        <div class="bg-[#f4f4f5] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><i data-ic="paperclip" data-w="regular" data-size="22.4px" data-color="#9f9fa9"></i></div>
        <div class="bg-[#f4f4f5] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><i data-ic="face-smile" data-w="regular" data-size="22.4px" data-color="#9f9fa9"></i></div>
      </div>
      <div class="flex h-[24px] items-end justify-center shrink-0"><div class="flex gap-[8px] h-[24px] items-start">
        <div class="bg-[#09090b] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] size-[24px]"><div class="p-[2px]"><i data-ic="paper-plane" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div>
      </div></div>
    </div>
  </div>
</div>
```

## _atom-chat-option-list (12639:5951)

Suggested replies offered inside a message. Maximum 4. showOption2 / showOption3 / showOption4: how many replies are shown (default all true). Every atom-chat-option is exposed — label, trailing icon and avatar editable. Code: `<ChatOptionList options={[…]} onSelect />`

```html
<!-- default (4 options); options 2-4 toggled by showOption2/3/4 -->
<div class="flex flex-col gap-[8px] items-start relative w-[288px]">
  <div class="bg-[white] border border-[#e4e4e7] border-solid flex gap-[8px] items-center p-[8px] rounded-[8px] shrink-0 w-[288px]">
    <div class="bg-[#f4f4f5] flex flex-col items-center px-[2px] py-[4px] rounded-[8px] shrink-0 size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center overflow-hidden text-ellipsis whitespace-nowrap min-w-full">1</p></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">Clientes que cerraron venta pero no escriben hace 30 días.</p></div>
  </div>
  <div data-if="showOption2" class="bg-[white] border border-[#e4e4e7] border-solid flex gap-[8px] items-center p-[8px] rounded-[8px] shrink-0 w-[288px]">
    <div class="bg-[#f4f4f5] flex flex-col items-center px-[2px] py-[4px] rounded-[8px] shrink-0 size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center min-w-full">2</p></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">Clientes con tipificación de fin positivo del bot.</p></div>
  </div>
  <div data-if="showOption3" class="bg-[white] border border-[#e4e4e7] border-solid flex gap-[8px] items-center p-[8px] rounded-[8px] shrink-0 w-[288px]">
    <div class="bg-[#f4f4f5] flex flex-col items-center px-[2px] py-[4px] rounded-[8px] shrink-0 size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center min-w-full">3</p></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">Clientes de una etiqueta específica.</p></div>
  </div>
  <div data-if="showOption4" class="bg-[white] border border-[#e4e4e7] border-solid flex gap-[8px] items-center p-[8px] rounded-[8px] shrink-0 w-[288px]">
    <div class="bg-[#f4f4f5] flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center p-px"><i data-ic="pencil" data-w="regular" data-size="12px" data-color="#71717b"></i></div></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">Otra cosa</p></div>
  </div>
</div>
```

## _atom-chat-option (12639:5956)

A single suggested reply inside atom-chat-option-list. label: reply text. showTrailingIcon: shows the navigation icon at the end (default false). Avatar exposed: type=outname for an index number, type=icon for a glyph (number is a raw text override).

```html
<!-- showTrailingIcon=false|true -->
<div class="bg-[white] border border-[#e4e4e7] border-solid flex gap-[8px] items-center p-[8px] relative rounded-[8px] w-[288px]">
  <div class="bg-[#f4f4f5] flex flex-col items-center px-[2px] py-[4px] rounded-[8px] shrink-0 size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center overflow-hidden text-ellipsis whitespace-nowrap min-w-full">1</p></div>
  <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">Clientes que cerraron venta pero no escriben hace 30 días.</p></div>
  <div data-if="showTrailingIcon" class="flex items-center justify-center shrink-0 size-[16px]"><i data-ic="chevron-right" data-w="solid" data-size="17.92px" data-color="#18181b"></i></div>
</div>
```

## _atom-chat-log (12639:5961)

Inline activity line inside a message: AI reasoning, MCP tool calls, automation steps. state: done | loading | error. label: step text ("Agente razonó por 2ms", "Consultando MCP Server"). Icon exposed — change glyph per step type (brain, plug, magnifying-glass…). Not for conversation-level events (assignment, transfer, date) — use atom-chat-event. Default label "Listo".

```html
<!-- state=done -->
<div class="flex gap-[8px] items-start relative">
  <div class="flex items-center justify-center shrink-0"><div class="flex flex-col items-center justify-center p-[1.28px]"><i data-ic="circle-check" data-w="regular" data-size="19.66px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#71717b] text-[12px] w-[278px]">Listo</p>
</div>
```

```html
<!-- state=loading -->
<div class="flex gap-[8px] items-start relative">
  <img data-asset="atom-spinner-s (svg)" class="block shrink-0 size-[16px]">
  <p class="font-normal leading-[16px] shrink-0 text-[#71717b] text-[12px] w-[278px]">Listo</p>
</div>
```

```html
<!-- state=error -->
<div class="flex gap-[8px] items-start relative">
  <div class="flex items-center justify-center shrink-0"><div class="flex flex-col items-center justify-center p-[1.28px]"><i data-ic="circle-exclamation" data-w="regular" data-size="19.66px" data-color="#c10008"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#c10008] text-[12px] w-[278px]">Listo</p>
</div>
```

## _atom-chat-bubble (12639:5972)

Text container of a message. Purely visual — who wrote it lives on atom-chat-message. variant: filled (card — contact/agent messages) | plain (no container — AI long-form answers) | accent (tinted — own/sent messages in Inbox, token bg/accent/inbox/bubble-sent) | note (internal note, visible only to agents) | deleted | editing. message: body text. showMore: collapses long messages ("Mostrar más"). showMeta: shows atom-chat-meta (timestamp + delivery status), exposed instance. showActions: AI message actions — only in variant=plain. Code: `<ChatBubble variant="filled|plain|accent|note" collapsible meta={{timestamp, status}} />`
Defaults: message="Message", showMeta=true, showMore=true, showActions=false.

META (atom-chat-meta, default, status=none) used below:
```html
<div class="flex gap-[4px] items-center shrink-0">
  <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">21 jul 10:33</p>
</div>
```

```html
<!-- variant=filled -->
<div class="bg-[white] flex flex-col items-start overflow-clip pb-[4px] pt-[8px] px-[8px] rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[8px] w-[272px]">
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[12px] w-full">Message</p>
  <div data-if="showMore" class="flex gap-[4px] items-center shrink-0 w-full">
    <p class="font-normal leading-[16px] text-[#71717b] text-[12px] whitespace-nowrap">Mostrar más</p>
    <div class="flex items-center justify-center shrink-0 w-[14px]"><div class="p-px"><i data-ic="chevron-right" data-w="regular" data-size="10px" data-color="#71717b"></i></div></div>
  </div>
  <div data-if="showMeta" class="flex gap-[2px] h-[16px] items-center justify-end shrink-0 w-full"><!-- META --></div>
</div>
```

```html
<!-- variant=accent — same as filled but bg-[#d1fae5] -->
<div class="bg-[#d1fae5] flex flex-col items-start overflow-clip pb-[4px] pt-[8px] px-[8px] rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[8px] w-[272px]">
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[12px] w-full">Message</p>
  <div data-if="showMore" class="flex gap-[4px] items-center shrink-0 w-full">
    <p class="font-normal leading-[16px] text-[#71717b] text-[12px] whitespace-nowrap">Mostrar más</p>
    <div class="flex items-center justify-center shrink-0 w-[14px]"><div class="p-px"><i data-ic="chevron-right" data-w="regular" data-size="10px" data-color="#71717b"></i></div></div>
  </div>
  <div data-if="showMeta" class="flex gap-[2px] h-[16px] items-center justify-end shrink-0 w-full"><!-- META --></div>
</div>
```

```html
<!-- variant=note -->
<div class="bg-[#fefce8] border border-[#d08800] border-solid flex flex-col items-start overflow-clip pb-[4px] pt-[8px] px-[8px] rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[8px] w-[272px]">
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[12px] w-full">Message</p>
  <div data-if="showMore" class="flex gap-[4px] items-center shrink-0 w-full">
    <p class="font-normal leading-[16px] text-[#71717b] text-[12px] whitespace-nowrap">Mostrar más</p>
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="chevron-right" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  </div>
  <div data-if="showMeta" class="flex gap-[2px] h-[16px] items-center justify-end shrink-0 w-full"><!-- META --></div>
</div>
```

```html
<!-- variant=plain (AI long-form; actions only here) -->
<div class="flex flex-col items-start overflow-clip pl-[0px] pr-[40px] py-[0px] rounded-[8px] w-[272px]">
  <p class="font-normal leading-[16px] min-w-full shrink-0 text-[#27272a] text-[12px]">Message</p>
  <div data-if="showActions" class="flex gap-[4px] items-start px-[0px] py-[8px] shrink-0">
    <!-- tertiary atom-button xs with left icon -->
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
      <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="p-[2px]"><i data-ic="add" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Revertir</p>
    </div>
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
      <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="p-[2px]"><i data-ic="add" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Ocultar cambios</p>
    </div>
  </div>
</div>
```

```html
<!-- variant=deleted -->
<div class="bg-[white] flex gap-[2px] items-center pb-[4px] pt-[8px] px-[8px] rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[8px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="ban" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[12px] text-[#52525c] whitespace-nowrap">Este mensaje fue eliminado</p>
</div>
```

```html
<!-- variant=editing -->
<div class="bg-[white] border-[0.5px] border-[#ff9d5b] border-solid flex flex-col gap-[4px] items-start p-[4px] rounded-[8px] w-[272px]">
  <p class="font-normal leading-[16px] shrink-0 text-[12px] text-[#18181b] w-full">Agregá que el agente siempre confirme disponibilidad en inventario antes de enviar propuesta.</p>
  <div class="flex gap-[4px] items-center justify-end overflow-clip shrink-0 w-full">
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Cancelar</p></div>
    <div class="bg-[#09090b] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#fafafa] text-[12px] text-center whitespace-nowrap">Actualizar</p></div>
  </div>
</div>
```

## _atom-chat-message (12639:5992)

A single message row. Semantic unit of the conversation. align: start (counterpart, left) | end (the viewer, right) — alignment depends on WHO IS WATCHING, not who wrote it (in the simulator the simulated agent can be end, the simulated contact start). content: slot — accepts atom-chat-bubble, atom-chat-media, atom-chat-template, atom-chat-reply-quote, atom-chat-log, atom-chat-option-list, atom-question-prompt, atom-chat-reactions, any combination. showAuthor / authorName: author row (group chats, simulator, first message of a group). showAvatar: avatar inside author row — exposed (outname, image or icon). showError / errorLabel: failed-to-send row with retry. Code: `<ChatMessage author={{type:"contact|agent|ai|mcp|system", name, avatar}} align={author.id===viewer.id ? "end" : "start"}>{children}</ChatMessage>`
Defaults: align=start, authorName="Ana López", showAuthor=false, showAvatar=true, showError=false, errorLabel="No se pudo enviar · Reintentar".

AVATAR (outname + online status) used in author row:
```html
<div class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center px-[2px] py-[4px] relative rounded-[12px] shrink-0 size-[24px]">
  <p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center overflow-hidden text-ellipsis whitespace-nowrap min-w-full">MA</p>
  <div class="absolute bg-[#00c951] border-[1px] border-[#f4f4f5] border-solid left-[14px] rounded-[24px] size-[8px] top-[14px]"></div>
</div>
```

```html
<!-- align=start -->
<div class="flex flex-col gap-[8px] justify-center items-start pl-[0px] pr-[40px] relative w-[288px]">
  <div data-if="showAuthor" class="flex gap-[6px] items-center overflow-clip shrink-0">
    <!-- AVATAR data-if="showAvatar" -->
    <p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Ana López</p>
  </div>
  <div class="flex flex-col gap-[8px] items-start shrink-0 w-full">
    <!-- default slot content: bubble variant=plain (showMore=false) + option-list -->
    <div class="flex flex-col items-start overflow-clip pl-[0px] pr-[40px] py-[0px] rounded-[8px] shrink-0 w-full">
      <p class="font-normal leading-[16px] min-w-full text-[#27272a] text-[12px]">¡Hola! Cuéntame qué audiencia necesitas y la traduzco a condiciones. También puedes elegir una idea para empezar.</p>
    </div>
    <!-- _atom-chat-option-list (4 options, see above) shrink-0 w-[288px] -->
  </div>
  <p data-if="showError" class="font-normal leading-[16px] text-[#c10008] text-[8px] whitespace-nowrap">No se pudo enviar · Reintentar</p>
</div>
```

```html
<!-- align=end -->
<div class="flex flex-col gap-[8px] justify-center items-end pl-[40px] pr-[0px] relative w-[288px]">
  <div data-if="showAuthor" class="flex gap-[6px] items-center overflow-clip shrink-0">
    <p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Ana López</p>
    <!-- AVATAR data-if="showAvatar" -->
  </div>
  <div class="flex flex-col items-end shrink-0 w-full">
    <!-- default slot: bubble variant=filled -->
    <div class="bg-[white] flex flex-col items-start overflow-clip pb-[4px] pt-[8px] px-[8px] rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[272px]">
      <p class="font-normal leading-[16px] text-[#27272a] text-[12px] w-full">Traer 300 registros</p>
      <div class="flex gap-[4px] items-center w-full">
        <p class="font-normal leading-[16px] text-[#71717b] text-[12px] whitespace-nowrap">Mostrar más</p>
        <div class="flex items-center justify-center w-[14px]"><i data-ic="chevron-right" data-w="regular" data-size="10px" data-color="#71717b"></i></div>
      </div>
      <div class="flex gap-[2px] h-[16px] items-center justify-end w-full"><p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">21 jul 10:33</p></div>
    </div>
  </div>
  <p data-if="showError" class="font-normal leading-[16px] text-[#c10008] text-[8px] whitespace-nowrap">No se pudo enviar · Reintentar</p>
</div>
```

## _atom-question-prompt (12639:6016)

Blocking question the AI asks before continuing (single choice, free text or skip). Rendered as overlay of atom-chat (overlay=question-prompt) or inline inside a message once answered. state: pending (asking) | answered (summary of the choice, inline in the thread). question, answerSummary: texts. optionsContainer: slot — atom-list-item rows (radio/checkbox leading); add/remove rows instead of toggling booleans. answersContainer: slot — one row per answered question. showPagination / paginationLabel: several questions in sequence ("1 de 3"). showFreeText / freeTextPlaceholder: "Otra cosa" free input. showSkip / skipLabel, showClose, showDivider, showKeyboardHint / keyboardHint, confirmLabel. Code: `<QuestionPrompt question options={[…]} multiple allowFreeText allowSkip step={{current,total}} onAnswer />`
Defaults: state=pending, question="¿Qué tipo de audiencia necesitás?", showClose=true, showPagination=false, paginationLabel="1 de 3", showKeyboardHint=false, keyboardHint="↑↓ para navegar · Intro para seleccionar".

ROW (atom-list-item, pending) pattern; DIVIDER = `<div class="h-0 shrink-0 w-full"><img data-asset="atom-horizontal-divider (svg 1px line)" class="block size-full"></div>` (render as 1px #e4e4e7 line)

```html
<!-- state=pending -->
<div class="bg-[white] flex flex-col items-start overflow-clip relative rounded-[8px] w-[320px] border-[1px] border-[#71717b] border-solid gap-[12px] p-[12px]">
  <div class="flex gap-[8px] items-center overflow-clip shrink-0 w-full">
    <p class="flex-[1_0_0] font-bold leading-[24px] min-w-px overflow-hidden text-[16px] text-[#18181b] text-ellipsis whitespace-nowrap">¿Qué tipo de audiencia necesitás?</p>
    <div class="flex gap-[4px] items-center overflow-clip shrink-0">
      <!-- showPagination -->
      <div data-if="showPagination" class="bg-[rgba(255,255,255,0)] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="p-[1.6px]"><i data-ic="chevron-left" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div>
      <p data-if="showPagination" class="font-normal leading-[normal] text-[12px] text-[#27272a] whitespace-nowrap">1 de 3</p>
      <div data-if="showPagination" class="bg-[rgba(255,255,255,0)] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="p-[1.6px]"><i data-ic="chevron-right" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div>
      <div data-if="showClose" class="bg-[rgba(255,255,255,0)] flex items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="p-[1.6px]"><i data-ic="xmark" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div>
    </div>
  </div>
  <div class="flex flex-col items-start max-h-[320px] overflow-clip shrink-0 w-full">
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex items-center justify-center overflow-clip shrink-0">
        <div class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center px-[2px] py-[4px] rounded-[12px] shrink-0 size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center min-w-full">1</p></div>
      </div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Clientes que cerraron venta pero no escriben hace 30 días</p></div>
    </div>
    <!-- DIVIDER -->
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center px-[2px] py-[4px] rounded-[12px] size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center min-w-full">2</p></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Clientes con tipificación de fin positivo en el último mes</p></div>
    </div>
    <!-- DIVIDER -->
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center px-[2px] py-[4px] rounded-[12px] size-[24px]"><p class="font-normal leading-[16px] text-[#18181b] text-[12px] text-center min-w-full">3</p></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Clientes de una etiqueta específica</p></div>
    </div>
    <!-- DIVIDER -->
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-[294px]">
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="bg-[#f4f4f5] border-2 border-[#e4e4e7] border-solid flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[1000px] size-[24px]"><div class="p-px"><i data-ic="pencil" data-w="regular" data-size="12px" data-color="#71717b"></i></div></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Otra cosa</p></div>
      <div class="flex items-start overflow-clip shrink-0">
        <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Omitir</p></div>
      </div>
    </div>
  </div>
  <p data-if="showKeyboardHint" class="font-normal leading-[normal] shrink-0 text-[12px] text-[#27272a] whitespace-nowrap">↑↓ para navegar · Intro para seleccionar</p>
</div>
```

```html
<!-- state=answered (no border) -->
<div class="bg-[white] flex flex-col items-start overflow-clip relative rounded-[8px] w-[320px] gap-[16px] p-[8px]">
  <div class="flex flex-col items-start shrink-0 w-full">
    <!-- row ×3 -->
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px">
        <p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">¿Qué tipo de audiencia necesitas?</p>
        <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full whitespace-nowrap">Respuesta seleccionada</p>
      </div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full"><div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">¿Qué tipo de audiencia necesitas?</p><p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full whitespace-nowrap">Respuesta seleccionada</p></div></div>
    <div class="bg-[white] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full"><div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] w-full">¿Qué tipo de audiencia necesitas?</p><p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full whitespace-nowrap">Respuesta seleccionada</p></div></div>
  </div>
</div>
```

## _atom-chat-meta (12645:7811)

Message metadata: timestamp, edited flag and delivery status. status: none | sending | sent | delivered | read | failed — maps 1:1 to channel delivery status. timestamp: time label ("21 jul 10:33"). showEdited: shows "· Editado". showPinned / showStarred / showForwarded: leading flag icons. Used inside atom-chat-bubble as exposed instance. DRAFT — glyphs: clock, check, check-double, circle-exclamation. Validate read color with the Inbox owner.

```html
<!-- base (status=none); optional leading flags + edited -->
<div class="flex gap-[4px] items-center relative">
  <div data-if="showPinned" class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="thumbtack" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <div data-if="showStarred" class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="star" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <div data-if="showForwarded" class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="share" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#52525c] text-[8px] whitespace-nowrap">21 jul 10:33</p>
  <p data-if="showEdited" class="font-normal leading-[16px] shrink-0 text-[#52525c] text-[8px] whitespace-nowrap">· Editado</p>
  <!-- STATUS ICON slot (appended last) -->
</div>
```

```html
<!-- status icons appended after timestamp/edited -->
<!-- status=sending -->   <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="clock" data-w="regular" data-size="8px" data-color="#52525c"></i></div></div>
<!-- status=sent -->      <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="check" data-w="regular" data-size="8px" data-color="#52525c"></i></div></div>
<!-- status=delivered --> <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="check-double" data-w="regular" data-size="8px" data-color="#52525c"></i></div></div>
<!-- status=read -->      <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="check-double" data-w="regular" data-size="8px" data-color="#2c7fff"></i></div></div>
<!-- status=failed -->    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="circle-exclamation" data-w="regular" data-size="8px" data-color="#c10008"></i></div></div>
```

## _atom-chat-event (12655:7864)

Conversation-level event, centered in the thread. Not authored by anyone. type: date (day divider) | system (assignment, transfer, closed, tag added, flow started) | unread (first unread message marker) | assignment | closure | window-closed. label: event text (default "Hoy"). Code: `<ChatEvent type="date|system|unread" label />` DRAFT — event catalogue pending with the Inbox owner.

```html
<!-- type=date -->
<div class="flex items-center relative w-[320px] h-[24px] justify-center">
  <div class="bg-[#e4e4e7] flex items-start overflow-clip px-[10px] py-[2px] rounded-[999px] shrink-0">
    <p class="font-medium leading-[16px] text-[#3f3f46] text-[12px] whitespace-nowrap">Hoy</p>
  </div>
</div>
```

```html
<!-- type=system -->
<div class="flex items-center relative w-[320px] h-[24px] justify-center">
  <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">Hoy</p>
</div>
```

```html
<!-- type=unread -->
<div class="flex items-center relative w-[320px] gap-[8px] h-[24px]">
  <div class="bg-[#ff9d5b] flex-[1_0_0] h-px min-w-px"></div>
  <p class="font-medium leading-[16px] text-[#f60] text-[12px] whitespace-nowrap">Hoy</p>
  <div class="bg-[#ff9d5b] flex-[1_0_0] h-px min-w-px"></div>
</div>
```

```html
<!-- type=assignment -->
<div class="flex items-center relative w-[320px] flex-col">
  <div class="flex items-center overflow-clip shrink-0 gap-[2px]">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-right-arrow-left" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <p class="font-normal leading-[16px] text-[#27272a] text-[8px] whitespace-nowrap">ATOM ha asignado esta conversación al bot flujos123</p>
  </div>
  <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">29/09/2026 a las 04:28 pm</p>
</div>
```

```html
<!-- type=closure -->
<div class="flex items-center relative w-[320px] flex-col">
  <div class="flex items-center overflow-clip shrink-0 gap-[4px] w-full">
    <div class="bg-[#f60] flex-[1_0_0] h-px min-w-px"></div>
    <div class="bg-[white] border-[0.5px] border-[#f60] border-solid flex items-start overflow-clip px-[8px] py-[2px] rounded-[4px] shrink-0">
      <p class="font-normal leading-[16px] text-[#27272a] text-[8px] whitespace-nowrap">Gestión finalizada</p>
    </div>
    <div class="bg-[#f60] flex-[1_0_0] h-px min-w-px"></div>
  </div>
  <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">29/09/2026 a las 04:28 pm</p>
</div>
```

```html
<!-- type=window-closed -->
<div class="flex items-center relative w-[320px] justify-center">
  <div class="bg-[#fefce8] flex gap-[2px] items-center overflow-clip px-[8px] py-[2px] rounded-[4px] shrink-0">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="clock" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <p class="font-normal leading-[16px] text-[#a76000] text-[8px] whitespace-nowrap">Ventana de 24 h cerrada · solo plantillas</p>
  </div>
</div>
```

## _atom-chat-typing (12655:7877)

Typing / generating indicator placed as the last item of atom-chat-thread. author: contact (human typing, shows label) | ai (AI generating — prefer atom-chat-log state=loading when there are visible steps). label / showLabel: "Ana está escribiendo…" (showLabel default true). Code: `<ChatTyping author="contact|ai" label />` DRAFT — dot pulse animation to define with dev.

```html
<!-- author=contact | ai (identical markup; dots svg asset) -->
<div class="flex gap-[8px] items-center relative">
  <img data-asset="typing dots (svg)" class="block h-[26px] shrink-0 w-[50px]">
  <p data-if="showLabel" class="font-normal leading-[16px] shrink-0 text-[#52525c] text-[8px] whitespace-nowrap">Ana está escribiendo…</p>
</div>
```

## _atom-chat-reply-quote (12655:7889)

Quoted message a reply refers to. context: bubble (inside atom-chat-message content, above the bubble) | composer (in atom-chat-composer accessory slot, with dismiss action). author / excerpt: quoted author and first line (truncated to 1 line). Code: `<ChatReplyQuote author excerpt onDismiss? />` DRAFT — confirm with the Inbox owner which channels support replies.

```html
<!-- context=bubble -->
<div class="bg-[#f4f4f5] flex gap-[8px] items-start px-[8px] py-[6px] relative rounded-[6px] w-[260px]">
  <div class="bg-[#ff9d5b] rounded-[2px] self-stretch shrink-0 w-[3px]"></div>
  <div class="flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip whitespace-nowrap">
    <p class="font-medium leading-[16px] shrink-0 text-[#f60] text-[12px]">Ana López</p>
    <p class="font-normal leading-[16px] min-w-full overflow-hidden shrink-0 text-[8px] text-[#27272a] text-ellipsis">Hola, quisiera información sobre los Toyota Corolla 2026…</p>
  </div>
</div>
```

```html
<!-- context=composer (adds dismiss) -->
<div class="bg-[#f4f4f5] flex gap-[8px] items-start px-[8px] py-[6px] relative rounded-[6px] w-[260px]">
  <div class="bg-[#ff9d5b] rounded-[2px] self-stretch shrink-0 w-[3px]"></div>
  <div class="flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip whitespace-nowrap">
    <p class="font-medium leading-[16px] shrink-0 text-[#f60] text-[12px]">Ana López</p>
    <p class="font-normal leading-[16px] min-w-full overflow-hidden shrink-0 text-[8px] text-[#27272a] text-ellipsis">Hola, quisiera información sobre los Toyota Corolla 2026…</p>
  </div>
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="xmark" data-w="regular" data-size="8px" data-color="#52525c"></i></div></div>
</div>
```

## _atom-chat-reactions (12655:7890)

Reactions attached to a message, placed after the bubble inside atom-chat-message content. Each pill: emoji + count. showReaction2 toggles the second pill (default true). Code: `<ChatReactions items={[{emoji, count, reactedByMe}]} />` DRAFT — confirm which channels sync reactions (WhatsApp, Messenger, IG).

```html
<!-- default -->
<div class="flex font-normal gap-[4px] items-start leading-[16px] relative text-[8px] whitespace-nowrap">
  <div class="bg-[white] border border-[#d4d4d8] border-solid flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] rounded-[999px] shrink-0">
    <p class="shrink-0 text-[#18181b]">👍</p><p class="shrink-0 text-[#27272a]">2</p>
  </div>
  <div data-if="showReaction2" class="bg-[white] border border-[#d4d4d8] border-solid flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] rounded-[999px] shrink-0">
    <p class="shrink-0 text-[#18181b]">❤️</p><p class="shrink-0 text-[#27272a]">1</p>
  </div>
</div>
```

## _atom-chat-template (12657:7898)

WhatsApp approved template (HSM) as sent in the conversation. Goes inside atom-chat-message content slot. showHeaderMedia: image/video/document header. title / body / footer (showFooter): template components; variables render as {{n}} until resolved. button1–3 (showButton2, showButton3): quick-reply or CTA buttons, max 3 visible. Code: `<ChatTemplate header={…} title body footer buttons={[…]} />` DRAFT — validate with the Inbox owner: carousel templates, interactive list messages and WhatsApp Flows entry points.
Defaults: showHeaderMedia=true, showFooter=true, showButton2=true, showButton3=false.

```html
<!-- default -->
<div class="bg-[white] border border-[#e4e4e7] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] w-[260px]">
  <div data-if="showHeaderMedia" class="bg-[#e4e4e7] h-[120px] shrink-0 w-full"></div>
  <div class="flex flex-col gap-[4px] items-start overflow-clip px-[12px] py-[10px] shrink-0 w-full">
    <p class="font-bold leading-[16px] text-[#18181b] text-[12px] whitespace-nowrap">Oferta del mes</p>
    <p class="font-normal leading-[16px] min-w-full text-[#27272a] text-[12px]">Hola {{1}}, tu cotización del Corolla 2026 está lista. ¿Quieres agendar una prueba de manejo?</p>
    <p data-if="showFooter" class="font-normal leading-[16px] min-w-full text-[#52525c] text-[8px]">Responde STOP para dejar de recibir mensajes</p>
  </div>
  <div class="border-[#e4e4e7] border-solid border-t flex items-center justify-center overflow-clip py-[10px] shrink-0 w-full"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] whitespace-nowrap">Agendar prueba</p></div>
  <div data-if="showButton2" class="border-[#e4e4e7] border-solid border-t flex items-center justify-center overflow-clip py-[10px] shrink-0 w-full"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] whitespace-nowrap">Ver catálogo</p></div>
  <div data-if="showButton3" class="border-[#e4e4e7] border-solid border-t flex items-center justify-center overflow-clip py-[10px] shrink-0 w-full"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] whitespace-nowrap">Hablar con un asesor</p></div>
</div>
```

## _atom-chat-thinking (13117:8023)

Razonamiento / pasos procesados de la IA, colapsable. Va dentro del content slot de atom-chat-message (align=start), antes de la burbuja plain. Benchmark: Gemini «Model thoughts», Claude «Decodificó…», Codex «Procesado durante 11 s». Para herramientas MCP en curso usar _atom-chat-log. state: collapsed | expanded.

```html
<!-- state=collapsed -->
<div class="flex flex-col gap-[4px] items-start relative w-[334px]">
  <div class="flex gap-[2px] items-center overflow-clip shrink-0">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="sparkles" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Pensó durante 11 s</p>
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="chevron-down" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  </div>
</div>
```

```html
<!-- state=expanded -->
<div class="flex flex-col gap-[4px] items-start relative w-[334px]">
  <div class="flex gap-[2px] items-center overflow-clip shrink-0">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="sparkles" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Pensó durante 11 s</p>
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="chevron-up" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  </div>
  <div class="border-[#e4e4e7] border-l border-solid flex flex-col gap-[4px] items-start overflow-clip pl-[12px] shrink-0 w-full">
    <p class="font-normal leading-[16px] min-w-full text-[#52525c] text-[8px]">Revisé la configuración del agente y las etapas actuales. Necesito confirmar qué campos capturar antes de editar el flujo.</p>
    <div class="flex gap-[2px] items-center overflow-clip shrink-0">
      <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="circle-check" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
      <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">Listo</p>
    </div>
  </div>
</div>
```

## _atom-chat-version-actions (13117:8088)

Acciones de versión debajo de una respuesta de IA que modificó el builder (Wizard). applied → Revertir versión / Ver cambios. reviewing → el diff está visible en el canvas: Restaurar / Ocultar cambios. reverted → confirmación + Rehacer. Benchmark: referencia Wizard Atom, Framer Agent (Undo/Redo).

TBTN(icon,label) = tertiary atom-button xs with left icon:
```html
<div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
  <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="flex flex-col items-center justify-center p-[2px]"><i data-ic="ICON" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
  <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">LABEL</p>
</div>
```

```html
<!-- state=applied -->
<div class="flex gap-[4px] items-center relative">
  <!-- TBTN(clock-rotate-left, "Revertir versión") --> <!-- TBTN(eye, "Ver cambios") -->
</div>
```

```html
<!-- state=reviewing -->
<div class="flex gap-[4px] items-center relative">
  <!-- TBTN(rotate-left, "Restaurar") --> <!-- TBTN(eye-slash, "Ocultar cambios") -->
</div>
```

```html
<!-- state=reverted -->
<div class="flex gap-[4px] items-center relative">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="circle-check" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] text-[#52525c] text-[8px] whitespace-nowrap">Versión revertida</p>
  <!-- TBTN(rotate-right, "Rehacer") -->
</div>
```

## _atom-chat-media-state (13122:8123)

Overlay de estado para _atom-chat-media y tarjetas de carrusel: se centra sobre el área de media. loading (subiendo/descargando), downloadable (aún no descargado, muestra peso), error (con acción Reintentar), expired (el adjunto ya no está disponible en Cloud API). Fuente: mapeo Agente/Cliente §3 Estados de media. label default "Cargando…".

Shared container: `<div class="bg-[white] flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[1000px]">ICON + LABEL</div>`; icon = `<div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="…" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>`; label = `<p class="font-normal leading-[16px] shrink-0 text-[8px] whitespace-nowrap text-[COLOR]">Cargando…</p>`

```html
<!-- state=loading -->
<div class="bg-[white] flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[1000px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="spinner" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[8px] whitespace-nowrap">Cargando…</p>
</div>
```

```html
<!-- state=downloadable -->
<div class="bg-[white] flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[1000px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-down-to-line" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#18181b] text-[8px] whitespace-nowrap">Cargando…</p>
</div>
```

```html
<!-- state=error -->
<div class="bg-[white] flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[1000px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="circle-exclamation" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#e7000b] text-[8px] whitespace-nowrap">Cargando…</p>
</div>
```

```html
<!-- state=expired -->
<div class="bg-[white] flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[1000px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="clock" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="font-normal leading-[16px] shrink-0 text-[#52525c] text-[8px] whitespace-nowrap">Cargando…</p>
</div>
```

## _atom-chat-changes (13125:8139)

Resumen de cambios hechos por la IA sobre entidades de Atom (flujo, agente, campaña). card: va en el content slot después de la burbuja plain; filas con entidad + diff (+n −n) y acción Revisar (atom-button); header con Deshacer; «Ver más» es atom-link-button. summary: snackbar mínimo encima del composer (accessory slot). Benchmark: Codex, Framer Agent (Undo → Redo, Show 6 more). Props: variant card|summary, title="Cambios", summary="3 cambios", showRow2/showRow3/showMore (default true).

```html
<!-- variant=card -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] w-[334px]">
  <div class="flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] shrink-0 w-full">
    <p class="flex-[1_0_0] font-bold leading-[16px] min-w-px text-[#18181b] text-[12px]">Cambios</p>
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
      <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="p-[2px]"><i data-ic="rotate-left" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Deshacer</p>
    </div>
  </div>
  <!-- row (row-1 always; row-2 showRow2; row-3 showRow3) -->
  <div class="border-[#e4e4e7] border-solid border-t flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] shrink-0 w-full">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="file-pen" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip whitespace-nowrap">
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px]">Etapa: Awareness</p>
      <div class="flex font-normal gap-[2px] items-start leading-[16px] overflow-clip text-[8px]">
        <p class="text-[#52525c]">Flujo</p><p class="text-[#096]">+12</p><p class="text-[#e7000b]">−3</p>
      </div>
    </div>
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Revisar</p></div>
  </div>
  <div data-if="showRow2" class="border-[#e4e4e7] border-solid border-t flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] shrink-0 w-full">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="file-pen" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip whitespace-nowrap">
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px]">Instrucciones</p>
      <div class="flex font-normal gap-[2px] items-start leading-[16px] overflow-clip text-[8px]"><p class="text-[#52525c]">Agente</p><p class="text-[#096]">+4</p><p class="text-[#e7000b]">−0</p></div>
    </div>
    <div class="bg-[rgba(255,255,255,0)] flex items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Revisar</p></div>
  </div>
  <div data-if="showRow3" class="border-[#e4e4e7] border-solid border-t flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] shrink-0 w-full">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="file-pen" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip whitespace-nowrap">
      <p class="font-medium leading-[16px] text-[#18181b] text-[12px]">Campos de información</p>
      <div class="flex font-normal gap-[2px] items-start leading-[16px] overflow-clip text-[8px]"><p class="text-[#52525c]">Agente</p><p class="text-[#096]">+2</p><p class="text-[#e7000b]">−1</p></div>
    </div>
    <div class="bg-[rgba(255,255,255,0)] flex items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Revisar</p></div>
  </div>
  <div data-if="showMore" class="border-[#e4e4e7] border-solid border-t flex items-start overflow-clip px-[8px] py-[4px] shrink-0 w-full">
    <!-- atom-link-button s -->
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver 6 más</p></div>
  </div>
</div>
```

```html
<!-- variant=summary (pill snackbar) -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex relative gap-[2px] items-center px-[8px] py-[2px] rounded-[1000px]">
  <p class="font-normal leading-[16px] text-[#27272a] text-[8px] whitespace-nowrap">3 cambios</p>
  <p class="font-normal leading-[16px] text-[#096] text-[8px] whitespace-nowrap">+18</p>
  <p class="font-normal leading-[16px] text-[#e7000b] text-[8px] whitespace-nowrap">−4</p>
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="chevron-down" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
</div>
```

## _atom-chat-suggestions (13125:8259)

Sugerencias de prompts. chips: atom-filter-chip bajo el saludo del estado vacío o bajo el composer (máx. 4, wrap). list: «Ver todas las sugerencias», agrupadas por categoría con filtros (atom-filter-chip) e ítems atom-list-item con icono leading. Click en un ítem rellena el composer, no envía. Benchmark: Gemini, ChatGPT, FigJam Agents. Props: type chips|list, showChip3/showChip4 (default true).

CHIP(label) = atom-filter-chip xs, no leading icon:
```html
<div class="bg-[white] border-[1px] border-[#d4d4d8] border-solid flex gap-[4px] items-center max-w-[240px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
  <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px overflow-hidden text-[#52525c] text-[12px] text-ellipsis whitespace-nowrap">LABEL</p>
</div>
```

```html
<!-- type=chips -->
<div class="flex items-start relative w-[334px] content-start flex-wrap gap-[8px_4px] h-[10px]">
  <div class="flex items-start overflow-clip shrink-0"><!-- CHIP("Crear un flujo") --></div>
  <div class="flex items-start overflow-clip shrink-0"><!-- CHIP("Analizar campaña") --></div>
  <div data-if="showChip3" class="flex items-start overflow-clip shrink-0"><!-- CHIP("Resumir conversación") --></div>
  <div data-if="showChip4" class="flex items-start overflow-clip shrink-0"><!-- CHIP("Ver sugerencias") --></div>
</div>
```

```html
<!-- type=list -->
<div class="flex items-start relative w-[334px] flex-col gap-[4px]">
  <div class="content-start flex flex-wrap gap-[0px_2px] items-start overflow-clip shrink-0 w-full">
    <!-- CHIP("Todas") CHIP("Campañas") CHIP("Flujos") CHIP("Agentes") -->
  </div>
  <div class="flex flex-col items-start overflow-clip shrink-0 w-full">
    <p class="font-bold leading-[24px] text-[#52525c] text-[16px] whitespace-nowrap">Campañas</p>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-turn-down-right" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Crear una campaña para clientes inactivos</p></div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-turn-down-right" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Comparar rendimiento de las últimas 3 campañas</p></div>
    </div>
  </div>
  <div class="flex flex-col items-start overflow-clip shrink-0 w-full">
    <p class="font-bold leading-[24px] text-[#52525c] text-[16px] whitespace-nowrap">Flujos</p>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-turn-down-right" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Detectar nodos sin salida</p></div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="arrow-turn-down-right" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Agregar validación de teléfono</p></div>
    </div>
  </div>
</div>
```

## _atom-chat-model-picker (13125:8260)

Contenido del dropdown (❖ atom-dropdown-menu, slot Options) que abre el chip de modelo del composer. Sección Modelo: atom-list-item con descripción, tag AI «Nuevo» opcional y check trailing en el seleccionado (State=Selected). Sección Esfuerzo: atom-list-item simples. Benchmark: Claude Chrome extension, Codex (5.5 · Medio), Google AI Studio. Props: showEffort, showEffortTitle (default true).

```html
<!-- default -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex flex-col items-start px-[0px] py-[4px] relative rounded-[8px] w-[280px]">
  <p class="font-bold indent-[12px] leading-[24px] text-[#52525c] text-[16px] w-full">Modelo</p>
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Atom Pro</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">Para tareas complejas de varios pasos</p>
    </div>
    <!-- atom-tag neutral -->
    <div class="bg-[#e4e4e7] flex gap-[4px] items-center justify-center max-w-[200px] px-[8px] py-[0px] rounded-[1000px] shrink-0">
      <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px overflow-hidden text-[8px] text-[#3f3f46] text-ellipsis whitespace-nowrap">Nuevo</p>
    </div>
  </div>
  <!-- selected item -->
  <div class="bg-[#d4d4d8] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Atom Balanced</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">Equilibrio entre velocidad y calidad</p>
    </div>
    <div class="flex items-center justify-center shrink-0 size-[16px]"><div class="p-px"><i data-ic="check" data-w="regular" data-size="16px" data-color="#27272a"></i></div></div>
  </div>
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Atom Fast</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">Respuestas inmediatas</p>
    </div>
  </div>
  <div class="h-0 shrink-0 w-full border-t border-[#e4e4e7]"><!-- atom-horizontal-divider (svg asset) --></div>
  <p data-if="showEffortTitle" class="font-bold indent-[12px] leading-[24px] text-[#52525c] text-[16px] w-full">Esfuerzo</p>
  <div data-if="showEffort" class="flex flex-col items-start overflow-clip shrink-0 w-full">
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full"><div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Bajo</p></div></div>
    <div class="bg-[#d4d4d8] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Medio</p></div>
      <div class="flex items-center justify-center shrink-0 size-[16px]"><div class="p-px"><i data-ic="check" data-w="regular" data-size="16px" data-color="#27272a"></i></div></div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full"><div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Alto</p></div></div>
  </div>
</div>
```

## _atom-chat-history (13125:8514)

Historial de conversaciones con la IA. menu: panel del botón ☰ del header (Recientes, Sugerencias, Ajustes, Feedback) con atom-list-item, atom-link-button «Ver todo» y atom-horizontal-divider. list: «Ver todo» de recientes agrupado por fecha con atom-search-input (placeholder según regla de search de Atom) y atom-list-item (título + hora como descripción; la conversación activa en State=Selected). Reemplaza al thread en atom-chat-assistant view=history.

LI(icon,label) = list item with leading icon:
```html
<div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
  <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="ICON" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
  <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">LABEL</p></div>
</div>
```
DIVIDER = `<div class="h-0 shrink-0 w-full border-t border-[#e4e4e7]"></div>` (svg asset in Figma). LINK("Ver todo") = `<div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver todo</p></div>`

```html
<!-- view=menu -->
<div class="bg-[white] flex flex-col gap-[8px] items-start p-[8px] relative w-[382px]">
  <div class="flex flex-col gap-[2px] items-start overflow-clip shrink-0 w-full">
    <div class="flex items-center overflow-clip shrink-0 w-full">
      <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#27272a] text-[12px]">Recientes</p>
      <!-- LINK("Ver todo") -->
    </div>
    <!-- LI(message,"Configurar agente de ventas") -->
    <!-- LI(message,"Campaña Black Friday — audiencia") -->
  </div>
  <!-- DIVIDER -->
  <div class="flex flex-col gap-[2px] items-start overflow-clip shrink-0 w-full">
    <div class="flex items-center overflow-clip shrink-0 w-full">
      <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#27272a] text-[12px]">Sugerencias</p>
      <!-- LINK("Ver todo") -->
    </div>
    <!-- LI(arrow-turn-down-right,"Detectar nodos sin salida") -->
  </div>
  <!-- DIVIDER -->
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex h-[16px] items-center justify-center shrink-0"><div class="p-px"><i data-ic="gear" data-w="regular" data-size="14px" data-color="#27272a"></i></div></div>
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px"><p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full whitespace-nowrap">Ajustes</p></div>
    <div class="flex items-center justify-center shrink-0 size-[16px]"><div class="p-px"><i data-ic="chevron-right" data-w="solid" data-size="12px" data-color="#18181b"></i></div></div>
  </div>
  <!-- LI(message-exclamation,"Enviar feedback") -->
</div>
```

```html
<!-- view=list -->
<div class="bg-[white] flex flex-col gap-[8px] items-start p-[8px] relative w-[382px]">
  <!-- atom-search-input (Medium, enabled, empty) -->
  <div class="flex flex-col items-start shrink-0 w-full">
    <div class="bg-[white] border border-[#d4d4d8] border-solid flex gap-[8px] h-[40px] items-center overflow-clip p-[12px] rounded-[8px] shrink-0 w-full">
      <div class="flex items-center justify-center shrink-0 size-[16px]"><i data-ic="search" data-w="regular" data-size="22.4px" data-color="#52525c"></i></div>
      <p class="flex-[1_0_0] font-normal leading-[16px] min-w-px text-[#52525c] text-[12px]">Search...</p>
      <p class="font-normal leading-[16px] shrink-0 text-[#52525c] text-[12px] whitespace-nowrap">⌘K</p>
    </div>
  </div>
  <div class="flex flex-col items-start overflow-clip shrink-0 w-full">
    <p class="font-bold leading-[24px] text-[#52525c] text-[16px] whitespace-nowrap">Hoy</p>
    <!-- selected (active conversation) -->
    <div class="bg-[#d4d4d8] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Configurar agente de ventas</p>
        <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">4:01 pm</p>
      </div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Campaña Black Friday — audiencia</p>
        <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">11:20 am</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-start overflow-clip shrink-0 w-full">
    <p class="font-bold leading-[24px] text-[#52525c] text-[16px] whitespace-nowrap">Últimos 7 días</p>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Flujo de cobranza con validación</p>
        <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">Jue</p>
      </div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Plantilla de bienvenida WhatsApp</p>
        <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">Lun</p>
      </div>
    </div>
  </div>
</div>
```

## _atom-chat-quick-replies (13125:8541)

Botones de respuesta rápida / CTA de un mensaje saliente (plantilla HSM o interactivo de 24 h). Cada botón es atom-link-button centrado en un contenedor con borde, debajo de la burbuja. enabled: sin respuesta. used: el contacto ya respondió o la ventana expiró (link-button Disabled). Máx. 3 botones de respuesta; URL/llamar con icono de enlace. Fuente: mapeo Agente/Cliente + bandeja QA. Props: state enabled|used, showReply2/showReply3 (default true). Built from _atom-chat-card-action type=reply.

```html
<!-- state=enabled -->
<div class="flex flex-col gap-[2px] items-start relative w-[334px]">
  <!-- ×3 (2nd/3rd: data-if showReply2 / showReply3) -->
  <div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 w-full">
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="reply" data-w="regular" data-size="22.4px" data-color="#2c7fff"></i></div></div>
      <p class="font-medium leading-[16px] text-[12px] text-center whitespace-nowrap text-[#2c7fff]">Ver producto</p>
    </div>
  </div>
</div>
```

```html
<!-- state=used (all buttons disabled) -->
<div class="flex flex-col gap-[2px] items-start relative w-[334px]">
  <div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0 w-full">
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="reply" data-w="regular" data-size="22.4px" data-color="#9f9fa9"></i></div></div>
      <p class="font-medium leading-[16px] text-[12px] text-center whitespace-nowrap text-[#9f9fa9]">Ver producto</p>
    </div>
  </div>
</div>
```

## _atom-chat-interactive-reply (13125:8612)

Respuesta del contacto a un interactivo, dentro de la burbuja entrante (debajo del reply-quote del mensaje original). flow: WhatsApp Flow respondido; «Ver más / Ver menos» es atom-link-button; expandido lista los campos con atom-list-item (Category = campo, Label = valor). list: opción elegida. button: botón de plantilla o interactivo. Fuente: mapeo Agente/Cliente + bandeja QA. Props: type flow|list|button, expanded (bool, only flow), title="Formulario respondido".

ICON8(name) = `<div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="NAME" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>`

```html
<!-- type=flow, expanded=false -->
<div class="flex flex-col gap-[4px] items-start relative w-[300px]">
  <div class="flex gap-[4px] items-center overflow-clip shrink-0 w-full">
    <!-- ICON8(file-lines) -->
    <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#18181b] text-[12px]">Formulario respondido</p>
    <!-- atom-link-button s, right icon -->
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
      <p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver más</p>
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="chevron-down" data-w="regular" data-size="22.4px" data-color="#2c7fff"></i></div></div>
    </div>
  </div>
</div>
```

```html
<!-- type=flow, expanded=true -->
<div class="flex flex-col gap-[4px] items-start relative w-[300px]">
  <div class="flex gap-[4px] items-center overflow-clip shrink-0 w-full">
    <!-- ICON8(file-lines) -->
    <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#18181b] text-[12px]">Formulario respondido</p>
    <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
      <p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver menos</p>
      <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="chevron-up" data-w="regular" data-size="22.4px" data-color="#2c7fff"></i></div></div>
    </div>
  </div>
  <div class="bg-[#f4f4f5] flex flex-col items-start overflow-clip rounded-[4px] shrink-0 w-full">
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-bold leading-[16px] overflow-hidden text-[10px] text-[#52525c] text-ellipsis w-full">Nombre</p>
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Michel Traña</p>
      </div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-bold leading-[16px] overflow-hidden text-[10px] text-[#52525c] text-ellipsis w-full">Correo</p>
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">michel@correo.com</p>
      </div>
    </div>
    <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
      <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
        <p class="font-bold leading-[16px] overflow-hidden text-[10px] text-[#52525c] text-ellipsis w-full">Producto de interés</p>
        <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Tarjeta de crédito</p>
      </div>
    </div>
  </div>
</div>
```

```html
<!-- type=list -->
<div class="flex flex-col gap-[4px] items-start relative w-[300px]">
  <div class="flex gap-[4px] items-center overflow-clip shrink-0 w-full">
    <!-- ICON8(list-ul) -->
    <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#18181b] text-[12px]">Formulario respondido</p>
  </div>
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[12px] whitespace-nowrap">Plan Premium · 12 meses</p>
</div>
```

```html
<!-- type=button -->
<div class="flex flex-col gap-[4px] items-start relative w-[300px]">
  <div class="flex gap-[4px] items-center overflow-clip shrink-0 w-full">
    <!-- ICON8(hand-pointer) -->
    <p class="flex-[1_0_0] font-medium leading-[16px] min-w-px text-[#18181b] text-[12px]">Formulario respondido</p>
  </div>
  <p class="font-normal leading-[16px] shrink-0 text-[#27272a] text-[12px] whitespace-nowrap">Sí, confirmar cita</p>
</div>
```

## _atom-chat-message-actions (13125:8775)

Acciones sobre un mensaje. hover-bar: atom-icon-button xs Tertiary junto a la burbuja (lado opuesto al avatar): responder, reaccionar, copiar, más. menu: contenido del menú «más» / click derecho con atom-list-item + atom-horizontal-divider (montar en ❖ atom-dropdown-menu). Reenviar, Editar y Eliminar para todos son acciones propias de Atom (no nativas en Cloud API) — mostrar solo si el canal lo permite. Fuente: mapeo Agente/Cliente §5.

IB(icon) = `<div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="ICON" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div></div>`
LI(icon,label) = same list item as in _atom-chat-history (icon 14px #27272a, label 12px medium #18181b, p-[8px] gap-[4px] rounded-[4px] bg white).

```html
<!-- type=hover-bar -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex relative gap-[2px] items-center p-[2px] rounded-[4px]">
  <!-- IB(reply) IB(face-smile) IB(copy) IB(ellipsis) -->
</div>
```

```html
<!-- type=menu -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex relative flex-col items-start px-[0px] py-[2px] rounded-[8px] w-[220px]">
  <!-- LI(reply,"Responder") LI(face-smile,"Reaccionar") LI(copy,"Copiar") LI(share,"Reenviar") LI(star,"Destacar") LI(thumbtack,"Fijar") LI(circle-info,"Info del mensaje") LI(pen,"Editar") -->
  <div class="h-0 shrink-0 w-full border-t border-[#e4e4e7]"><!-- divider --></div>
  <!-- LI(trash,"Eliminar para mí") LI(trash-can,"Eliminar para todos") -->
</div>
```

## _atom-chat-carousel (13125:8842)

Carrusel de tarjetas (plantilla carrusel de media / productos o interactivo). Tarjetas de 200 px con scroll horizontal, CTA con atom-link-button; el indicador de posición marca la tarjeta visible. Estados de media = overlay _atom-chat-media-state. Fuente: mapeo Agente/Cliente (Carruseles, Estados de carrusel). type: media | product (only texts differ).

FOOTER = _atom-chat-card-action type=footer:
```html
<div class="bg-[white] border-[#e4e4e7] border-solid border-t flex items-center justify-center px-[8px] py-[4px] shrink-0 w-full">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver producto</p></div>
</div>
```

```html
<!-- type=media (type=product: title "Audífonos Pro X", subtitle "$89.00") -->
<div class="flex flex-col gap-[4px] items-start overflow-clip relative w-[334px]">
  <div class="flex gap-[4px] items-start overflow-clip shrink-0">
    <!-- card ×3 -->
    <div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex flex-col items-start overflow-clip rounded-[8px] shrink-0 w-[200px]">
      <div class="bg-[#e4e4e7] flex h-[112px] items-center justify-center overflow-clip shrink-0 w-[200px]">
        <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="image" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
      </div>
      <div class="flex flex-col gap-[2px] items-start overflow-clip px-[8px] py-[4px] shrink-0 w-full whitespace-nowrap">
        <p class="font-bold leading-[16px] text-[#18181b] text-[12px]">Oferta de temporada</p>
        <p class="font-normal leading-[16px] text-[#27272a] text-[8px]">Hasta 30% en planes anuales</p>
      </div>
      <!-- FOOTER -->
    </div>
    <!-- card-2, card-3 identical -->
  </div>
  <img data-asset="position dots (svg)" class="block h-[6px] shrink-0 w-[22px]">
</div>
```

## _atom-chat-product (13125:8957)

Contenido de comercio. single: producto único (interactivo). list: lista de productos / catálogo saliente con atom-list-item. order: pedido desde catálogo (entrante). CTA con atom-link-button. Fuente: mapeo Agente/Cliente (Producto único, Lista de productos, Catálogo, Pedido desde catálogo).

```html
<!-- type=single -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] w-[260px]">
  <div class="bg-[#e4e4e7] flex h-[146px] items-center justify-center overflow-clip shrink-0 w-[260px]">
    <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="image" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  </div>
  <div class="flex flex-col gap-[2px] items-start overflow-clip px-[8px] py-[4px] shrink-0 w-full whitespace-nowrap">
    <p class="font-bold leading-[16px] text-[#18181b] text-[12px]">Audífonos Pro X</p>
    <p class="font-normal leading-[16px] text-[#27272a] text-[12px]">$89.00</p>
    <p class="font-normal leading-[16px] text-[#52525c] text-[8px]">Cancelación de ruido, 30 h de batería</p>
  </div>
  <!-- FOOTER (Ver producto) -->
</div>
```

```html
<!-- type=list (type=order: header "Pedido · 3 artículos" / "Total estimado $214.00", same rows) -->
<div class="bg-[white] border-[0.5px] border-[#e4e4e7] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] w-[260px]">
  <div class="flex flex-col items-start overflow-clip px-[8px] py-[4px] shrink-0 w-full whitespace-nowrap">
    <p class="font-bold leading-[16px] text-[#18181b] text-[12px]">Catálogo de verano</p>
    <p class="font-normal leading-[16px] text-[#52525c] text-[8px]">Elige tus favoritos</p>
  </div>
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Audífonos Pro X</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">$89.00</p>
    </div>
  </div>
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Funda de silicona</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">$15.00</p>
    </div>
  </div>
  <div class="bg-[white] flex gap-[4px] items-start p-[8px] rounded-[4px] shrink-0 w-full">
    <div class="flex flex-[1_0_0] flex-col items-start min-w-px whitespace-nowrap">
      <p class="font-medium leading-[16px] overflow-hidden text-[12px] text-[#18181b] text-ellipsis w-full">Cargador rápido</p>
      <p class="font-normal leading-[16px] overflow-hidden text-[8px] text-[#27272a] text-ellipsis w-full">$110.00</p>
    </div>
  </div>
  <!-- FOOTER (Ver producto) -->
</div>
```

## _atom-chat-composer-toolbar (13127:8128)

Toolbar del composer de IA (va debajo del input en atom-chat-assistant y atom-chat-wizard expanded). «+» abre adjuntos/skills/conectores; chip de modelo abre _atom-chat-model-picker; chip de fuentes abre la selección de datos (@archivo, conectores, MCP). generating: el botón enviar cambia a detener. Benchmark: Claude Chrome extension, Gemini (fuentes), Codex, ChatGPT. Props: state idle|generating, showModel/showSources/showMic (default true).

```html
<!-- state=idle -->
<div class="flex gap-[2px] items-center relative w-[350px]">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[1.6px]"><i data-ic="plus" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div></div>
  <div data-if="showModel" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
    <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="p-[2px]"><i data-ic="sparkles" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
    <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">Atom Balanced · Medio</p>
  </div>
  <div data-if="showSources" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center min-w-[64px] overflow-clip px-[8px] py-[4px] rounded-[8px] shrink-0">
    <div class="flex items-center justify-center overflow-clip shrink-0 size-[16px]"><div class="p-[2px]"><i data-ic="database" data-w="regular" data-size="28px" data-color="#18181b"></i></div></div>
    <p class="font-medium leading-[16px] text-[#18181b] text-[12px] text-center whitespace-nowrap">2 fuentes</p>
  </div>
  <div class="flex-[1_0_0] h-[8px] min-w-px"></div>
  <div data-if="showMic" class="bg-[rgba(255,255,255,0)] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[1.6px]"><i data-ic="microphone" data-w="regular" data-size="22.4px" data-color="#18181b"></i></div></div></div>
  <div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[2px]"><i data-ic="arrow-up" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div></div>
</div>
```

```html
<!-- state=generating — identical except send icon -->
<!-- ... --><div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[2px]"><i data-ic="stop" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div></div>
```

## _atom-chat-composer-pill (13127:8214)

Input flotante del Wizard dentro de los builders de Atom (Flow Builder, Agentes, Campañas). Vive centrado abajo del canvas; al enviar, el panel atom-chat-wizard se expande encima. focused / generating usan borde AI. Fuente: referencia Wizard (Asistente IA en builder), FigJam floating input, Claude Desktop float. state: enabled | focused | generating.

```html
<!-- state=enabled -->
<div class="bg-[white] border-[0.5px] border-solid border-[#e4e4e7] flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] w-[500px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="sparkles" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="flex-[1_0_0] font-normal leading-[16px] min-w-px text-[12px] text-[#52525c]">Cuéntame cómo te ayudo...</p>
  <div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[2px]"><i data-ic="arrow-up" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div></div>
</div>
```

```html
<!-- state=focused -->
<div class="bg-[white] border-[0.5px] border-solid border-[#990ffa] flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] w-[500px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="sparkles" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="flex-[1_0_0] font-normal leading-[16px] min-w-px text-[12px] text-[#18181b]">Agregá validación de teléfono|</p>
  <div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[2px]"><i data-ic="arrow-up" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div></div>
</div>
```

```html
<!-- state=generating -->
<div class="bg-[white] border-[0.5px] border-solid border-[#990ffa] flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] w-[500px]">
  <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="sparkles" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
  <p class="flex-[1_0_0] font-normal leading-[16px] min-w-px text-[12px] text-[#52525c]">Aplicando cambios al agente…</p>
  <div class="bg-[#09090b] flex gap-[8px] items-center justify-center overflow-clip p-[4px] rounded-[8px] shrink-0 size-[24px]"><div class="flex items-center justify-center overflow-clip"><div class="p-[2px]"><i data-ic="stop" data-w="regular" data-size="28px" data-color="#fafafa"></i></div></div></div>
</div>
```

## _atom-chat-card-action (13143:10416)

Átomo de acción para tarjetas y respuestas rápidas del chat. type=footer: CTA al pie de tarjetas de carrusel, producto y contacto (borde superior, ocupa todo el ancho). type=reply: botón de respuesta rápida / CTA bajo una plantilla o interactivo (borde completo). state=disabled (state=false): el contacto ya respondió o la ventana expiró. Contiene ❖ atom-link-button (Size=s); texto editable con la propiedad label.

```html
<!-- type=footer, state=enabled -->
<div class="bg-[white] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] relative w-[200px] border-t">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#2c7fff] text-[12px] text-center whitespace-nowrap">Ver producto</p></div>
</div>
```

```html
<!-- type=footer, state=disabled -->
<div class="bg-[white] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] relative w-[200px] border-t">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0"><p class="font-medium leading-[16px] text-[#9f9fa9] text-[12px] text-center whitespace-nowrap">Ver producto</p></div>
</div>
```

```html
<!-- type=reply, state=enabled -->
<div class="bg-[white] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] relative w-[200px] border-[0.5px] rounded-[4px]">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
    <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="reply" data-w="regular" data-size="22.4px" data-color="#2c7fff"></i></div></div>
    <p class="font-medium leading-[16px] text-[12px] text-center whitespace-nowrap text-[#2c7fff]">Ver producto</p>
  </div>
</div>
```

```html
<!-- type=reply, state=disabled -->
<div class="bg-[white] border-[#e4e4e7] border-solid flex items-center justify-center px-[8px] py-[4px] relative w-[200px] border-[0.5px] rounded-[4px]">
  <div class="bg-[rgba(255,255,255,0)] flex gap-[8px] h-[20px] items-center justify-center overflow-clip p-[2px] rounded-[8px] shrink-0">
    <div class="flex items-center justify-center overflow-clip shrink-0"><div class="p-[1.6px]"><i data-ic="reply" data-w="regular" data-size="22.4px" data-color="#9f9fa9"></i></div></div>
    <p class="font-medium leading-[16px] text-[12px] text-center whitespace-nowrap text-[#9f9fa9]">Ver producto</p>
  </div>
</div>
```

## _atom-chat-composer-ai (13127:8192)

Composer avanzado para chats con IA / MCP. Chips de contexto (@entidad) arriba, input multilínea y _atom-chat-composer-toolbar abajo. focused: borde brand. generating: input bloqueado y botón detener. Para inbox se mantiene _atom-chat-composer (+ tabs). Benchmark: Gemini, ChatGPT, Claude. Props: state enabled|focused|generating, showContext (default true).

```html
<!-- state=enabled -->
<div class="bg-[white] border-[0.5px] border-solid border-[#e4e4e7] flex flex-col gap-[4px] items-start px-[8px] py-[4px] relative rounded-[8px] w-[350px]">
  <div data-if="showContext" class="flex gap-[2px] items-start overflow-clip shrink-0">
    <div class="bg-[#f4f4f5] flex gap-[2px] items-center overflow-clip px-[4px] py-[0px] rounded-[2px] shrink-0">
      <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="at" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
      <p class="font-normal leading-[16px] text-[#27272a] text-[8px] whitespace-nowrap">Agente de ventas</p>
      <div class="flex items-center justify-center shrink-0"><div class="p-px"><i data-ic="xmark" data-w="regular" data-size="8px" data-color="#71717b"></i></div></div>
    </div>
  </div>
  <p class="font-normal leading-[16px] min-w-full shrink-0 text-[12px] text-[#52525c]">Pregunta o pide cambios… usa @ para contexto</p>
  <!-- _atom-chat-composer-toolbar state=idle, class "flex gap-[2px] items-center relative shrink-0 w-full" -->
</div>
```

```html
<!-- state=focused: border-[#ff9d5b]; text-[#18181b] "Agregá que el agente confirme inventario|"; toolbar idle -->
<div class="bg-[white] border-[0.5px] border-solid border-[#ff9d5b] flex flex-col gap-[4px] items-start px-[8px] py-[4px] relative rounded-[8px] w-[350px]">
  <!-- context chip as above -->
  <p class="font-normal leading-[16px] min-w-full shrink-0 text-[12px] text-[#18181b]">Agregá que el agente confirme inventario|</p>
  <!-- toolbar state=idle -->
</div>
```

```html
<!-- state=generating: border-[#e4e4e7]; text-[#52525c] "Respondiendo…"; toolbar state=generating (stop) -->
<div class="bg-[white] border-[0.5px] border-solid border-[#e4e4e7] flex flex-col gap-[4px] items-start px-[8px] py-[4px] relative rounded-[8px] w-[350px]">
  <!-- context chip as above -->
  <p class="font-normal leading-[16px] min-w-full shrink-0 text-[12px] text-[#52525c]">Respondiendo…</p>
  <!-- toolbar state=generating -->
</div>
```

## _atom-chat-composer-tabs (13127:8193)

Tabs sobre el composer de la bandeja: Mensaje (responder al contacto), Notas (nota interna, burbuja variant=note) y Resumen IA. Usa ❖ atom-tabs baseline. Fuente: bandeja QA. (No variants.)

```html
<!-- default -->
<div class="border-[#e4e4e7] border-solid border-t flex items-start px-[8px] py-[0px] relative w-[713px]">
  <div class="border-[#e4e4e7] border-b border-solid flex gap-[8px] items-center shrink-0">
    <!-- selected tab -->
    <div class="border-[#09090b] border-b-[2px] border-solid flex gap-[8px] items-center justify-center min-h-[29px] min-w-[29px] pb-[12px] pt-[4px] px-[12px] shrink-0">
      <div class="flex gap-[8px] items-center p-[2px]"><p class="font-medium leading-[16px] text-[#18181b] text-[12px] whitespace-nowrap">Mensaje</p></div>
    </div>
    <div class="flex gap-[8px] items-center justify-center min-h-[29px] min-w-[29px] pb-[12px] pt-[4px] px-[12px] shrink-0">
      <div class="flex gap-[8px] items-center p-[2px]"><p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Notas</p></div>
    </div>
    <div class="flex gap-[8px] items-center justify-center min-h-[29px] min-w-[29px] pb-[12px] pt-[4px] px-[12px] shrink-0">
      <div class="flex gap-[8px] items-center p-[2px]"><p class="font-medium leading-[16px] text-[#27272a] text-[12px] whitespace-nowrap">Resumen IA</p></div>
    </div>
  </div>
</div>
```
