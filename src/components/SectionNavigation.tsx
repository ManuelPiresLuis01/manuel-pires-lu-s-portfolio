import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sectionLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "timeline", label: "Trajetória" },
  { id: "certificacoes", label: "Certificações" },
  { id: "speaking-community", label: "Palestras" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "estatisticas", label: "Estatísticas" },
  { href: "/personalProjects", label: "Meus projectos" },
  { id: "contato", label: "Contato" },
];

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const desktopNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionLinks
      .map((link) => ("id" in link ? document.getElementById(link.id) : null))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        desktopOpen &&
        desktopNavigationRef.current &&
        !desktopNavigationRef.current.contains(event.target as Node)
      ) {
        setDesktopOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [desktopOpen]);

  const navigateToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string | undefined,
    href: string | undefined
  ) => {
    if (href) {
      setMobileOpen(false);
      setDesktopOpen(false);
      return;
    }

    if (!id) {
      return;
    }

    event.preventDefault();
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
    setMobileOpen(false);
    setDesktopOpen(false);
  };

  const renderLinks = (mobile = false) =>
    sectionLinks.map((link) => (
      <a
        key={"id" in link ? link.id : link.href}
        href={"id" in link ? `#${link.id}` : link.href}
        onClick={(event) =>
          navigateToSection(
            event,
            "id" in link ? link.id : undefined,
            "href" in link ? link.href : undefined
          )
        }
        aria-current={
          "id" in link && activeSection === link.id ? "location" : undefined
        }
        className={
          mobile
            ? `block rounded-lg px-3 py-2.5 text-sm transition-colors ${"id" in link && activeSection === link.id
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
            }`
            : `group relative flex min-h-9 items-center justify-end gap-3 rounded-lg px-2 py-1.5 text-right transition-all duration-300 hover:bg-primary/[0.07] ${"id" in link && activeSection === link.id
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
            }`
        }
      >
        {mobile && (
          <span
            aria-hidden="true"
            className={`mr-3 inline-block h-1.5 w-1.5 rounded-full ${"id" in link && activeSection === link.id
                ? "bg-primary"
                : "bg-border"
              }`}
          />
        )}
        <span className={mobile ? "relative" : "relative text-[11px] font-medium tracking-[0.04em]"}>
          {link.label}
        </span>
        {!mobile && (
          <span
            aria-hidden="true"
            className={`absolute right-0 h-7 w-[2px] origin-right rounded-full transition-all duration-300 ${"id" in link && activeSection === link.id
                ? "scale-y-100 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
                : "scale-y-0 bg-border group-hover:scale-y-75 group-hover:bg-primary/60"
              }`}
          />
        )}
      </a>
    ));

  return (
    <>
      <div
        ref={desktopNavigationRef}
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
      >
        <button
          type="button"
          onClick={() => setDesktopOpen((open) => !open)}
          aria-label={desktopOpen ? "Fechar navegação das secções" : "Abrir navegação das secções"}
          aria-expanded={desktopOpen}
          aria-controls="desktop-section-navigation"
          className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-foreground shadow-[0_12px_35px_-15px_hsl(var(--primary)/0.55)] backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:text-primary hover:shadow-[0_12px_35px_-12px_hsl(var(--primary)/0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={desktopOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.75 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.75 }}
              transition={{ duration: 0.18 }}
            >
              {desktopOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {desktopOpen && (
            <motion.nav
              id="desktop-section-navigation"
              aria-label="Navegação das secções da página"
              initial={{ opacity: 0, x: -12, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -12, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[calc(100%+0.75rem)] top-1/2 w-[12rem] -translate-y-1/2 overflow-hidden rounded-2xl border border-primary/15 bg-background/90 px-2 py-2.5 shadow-[0_18px_50px_-22px_hsl(var(--primary)/0.45)] backdrop-blur-xl"
            >
              <div className="mb-2 flex items-center justify-between px-2 pb-2 pt-1">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Navegação
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
              </div>
              <div className="flex max-h-[min(28rem,70dvh)] flex-col gap-0.5 overflow-y-auto border-t border-border/60 pt-2">
                {renderLinks()}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <nav
        aria-label="Navegação das secções da página"
        className="fixed bottom-5 left-4 z-40 lg:hidden"
      >
        {mobileOpen && (
          <div
            id="mobile-section-navigation"
            className="absolute bottom-[calc(100%+0.5rem)] left-0 max-h-[min(70dvh,32rem)] w-[min(15rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-border bg-background/95 p-2 shadow-glow-sm backdrop-blur-md"
          >
            {renderLinks(true)}
          </div>
        )}

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={
            mobileOpen
              ? "Fechar navegação das secções"
              : "Abrir navegação das secções"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-section-navigation"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-foreground shadow-glow-sm backdrop-blur transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>
    </>
  );
};

export default SectionNavigation;
