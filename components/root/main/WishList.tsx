import Image from "next/image";
import { WishService } from "@/server/services/wish.service";
import MessageList from "./MessageList";
import { SlideDown, SlideUp, Fade } from "@/components/root/Motion";

export default async function WishList() {
  const wishes = await WishService.getAll();
  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center bg-[#fff3c2]">
      <div className="h-8 w-full bg-[#fff6d4] shadow-xl" />

      <SlideDown delay={0.2} className="relative mx-auto size-40">
        <Image
          src={"/images/chandelier.png"}
          alt=""
          fill
          className="object-cover object-center"
        />
      </SlideDown>

      <Fade delay={0.5}>
        <MessageList wishes={wishes} />
      </Fade>

      <SlideUp delay={0.7} className="relative h-96 w-full">
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
