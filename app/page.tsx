"use client";
import dynamic from "next/dynamic";
import LoadingOverlay from "./components/LoadingOverlay";
const CanvasScene = dynamic(() => import("./components/3dhomescene/CanvasScene"), { ssr: true });

export default function Home() {

  return (
      <main className="relative w-full min-h-screen overflow-hidden">
        {/* Spinner overlay */}
        <LoadingOverlay />
        <div className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[77vh]">
          <CanvasScene />
        </div>

        <div className="columns-1 md:columns-2 gap-4 items-center justify-around text-center mt-2">
          <div className="h-full w-full">
            <p className="text-2xl font-bold">Hi!</p> 
            <span className="text-3xl font-light text-italic"> welcome to my </span>
            <p className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400">
              ART-TECH STUDIO
            </p>
            <p className="mt-6 text-xs text-white"> . </p>
          </div>

          <div className="h-full w-full">
            <span>Here you can</span>
            <p className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400">
              know me better 
            </p>
            <span className="text-lg font-semibold">& I&apos;ll Help you with your </span>
            <p className="mb-2 text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600 dark:from-blue-400 dark:to-pink-400">
              prototypes / products 
            </p>
          </div>
        </div>

      </main>
  );
}
