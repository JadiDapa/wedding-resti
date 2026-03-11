import Image from "next/image";
import CountDownDate from "./ContdownDate";
import { SlideDown, SlideUp, Fade } from "@/components/root/Motion";

export default function CountDown() {
  return (
    <section className="relative min-h-screen w-full snap-start bg-[url('/images/bg-1.jpg')] bg-fixed bg-center bg-repeat-y pt-32">
      <SlideDown
        delay={0.2}
        className="font-brittany mb-6 text-center text-6xl font-thin"
      >
        Save The Date
      </SlideDown>

      <Fade delay={0.5}>
        <CountDownDate />
      </Fade>

      <div className="mt-14">
        <SlideDown
          delay={0.7}
          className="font-brittany relative z-20 text-center text-4xl font-thin"
        >
          QS. Ar-Rum: 21
        </SlideDown>

        <Fade delay={0.9} className="relative h-72 -translate-y-6">
          <Image
            src={"/images/prayer-card.png"}
            alt="prayer card"
            className="z-0 object-contain object-center"
            fill
          />
          <SlideUp
            delay={1.1}
            className="relative top-24 z-10 mx-auto max-w-60 space-y-2 text-center text-[#663c2f]"
          >
            <p className="text-xs">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
              وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p className="text-[9px]">
              &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
              menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
              agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu
              rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir&quot;
            </p>
          </SlideUp>
        </Fade>
      </div>
    </section>
  );
}
