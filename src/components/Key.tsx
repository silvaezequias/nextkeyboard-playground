"use client";

import React from "react";
import { KeyType } from "@/utils/KeyboardLayouts";

interface KeyProps extends KeyType {
  onKeyPress: (keyValue: string | undefined) => void;
  isSelected: boolean;
}

export const Key: React.FC<KeyProps> = ({
  id,
  code,
  label,
  width = 1,
  onKeyPress,
  isSelected,
}) => {
  return (
    <button
      id={id}
      className={`
        bg-background text-foreground border border-border rounded p-2 m-0.5 text-xs font-medium 
        flex items-center justify-center transition-all duration-100 ease-in-out
        ${
          isSelected
            ? "shadow-inner bg-primary/20"
            : "shadow-md hover:shadow-lg"
        }
        active:shadow-inner active:translate-y-px active:bg-primary/20
      `}
      style={{
        width: `${width * 40}px`,
        transform: isSelected ? "translateY(2px)" : "none",
      }}
      onClick={() => onKeyPress(code)}
    >
      {label}
    </button>
  );
};
