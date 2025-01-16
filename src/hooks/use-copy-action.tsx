"use client";
import { useState } from "react";

export const useCopyAction = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar texto: ", error);
    }
  };

  return {
    isCopied,
    handleCopy,
  };
};
