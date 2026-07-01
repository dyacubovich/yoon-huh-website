import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import LessonInfo from "@/components/LessonInfo";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <LessonInfo />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
