"use client";

import React, { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { currentTheme } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Convert hex to rgb
    const hexToRgb = (hex: string) => {
      const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return res
        ? [parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16)]
        : [217, 119, 6];
    };

    const primaryRgb = hexToRgb(currentTheme.vars.primary);
    const accentRgb = hexToRgb(currentTheme.vars.accent);

    const render = () => {
      t += 0.012;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw undulating organic mesh gradient waves (Vanta Aurora style)
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        50,
        mouse.x,
        mouse.y,
        width * 0.65
      );
      gradient.addColorStop(0, `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, 0.28)`);
      gradient.addColorStop(0.5, `rgba(${primaryRgb[0]}, ${primaryRgb[1]}, ${primaryRgb[2]}, 0.15)`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Layered sine wave ribbons across bottom/mid
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = height * (0.65 + i * 0.12);
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 15) {
          const wave1 = Math.sin(x * 0.003 + t + i * 1.5) * 40;
          const wave2 = Math.cos(x * 0.006 - t * 0.8 + i) * 25;
          const mouseDist = Math.hypot(x - mouse.x, yOffset - mouse.y);
          const mouseInfluence = Math.max(0, 1 - mouseDist / 250) * 35;

          const y = yOffset + wave1 + wave2 - mouseInfluence;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad = ctx.createLinearGradient(0, yOffset - 50, 0, height);
        waveGrad.addColorStop(
          0,
          `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, ${0.08 - i * 0.02})`
        );
        waveGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = waveGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
