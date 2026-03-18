"use client";

import Image from "next/image";
import {
  SlideDown,
  SlideUp,
  SlideLeft,
  SlideRight,
  Fade,
} from "@/components/root/Motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center bg-[#696d3f]">
      <div className="absolute z-10 flex w-full justify-between">
        <SlideRight className="relative h-130 w-60">
          <Image
            src={"/images/curtain-l.png"}
            alt=""
            className="object-contain object-top-left"
            fill
          />
        </SlideRight>

        <SlideLeft className="relative h-130 w-60">
          <Image
            src={"/images/curtain-r.png"}
            alt=""
            className="object-contain object-top-right"
            fill
          />
        </SlideLeft>
      </div>

      <div className="relative z-20 w-full px-14 pt-18 text-center">
        <SlideDown delay={0.3} className="mb-6 text-xl tracking-wider">
          The Wedding of
        </SlideDown>

        <SlideRight
          delay={0.6}
          className="font-brittany text-start text-[52px] font-thin"
        >
          Resti
        </SlideRight>

        <SlideLeft
          delay={0.75}
          className="font-brittany -translate-y-8 text-end text-[52px] font-thin"
        >
          Syahri
        </SlideLeft>

        <SlideUp
          delay={1.1}
          className="mt-26 text-sm font-semibold tracking-wider"
        >
          Saturday, 18 April 2026
        </SlideUp>
      </div>

      <Fade delay={0.5} className="absolute top-52 z-0">
        <Image
          src={"/images/hero-port.png"}
          alt=""
          className="object-contain object-center"
          width={260}
          height={180}
        />
      </Fade>

      <SlideUp delay={0.3} className="absolute bottom-0 z-10 h-[50vh] w-full">
        <Image
          src={"/images/wish-floor.png"}
          alt=""
          className="object-contain object-bottom"
          fill
        />
      </SlideUp>
    </section>
  );
}
