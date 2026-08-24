"use client";

import { useEffect, useState } from "react";

export default function TerminalBoot() {
  const lines = [
    "[ OK ] Initializing secure kernel...",
    "[ OK ] Loading cryptographic modules...",
    "[ OK ] Establishing encrypted channels...",
    "[ OK ] Connecting to threat intelligence feed...",
    "[ OK ] Firewall rules applied",
    "[ OK ] Intrusion detection system ACTIVE",
    "[ OK ] System ready",
  ];

  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;

      if (i >= lines.length) {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative
        max-w-3xl
        mx-auto
        mt-24
        p-6
        rounded-card
        bg-ink/60
        backdrop-blur-md
        border border-gold/15
        text-sm md:text-base
        font-mono-label
        text-bone-dim
        space-y-2
      "
    >
      {/* header */}
      <div className="mb-4 text-gold tracking-widest">
        SECURITY TERMINAL v1.0
      </div>

      {/* output */}
      {visibleLines.map((line, idx) => (
        <div key={idx} className="text-bone-dim">
          {line}
        </div>
      ))}

      {/* prompt */}
      <div className="flex items-center mt-4 text-gold">
        <span>root@cyber-sec:~$</span>
        <span className="ml-2 animate-blink">▌</span>
      </div>
    </div>
  );
}