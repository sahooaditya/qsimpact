import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Card from "@/components/card";
import Contact from "@/components/contact";
import TestimonialSection from "@/components/TestimonialSection";
import PartnerSection from "@/components/PartnerSection";
import TeamSection from "@/components/TeamSection";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between items-center ${inter.className}`}
    >
      <Hero />
      <About />
      <Card />
      {/* <TestimonialSection /> */}
      <PartnerSection />
      <TeamSection />
      <Post />
      {/* <ImageSlider /> */}
      <Contact />
    </main>
  );
}
