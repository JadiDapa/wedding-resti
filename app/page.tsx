import Footer from "@/components/root/Footer";
import Akad from "@/components/root/main/Akad";
import BrideGroom from "@/components/root/main/BrideGroom";
import CountDown from "@/components/root/main/CountDown";
import Gift from "@/components/root/main/Gift";
import Hero from "@/components/root/main/Hero";
import Reception from "@/components/root/main/Reception";
import Wish from "@/components/root/main/Wish";
import WishList from "@/components/root/main/WishList";
import Envelope from "@/components/root/main/Envelope";

export default function DashboardPage() {
  return (
    <Envelope>
      <Hero />
      <CountDown />
      <BrideGroom />
      <Akad />
      <Reception />
      <Gift />
      <Wish />
      <WishList />
      <Footer />
    </Envelope>
  );
}
