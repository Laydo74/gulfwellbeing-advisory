import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Languages } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./BrandMark";

const nav = [
  { label: "Home", ar: "الرئيسية", to: "/" },
  { label: "Wellbeing", ar: "Wellbeing", to: "/wellbeing" },
  { label: "Women", ar: "Women", to: "/women" },
  { label: "Men", ar: "Men", to: "/men" },
  { label: "Business & Executive", ar: "Business & Executive", to: "/business" },
  { label: "VIP Concierge", ar: "VIP Concierge", to: "/business/vip-concierge-wellbeing" },
  { label: "About", ar: "عن Gulfwellbeing", to: "/about" },
  { label: "Journal", ar: "Journal", to: "/blog" },
  { label: "Book a Session", ar: "طلب جلسة خاصة", to: "/book" },
] as const;

function languageTarget(path: string) {
  if (path.startsWith("/ar")) {
    const english = path.replace(/^\/ar/, "") || "/";
    return english;
  }
  return path === "/" ? "/ar" : `/ar${path}`;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isArabic = path === "/ar" || path.startsWith("/ar/");
  const langTarget = languageTarget(path);

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"} lang={isArabic ? "ar" : "en"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Gulfwellbeing",
        description: "Private wellbeing advisory and coaching for individuals, families and executives across the Gulf and internationally.",
        founder: { "@type": "Person", name: "Sourour Tarkan", jobTitle: "Wellbeing Advisor & Coach", knowsAbout: ["Wellbeing advisory", "Reiki", "Holistic wellbeing", "Reflective coaching"] },
        areaServed: ["Gulf Cooperation Council", "International"]
      }) }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Link to={isArabic ? "/ar" : "/"} aria-label="GULFWELLBEING home"><BrandMark /></Link>
          <nav className="hidden items-center gap-3 lg:flex" aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
            {nav.map((item, i) => (
              <Link key={item.label} to={(isArabic ? `/ar${item.to === "/" ? "" : item.to}` : item.to) as any}
                className={i === 8 ? "nav-book" : "nav-link"}
                activeProps={{ className: i === 8 ? "nav-book" : "nav-link text-gold" }}>
                {isArabic ? item.ar : item.label}
              </Link>
            ))}
            <Link to={langTarget as any} className="nav-link inline-flex items-center gap-2 border-s border-border ps-4" aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
              <Languages className="size-4" /> {isArabic ? "English" : "العربية"}
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="fixed inset-0 top-20 z-40 bg-primary px-6 py-10 text-primary-foreground xl:hidden">
            <nav className="flex flex-col" aria-label={isArabic ? "التنقل" : "Mobile navigation"}>
              {nav.map((item, i) => (
                <Link key={item.label} to={(isArabic ? `/ar${item.to === "/" ? "" : item.to}` : item.to) as any} onClick={() => setOpen(false)}
                  className="border-b border-primary-foreground/15 py-4 font-serif text-3xl">
                  {String(i + 1).padStart(2, "0")} <span className="ms-4">{isArabic ? item.ar : item.label}</span>
                </Link>
              ))}
              <Link to={langTarget as any} onClick={() => setOpen(false)} className="mt-6 inline-flex items-center gap-3 py-4 text-gold">
                <Languages className="size-5" /> {isArabic ? "English" : "العربية"}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
          <div>
            <BrandMark />
            <p className="mt-8 max-w-sm text-sm leading-7 text-primary-foreground/65">
              {isArabic ? "استشارات Wellbeing خاصة للأفراد والعائلات والقيادات في الخليج ودولياً." : "Private wellbeing advisory for individuals, families and executives across the Gulf and internationally."}
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">{isArabic ? "التنقل" : "Navigate"}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {nav.slice(0, 8).map((n) => <Link key={n.label} to={(isArabic ? `/ar${n.to === "/" ? "" : n.to}` : n.to) as any}>{isArabic ? n.ar : n.label}</Link>)}
              <Link to={(isArabic ? "/ar/blog" : "/blog") as any}>{isArabic ? "Journal" : "Journal"}</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold">{isArabic ? "طلب خاص" : "Private enquiries"}</p>
            <p className="mt-5 text-sm leading-7 text-primary-foreground/65">
              {isArabic ? "الطلبات الخاصة باستشارات Wellbeing والدعم التنفيذي وترتيبات VIP مرحب بها عبر طلب خاص." : "Private enquiries for wellbeing advisory, executive support and VIP concierge arrangements are welcomed by request."}
            </p>
            <Link to={(isArabic ? "/ar/book" : "/book") as any} className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
              {isArabic ? "طلب جلسة خاصة" : "Private enquiry"} <ArrowUpRight className="size-4"/>
            </Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 px-6 py-5 text-xs text-primary-foreground/50">
          <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
            <span>© {new Date().getFullYear()} GULFWELLBEING</span>
            <span>
              <Link to={(isArabic ? "/ar/privacy" : "/privacy") as any}>{isArabic ? "الخصوصية" : "Privacy Policy"}</Link> ·{" "}
              <Link to={(isArabic ? "/ar/terms" : "/terms") as any}>{isArabic ? "الشروط" : "Terms & Conditions"}</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
