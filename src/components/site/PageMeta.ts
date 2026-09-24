const SITE_NAME = "GULFWELLBEING";
const DEFAULT_IMAGE = "/images/sourour-tarkan-home.jpg";

export function pageHead(title: string, description: string, path?: string) {
  const isArabic = path?.startsWith("/ar") ?? false;
  const locale = isArabic ? "ar_AE" : "en_US";
  const englishPath = path?.startsWith("/ar") ? (path.replace(/^\/ar/, "") || "/") : path;
  const arabicPath = path ? (path.startsWith("/ar") ? path : path === "/" ? "/ar" : `/ar${path}`) : undefined;
  const links = path ? [
    { rel: "canonical", href: path },
    { rel: "alternate", hrefLang: "en", href: englishPath },
    { rel: "alternate", hrefLang: "ar", href: arabicPath },
    { rel: "alternate", hrefLang: "x-default", href: englishPath },
  ] : [];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "author", content: "Sourour Tarkan | GULFWELLBEING" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: DEFAULT_IMAGE },
      { property: "og:image:alt", content: isArabic ? "سرور طركان — استشارات رفاه خاصة" : "Sourour Tarkan — Private wellbeing advisory" },
      ...(path ? [{ property: "og:url", content: path }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_IMAGE },
      { name: "twitter:image:alt", content: isArabic ? "سرور طركان — استشارات رفاه خاصة" : "Sourour Tarkan — Private wellbeing advisory" },
    ],
    links,
  };
}
