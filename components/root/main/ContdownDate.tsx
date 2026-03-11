"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CountDownDate() {
  const targetDate = new Date("2026-04-18T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 w-full">
      <Image
        src="/images/countdown-card.png"
        alt=""
        fill
        className="object-contain object-center"
      />

      <div className="absolute text-center text-[#663c2f] top-8 left-1/2 -translate-x-1/2 flex gap-9">
        <TimeItem value={timeLeft.days} label="Hari" />
        <TimeItem value={timeLeft.hours} label="Jam" />
        <TimeItem value={timeLeft.minutes} label="Menit" />
        <TimeItem value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
}

function TimeItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-5xl">{value}</p>
      <p>{label}</p>
    </div>
  );
}
