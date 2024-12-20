"use client";

import { ToastProvider } from "@/components/Toast/ToastContext";
import { VirtualKeyboard } from "@/components/VirtualKeyboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Teclado Virtual</h1>
      <ToastProvider>
        <VirtualKeyboard />
      </ToastProvider>
    </main>
  );
}
