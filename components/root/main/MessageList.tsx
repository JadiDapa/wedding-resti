"use client";

import { Wish } from "@/generated/prisma";
import { UserCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export default function MessageList({ wishes }: { wishes: Wish[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const animationId = useRef<number | null>(null);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (animationId.current) cancelAnimationFrame(animationId.current);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || wishes.length === 0) return;

    const speed = 0.6;

    const scroll = () => {
      if (!container) return;

      // Pause auto-scroll while user is hovering
      if (isHovered.current) {
        animationId.current = requestAnimationFrame(scroll);
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = container;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (atBottom) {
        pauseTimeout.current = setTimeout(() => {
          container.scrollTo({ top: 0, behavior: "smooth" });
          pauseTimeout.current = setTimeout(() => {
            animationId.current = requestAnimationFrame(scroll);
          }, 1000);
        }, 2000);
        return;
      }

      container.scrollTop += speed;
      animationId.current = requestAnimationFrame(scroll);
    };

    pauseTimeout.current = setTimeout(() => {
      animationId.current = requestAnimationFrame(scroll);
    }, 1500);

    return () => clearTimers();
  }, [wishes]);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="mt-12 flex max-h-64 w-80 flex-col gap-3 overflow-y-auto rounded-sm border-2 border-[#5c6030] bg-[#5c6030] p-5 pb-6 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      {wishes.length === 0 && (
        <div className="flex items-center justify-center">
          <p className="font-semibold tracking-wide">
            Belum Ada Ucapan Ditambahkan!
          </p>
        </div>
      )}
      {wishes.map((w) => (
        <div key={w.id} className="rounded-sm bg-[#fff3c2] p-3 text-[#52242e]">
          <div className="flex items-center gap-2">
            <UserCircle size={20} />
            <p className="text-lg font-semibold tracking-wide">{w.name}</p>
          </div>
          <p className="mt-1 text-sm">{w.message}</p>
        </div>
      ))}
    </div>
  );
}
