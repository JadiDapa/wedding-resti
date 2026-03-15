import Image from "next/image";
import WishForm from "./WishForm";
import {
  SlideDown,
  SlideUp,
  SlideLeft,
  SlideRight,
} from "@/components/root/Motion";

export default function Wish() {
  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center bg-[#696d3f]">
      <div className="absolute flex w-full justify-between">
        <SlideLeft className="relative h-130 w-60">
          <Image
            src={"/images/curtain-l.png"}
            alt=""
            className="object-contain object-top-left"
            fill
          />
        </SlideLeft>
        <SlideRight className="relative h-130 w-60">
          <Image
            src={"/images/curtain-r.png"}
            alt=""
            className="object-contain object-top-right"
            fill
          />
        </SlideRight>
      </div>

      <div className="w-full px-18 pt-20">
        <SlideDown
          delay={0.3}
          className="font-brittany mb-8 text-center text-[56px] font-thin"
        >
          Wedding <br />
          <span className="px-4 py-4">Wish</span>
        </SlideDown>

        <SlideUp delay={0.6}>
          <WishForm />
        </SlideUp>
      </div>

      <SlideUp delay={0.8} className="absolute bottom-0 h-100 w-full">
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
