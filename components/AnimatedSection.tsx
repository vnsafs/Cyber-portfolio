"use client";

import { useEffect, useRef } from "react";

export default function DarkVoidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // fundo preto puro (sem tom arroxeado)
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // conexões suaves em dourado frio, bem discretas
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.22;
            ctx.strokeStyle = `rgba(198, 166, 100, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // partículas com leve brilho dourado
      for (const n of nodes) {
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(198, 166, 100, 0.5)";
        ctx.fillStyle = "rgba(232, 200, 115, 0.85)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-70" />;
}

// Fallback local implementations in case external module is missing
import React from "react";

type FlipButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  from?: 'top' | 'right' | 'bottom' | 'left';
  tapScale?: number;
  children: React.ReactNode;
};

export function FlipButton({ children, className, ...props }: FlipButtonProps) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

export function FlipButtonFront({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

export function FlipButtonBack({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

type FlipButtonDemoProps = {
  from?: 'top' | 'right' | 'bottom' | 'left';
  tapScale?: number;
};

export function FlipButtonDemo({
  from,
  tapScale,
}: FlipButtonDemoProps) {
  return (
    <FlipButton
      key={`${from}-${tapScale}`}
      from={from}
      tapScale={tapScale}
      className="text-sm font-medium"
    >
      <FlipButtonFront className="px-4 py-2 h-10 bg-primary text-primary-foreground flex items-center justify-center">
        Front
      </FlipButtonFront>
      <FlipButtonBack className="px-4 py-2 h-10 bg-accent text-accent-foreground flex items-center justify-center">
        Back Button
      </FlipButtonBack>
    </FlipButton>
  );
}
