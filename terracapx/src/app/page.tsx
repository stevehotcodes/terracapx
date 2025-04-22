import HeroSection from "@/components/HeroSection/HeroSection";
import OurValues from "@/components/OurValues/OurValues";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TopNavbar/>
        <HeroSection/>
        <OurValues/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
       
      </footer>
    </div>
  );
}
