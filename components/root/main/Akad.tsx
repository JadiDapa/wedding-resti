import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { SlideUp, SlideLeft, SlideRight, Fade } from "@/components/root/Motion";

export default function Akad() {
  return (
    <div className="relative min-h-screen snap-start bg-[url('/images/bg-2.jpg')] bg-fixed bg-center bg-repeat-y px-3 pt-24">
      <div className="relative h-full w-full rounded-t-full bg-[#52242e] p-3 pt-52">
        <Fade
          delay={0.2}
          className="absolute -top-12 left-1/2 size-64 -translate-x-1/2"
        >
          <Image
            src={"/images/flowers.png"}
            alt=""
            fill
            className="object-contain object-center"
          />
        </Fade>

        <SlideUp
          delay={0.4}
          className="mx-auto max-w-64 text-center text-[12px] tracking-widest text-white"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kedua mempelai
        </SlideUp>

        <div className="relative">
          <SlideRight delay={0.6} className="relative z-10 h-52 w-64">
            <Image
              src={"/images/akad-envelope.png"}
              alt=""
              fill
              className="object-contain object-center"
            />
            <div className="font-brittany absolute top-18 left-16 text-5xl text-[#52242e]">
              <p>Akad</p>
              <p className="translate-x-12">Nikah</p>
            </div>
          </SlideRight>

          <Fade delay={0.8} className="absolute top-26 -right-4 z-0">
            <Image src={"/images/mats.png"} alt="" width={200} height={200} />
          </Fade>

          <SlideUp
            delay={0.8}
            className="relative mx-2 h-72 w-52 text-[#52242e]"
          >
            <Image
              src={"/images/akad-location-card.png"}
              alt=""
              fill
              className="absolute z-0 object-contain object-center"
            />
            <div className="relative z-10 me-8 flex flex-col items-center px-1 pt-13">
              <p className="text-center text-sm tracking-[0.3em]">
                Bertempat di
              </p>
              <div className="relative aspect-video w-38">
                <Image
                  src="/images/maps.png"
                  alt=""
                  fill
                  className="fill rounded-md object-cover"
                />
              </div>
              <p className="mt-2 px-0.5 text-center text-[10px] tracking-widest">
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

          <SlideLeft delay={1.0} className="absolute top-40 -right-3 z-20">
            <Image
              src={"/images/akad-datecard.png"}
              alt=""
              width={140}
              height={180}
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-[#52242e]">
              <p className="text-lg tracking-[0.2em]">SABTU</p>
              <p className="text-lg tracking-[0.2em]">
                18 <br />
                APRIL 2026
              </p>
              <p className="mt-2 text-xs tracking-widest">
                08:00 WIB - Selesai
              </p>
            </div>
          </SlideLeft>
        </div>
      </div>
    </div>
  );
}
