import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#timeline", label: "Timeline" },
  { href: "#tecnologias", label: "Tech" },
  { href: "#contato", label: "Contato" },
];

const HEADER_OFFSET = 72;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  const handleScrollHint = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 px-4 md:px-0">
        <a href="#" className="text-xl font-bold text-gradient">MPL</a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(event) => handleNavClick(event, l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <button
          type="button"
          onClick={handleScrollHint}
          className="md:hidden inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Role para ver as seções"
        >
          <span>Role</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-primary"
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
