import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Command, KeyRound, Copy } from "lucide-react";
import { keyboardToNextKeyboard } from "@/utils/keyUtils";
import { CodeBlock } from "./code/codeblock";
import { copyToClipboard } from "@/utils/copyToClipboard";
import {
  importAndDefinitionCodeTemplate,
  individualKeyUsageCodeTemplate,
  keyGroupUsageCodeTemplate,
} from "./code/template";

interface KeyInfoProps {
  pressedKeys: { code: string }[];
  lastPressedKey: { code: string } | null;
}

const KeyInfo: React.FC<KeyInfoProps> = ({ pressedKeys, lastPressedKey }) => {
  const keysToDisplay =
    pressedKeys.length > 0
      ? pressedKeys
      : lastPressedKey
      ? [lastPressedKey]
      : [];

  if (keysToDisplay.length === 0)
    return (
      <Card className="h-full flex items-center justify-center">
        <CardContent>
          <p className="text-center text-muted-foreground pt-6">
            Press a key to see information
          </p>
        </CardContent>
      </Card>
    );

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Code Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            title={"Import and definition example code"}
            code={importAndDefinitionCodeTemplate(keysToDisplay)}
          />

          <CodeBlock
            title={"Sample code for individual key usage"}
            code={individualKeyUsageCodeTemplate(keysToDisplay)}
          />

          <CodeBlock
            title={"Sample code for using group key"}
            code={keyGroupUsageCodeTemplate(keysToDisplay)}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Key Information: {keysToDisplay.map((k) => k.code).join(" + ")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keysToDisplay.map(({ code }) => (
              <Card key={code} className="overflow-hidden">
                <CardHeader className="bg-primary p-3">
                  <CardTitle className="text-primary-foreground text-sm font-medium flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Command className="h-4 w-4" />
                      {code}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-foreground hover:text-primary-foreground/80"
                      onClick={() => copyToClipboard(code)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <KeyRound className="h-4 w-4" />
                    <span className="text-sm font-mono">{code}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {keyboardToNextKeyboard[code]
                      ? "Predefined key"
                      : "Custom key"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeyInfo;
