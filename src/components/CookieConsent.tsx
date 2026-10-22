import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "declined";

const consentCookie = "portfolio-consent";
const cacheNamePrefix = "manuel-portfolio-cache-";

const CookieConsent = () => {
  const [choice, setChoice] = useState<ConsentChoice | null | "loading">("loading");
  const [hoveredAction, setHoveredAction] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    const storedChoice = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${consentCookie}=`))
      ?.split("=")[1];

    setChoice(storedChoice === "accepted" || storedChoice === "declined" ? storedChoice : null);
  }, []);

  useEffect(() => {
    if (choice === null || choice === "loading" || !("serviceWorker" in navigator)) return;

    const updateCache = async () => {
      if (choice === "accepted") {
        const registration = await navigator.serviceWorker.register("/service-worker.js");
        const readyRegistration = await navigator.serviceWorker.ready;
        const activeWorker = readyRegistration.active ?? registration.active;
        const staticResourcePattern = /\.(?:js|css|png|jpe?g|webp|svg|ico|woff2?)(?:$|\?)/i;
        const resourceUrls = performance
          .getEntriesByType("resource")
          .map((entry) => entry.name)
          .filter((resourceUrl) => {
            const url = new URL(resourceUrl, window.location.href);
            return url.origin === window.location.origin && staticResourcePattern.test(url.href);
          });

        activeWorker?.postMessage({ type: "CACHE_STATIC_RESOURCES", urls: resourceUrls });
        return;
      }

      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations
          .filter((registration) => new URL(registration.scope).origin === window.location.origin)
          .map((registration) => registration.unregister()),
      );

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames
            .filter((name) => name.startsWith(cacheNamePrefix))
            .map((name) => caches.delete(name)),
        );
      }
    };

    void updateCache().catch((error: unknown) => {
      console.error("Não foi possível actualizar a preferência de cache.", error);
    });
  }, [choice]);

  const saveChoice = (newChoice: ConsentChoice) => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${consentCookie}=${newChoice}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    setChoice(newChoice);
  };

  return (
    <>
      {choice !== null && choice !== "loading" && (
        <button
          type="button"
          onClick={() => {
            const secure = window.location.protocol === "https:" ? "; Secure" : "";
            document.cookie = `${consentCookie}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
            setChoice(null);
          }}
          className="fixed bottom-3 left-3 z-[79] inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card/85 px-4 py-2 text-xs font-medium text-muted-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Cookie aria-hidden="true" size={15} />
          Preferências de cookies
        </button>
      )}
      <AnimatePresence>
        {choice === null && (
          <motion.aside
            aria-labelledby="cookie-consent-title"
            initial={{ x: "-50%", y: "100%", opacity: 0 }}
            animate={{ x: "-50%", y: 0, opacity: 1 }}
            exit={{ x: "-50%", y: "100%", opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            drag
            dragDirectionLock
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              const dismissedDown = info.offset.y > 90 || info.velocity.y > 700;
              const dismissedSideways =
                Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 700;

              if (dismissedDown || dismissedSideways) saveChoice("declined");
            }}
            className="fixed bottom-0 left-1/2 z-[80] w-[99%] rounded-t-2xl border border-b-0 border-border bg-card/80 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-foreground shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5 sm:pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 id="cookie-consent-title" className="text-sm font-semibold">
                  Cookies e armazenamento local
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Uso cookies para guardar a tua preferência e, com a tua autorização, armazenar ficheiros que tornam as próximas visitas mais rápidas. Não utilizo cookies para publicidade nem para analisar a tua navegação.
                </p>
              </div>
              <div
                className="flex shrink-0 gap-2"
                onMouseLeave={() => setHoveredAction(null)}
              >
                <button
                  type="button"
                  onClick={() => saveChoice("declined")}
                  onMouseEnter={() => setHoveredAction("declined")}
                  onFocus={() => setHoveredAction("declined")}
                  onBlur={() => setHoveredAction(null)}
                  className={`relative isolate min-h-10 overflow-hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    hoveredAction === "declined"
                      ? "border-primary text-primary-foreground"
                      : "border-border bg-secondary/70 text-foreground"
                  }`}
                >
                  {hoveredAction === "declined" && (
                    <motion.span
                      layoutId="cookie-consent-button-highlight"
                      transition={{ type: "spring", stiffness: 240, damping: 30, delay: 0.12 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-primary"
                    />
                  )}
                  <span className="relative">Recusar</span>
                </button>
                <button
                  type="button"
                  onClick={() => saveChoice("accepted")}
                  onMouseEnter={() => setHoveredAction("accepted")}
                  onFocus={() => setHoveredAction("accepted")}
                  onBlur={() => setHoveredAction(null)}
                  className={`relative isolate min-h-10 overflow-hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    hoveredAction === "declined"
                      ? "border-border bg-secondary/70 text-foreground"
                      : "border-primary text-primary-foreground"
                  }`}
                >
                  {hoveredAction !== "declined" && (
                    <motion.span
                      layoutId="cookie-consent-button-highlight"
                      transition={{ type: "spring", stiffness: 240, damping: 30, delay: 0.12 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-primary"
                    />
                  )}
                  <span className="relative">Aceitar</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
