import Image from "next/image";
import {
  SlideDown,
  SlideUp,
  SlideLeft,
  SlideRight,
  Fade,
} from "@/components/root/Motion";

export default function BrideGroom() {
  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center overflow-hidden bg-[url('/images/bg-1.jpg')] bg-fixed bg-center bg-repeat-y py-24">
      <SlideDown
        delay={0.2}
        className="font-brittany mb-6 text-center text-6xl font-thin"
      >
        Bride<span className="relative top-6">&</span>Groom
      </SlideDown>

      <SlideDown
        delay={0.4}
        className="mx-auto mb-10 max-w-64 text-center text-xs font-semibold text-[#663c2f]"
      >
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i untuk
        menghadiri acara pernikahan kami:
      </SlideDown>

      {/* Bride */}
      <div className="relative h-[90vh] w-full">
        <SlideRight delay={0.5} className="absolute left-2 z-10">
          <Image
            src="/images/bride-port.png"
            alt="frame"
            width={240}
            height={240}
            className="object-contain object-center"
          />
        </SlideRight>

        <Fade delay={0.3} className="absolute -top-40 z-0 h-full w-full">
          <Image
            src="/images/red-ribbon.png"
            alt="ribbon"
            fill
            className="object-contain object-center"
          />
        </Fade>

        <SlideLeft
          delay={0.7}
          className="absolute top-36 right-8 z-10 h-58 w-44"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/bride-namecard.png"
              alt="tag"
              fill
              className="object-contain"
            />
            <p className="absolute top-6 right-12 text-sm font-semibold tracking-[6px] text-[#663c2f] [text-orientation:upright] [writing-mode:vertical-lr]">
              RESTI
            </p>
          </div>
        </SlideLeft>

        <SlideUp delay={0.9} className="absolute top-68 left-6 h-90 w-72">
          <Image
            src="/images/nameplate.png"
            alt="nameplate"
            fill
            className="object-contain"
          />
          <div className="absolute top-24 left-1/2 flex w-full -translate-x-1/2 flex-col items-center justify-center px-6 text-center text-[#663c2f]">
            <p className="font-semibold">Restisari Pratywi, A.Md. A.B.</p>
            <p className="mt-2 text-xs">
              Anak Ke-2 dari pasangan <br />
              Bpk. H. Kamansari & Ibu Hj. Susilawati
            </p>
          </div>
        </SlideUp>
      </div>

      {/* Groom */}
      <div className="relative mt-12 h-[90vh] w-full">
        <SlideLeft delay={0.5} className="absolute right-2 z-10">
          <Image
            src="/images/groom-port.png"
            alt="frame"
            width={240}
            height={240}
            className="object-contain object-center"
          />
        </SlideLeft>

        <Fade delay={0.3} className="absolute -top-32 z-0 h-full w-full">
          <Image
            src="/images/red-ribbon.png"
            alt="ribbon"
            fill
            className="-scale-x-100 object-contain object-center"
          />
        </Fade>

        <SlideRight
          delay={0.7}
          className="absolute top-36 left-10 z-10 h-58 w-44"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/groom-namecard.png"
              alt="tag"
              fill
              className="object-contain"
            />
            <p className="absolute top-5 left-13 text-sm font-semibold tracking-[6px] text-[#663c2f] [text-orientation:upright] [writing-mode:vertical-lr]">
              SYAHRI
            </p>
          </div>
        </SlideRight>

        <SlideUp
          delay={0.9}
          className="absolute top-72 left-1/2 h-90 w-80 -translate-x-1/2"
        >
          <Image
            src="/images/nameplate.png"
            alt="nameplate"
            fill
            className="object-contain"
          />
          <div className="absolute top-24 flex w-full flex-col items-center justify-center px-6 text-center text-[#663c2f]">
            <p className="font-semibold">Syahri Romadhoni, S.T.</p>
            <p className="mt-2 text-xs">
              Anak Ke-3 dari pasangan
              <br />
              Bpk. Eryadi & Ibu Rusdawani, S.Pd., M.Si
            </p>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
