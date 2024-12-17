"use client";

import React, { useState, useEffect } from "react";
import { Key } from "./Key";
import { useKeyboardLayout } from "../hooks/useKeyboardLayout";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { KeyType } from "@/utils/KeyboardLayouts";
import { GlobalKeyboardListener } from "nextkeyboard";

export const VirtualKeyboard: React.FC = () => {
  const { currentLayout, changeLayout } = useKeyboardLayout();
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const handleKeyPress = (code: string | undefined) => {
    if (code) {
      setSelectedKeys((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(code)) {
          newSelected.delete(code);
        } else {
          newSelected.add(code);
        }
        return newSelected;
      });
    }
  };

  useEffect(() => {
    const listener = new GlobalKeyboardListener();
    listener.onKeydown((event, { code }) => {
      event.preventDefault();
      handleKeyPress(code);
    });
    return () => {
      listener.cleanup();
    };
  }, []);

  const renderKey = (keyData: KeyType) => {
    if (keyData.gap) {
      return (
        <div key={keyData.id} style={{ width: `${keyData.gap * 40}px` }} />
      );
    }
    return (
      <Key
        key={keyData.id}
        {...keyData}
        onKeyPress={handleKeyPress}
        isSelected={selectedKeys.has(keyData.code || "")}
      />
    );
  };

  if (!currentLayout || !currentLayout.keys) {
    return <div>No keyboard layout available</div>;
  }

  return (
    <div className="p-4 bg-background text-foreground">
      <div className="flex justify-between mb-4">
        <button
          onClick={changeLayout}
          disabled
          title={"Feature not yet implemented. QWERTY standard enabled."}
          className="p-2 bg-secondary text-secondary-foreground rounded"
        >
          {currentLayout.name}
        </button>
        <ThemeSwitcher />
      </div>
      <div className="inline-block border border-border rounded p-2 [&_button]:h-10">
        {currentLayout.keys.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {row.map(renderKey)}
          </div>
        ))}
      </div>
    </div>
  );
};
