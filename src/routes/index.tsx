import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

export const Route=createFileRoute("/")({
  head:()=>pageHead(
    "GULFWELLBEING | Private Wellbeing Advisory & Coaching",
    "Private wellbeing advisory and coaching with Sourour Tarkan for individuals, women, men, families, founders and executives across the Gulf and internationally."
  ),
  component:Home
});

const pathways=[
  ["01","Private Wellbeing","Stress, emotional balance, relationships, mindfulness, life transitions and holistic wellbeing.","/wellbeing",stillLife],
  ["02","Women's Wellbeing","Motherhood, family life, confidence, relationships, identity and personal transitions.","/women",woman],
  ["03","Men's Wellbeing","Pressure, fatherhood, emotional balance, leadership, responsibility and personal direction.","/men",executive],
  ["04","Business & Executive","Executive wellbeing, pressure, burnout prevention, leadership clarity and team wellbeing.","/business",stillLife],
] as const;

function Home(){return <SiteShell>
<section className="grain relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
  <img src={hero} width={1920} height={1200} fetchPriority="high" alt="Private wellbeing advisory setting for a discreet conversation" className="absolute inset-0 size-full object-cover object-[62%_center]"/>
  <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/65 to-transparent"/>
  <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1600px] items-end px-5 pb-16 pt-32 lg:px-10 lg:pb-20">
    <div className="max-w-5xl">
      <p className="eyebrow text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
      <h1 className="mt-6 font-serif text-[clamp(3.7rem,8vw,8.5rem)] leading-[.84]">For those who<br/><em className="font-normal">carry more.</em></h1>
      <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">Personal, discreet guidance with <strong className="text-primary-foreground">Sourour Tarkan</strong> for the inner life behind responsibility, family, leadership, relationships and change.</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link to="/book" className="button-gold">Request a Private Session <ArrowRight className="size-4"/></Link>
        <Link to="/wellbeing" className="button-on-dark">Explore Wellbeing</Link>
      </div>
    </div>
    <ArrowDown className="absolute bottom-8 end-6 size-5 text-gold lg:end-10"/>
  </div>
</section>

<section className="editorial-grid bg-background px-5 py-20 lg:px-10 lg:py-32">
  <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
    <p className="eyebrow">A PRIVATE ADVISORY RELATIONSHIP</p>
    <div>
      <h2 className="font-serif text-5xl leading-[.92] sm:text-7xl">Wellbeing is personal.<br/>The support should be too.</h2>
      <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">Gulfwellbeing offers a composed, confidential setting to make sense of pressure, restore perspective and move through change with greater clarity. Every conversation begins with the individual—not a formula.</p>
      <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[.14em]">Discover the Approach <ArrowUpRight className="size-4"/></Link>
    </div>
  </div>
</section>

<section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
  <div className="mx-auto max-w-[1500px]">
    <div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">AREAS OF ADVISORY</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">Private pathways</h2></div><span className="hidden text-xs text-muted-foreground sm:block">01 — 04</span></div>
    <div className="grid gap-px bg-border md:grid-cols-2">
      {pathways.map(([n,title,text,to,image])=><Link key={title} to={to} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground">
        <img src={image} width={1280} height={960} loading="lazy" alt="" className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.025]"/>
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/25 to-transparent"/>
        <div className="absolute inset-x-0 bottom-0 p-7"><span className="text-[10px] text-gold">{n}</span><h3 className="mt-3 font-serif text-5xl">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/70">{text}</p><ArrowUpRight className="mt-6 size-5"/></div>
      </Link>)}
    </div>
  </div>
</section>

<section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
  <div className="min-h-[36rem]"><img src={executive} width={1008} height={1408} loading="lazy" alt="Executive wellbeing advisory in a private setting" className="h-full w-full object-cover"/></div>
  <div className="flex items-center px-6 py-20 lg:px-20"><div className="max-w-xl">
    <p className="eyebrow text-gold">BUSINESS & EXECUTIVE</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Clearer within.<br/>Stronger in leadership.</h2>
    <p className="mt-7 text-sm leading-7 text-primary-foreground/65 sm:text-base">Private advisory for the human realities behind senior responsibility—sustained pressure, difficult decisions, changing identity and the need for clear perspective.</p>
    <Link to="/business" className="button-gold mt-9">Explore Executive Wellbeing <ArrowRight className="size-4"/></Link>
  </div></div>
</section>

<section className="grid bg-background lg:grid-cols-[1.1fr_.9fr]">
  <div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:px-20"><div className="max-w-xl">
    <LockKeyhole className="size-5 text-gold"/>
    <p className="eyebrow mt-7">BY PRIVATE ENQUIRY</p>
    <h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">VIP Concierge<br/>Wellbeing</h2>
    <p className="mt-7 text-sm leading-7 text-muted-foreground sm:text-base">A highly personalised experience designed around demanding schedules, international lives and the value of exceptional discretion.</p>
    <Link to="/business/vip-concierge-wellbeing" className="button-primary mt-9">Explore VIP Concierge</Link>
  </div></div>
  <img src={stillLife} width={1408} height={1008} loading="lazy" alt="Private consultation setting with understated luxury" className="order-1 min-h-[30rem] w-full object-cover lg:order-2"/>
</section>

<section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
  <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">
    <div><p className="eyebrow">THE TARKAN APPROACH</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Human attention,<br/>without assumption.</h2></div>
    <div className="space-y-7 text-sm leading-7 text-muted-foreground sm:text-base">
      <p>The work is attentive, practical and shaped around the realities of your life. There is room for complexity without judgement, and direction without rigid formulas.</p>
      <p>Support may focus on personal wellbeing, relationships, transition, leadership, family dynamics or the quieter pressures that are difficult to discuss elsewhere.</p>
      <p>Where appropriate and welcomed, holistic wellbeing practices and Reiki may form part of the work. Sourour Tarkan is a Reiki Master.</p>
      <Link to="/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[.14em] text-foreground">Meet Sourour Tarkan <ArrowUpRight className="size-4"/></Link>
    </div>
  </div>
</section>

<section className="grid lg:grid-cols-2">
  <img src={woman} width={1008} height={1408} loading="lazy" alt="Women's wellbeing advisory and private coaching" className="h-full min-h-[34rem] w-full object-cover"/>
  <div className="flex items-center px-6 py-20 lg:px-20"><div className="max-w-xl">
    <p className="eyebrow text-gold">WOMEN'S WELLBEING</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Every dimension of a woman's life.</h2>
    <p className="mt-7 text-sm leading-7 text-muted-foreground sm:text-base">A discreet space for motherhood, family responsibilities, confidence, relationships, identity, professional pressure and meaningful transitions.</p>
    <Link to="/women" className="button-primary mt-9">Explore Women's Wellbeing</Link>
  </div></div>
</section>

<section className="bg-primary text-primary-foreground px-5 py-20 lg:px-10 lg:py-28">
  <div className="mx-auto max-w-5xl">
    <p className="eyebrow text-gold">HOW THE WORK BEGINS</p><h2 className="mt-5 font-serif text-5xl sm:text-7xl">A private conversation before anything else.</h2>
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {[["01","Share your context","Tell us only what feels appropriate and what you would like support with."],["02","Explore the fit","The first conversation helps clarify your needs, preferences and the most relevant format."],["03","Shape the work","If appropriate, sessions are shaped around your circumstances, priorities and agreed focus."]].map(([n,t,b])=><div key={n} className="border-t border-primary-foreground/15 pt-6"><span className="font-serif text-2xl text-gold">{n}</span><h3 className="mt-6 font-serif text-3xl">{t}</h3><p className="mt-4 text-sm leading-7 text-primary-foreground/65">{b}</p></div>)}
    </div>
  </div>
</section>

<section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
  <div className="mx-auto max-w-[1400px]">
    <div className="flex items-end justify-between gap-8"><div><p className="eyebrow text-gold">THE PRIVATE JOURNAL</p><h2 className="mt-4 font-serif text-5xl sm:text-7xl">Perspectives for a more considered life.</h2></div><Link to="/blog" className="hidden items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[.14em] sm:inline-flex">View Journal <ArrowRight className="size-4"/></Link></div>
    <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
      {[["Private Wellbeing Advisory in the Gulf","A personal approach for individuals and families living with demanding lives.","/blog/private-wellbeing-advisory-gulf"],["Stress and Burnout in Executives","Creating space before sustained pressure takes over.","/blog/stress-burnout-executives"],["Women's Wellbeing in the Gulf","Identity, relationships, family life, confidence and transitions.","/blog/womens-wellbeing-gulf"]].map(([title,text,to],i)=><Link key={to} to={to as any} className="group bg-background p-7 transition-colors hover:bg-card"><span className="text-xs text-gold">0{i+1}</span><h3 className="mt-10 font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm">Read the perspective <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></span></Link>)}
    </div>
    <Link to="/blog" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[.14em] sm:hidden">View Journal <ArrowRight className="size-4"/></Link>
  </div>
</section>

<section className="mx-auto max-w-4xl px-5 py-20 lg:px-10 lg:py-28">
  <p className="eyebrow text-gold">PRIVATE WELLBEING · GCC · INTERNATIONAL</p><h2 className="mt-5 font-serif text-5xl sm:text-7xl">Frequently asked questions</h2>
  <div className="mt-10 divide-y divide-border">
    {[["What is private wellbeing advisory?","A confidential, personalised space to reflect on wellbeing, pressure, relationships, life transitions and personal priorities."],["Who is Gulfwellbeing for?","Individuals, women, men, families and leaders who want a discreet space for personal wellbeing, reflection and change."],["Is Gulfwellbeing available internationally?","The practice is positioned for clients across the GCC and internationally. Session format and availability are discussed privately."],["How does Book a Session work?","It is a private enquiry rather than an instant public booking. Your request is received securely, reviewed by the practice and then followed up through your preferred contact method."],["Are prices displayed publicly?","Private advisory is tailored to the client and the scope of support. Fees are therefore shared privately once the appropriate format and service are understood."]].map(([q,a])=><details key={q} className="group py-6"><summary className="cursor-pointer list-none pr-8 font-serif text-2xl">{q}<span className="float-end text-gold group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{a}</p></details>)}
  </div>
</section>

<section className="relative min-h-[55vh] overflow-hidden bg-primary text-primary-foreground">
  <img src={stillLife} width={1408} height={1008} loading="lazy" alt="Discreet private wellbeing advisory environment" className="absolute inset-0 size-full object-cover"/>
  <div className="absolute inset-0 bg-image-overlay"/>
  <div className="relative mx-auto flex min-h-[55vh] max-w-[1400px] items-center px-5 py-20 lg:px-10"><div className="max-w-2xl">
    <p className="eyebrow text-gold">PRIVATE ENQUIRY</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">A confidential setting for what matters most.</h2>
    <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/72 sm:text-base">Share your context privately. The next step is arranged personally, without a public booking calendar.</p>
    <Link to="/book" className="button-gold mt-9">Request a Private Session <ArrowRight className="size-4"/></Link>
  </div></div>
</section>
</SiteShell>}
