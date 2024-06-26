"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
export function SparklesPreview() {
  return (

    <div className="h-[40rem] w-full bg-[#235377]  flex flex-col items-center justify-center overflow-hidden rounded-md">
  
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <img src="/cghs-logo.png" alt="img not visible" className="size-56"/>
      <h1 className="md:text-7xl text-xl font-serif lg:text-5xl font-bold text-center text-[#e7b9b9] relative z-20">
       Calcutta Girls High School
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#235377] 0 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

    </div>
  );
}
