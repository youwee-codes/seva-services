"use client";

import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><",
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-70 text-amber-400",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let currentIteration = 0;

    const getNextChar = (originalChar: string) => {
      if (originalChar === " ") return " ";
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
    };

    const runDecryption = () => {
      setIsScrambling(true);
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (currentIteration / maxIterations > index / text.length) {
                return text[index];
              }
              return getNextChar(char);
            })
            .join("");
        });

        currentIteration++;
        if (currentIteration > maxIterations * 1.5) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
          setHasAnimated(true);
        }
      }, speed);
    };

    if (animateOn === "view" && !hasAnimated) {
      runDecryption();
    } else if (animateOn === "hover" && isHovering) {
      currentIteration = 0;
      runDecryption();
    }

    return () => clearInterval(interval);
  }, [text, isHovering, hasAnimated, animateOn, speed, maxIterations, characters]);

  return (
    <span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={isScrambling ? encryptedClassName : className}>
        {displayText}
      </span>
    </span>
  );
}
