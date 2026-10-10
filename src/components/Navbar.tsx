import { useState, useEffect, useRef } from "react";
import { Github, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/personalProjects", label: "Projetos" },
  { href: "/personalProjects#experiencia", label: "Experiência" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#tecnologias", label: "Tech" },
  { href: "/certifications", label: "Certificações" },
  { href: "/moments", label: "Momentos" },
  { href: "/#contato", label: "Contato" },
];

const HEADER_OFFSET = 72;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handler = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 50);

      if (currentScrollY < 80 || mobileMenuOpen || scrollDelta < -6) {
        setVisible(true);
      } else if (scrollDelta > 6) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [mobileMenuOpen]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";

    if (!hash || location.pathname !== "/") {
      setMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
    window.history.replaceState(null, "", hash);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: visible || mobileMenuOpen ? "0%" : "-100%",
        opacity: visible || mobileMenuOpen ? 1 : 0,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glow-sm" : "bg-transparent"
      }`}
      style={{ pointerEvents: visible || mobileMenuOpen ? "auto" : "none" }}
    >
      <div className="container-custom relative grid h-16 grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] md:px-0">
        <a href="/" className="justify-self-start text-xl font-bold text-gradient">
          MPL
        </a>
        {/* Desktop */}
        <div className="hidden items-center justify-self-center gap-3 lg:gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(event) => handleNavClick(event, l.href)}
              className="whitespace-nowrap rounded-sm text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/ManuelPiresLuis01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar GitHub de Manuel Pires Luís"
          className="hidden justify-self-end rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
        >
          <Github size={18} />
        </a>

        {/* Mobile menu */}
        <div className="relative justify-self-end md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 max-h-[calc(100dvh-5rem)] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-border bg-background/95 p-3 shadow-glow-sm backdrop-blur"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(event) => handleNavClick(event, l.href)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
