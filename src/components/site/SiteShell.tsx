import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./BrandMark";

const nav = [
  { label: "Home", ar: "الرئيسية", to: "/" },
  { label: "Wellbeing", ar: "الرفاه", to: "/wellbeing" },
  { label: "Women", ar: "المرأة", to: "/women" },
  { label: "Men", ar: "الرجل", to: "/men" },
  { label: "Business", ar: "الأعمال والقيادات", to: "/business" },
  { label: "About", ar: "عن سرور طركان", to: "/about" },
  { label: "The Tarkan Approach", ar: "منهج سرور طركان", to: "/the-tarkan-approach" },
  { label: "Book", ar: "طلب جلسة", to: "/book" },
] as const;

function languageTarget(path: string) {
  const map: Record<string, string> = {
    "/": "/ar",
    "/wellbeing": "/ar/wellbeing",
    "/women": "/ar/women",
    "/men": "/ar/men",
    "/business": "/ar/business",
    "/about": "/ar/about",
    "/the-tarkan-approach": "/ar/the-tarkan-approach",
    "/blog": "/ar/blog",
    "/book": "/ar/book",
    "/privacy": "/ar/privacy",
    "/terms": "/ar/terms",
    "/ar": "/",
    "/ar/wellbeing": "/wellbeing",
    "/ar/women": "/women",
    "/ar/men": "/men",
    "/ar/business": "/business",
    "/ar/about": "/about",
    "/ar/the-tarkan-approach": "/the-tarkan-approach",
    "/ar/blog": "/blog",
    "/ar/book": "/book",
    "/ar/privacy": "/privacy",
    "/ar/terms": "/terms",
  };
  return map[path] || (path.startsWith("/ar/") ? path.replace(/^\/ar/, "") : `/ar${path}`);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isArabic = path === "/ar" || path.startsWith("/ar/");
  const langTarget = languageTarget(path);
  useEffect(() => {
document.documentElement.lang = isArabic ? "ar" : "en";
document.documentElement.dir = isArabic ? "rtl" : "ltr";
}, [isArabic, path]);

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"} lang={isArabic ? "ar" : "en"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "GULFWELLBEING",
        description: "Private wellbeing advisory and coaching for individuals, families and executives across the Gulf and internationally.",
        founder: {
          "@type": "Person",
          name: "Sourour Tarkan",
          jobTitle: "Private Wellbeing Advisor & Coach",
          knowsAbout: ["Private wellbeing advisory", "Wellbeing coaching", "Reiki", "Executive wellbeing", "Women's wellbeing", "Men's wellbeing"],
        },
        areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
        serviceType: ["Private Wellbeing Advisory", "Wellbeing Coaching", "Executive Wellbeing", "Women's Wellbeing", "Men's Wellbeing"],
      }) }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Link to={isArabic ? "/ar" : "/"} aria-label="GULFWELLBEING home"><BrandMark /></Link>
          <div className="hidden items-center gap-6 lg:flex" dir="ltr">
            <nav className="flex items-center gap-3" dir={isArabic ? "rtl" : "ltr"} aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
              {nav.map((item, i) => (
                <a key={item.label} href={isArabic ? `/ar${item.to === "/" ? "" : item.to}` : item.to}
                  className={i === 7 ? "nav-book" : "nav-link"}>
                  {isArabic ? item.ar : item.label}
                </a>
              ))}
            </nav>
            <a href={langTarget} dir="ltr" className="nav-link inline-flex shrink-0 items-center gap-2 border-s border-border ps-4" aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
              <Languages className="size-4" /> {isArabic ? "English" : "العربية"}
            </a>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" dir="ltr" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
{open && (
          <div className="fixed inset-0 top-20 z-40 bg-primary px-6 py-10 text-primary-foreground lg:hidden">
            <nav className="flex flex-col" aria-label={isArabic ? "التنقل" : "Mobile navigation"}>
              {nav.map((item, i) => (
                <a key={item.label} href={isArabic ? `/ar${item.to === "/" ? "" : item.to}` : item.to} onClick={() => setOpen(false)}
                  className="border-b border-primary-foreground/15 py-4 font-serif text-3xl">
                  {String(i + 1).padStart(2, "0")} <span className="ms-4">{isArabic ? item.ar : item.label}</span>
                </a>
              ))}
              <a href={langTarget} onClick={() => setOpen(false)} className="mt-6 inline-flex items-center gap-3 py-4 text-gold">
                <Languages className="size-5" /> {isArabic ? "English" : "العربية"}
              </a>
            </nav>
          </div>
        )}
        </div>
      </header>

      <main className="pt-20">{children}</main>
<a href="https://wa.me/?text=Hello%20Sourour%20Tarkan%2C%20I%20would%20like%20to%20make%20a%20private%20wellbeing%20enquiry." target="_blank" rel="noreferrer" aria-label={isArabic ? "تواصل عبر واتساب" : "Contact via WhatsApp"} className="fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-primary-foreground shadow-xl transition-transform hover:-translate-y-1">
  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 shrink-0" fill="#25D366">
    <path d="M16 3.2a12.8 12.8 0 0 0-10.9 19.5L3.2 28.8l6.3-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.1c-2.2 0-4.3-.7-6-2l1.1-3.6-.3-.4A10.2 10.2 0 1 1 16 26.3Zm5.6-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.3 8.3 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.8.8.4 1.4.6 2 0.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z"/>
  </svg>
  <span>WhatsApp</span>
</a>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
          <div>
            <BrandMark />
            <p className="mt-8 max-w-sm text-sm leading-7 text-primary-foreground/65">
              {isArabic ? "استشارات رفاه خاصة للأفراد والعائلات والقيادات في الخليج ودولياً." : "Private wellbeing advisory for individuals, families and executives across the Gulf and internationally."}
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">{isArabic ? "التنقل" : "Navigate"}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {nav.slice(0, 8).map((n) => <a key={n.label} href={isArabic ? `/ar${n.to === "/" ? "" : n.to}` : n.to}>{isArabic ? n.ar : n.label}</a>)}
              <a href={isArabic ? "/ar/blog" : "/blog"}>{isArabic ? "المدونة" : "Blog"}</a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold">{isArabic ? "طلب خاص" : "Private enquiries"}</p>
            <p className="mt-5 text-sm leading-7 text-primary-foreground/65">
              {isArabic ? "الطلبات الخاصة باستشارات الرفاه والدعم التنفيذي وترتيبات VIP مرحب بها عبر طلب خاص." : "Private enquiries for wellbeing advisory, executive support and VIP concierge arrangements are welcomed by request."}
            </p>
            <a href={isArabic ? "/ar/book" : "/book"} className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
              {isArabic ? "طلب جلسة خاصة" : "Private enquiry"} <ArrowUpRight className="size-4"/>
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 px-6 py-5 text-xs text-primary-foreground/50">
          <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
            <span>© {new Date().getFullYear()} GULFWELLBEING</span>
            <span>
              <a href={isArabic ? "/ar/privacy" : "/privacy"}>{isArabic ? "الخصوصية" : "Privacy Policy"}</a> ·{" "}
              <a href={isArabic ? "/ar/terms" : "/terms"}>{isArabic ? "الشروط" : "Terms & Conditions"}</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
