"use client";

import { Wish } from "@/generated/prisma";
import { UserCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export default function MessageList({ wishes }: { wishes: Wish[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || wishes.length === 0) return;

    let animationId: number;
    let pauseTimeout: ReturnType<typeof setTimeout>;
    const speed = 0.6; // px per frame

    const scroll = () => {
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (atBottom) {
        // Pause at bottom, then snap back to top
        pauseTimeout = setTimeout(() => {
          container.scrollTo({ top: 0, behavior: "smooth" });
          // Wait for smooth scroll back, then resume
          pauseTimeout = setTimeout(() => {
            animationId = requestAnimationFrame(scroll);
          }, 1000);
        }, 2000);
        return;
      }

      container.scrollTop += speed;
      animationId = requestAnimationFrame(scroll);
    };

    // Initial pause before starting
    pauseTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1500);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(pauseTimeout);
    };
  }, [wishes]);

  return (
    <div
      ref={containerRef}
      className="mt-12 flex max-h-96 w-90 flex-col gap-3 overflow-hidden rounded-sm border-2 border-[#5c6030] bg-[#5c6030] p-5 pb-6"
    >
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
