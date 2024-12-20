import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Button } from "../ui/button";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { useTheme } from "next-themes";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeBlock({ title, code }: { title: string; code: string }) {
  const { theme } = useTheme();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}:</h3>
      <div className="relative">
        <SyntaxHighlighter
          language="typescript"
          style={theme === "dark" ? atomDark : oneLight}
          customStyle={{
            fontSize: "0.8rem",
            padding: "1rem",
            backgroundColor:
              theme === "dark" ? "hsl(var(--secondary))" : "hsl(var(--muted))",
            borderRadius: "0.5rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 bg-secondary text-secondary-foreground hover:bg-secondary/80"
          onClick={() => copyToClipboard(code)}
        >
          Copy
        </Button>
      </div>
    </div>
  );
}
