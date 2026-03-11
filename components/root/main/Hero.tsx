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

      <div className="relative z-10 w-full px-16 pt-24 text-center">
        <SlideDown delay={0.3} className="mb-12 text-2xl tracking-wider">
          The Wedding of
        </SlideDown>

        <SlideRight
          delay={0.6}
          className="font-brittany text-start text-6xl font-thin"
        >
          Resti
        </SlideRight>

        <SlideLeft
          delay={0.75}
          className="font-brittany text-end text-6xl font-thin"
        >
          Syahri
        </SlideLeft>

        <SlideUp delay={1.1} className="mt-36 font-semibold tracking-wider">
          Saturday, 18 April 2026
        </SlideUp>
      </div>

      <Fade delay={0.5} className="absolute top-60 z-0">
        <Image
          src={"/images/hero-portrait.png"}
          alt=""
          className="object-contain object-center"
          width={300}
          height={200}
        />
      </Fade>

      <SlideUp delay={0.3} className="absolute bottom-0 h-[50vh] w-full">
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
