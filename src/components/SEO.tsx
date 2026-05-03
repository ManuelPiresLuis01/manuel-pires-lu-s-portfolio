import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SITE_URL = "https://www.manuelpiresluis.site";

const ensureMeta = (selector: string, attribute: "name" | "property", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  return element;
};

const ensureLink = (rel: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  return element;
};

const SEO = ({
  title,
  description,
  path = "/",
  image = `${SITE_URL}/foto-perfil.jpg`,
  noindex = false,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    document.documentElement.lang = "en";

    ensureMeta('meta[name="description"]', "name", "description").content = description;
    ensureMeta('meta[name="author"]', "name", "author").content = "Manuel Pires Luis";
    ensureMeta('meta[name="robots"]', "name", "robots").content = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large";
    ensureMeta('meta[name="theme-color"]', "name", "theme-color").content = "#0a0f1d";

    ensureMeta('meta[property="og:type"]', "property", "og:type").content = "website";
    ensureMeta('meta[property="og:site_name"]', "property", "og:site_name").content =
      "Manuel Pires Luis";
    ensureMeta('meta[property="og:title"]', "property", "og:title").content = title;
    ensureMeta('meta[property="og:description"]', "property", "og:description").content =
      description;
    ensureMeta('meta[property="og:url"]', "property", "og:url").content = url;
    ensureMeta('meta[property="og:image"]', "property", "og:image").content = image;
    ensureMeta('meta[property="og:locale"]', "property", "og:locale").content = "en_US";

    ensureMeta('meta[name="twitter:card"]', "name", "twitter:card").content =
      "summary_large_image";
    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").content = title;
    ensureMeta('meta[name="twitter:description"]', "name", "twitter:description").content =
      description;
    ensureMeta('meta[name="twitter:image"]', "name", "twitter:image").content = image;

    ensureLink("canonical").href = url;

    const scriptId = "seo-structured-data";
    const existingScript = document.getElementById(scriptId);

    if (structuredData) {
      const script = existingScript ?? document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(structuredData);

      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      if (noindex) {
        ensureMeta('meta[name="robots"]', "name", "robots").content =
          "index, follow, max-image-preview:large";
      }
    };
  }, [description, image, noindex, path, structuredData, title]);

  return null;
};

export default SEO;
