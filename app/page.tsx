import FeaturesSection from "@/app/_components/FeaturesSection";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Intro from "@/app/_components/IntroSection";
import PartnersSection from "@/app/_components/PartnersSection";
import Statistics from "@/app/_components/Statistics";
import StoreCategories from "@/app/_components/StoreCategories";
import SubscribeWidget from "@/app/_components/SubscribeWidget";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Statistics />
      <StoreCategories />
      <FeaturesSection />
      <PartnersSection />
      <SubscribeWidget />
      <Footer />
    </>
  );
}
