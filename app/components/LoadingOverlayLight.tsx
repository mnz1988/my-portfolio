"use client";
import { useState, useEffect } from "react";

export default function LoadingOverlayLight() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-300">
       <div className="w-12 h-12 rounded-full border-4 border-t-cyan-400 animate-spin"/>
      <p className="mt-6 text-lg">Loading the <span className="text-red-400 font-bold"> M. </span><span className="text-green-400 font-bold"> N. </span><span className="text-blue-400 font-bold"> Z. </span> website </p>
    </div>
  );
}
