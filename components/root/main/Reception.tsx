import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { SlideUp, SlideLeft, SlideRight, Fade } from "@/components/root/Motion";

export default function Reception() {
  return (
    <div className="relative min-h-screen snap-start bg-[url('/images/bg-2.jpg')] bg-fixed bg-center bg-repeat-y px-3 pb-24">
      <div className="relative h-full w-full rounded-b-full bg-[#52242e] p-3 pb-52">
        <div className="relative flex flex-col items-end">
          <SlideLeft delay={0.6} className="relative z-10 h-52 w-64">
            <Image
              src={"/images/reception-envelope.png"}
              alt=""
              fill
              className="object-contain object-center"
            />
            <div className="font-brittany absolute top-20 right-16 text-[56px] text-[#52242e]">
              <p>Resepsi</p>
            </div>
          </SlideLeft>

          <Fade delay={0.5} className="absolute top-26 left-0 z-0">
            <Image src={"/images/mats.png"} alt="" width={200} height={200} />
          </Fade>

          <SlideUp
            delay={0.8}
            className="relative flex h-76 w-56 justify-end text-[#52242e]"
          >
            <Image
              src={"/images/reception-location-card.png"}
              alt=""
              fill
              className="absolute z-0 object-contain object-center"
            />
            <div className="relative z-10 ms-8 flex flex-col items-center px-1 pt-12">
              <p className="text-center text-sm tracking-[0.3em]">
                Bertempat di
              </p>
              <div className="relative mt-1 aspect-video w-36">
                <Image
                  src="/images/maps.png"
                  alt=""
                  fill
                  className="fill rounded-md object-cover"
                />
              </div>
              <p className="mt-2 px-3 text-center text-[9px] tracking-widest">
                The Royal Convention Center Jl. KH. Azhari No.819, Tangga Takat,
                Kec. Seberang Ulu II, Kota Palembang, Sumatera Selatan 30111
              </p>
              <a href="https://share.google/Hop1K2wYBn0F65mpl" target="_blank">
                <Badge className="mt-2 animate-bounce bg-[#696d3f]">
                  <p className="text-yellow-100">LOKASI</p>
                  <MapPin className="text-yellow-100" />
                </Badge>
              </a>
            </div>
          </SlideUp>

          <SlideRight delay={1.0} className="absolute top-40 left-0 z-20">
            <Image
              src={"/images/akad-datecard.png"}
              alt=""
              width={150}
              height={200}
            />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-[#52242e]">
              <p className="text-lg tracking-[0.2em]">SABTU</p>
              <p className="text-lg tracking-[0.2em]">
                18 <br />
                APRIL 2026
              </p>
              <p className="mt-2 text-xs tracking-widest">
                10:00 WIB - Selesai
              </p>
            </div>
          </SlideRight>
        </div>

        <Fade
          delay={0.2}
          className="absolute -bottom-12 left-1/2 size-64 -translate-x-1/2"
        >
          <Image
            src={"/images/flowers-2.png"}
            alt=""
            fill
            className="object-contain object-center"
          />
        </Fade>
      </div>
    </div>
  );
}
