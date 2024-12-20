interface KeyInfo {
  key: string;
  code: string;
  width?: number;
  height?: number;
  uniqueId: string;
}

export const getMainKeyboardLayout = (): KeyInfo[][] => [
  [
    { key: "Esc", code: "Escape", width: 1.5, uniqueId: "main-escape" },
    { key: "F1", code: "F1", uniqueId: "main-f1" },
    { key: "F2", code: "F2", uniqueId: "main-f2" },
    { key: "F3", code: "F3", uniqueId: "main-f3" },
    { key: "F4", code: "F4", uniqueId: "main-f4" },
    { key: "F5", code: "F5", uniqueId: "main-f5" },
    { key: "F6", code: "F6", uniqueId: "main-f6" },
    { key: "F7", code: "F7", uniqueId: "main-f7" },
    { key: "F8", code: "F8", uniqueId: "main-f8" },
    { key: "F9", code: "F9", uniqueId: "main-f9" },
    { key: "F10", code: "F10", uniqueId: "main-f10" },
    { key: "F11", code: "F11", uniqueId: "main-f11" },
    { key: "F12", code: "F12", uniqueId: "main-f12" },
  ],
  [
    { key: "`", code: "Backquote", uniqueId: "main-backquote" },
    { key: "1", code: "Digit1", uniqueId: "main-digit1" },
    { key: "2", code: "Digit2", uniqueId: "main-digit2" },
    { key: "3", code: "Digit3", uniqueId: "main-digit3" },
    { key: "4", code: "Digit4", uniqueId: "main-digit4" },
    { key: "5", code: "Digit5", uniqueId: "main-digit5" },
    { key: "6", code: "Digit6", uniqueId: "main-digit6" },
    { key: "7", code: "Digit7", uniqueId: "main-digit7" },
    { key: "8", code: "Digit8", uniqueId: "main-digit8" },
    { key: "9", code: "Digit9", uniqueId: "main-digit9" },
    { key: "0", code: "Digit0", uniqueId: "main-digit0" },
    { key: "-", code: "Minus", uniqueId: "main-minus" },
    { key: "=", code: "Equal", uniqueId: "main-equal" },
    {
      key: "Backspace",
      code: "Backspace",
      width: 2,
      uniqueId: "main-backspace",
    },
  ],
  [
    { key: "Tab", code: "Tab", width: 1.5, uniqueId: "main-tab" },
    { key: "Q", code: "KeyQ", uniqueId: "main-q" },
    { key: "W", code: "KeyW", uniqueId: "main-w" },
    { key: "E", code: "KeyE", uniqueId: "main-e" },
    { key: "R", code: "KeyR", uniqueId: "main-r" },
    { key: "T", code: "KeyT", uniqueId: "main-t" },
    { key: "Y", code: "KeyY", uniqueId: "main-y" },
    { key: "U", code: "KeyU", uniqueId: "main-u" },
    { key: "I", code: "KeyI", uniqueId: "main-i" },
    { key: "O", code: "KeyO", uniqueId: "main-o" },
    { key: "P", code: "KeyP", uniqueId: "main-p" },
    { key: "[", code: "BracketLeft", uniqueId: "main-bracketleft" },
    { key: "]", code: "BracketRight", uniqueId: "main-bracketright" },
    { key: "\\", code: "Backslash", width: 1.5, uniqueId: "main-backslash" },
  ],
  [
    {
      key: "CapsLock",
      code: "CapsLock",
      width: 1.75,
      uniqueId: "main-capslock",
    },
    { key: "A", code: "KeyA", uniqueId: "main-a" },
    { key: "S", code: "KeyS", uniqueId: "main-s" },
    { key: "D", code: "KeyD", uniqueId: "main-d" },
    { key: "F", code: "KeyF", uniqueId: "main-f" },
    { key: "G", code: "KeyG", uniqueId: "main-g" },
    { key: "H", code: "KeyH", uniqueId: "main-h" },
    { key: "J", code: "KeyJ", uniqueId: "main-j" },
    { key: "K", code: "KeyK", uniqueId: "main-k" },
    { key: "L", code: "KeyL", uniqueId: "main-l" },
    { key: ";", code: "Semicolon", uniqueId: "main-semicolon" },
    { key: "'", code: "Quote", uniqueId: "main-quote" },
    { key: "Enter", code: "Enter", width: 2.25, uniqueId: "main-enter" },
  ],
  [
    {
      key: "Shift",
      code: "ShiftLeft",
      width: 2.25,
      uniqueId: "main-shiftleft",
    },
    { key: "Z", code: "KeyZ", uniqueId: "main-z" },
    { key: "X", code: "KeyX", uniqueId: "main-x" },
    { key: "C", code: "KeyC", uniqueId: "main-c" },
    { key: "V", code: "KeyV", uniqueId: "main-v" },
    { key: "B", code: "KeyB", uniqueId: "main-b" },
    { key: "N", code: "KeyN", uniqueId: "main-n" },
    { key: "M", code: "KeyM", uniqueId: "main-m" },
    { key: ",", code: "Comma", uniqueId: "main-comma" },
    { key: ".", code: "Period", uniqueId: "main-period" },
    { key: "/", code: "Slash", uniqueId: "main-slash" },
    {
      key: "Shift",
      code: "ShiftRight",
      width: 2.75,
      uniqueId: "main-shiftright",
    },
  ],
  [
    {
      key: "Ctrl",
      code: "ControlLeft",
      width: 1.25,
      uniqueId: "main-controlleft",
    },
    { key: "Win", code: "MetaLeft", width: 1.25, uniqueId: "main-metaleft" },
    { key: "Alt", code: "AltLeft", width: 1.25, uniqueId: "main-altleft" },
    { key: "Space", code: "Space", width: 6.25, uniqueId: "main-space" },
    { key: "Alt", code: "AltRight", width: 1.25, uniqueId: "main-altright" },
    { key: "Win", code: "MetaRight", width: 1.25, uniqueId: "main-metaright" },
    {
      key: "Menu",
      code: "ContextMenu",
      width: 1.25,
      uniqueId: "main-contextmenu",
    },
    {
      key: "Ctrl",
      code: "ControlRight",
      width: 1.25,
      uniqueId: "main-controlright",
    },
  ],
];

export const getNumpadNumbersLayout = (): KeyInfo[][] => [
  [
    { key: "7", code: "Numpad7", uniqueId: "numpad-7" },
    { key: "8", code: "Numpad8", uniqueId: "numpad-8" },
    { key: "9", code: "Numpad9", uniqueId: "numpad-9" },
  ],
  [
    { key: "4", code: "Numpad4", uniqueId: "numpad-4" },
    { key: "5", code: "Numpad5", uniqueId: "numpad-5" },
    { key: "6", code: "Numpad6", uniqueId: "numpad-6" },
  ],
  [
    { key: "1", code: "Numpad1", uniqueId: "numpad-1" },
    { key: "2", code: "Numpad2", uniqueId: "numpad-2" },
    { key: "3", code: "Numpad3", uniqueId: "numpad-3" },
  ],
  [
    { key: "0", code: "Numpad0", width: 2, uniqueId: "numpad-0" },
    { key: ".", code: "NumpadDecimal", uniqueId: "numpad-decimal" },
  ],
];

export const getNumpadOperationsLayout = (): KeyInfo[][] => [
  [
    { key: "NumLock", code: "NumLock", uniqueId: "numpad-numlock" },
    { key: "/", code: "NumpadDivide", uniqueId: "numpad-divide" },
    { key: "*", code: "NumpadMultiply", uniqueId: "numpad-multiply" },
    { key: "-", code: "NumpadSubtract", uniqueId: "numpad-subtract" },
  ],
  [{ key: "+", code: "NumpadAdd", uniqueId: "numpad-add" }],
  [{ key: "Enter", code: "NumpadEnter", uniqueId: "numpad-enter" }],
];

export const getNavigationLayout = (): KeyInfo[][] => [
  [
    { key: "Insert", code: "Insert", uniqueId: "nav-insert" },
    { key: "Home", code: "Home", uniqueId: "nav-home" },
    { key: "PgUp", code: "PageUp", uniqueId: "nav-pageup" },
  ],
  [
    { key: "Delete", code: "Delete", uniqueId: "nav-delete" },
    { key: "End", code: "End", uniqueId: "nav-end" },
    { key: "PgDn", code: "PageDown", uniqueId: "nav-pagedown" },
  ],
];

export const getArrowKeysLayout = (): KeyInfo[][] => [
  [
    { key: "", code: "", uniqueId: "arrow-placeholder1" },
    { key: "↑", code: "ArrowUp", uniqueId: "arrow-up" },
    { key: "", code: "", uniqueId: "arrow-placeholder2" },
  ],
  [
    { key: "←", code: "ArrowLeft", uniqueId: "arrow-left" },
    { key: "↓", code: "ArrowDown", uniqueId: "arrow-down" },
    { key: "→", code: "ArrowRight", uniqueId: "arrow-right" },
  ],
];

export const getKeyName = (code: string): string => {
  const allKeys = [
    ...getMainKeyboardLayout().flat(),
    ...getNumpadNumbersLayout().flat(),
    ...getNumpadOperationsLayout().flat(),
    ...getNavigationLayout().flat(),
    ...getArrowKeysLayout().flat(),
  ];
  const keyInfo = allKeys.find((k) => k.code === code);
  return keyInfo ? keyInfo.key : code;
};

export const getKeyCode = (key: string): string => {
  const allKeys = [
    ...getMainKeyboardLayout().flat(),
    ...getNumpadNumbersLayout().flat(),
    ...getNumpadOperationsLayout().flat(),
    ...getNavigationLayout().flat(),
    ...getArrowKeysLayout().flat(),
  ];
  const keyInfo = allKeys.find((k) => k.key === key);
  return keyInfo ? keyInfo.code : key;
};

export const keyboardToNextKeyboard: { [key: string]: string } = {
  Escape: "Escape",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  PrintScreen: "PrintScreen",
  ScrollLock: "ScrollLock",
  Pause: "Pause",
  Backquote: "Backtick",
  Digit1: "One",
  Digit2: "Two",
  Digit3: "Three",
  Digit4: "Four",
  Digit5: "Five",
  Digit6: "Six",
  Digit7: "Seven",
  Digit8: "Eight",
  Digit9: "Nine",
  Digit0: "Zero",
  Minus: "Minus",
  Equal: "Equal",
  Backspace: "Backspace",
  Insert: "Insert",
  Home: "Home",
  PageUp: "PageUp",
  Tab: "Tab",
  KeyQ: "Q",
  KeyW: "W",
  KeyE: "E",
  KeyR: "R",
  KeyT: "T",
  KeyY: "Y",
  KeyU: "U",
  KeyI: "I",
  KeyO: "O",
  KeyP: "P",
  BracketLeft: "LeftBrace",
  BracketRight: "RightBrace",
  Backslash: "Backslash",
  Delete: "Delete",
  End: "End",
  PageDown: "PageDown",
  CapsLock: "CapsLock",
  KeyA: "A",
  KeyS: "S",
  KeyD: "D",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  Semicolon: "Semicolon",
  Quote: "Quote",
  Enter: "Enter",
  ShiftLeft: "LeftShift",
  KeyZ: "Z",
  KeyX: "X",
  KeyC: "C",
  KeyV: "V",
  KeyB: "B",
  KeyN: "N",
  KeyM: "M",
  Comma: "Comma",
  Period: "Period",
  Slash: "Slash",
  ShiftRight: "RightShift",
  ArrowUp: "ArrowUp",
  ControlLeft: "LeftCTRL",
  MetaLeft: "LeftCommand",
  AltLeft: "LeftAlt",
  Space: "Space",
  AltRight: "RightAlt",
  MetaRight: "RightCommand",
  ContextMenu: "ContextMenu",
  ControlRight: "RightCTRL",
  ArrowLeft: "ArrowLeft",
  ArrowDown: "ArrowDown",
  ArrowRight: "ArrowRight",
  NumLock: "NumLock",
  NumpadDivide: "NumpadDivide",
  NumpadMultiply: "NumpadMultiply",
  NumpadSubtract: "NumpadSubtract",
  NumpadAdd: "NumpadAdd",
  NumpadEnter: "NumpadEnter",
  Numpad0: "Numpad0",
  Numpad1: "Numpad1",
  Numpad2: "Numpad2",
  Numpad3: "Numpad3",
  Numpad4: "Numpad4",
  Numpad5: "Numpad5",
  Numpad6: "Numpad6",
  Numpad7: "Numpad7",
  Numpad8: "Numpad8",
  Numpad9: "Numpad9",
  NumpadDecimal: "NumpadDecimal",
};

export const getUniqueId = (code: string): string => {
  const allKeys = [
    ...getMainKeyboardLayout().flat(),
    ...getNumpadNumbersLayout().flat(),
    ...getNumpadOperationsLayout().flat(),
    ...getNavigationLayout().flat(),
    ...getArrowKeysLayout().flat(),
  ];
  const keyInfo = allKeys.find((k) => k.code === code);
  return keyInfo ? keyInfo.uniqueId : code;
};
