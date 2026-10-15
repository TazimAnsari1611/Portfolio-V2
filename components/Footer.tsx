"use client";
import React from "react";
import CustomLink from "./CustomLink";
import { RiFileCopyLine } from "@remixicon/react";

export default function Footer() {
  return <footer className="relative w-full bg-neutral-950 py-12 text-white sm:py-16">
    <div className="container space-y-9 flex flex-col h-full">
      {/* Links */}
      <div className="flex items-center justify-between">
        {/* wrapper */}
        <div className="flex gap-3.5">
          <CustomLink label="Email" href="mailto:tazimansari1611@gmail.com" />
          <CustomLink label="LinkedIn" href="https://linkedin.com/in/tazim-ansari-993153319" />
        </div>
        {/* wrapper */}
        <div className="flex gap-3.5">
          <CustomLink label="GitHub" href="https://github.com/TazimAnsari1611" />
          <CustomLink label="LeetCode" href="https://leetcode.com/u/tazim1611" />
        </div>
      </div>
      {/* Email */}
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-3xl sm:text-5xl uppercase font-bold">Let&apos;s build something</h4>
          <a className="mt-2 inline-block text-lg sm:text-2xl underline" href="mailto:tazimansari1611@gmail.com">tazimansari1611@gmail.com</a>
          <p className="mt-1 text-neutral-400">Mumbai, India · +91 91677 50927</p>
        </div>
        <button onClick={() => navigator.clipboard.writeText("tazimansari1611@gmail.com")} aria-label="Copy email address" className="border flex items-center gap-0.5 py-1.5 px-3.5 rounded-full hover:bg-white hover:text-neutral-900 focus:bg-white focus:text-neutral-900 transition-colors font-semibold">
          <RiFileCopyLine />
          copy
        </button>
      </div>
      {/* Info */}
      <p className="border-t border-neutral-900 pt-1.5 mt-auto">
        &copy; {new Date().getFullYear()} Tazim Ansari. All rights reserved.
      </p>
    </div>
  </footer>;
}
