import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/manuel-pires-l-5275852aa/",
    label: "Visitar LinkedIn de Manuel Pires Luís",
    tooltip: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/ManuelPiresLuis01",
    label: "Visitar GitHub de Manuel Pires Luís",
    tooltip: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "mailto:manuelpiresluis@gmail.com",
    label: "Enviar email a Manuel Pires Luís",
    tooltip: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://wa.me/244929004469?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20via%20portf%C3%B3lio",
    label: "Contactar Manuel Pires Luís pelo WhatsApp",
    tooltip: "WhatsApp",
    icon: FaWhatsapp,
    external: true,
  },
];

const FloatingLinks = () => {
  const [orderedLinks, setOrderedLinks] = useState(contactLinks);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOrderedLinks((currentLinks) => {
        const shuffled = [...currentLinks];
        for (let i = shuffled.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        if (shuffled.every((link, index) => link.label === currentLinks[index].label)) {
          [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
        }
        return shuffled;
      });
    }, 90_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {orderedLinks.map(({ href, label, tooltip, icon: Icon, external }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <motion.a
              layout={!reduceMotion}
              transition={{ layout: { duration: 2.4, ease: [0.22, 1, 0.36, 1] } }}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/85 text-foreground shadow-glow-sm backdrop-blur transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Icon aria-hidden="true" className="h-5 w-5" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={10}>
            {tooltip}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default FloatingLinks;
