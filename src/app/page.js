import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import Modern from "@/components/homepage/Modern";
import WhoWe from "@/components/homepage/WhoWe";

export default function Home() {
  return (
    <>
      <Modern />
      <WhoWe />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
