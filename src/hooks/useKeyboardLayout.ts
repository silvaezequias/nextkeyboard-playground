"use client";

import { useState } from "react";
import { layouts } from "@/utils/KeyboardLayouts";

export function useKeyboardLayout() {
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(0);

  const currentLayout = layouts[currentLayoutIndex] || layouts[0];

  const changeLayout = () => {
    setCurrentLayoutIndex((prevIndex) => (prevIndex + 1) % layouts.length);
  };

  return {
    currentLayout,
    changeLayout,
  };
}
