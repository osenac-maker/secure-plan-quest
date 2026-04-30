import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Canonical
    if (canonical) {
      let canon = document.querySelector('link[rel="canonical"]');
      if (canon) canon.setAttribute("href", canonical);
    }
  }, [title, description, canonical]);
}
