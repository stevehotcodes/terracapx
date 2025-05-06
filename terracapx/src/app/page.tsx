import Categories from "@/components/Categories/Categories";
import Company from "@/components/Company/Company";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import OurValues from "@/components/OurValues/OurValues";
import Partners from "@/components/Partners/Partners";
import Resources from "@/components/Resources/Resources";
import Subscribe from "@/components/Subscribe/Subscribe";
import Team from "@/components/Team/Team";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TopNavbar/>
        <HeroSection/>
        <OurValues/>
        <OurServices/>
        <Team/>
        <Partners/>
      
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
     
        
      </footer>
    </div>
  );
}
