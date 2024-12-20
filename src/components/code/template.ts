/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, Keyboard } from "nextkeyboard";
const {
  LetterKeys,
  NumberKeys,
  NavigationKeys,
  FunctionKeys,
  ModifierKeys,
  ...allKeys
} = Keyboard;

export function importAndDefinitionCodeTemplate(
  keysToDisplay: { code: string }[]
) {
  const predefinedKeys = keysToDisplay
    .map(({ code }) => getPredefinedKey(code))
    .filter((key) => key != undefined);
  const customKeys = keysToDisplay.filter(
    ({ code }) => !getPredefinedKey(code)
  );

  const methodsToImport: ("Keyboard" | "Key" | "Hotkeys" | "SomeOfKeys")[] = [];
  const keysToSpread: string[] = [];

  if (predefinedKeys.length > 0) {
    predefinedKeys.forEach(({ name }) => keysToSpread.push(name));
    methodsToImport.push("Keyboard");
  }

  if (customKeys.length > 0) methodsToImport.push("Key");

  if ([...predefinedKeys, ...customKeys].length > 1) {
    methodsToImport.push("Hotkeys", "SomeOfKeys");
  }

  const importCode = `import { ${methodsToImport.join(
    ", "
  )} } from 'nextkeyboard';`;

  const predefinedKeysConstants = `const { ${keysToSpread.join(
    ", "
  )} } = Keyboard;`;
  const customKeysContants = customKeys
    .map(({ code }) => {
      const cleanedCode = code.replace(/\s+/g, "");
      return `const Custom${cleanedCode} = new Key({ key: '${code}', code: '${code}' }); // This key is not predefined`;
    })
    .join("\n");

  const constants = [
    keysToSpread.length > 0 ? predefinedKeysConstants : undefined,
    customKeys.length > 0 ? customKeysContants : undefined,
  ]
    .filter((c) => c)
    .join("\n");

  return [importCode, constants].join("\n\n");
}

export function individualKeyUsageCodeTemplate(
  keysToDisplay: { code: string }[]
) {
  const predefinedKeys = keysToDisplay
    .map(({ code }) => getPredefinedKey(code))
    .filter((key) => key != undefined);
  const customKeys = keysToDisplay
    .filter(({ code }) => !getPredefinedKey(code))
    .map(({ code }) => {
      const key = new Key({ code });
      const keyName = `Custom${code.replace(/\s+/g, "")}`;

      return { name: keyName, key };
    });

  const keys = [...predefinedKeys, ...customKeys];
  const keysUsage: string[] = [];

  keys.forEach(({ name, key }) => {
    return keysUsage.push(
      [
        `${name}.onPress(() => {`,
        ` console.log("${name} key was pressed!");`,
        "});",
      ].join("\n")
    );
  });

  return keysUsage.join("\n\n");
}

export function keyGroupUsageCodeTemplate(keysToDisplay: { code: string }[]) {
  const predefinedKeys = keysToDisplay
    .map(({ code }) => getPredefinedKey(code))
    .filter((key) => key != undefined);
  const customKeys = keysToDisplay
    .filter(({ code }) => !getPredefinedKey(code))
    .map(({ code }) => {
      const key = new Key({ code });
      const keyName = `Custom${code.replace(/\s+/g, "")}`;

      return { name: keyName, key };
    });

  const keys = [...predefinedKeys, ...customKeys];
  const keyNames = keys.map(({ name }) => name).join(", ");
  const keyNamesPlus = keys.map(({ name }) => name).join(" + ");
  const groupsUsage: string[] = [];

  groupsUsage.push(
    [
      "// Hotkeys example (all keys must be pressed simultaneously)",
      `const multiKeyPress = new Hotkeys([ ${keyNames} ]);`,
      "",
      "multiKeyPress.onPress(() => {",
      ` console.log("${keyNamesPlus} keys were pressed simultaneously!)"`,
      "});",
    ].join("\n")
  );

  groupsUsage.push(
    [
      "// SomeOfKeys example (any of the keys can trigger the action)",
      `const someKeysPress = new SomeOfKeys([ ${keyNames} ]);`,
      "",
      "someKeysPress.onPress((pressedKey) => {",
      ` console.log(\`One of the keys was pressed: \${pressedKey.key}\`);`,
      "});",
    ].join("\n")
  );

  return groupsUsage.join("\n\n");
}

export function getPredefinedKey(code: string) {
  const keyboardEntries = Object.entries(allKeys);
  const predefined = keyboardEntries.filter(([, key]) => key.code == code)[0];

  if (predefined) {
    return {
      name: predefined[0],
      key: predefined[1],
    };
  } else {
    return undefined;
  }
}
