"use client";

import { VirtualKeyboard } from "@/components/VirtualKeyboard";

export default function Component() {
  if (typeof window === "undefined") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Teclado Virtual</h1>
        <p>Loading the Virtual Keyboard</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Teclado Virtual</h1>
      <VirtualKeyboard />
    </main>
  );
}
