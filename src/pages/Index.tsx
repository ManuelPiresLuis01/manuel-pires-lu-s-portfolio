import Hero from "@/components/Hero";
import About from "@/components/About";
import SiteSEO from "@/components/SEO";
import YetuStore from "@/components/YetuStore";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import IntroSequence from "@/components/IntroSequence";
import FinalChoice from "@/components/FinalChoice";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";

const seoStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Manuel Pires Luis",
    url: "https://www.manuelpiresluis.site/",
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manuel Pires Luis",
    alternateName: ["Manuel Pires Luís", "Manuel Pires Luis Developer", "Manuel Dev"],
    url: "https://www.manuelpiresluis.site/",
    image: "https://www.manuelpiresluis.site/foto-perfil.jpg",
    jobTitle: "Software Developer and QA Engineer",
    description:
      "Software Developer and QA Engineer focused on TypeScript, Playwright, test automation, quality assurance and remote product teams.",
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "full-stack development",
      "QA Engineering",
      "Test Automation",
      "Playwright",
      "Vitest",
      "Web Performance",
      "Remote Collaboration",
    ],
    knowsLanguage: ["Portuguese", "English"],
    sameAs: [
      "https://github.com/ManuelPiresLuis01",
      "https://www.linkedin.com/in/manuel-pires-l-5275852aa/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Manuel Pires Luis | Web Developer & QA Engineer",
    url: "https://www.manuelpiresluis.site/",
    description:
      "Portfolio website of Manuel Pires Luis, a Web Developer and QA Engineer available for remote roles and freelance work.",
    primaryImageOfPage: "https://www.manuelpiresluis.site/foto-perfil.jpg",
  },
];

const Index = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: lineProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <SiteSEO
        title="Manuel Pires Luis | Web Developer & QA Engineer"
        description="Web Developer and QA Engineer portfolio. Manuel Pires Luis builds reliable web products with React, TypeScript, Playwright and modern testing for remote teams and freelance clients."
        structuredData={seoStructuredData}
      />
      <div className="min-h-screen bg-background">
        {/* The homepage is intentionally story-first: the global nav is hidden here to preserve
        the scroll narrative, while secondary routes keep their navigation for exploration. */}
        <IntroSequence />
        <div ref={storyRef} id="home-story" className="relative isolate">
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
            initial={false}
          >
            <motion.path
              d="M 50 0 C 58 25, 42 55, 50 80 S 58 130, 50 160 S 42 210, 50 240 S 58 290, 50 320 S 42 370, 50 400 S 58 450, 50 480 S 42 530, 50 560 S 58 610, 50 640 S 42 690, 50 720 S 58 770, 50 800 S 42 850, 50 880 S 58 930, 50 960 S 42 990, 50 1000"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : lineProgress }}
              className="hidden opacity-60 md:block"
            />
            <motion.path
              d="M 5 0 C 8 25, 2 55, 5 80 S 8 130, 5 160 S 2 210, 5 240 S 8 290, 5 320 S 2 370, 5 400 S 8 450, 5 480 S 2 530, 5 560 S 8 610, 5 640 S 2 690, 5 720 S 8 770, 5 800 S 2 850, 5 880 S 8 930, 5 960 S 2 990, 5 1000"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : lineProgress }}
              className="opacity-60 md:hidden"
            />
          </motion.svg>

          <div className="relative">
            <Hero />
            <About />
            <YetuStore />
            <Services />
            <Timeline />
            <Certifications />
            <Technologies />
            <Statistics />
            <Contact />
            <FinalChoice />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
