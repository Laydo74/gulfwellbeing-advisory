import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead(
    "GULFWELLBEING | Private Wellbeing Advisory & Coaching",
    "Private wellbeing advisory and coaching with Sourour Tarkan for individuals, women, men, families, founders and executives across the Gulf and internationally."
  ),
  component: Home,
});

const pathways = [
  ["01", "Private Wellbeing", "Space to restore balance, clarity and personal capacity.", "/wellbeing", stillLife],
  ["02", "Women's Wellbeing", "Discreet support for the complexities of private and family life.", "/women", woman],
  ["03", "Men's Wellbeing", "Considered guidance for responsibility, leadership and transition.", "/men", executive],
];

const posts = [
  ["Private Wellbeing Advisory in the Gulf", "A private space for people carrying significant responsibility.", "/blog/private-wellbeing-advisory-gulf"],
  ["Stress and Burnout in Executives", "Recognising sustained pressure before it becomes the new normal.", "/blog/stress-burnout-executives"],
  ["Women's Wellbeing in the Gulf", "Confidence, family life, relationships and personal transitions.", "/blog/womens-wellbeing-gulf"],
];

function Home() {
  return <SiteShell>
    <section className="grain relative min-h-[92svh] bg-primary text-primary-foreground">
      <img src={hero} width={1536} height={1024} fetchPriority="high" alt="A poised woman in a quiet contemporary Gulf residence" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/65 to-transparent" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] items-end px-5 pb-16 pt-36 lg:px-10 lg:pb-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
          <h1 className="font-serif text-[clamp(3.8rem,8.4vw,8.6rem)] leading-[0.82]">For those who<br/><em className="font-normal">carry more.</em></h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-primary-foreground/72 sm:text-base">Personal, discreet guidance for the inner life behind responsibility, family, leadership and change.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/book" className="button-gold">Book a Private Session <ArrowRight className="size-4" /></Link>
            <Link to="/wellbeing" className="button-on-dark">Explore Wellbeing</Link>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 end-6 size-5 text-gold lg:end-10" />
      </div>
    </section>

    <section className="editorial-grid bg-background px-5 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A PRIVATE ADVISORY RELATIONSHIP</p>
        <div>
          <h2 className="font-serif text-5xl leading-[0.95] sm:text-7xl">Wellbeing is personal.<br/>The support should be too.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">GULFWELLBEING offers a composed, confidential setting to make sense of pressure, restore perspective and move through change with greater clarity. Every conversation begins with the individual—not a formula.</p>
        </div>
      </div>
    </section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-end justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">AREAS OF ADVISORY</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">Private pathways</h2></div>
          <span className="hidden text-xs text-muted-foreground sm:block">01 — 03</span>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {pathways.map(([n, title, text, to, image]) => <Link key={title} to={to} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground">
            <img src={image} width={1280} height={960} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover opacity-62 transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7"><span className="text-[10px] text-gold">{n}</span><h3 className="mt-3 font-serif text-5xl">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/68">{text}</p><ArrowUpRight className="mt-6 size-5" /></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
      <div className="min-h-[34rem]"><img src={executive} width={1280} height={960} loading="lazy" alt="Executive reflecting beside a Gulf city skyline" className="h-full w-full object-cover" /></div>
      <div className="flex items-center px-6 py-20 lg:px-20"><div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-gold">BUSINESS & EXECUTIVE</p>
        <h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Clearer within.<br/>Stronger in leadership.</h2>
        <p className="mt-7 max-w-lg text-sm leading-7 text-primary-foreground/65 sm:text-base">Private advisory for the human realities behind senior responsibility—sustained pressure, difficult decisions, changing identity and the need for clear perspective.</p>
        <Link to="/business" className="button-gold mt-9">Explore Executive Wellbeing <ArrowRight className="size-4" /></Link>
      </div></div>
    </section>

    <section className="grid bg-background lg:grid-cols-[1.1fr_0.9fr]">
      <div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:px-20"><div>
        <LockKeyhole className="size-5 text-gold" />
        <p className="mt-7 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">BY PRIVATE ENQUIRY</p>
        <h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">VIP Concierge<br/>Wellbeing</h2>
        <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">A highly personalised experience designed around demanding schedules, international lives and the value of exceptional discretion.</p>
        <Link to="/business/vip-concierge-wellbeing" className="button-primary mt-9">Explore VIP Concierge</Link>
      </div></div>
      <img src={stillLife} width={1280} height={960} loading="lazy" alt="Private consultation salon with understated Gulf architecture" className="order-1 h-full min-h-[30rem] w-full object-cover lg:order-2" />
    </section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">THE TARKAN APPROACH</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Human attention,<br/>without assumption.</h2></div>
        <div className="space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>The work is attentive, practical and shaped around the realities of your life. There is room for complexity without judgement, and direction without rigid formulas.</p>
          <p>Support may focus on personal wellbeing, relationships, transition, leadership, family dynamics or the quieter pressures that are difficult to discuss elsewhere.</p>
          <p>Where appropriate and welcomed, holistic wellbeing practices and Reiki may form part of the work. Sourour Tarkan is a Reiki Master.</p>
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Meet Sourour Tarkan <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </section>

    <section className="bg-background px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1350px]">
        <div className="mb-12 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">THE BLOG</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">From the Blog</h2></div><Link to="/blog" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] sm:inline-flex">View all <ArrowUpRight className="size-4"/></Link></div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map(([title,text,to],i) => <Link key={title} to={to} className="group border-t border-border pt-6">
            <span className="text-[10px] text-gold">0{i+1}</span><h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.14em]">Read article <ArrowUpRight className="size-4"/></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-gold">PRIVATE ENQUIRY</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">A confidential setting<br/>for what matters most.</h2></div>
        <Link to="/book" className="button-gold">Request a Private Session <ArrowRight className="size-4"/></Link>
      </div>
    </section>
  </SiteShell>;
}
