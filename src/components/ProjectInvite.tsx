import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type ProjectInviteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectInvite = ({ open, onOpenChange }: ProjectInviteProps) => {
  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="dialog"
          aria-labelledby="project-invite-title"
          aria-describedby="project-invite-description"
          initial={{ opacity: 0, x: 48, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 80, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragDirectionLock
          dragElastic={0.15}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 700) {
              onOpenChange(false);
            }
          }}
          className="fixed right-4 top-4 z-[70] w-[calc(100%-2rem)] max-w-xs touch-pan-y rounded-xl border border-border bg-card/95 p-4 text-left shadow-xl shadow-black/25 backdrop-blur-md sm:right-6 sm:top-6"
        >
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Fechar convite"
            className="absolute right-2 top-2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <X aria-hidden="true" size={16} />
          </button>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Portfólio
          </p>
          <h2 id="project-invite-title" className="pr-6 text-base font-semibold leading-snug tracking-tight">
            Queres ver os meus projectos?
          </h2>
          <p id="project-invite-description" className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Tenho alguns projectos interessantes para te mostrar.
          </p>
          <Link
            to="/personalProjects"
            className="mt-3 inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Explorar projectos
            <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default ProjectInvite;
