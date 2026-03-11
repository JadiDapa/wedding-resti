import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { SlideUp, SlideLeft, SlideRight, Fade } from "@/components/root/Motion";

export default function Akad() {
  return (
    <div className="relative min-h-screen snap-start bg-[url('/images/bg-2.jpg')] bg-fixed bg-center bg-repeat-y px-4 pt-24">
      <div className="relative h-full w-full rounded-t-full bg-[#52242e] p-4 pt-52">
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
          className="mx-auto max-w-80 text-center text-[14px] tracking-widest text-white"
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
            className="relative mx-3 h-80 w-56 text-[#52242e]"
          >
            <Image
              src={"/images/akad-location-card.png"}
              alt=""
              fill
              className="absolute z-0 object-contain object-center"
            />
            <div className="relative z-10 flex w-48 flex-col items-center px-4 pt-16">
              <p className="text-center text-sm tracking-[0.3em]">
                Bertempat di
              </p>
              <Image
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepfNROvKG-25KuQ9wbnPZDSeCw1yBW_d9ac3hayl41CfqfLJvkdW4cpAhOh7iep3OsUfcGYAnqeyNZIWF4AuKRNYoUt2LtZHs1MHPG4aeu4UP81q-2OtzRxgIoBbSG40jNiSD26eS1bksSJ=w426-h240-k-no"
                alt=""
                width={160}
                height={200}
                className="mt-2 rounded-md border"
              />
              <p className="mt-2 text-center text-[10px] tracking-widest">
                The Royal Convention Center Jl. KH. Azhari No.819, Tangga Takat,
                Kec. Seberang Ulu II, Kota Palembang, Sumatera Selatan 30111
              </p>
              <Badge className="mt-2 animate-bounce bg-[#696d3f]">
                <p className="text-yellow-100">LOKASI</p>
                <MapPin className="text-yellow-100" />
              </Badge>
            </div>
          </SlideUp>

          <SlideLeft delay={1.0} className="absolute top-40 -right-4 z-20">
            <Image
              src={"/images/akad-datecard.png"}
              alt=""
              width={150}
              height={200}
            />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-[#52242e]">
              <p className="text-xl tracking-[0.2em]">SABTU</p>
              <p className="text-xl tracking-[0.2em]">
                18 <br />
                APRIL 2026
              </p>
              <p className="mt-2 text-sm tracking-widest">
                08:00 WIB - Selesai
              </p>
            </div>
          </SlideLeft>
        </div>
      </div>
    </div>
  );
}
