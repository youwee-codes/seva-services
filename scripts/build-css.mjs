import { compile, optimize } from "../node_modules/@tailwindcss/node/dist/index.mjs";
import oxide from "../node_modules/@tailwindcss/oxide/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const { Scanner } = oxide;

const sourceCss = `
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
  color: #171717;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  overflow-x: hidden;
}

/* Lenis smooth scrolling support */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

/* Custom scrollbars */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f7f7f7;
}
::-webkit-scrollbar-thumb {
  background: #d4d4d4;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3;
}

/* Kinetic Marquee & Shake Keyframes */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-8px);
  }
  40%, 80% {
    transform: translateX(8px);
  }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}
`;

async function buildCss() {
  console.log("⚡ Compiling Tailwind CSS v4...");
  const startTime = Date.now();

  const scanner = new Scanner({
    sources: [
      { base: rootDir, pattern: "src/**/*.{js,ts,jsx,tsx}", negated: false },
    ],
  });

  const candidates = scanner.scan();
  console.log(`✓ Scanned ${candidates.length} utility candidates.`);

  const compiler = await compile(sourceCss, {
    from: path.join(rootDir, "src/app/globals.css"),
    base: rootDir,
    onDependency: () => {},
  });

  let builtCss = compiler.build([...candidates]);

  // Optimize & write
  try {
    const optimized = optimize(builtCss, { minify: false });
    builtCss = optimized.code;
  } catch (e) {
    // optimize fallback
  }

  const outputPath = path.join(rootDir, "src/app/globals.css");
  fs.writeFileSync(outputPath, builtCss, "utf-8");

  console.log(
    `✅ Compiled Tailwind CSS successfully (${(builtCss.length / 1024).toFixed(1)} KB) in ${Date.now() - startTime}ms`
  );
}

const isWatch = process.argv.includes("--watch");

if (isWatch) {
  await buildCss();
  console.log("👀 Watching src/ for CSS changes...");
  fs.watch(path.join(rootDir, "src"), { recursive: true }, async (eventType, filename) => {
    if (filename && (filename.endsWith(".tsx") || filename.endsWith(".ts") || filename.endsWith(".css"))) {
      if (filename.includes("globals.css")) return;
      try {
        await buildCss();
      } catch (err) {
        console.error("Watch rebuild error:", err);
      }
    }
  });
} else {
  buildCss().catch((err) => {
    console.error("Failed to build CSS:", err);
    process.exit(1);
  });
}
