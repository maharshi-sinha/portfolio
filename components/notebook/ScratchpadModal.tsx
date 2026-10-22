"use client";

import { useRef, useState, useEffect } from "react";
import { X, RotateCcw, Download, Sparkles, Check, Pen, Eraser } from "lucide-react";
import confetti from "canvas-confetti";

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LIGHT_PALETTE = [
  { color: "#141414", name: "Black Ink" },
  { color: "#1E3A8A", name: "Blueprint Blue" },
  { color: "#991B1B", name: "Red Margin" },
  { color: "#57534E", name: "Pencil Lead" },
];

const DARK_PALETTE = [
  { color: "#FFFFFF", name: "White Ink" },
  { color: "#38BDF8", name: "Neon Blue" },
  { color: "#F87171", name: "Coral Red" },
  { color: "#A1A1AA", name: "Silver Lead" },
];

export function ScratchpadModal({ isOpen, onClose }: ScratchpadModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [color, setColor] = useState("#141414");
  const [lineWidth, setLineWidth] = useState(2.5);
  const [isEraser, setIsEraser] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
    setColor(isDark ? "#FFFFFF" : "#141414");
    setIsEraser(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Initial canvas setup
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [isOpen]);

  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    lastPosRef.current = { x, y };

    // Draw single dot on tap
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "source-over";
    if (isEraser) {
      ctx.strokeStyle = isDarkMode ? "#131417" : "#FFFFFF";
      ctx.fillStyle = isDarkMode ? "#131417" : "#FFFFFF";
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (!lastPosRef.current) {
      lastPosRef.current = { x, y };
      return;
    }

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "source-over";

    if (isEraser) {
      // Clean paper erase matching current canvas background
      ctx.strokeStyle = isDarkMode ? "#131417" : "#FFFFFF";
      ctx.lineWidth = 28;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.restore();

    lastPosRef.current = { x, y };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPosRef.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary canvas with paper background matching current theme
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    // Fill with theme background
    tempCtx.fillStyle = isDarkMode ? "#131417" : "#F8F7F4";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);

    // Add signature watermark
    tempCtx.fillStyle = isDarkMode ? "#A1A1AA" : "#78716C";
    tempCtx.font = "16px monospace";
    tempCtx.fillText("Maharshi Sinha's Guestbook Scratchpad", 24, tempCanvas.height - 24);

    const link = document.createElement("a");
    link.download = `notebook-doodle-${Date.now()}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();

    setSavedSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#121212", "#A8A29E", "#E11D48"],
    });

    setTimeout(() => setSavedSuccess(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#16171A] border-2 border-stone-300 dark:border-stone-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ring-1 ring-black/10 dark:ring-white/5">
        {/* Notebook Tape accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape -mt-2 z-20 pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-ink-border dark:border-paper-dark-border bg-[#F5F3EC] dark:bg-[#1E2025] shadow-xs">
          <div>
            <h3 className="font-serif italic text-lg sm:text-xl text-ink-primary dark:text-ink-white flex items-center gap-2">
              <span>Visitor&apos;s Scratchpad</span>
              <span className="text-xs font-mono font-normal not-italic px-2 py-0.5 border border-dashed rounded text-ink-muted">
                p. 99
              </span>
            </h3>
            <p className="text-xs font-mono text-ink-muted dark:text-ink-faint">
              Scribble a signature, leave a note, or sketch something cool!
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-stone-200/80 dark:hover:bg-stone-800 text-ink-muted hover:text-ink-primary dark:hover:text-ink-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[400px] bg-white dark:bg-[#131417] bg-notebook-dots cursor-crosshair overflow-hidden touch-none">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          <div className="absolute bottom-3 right-4 pointer-events-none select-none text-[11px] font-mono text-ink-faint opacity-50">
            Pen tool active • Canvas reactive
          </div>
        </div>

        {/* Modal Footer / Tool Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t border-ink-border dark:border-paper-dark-border bg-[#F5F3EC] dark:bg-[#1E2025] shadow-xs">
          {/* Pen / Color Selection */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-ink-muted mr-1">INK:</span>
            {(isDarkMode ? DARK_PALETTE : LIGHT_PALETTE).map((c) => (
              <button
                key={c.color}
                onClick={() => {
                  setColor(c.color);
                  setIsEraser(false);
                }}
                title={c.name}
                className={`w-6 h-6 rounded-full border transition-all ${
                  !isEraser && color === c.color
                    ? "ring-2 ring-offset-2 ring-ink-primary dark:ring-white scale-110 shadow-xs"
                    : "border-stone-400/60 dark:border-stone-600 opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: c.color }}
              />
            ))}

            <div className="h-4 w-px bg-ink-border dark:bg-paper-dark-border mx-1" />

            {/* Eraser */}
            <button
              onClick={() => setIsEraser(!isEraser)}
              className={`px-2.5 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 border transition-all ${
                isEraser
                  ? "bg-ink-primary text-white dark:bg-white dark:text-ink-primary border-transparent shadow-xs font-medium scale-105"
                  : "border-stone-300 dark:border-stone-700 bg-paper-subtle/50 dark:bg-stone-800 text-ink-muted hover:text-ink-primary dark:hover:text-ink-white"
              }`}
              title="Toggle Eraser"
            >
              <Eraser className="w-3.5 h-3.5" />
              <span>Eraser{isEraser ? " (Active)" : ""}</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={clearCanvas}
              className="px-2.5 py-1.5 text-xs font-mono border border-ink-border dark:border-paper-dark-border rounded hover:bg-paper-subtle dark:hover:bg-paper-dark-subtle text-ink-muted hover:text-ink-primary transition-colors flex items-center gap-1.5"
              title="Clear scratchpad"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            <button
              onClick={downloadDrawing}
              className="px-3.5 py-1.5 text-xs font-mono font-medium bg-ink-primary dark:bg-ink-white text-white dark:text-ink-primary rounded hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Sketch</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
