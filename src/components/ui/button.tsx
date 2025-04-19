// src/components/ui/button.tsx
"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";

export function Button({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-white transition ${className}`}
    >
      {children}
    </button>
  );
}
