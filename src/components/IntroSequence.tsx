import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INTRO_TEXT = "Olá. Que bom ter-te por aqui.";

const IntroSequence = () => {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typedText.length >= INTRO_TEXT.length) return;

    const interval = window.setInterval(() => {
      setTypedText((current) => {
        return INTRO_TEXT.slice(0, current.length + 1);
      });
    }, 72);

    return () => window.clearInterval(interval);
  }, [typedText]);

  const dismiss = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[60] flex touch-none items-center justify-center bg-background px-6"
          tabIndex={0}
          onClick={dismiss}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
              event.preventDefault();
              dismiss();
            }
          }}
          onPointerDown={(event) => {
            pointerStart.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={(event) => {
            const start = pointerStart.current;
            pointerStart.current = null;
            if (start && Math.abs(event.clientY - start.y) > 24) dismiss();
          }}
          onWheel={(event) => {
            if (event.deltaY > 0) {
              event.preventDefault();
              dismiss();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl text-center"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-primary/80">
              Manuel Pires Luís
            </p>
            <h1 className="min-h-[3rem] text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-tight tracking-tight text-foreground">
              {typedText}
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary align-middle sm:h-8" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45, ease: "easeOut" }}
              className="mt-8 text-sm text-muted-foreground sm:text-base"
            >
              Desliza para baixo ou toca em qualquer lugar ↓
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
