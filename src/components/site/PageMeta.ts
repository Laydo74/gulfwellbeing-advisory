export const SITE_URL = "https://www.gulfwellbeing.com";
const SITE_NAME = "GULFWELLBEING";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;

const BLOG_SLUGS = [
  "private-wellbeing-advisory-gulf", "stress-burnout-executives", "womens-wellbeing-gulf",
  "mens-wellbeing-pressure", "relationships-family-wellbeing", "life-transitions-wellbeing",
  "mindfulness-busy-lives", "emotional-balance-private-wellbeing", "confidence-self-trust",
  "leadership-clarity-private-advisory", "family-life-gulf-wellbeing", "private-wellbeing-high-responsibility",
];
const BUSINESS_SUB = [
  "burnout-prevention", "corporate-advisory", "executive-wellbeing", "founder-wellbeing",
  "leadership-clarity", "team-wellbeing", "vip-concierge-wellbeing",
];
/** English paths that have a real Arabic equivalent at /ar + path. */
const BILINGUAL = new Set<string>([
  "/", "/wellbeing", "/women", "/men", "/business", "/the-tarkan-approach", "/about",
  "/blog", "/book", "/privacy", "/terms",
  ...BUSINESS_SUB.map((s) => `/business/${s}`),
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
]);
const NOINDEX = new Set(["/auth", "/admin"]);

const abs = (p: string) => (p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`);
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p) || "/";

type HeadCtx = { match: { id: string; pathname: string }; matches: Array<{ id: string }> };

/** Builds head tags. Canonical/hreflang are emitted only when `path` is given (leaf routes). */
export function pageHead(title: string, description: string, path?: string) {
  const p = path ? normalize(path) : undefined;
  const isArabic = p ? p === "/ar" || p.startsWith("/ar/") : false;
  const alt = isArabic ? "سرور طركان — استشارات رفاه خاصة" : "Sourour Tarkan, private wellbeing advisor and coach";

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: p && NOINDEX.has(p) ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
    { name: "author", content: "Sourour Tarkan | GULFWELLBEING" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: p?.includes("/blog/") ? "article" : "website" },
    { property: "og:locale", content: isArabic ? "ar_AE" : "en_US" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: DEFAULT_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_IMAGE },
    { name: "twitter:image:alt", content: alt },
  ];
  if (!p) return { meta };

  meta.push({ property: "og:url", content: abs(p) });
  const links: Array<Record<string, string>> = [{ rel: "canonical", href: abs(p) }];
  const enPath = isArabic ? normalize(p.replace(/^\/ar/, "") || "/") : p;
  if (BILINGUAL.has(enPath)) {
    const arPath = enPath === "/" ? "/ar" : `/ar${enPath}`;
    links.push(
      { rel: "alternate", hrefLang: "en", href: abs(enPath) },
      { rel: "alternate", hrefLang: "ar", href: abs(arPath) },
      { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
    );
  }
  return { meta, links };
}

/** Route head helper: derives the path from the matched route; only the leaf match emits canonical/hreflang. */
export function pageHeadFor(ctx: HeadCtx, title: string, description: string, explicitPath?: string) {
  const isLeaf = ctx.matches[ctx.matches.length - 1]?.id === ctx.match.id;
  const routePath = explicitPath ?? ctx.match.pathname;
  return pageHead(title, description, isLeaf ? routePath : undefined);
}
