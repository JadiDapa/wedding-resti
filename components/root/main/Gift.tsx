"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SlideDown, SlideUp, Fade } from "@/components/root/Motion";
import { toast } from "sonner";

export default function Gift() {
  const [open, setOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Nomor rekening berhasil disalin!");
  };

  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center overflow-hidden bg-[url('/images/bg-2.jpg')] bg-fixed bg-center bg-repeat-y py-32">
      <SlideDown
        delay={0.2}
        className="font-brittany mb-10 text-center text-6xl font-thin"
      >
        Wedding Gift
      </SlideDown>

      <SlideDown
        delay={0.4}
        className="mx-auto max-w-80 text-center text-xs font-semibold tracking-[0.15rem]"
      >
        Doa restu anda merupakan karunia yang sangat berarti bagi kami. Jika
        memberi adalah ungkapan tanda kasih, anda dapat memberi kado secara
        cashless.
      </SlideDown>

      <SlideUp delay={0.6}>
        <Button
          onClick={() => setOpen(!open)}
          className="mt-8 bg-[#fff3c2] px-6 tracking-widest"
        >
          KLIK DISINI
        </Button>
      </SlideUp>

      <Fade delay={0.3} className="absolute top-80 -right-24 z-0">
        <Image src="/images/mats.png" alt="" width={240} height={240} />
      </Fade>

      <Fade delay={0.5} className="absolute top-180 -left-24 z-0">
        <Image src="/images/mats.png" alt="" width={240} height={240} />
      </Fade>

      <SlideUp delay={0.8} className="relative mt-10 w-72">
        <div className="relative z-10 grid h-8 place-items-center rounded-t-md bg-[#52242e] px-4"></div>
        <div className="h-1 w-full rounded-full bg-white" />

        <div className="overflow-hidden px-2">
          <div
            className={`relative z-10 flex w-full flex-col items-center rounded-b-md bg-[#fff3c2] px-4 py-12 transition-transform duration-500 ${
              open ? "-translate-y-8" : "-translate-y-full"
            }`}
          >
            {/* Mandiri */}
            <div className="w-full rounded-lg bg-[#5c6030] p-3">
              <div className="flex justify-between">
                <Image
                  src="/images/atm-chip.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <p className="text-sm font-semibold">Bank Mandiri</p>
              </div>
              <p className="mt-2 text-sm">Syahri romadhoni</p>
              <p className="mt-4 text-sm">1120017866752</p>
            </div>

            <Button
              size="sm"
              onClick={() => copyToClipboard("1120017866752")}
              className="mt-4 flex items-center gap-2 rounded-md bg-[#52242e] px-8 text-yellow-50"
            >
              SALIN <Copy size={16} />
            </Button>

            {/* BRI */}
            <div className="mt-8 w-full rounded-lg bg-[#5c6030] p-3">
              <div className="flex justify-between">
                <Image
                  src="/images/atm-chip.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <p className="text-sm font-semibold">Bank BRI</p>
              </div>
              <p className="mt-2 text-sm">Restisari pratywi</p>
              <p className="mt-4 text-sm">2278 0100 4542 508</p>
            </div>

            <Button
              size="sm"
              onClick={() => copyToClipboard("227801004542508")}
              className="mt-4 flex items-center gap-2 rounded-md bg-[#52242e] px-8 text-yellow-50"
            >
              SALIN <Copy size={16} />
            </Button>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
