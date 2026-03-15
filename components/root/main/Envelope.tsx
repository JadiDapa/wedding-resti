"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function Envelope({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<"idle" | "playing" | "done">("idle");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mark as loaded after the component mounts and the browser has painted
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsLoaded(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Sync mute state to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleClick = () => {
    if (stage !== "idle") return;
    setStage("playing");

    // Start music on user interaction (required by browsers)
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {
        // Autoplay blocked — silently ignore, user can unmute manually
      });
    }
  };

  return (
    <div className="relative mx-auto h-screen w-full overflow-hidden sm:w-103">
      <audio ref={audioRef} src="/audios/bgm-jilek.mp3" loop preload="auto" />
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#1a120b]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Decorative ring */}
            <div className="relative flex items-center justify-center">
              <motion.span
                className="absolute h-16 w-16 rounded-full border border-[#c9a96e]/30"
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute h-16 w-16 rounded-full border border-[#c9a96e]/20"
                animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
              {/* Spinner arc */}
              <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                <motion.circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="#c9a96e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="80"
                  strokeDashoffset="60"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
            </div>

            <motion.p
              className="font-brittany mt-6 text-lg tracking-widest text-[#c9a96e]/70"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Memuat Undangan…
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main content (always rendered so images/fonts preload) ── */}
      <motion.div
        className="no-scrollbar h-screen w-full overflow-y-scroll scroll-smooth"
        initial={{ y: "100%" }}
        animate={{ y: stage === "done" ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>

      {/* ── Mute / unmute button (visible once content is showing) ── */}
      <AnimatePresence>
        {stage === "done" && (
          <motion.button
            key="mute-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setIsMuted((prev) => !prev)}
            className="absolute right-4 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? (
              // Muted icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              // Unmuted icon with animated bars
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Static cover image */}
            <div
              className="absolute inset-0 cursor-pointer"
              style={{ zIndex: stage === "playing" ? 0 : 10 }}
              onClick={handleClick}
            >
              <Image
                src="/images/envelope-screen.png"
                alt=""
                className="object-cover object-center"
                fill
              />

              <div
                className="absolute right-0 left-0 flex flex-col items-center gap-2"
                style={{ top: "20%" }}
              >
                <motion.p
                  className="font-brittany text-2xl tracking-wide text-white drop-shadow-md"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Undangan Pernikahan
                </motion.p>
              </div>

              <div
                className="absolute right-0 left-0 flex flex-col items-center gap-2"
                style={{ top: "80%" }}
              >
                <motion.p
                  className="text-sm font-semibold tracking-[0.3em] text-white drop-shadow-md"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  KLIK UNTUK MEMULAI
                </motion.p>
              </div>
            </div>

            {/* Video */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                zIndex: stage === "playing" ? 10 : 0,
                opacity: stage === "playing" ? 1 : 0,
              }}
            >
              <video
                src="/videos/heliopolis.mp4"
                autoPlay
                playsInline
                muted
                className="absolute inset-0 h-full w-full object-cover object-center"
                onEnded={() => setStage("done")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
