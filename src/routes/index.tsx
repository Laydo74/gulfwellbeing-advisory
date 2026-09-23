import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

export const Route=createFileRoute("/")({
  head:()=>pageHead("GULFWELLBEING | Private Wellbeing Advisory & Coaching in the GCC","Private wellbeing advisory and coaching with Sourour Tarkan for individuals, women, men, families, founders and executives across the Gulf and internationally."),
  component:Home
});

function Home(){return <SiteShell>
<section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-primary text-primary-foreground">
<img src={hero} width={1920} height={1200} fetchPriority="high" alt="Private wellbeing advisory setting for a discreet coaching conversation" className="absolute inset-0 size-full object-cover"/>
<div className="absolute inset-0 bg-hero-overlay"/>
<div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] items-end px-6 pb-16 lg:px-12 lg:pb-20"><div className="max-w-4xl reveal">
<p className="eyebrow text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
<h1 className="mt-6 font-serif text-5xl leading-[.98] md:text-7xl lg:text-8xl">Private wellbeing advisory for a life lived with greater clarity.</h1>
<p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">Personal advisory and coaching with <strong className="text-primary-foreground">Sourour Tarkan</strong> for individuals, families, women, men and leaders navigating stress, change, relationships, responsibility and the demands of a full life.</p>
<div className="mt-9 flex flex-wrap gap-3"><Link to="/book" className="button-gold">Request a Private Session <ArrowRight className="size-4"/></Link><Link to="/wellbeing" className="button-on-dark">Explore Private Wellbeing Advisory</Link></div>
</div></div></section>

<section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
<div><p className="eyebrow text-gold">PRIVATE WELLBEING ADVISORY</p><Sparkles className="mt-8 size-7 text-gold"/></div>
<div><h2 className="font-serif text-4xl leading-tight md:text-6xl">A confidential space to step back, understand what matters and decide what comes next.</h2>
<p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">Gulfwellbeing is a private wellbeing advisory and coaching practice for people whose lives carry complexity: demanding careers, family responsibilities, relationships, personal transitions and the pressure of being relied upon.</p>
<p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">The approach is personal rather than formulaic. Conversations may explore stress and burnout, emotional balance, relationships, confidence, life transitions, mindfulness and holistic wellbeing according to the client's circumstances and agreed focus.</p>
<Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm">Meet Sourour Tarkan <ArrowRight className="size-4"/></Link>
</div></div></section>

<section className="bg-secondary"><div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<p className="eyebrow text-gold">AREAS OF ADVISORY</p>
<h2 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl">Support shaped around the person, not a predefined programme.</h2>
<div className="mt-12 grid md:grid-cols-2">
{[
["01","Private Wellbeing","Stress, emotional balance, life transitions, relationships, mindfulness and holistic wellbeing.","/wellbeing"],
["02","Women's Wellbeing","Motherhood, family life, confidence, relationships, identity and personal transitions.","/women"],
["03","Men's Wellbeing","Pressure, fatherhood, emotional balance, leadership, responsibility and personal direction.","/men"],
["04","Business & Executive","Executive wellbeing, pressure, burnout prevention, leadership clarity and team wellbeing.","/business"]
].map(([n,t,b,l])=><Link key={t} to={l as any} className="group border-t border-border p-8 transition-colors hover:bg-background md:min-h-72"><span className="font-serif text-xl text-gold">{n}</span><h3 className="mt-10 font-serif text-4xl">{t}</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">{b}</p><span className="mt-7 inline-flex items-center gap-2 text-sm">Explore this area <ArrowRight className="size-4 transition-transform group-hover:translate-x-2"/></span></Link>)}
</div></div></section>

<section className="grid lg:grid-cols-2">
<img src={woman} loading="lazy" width={1008} height={1408} alt="Women's wellbeing advisory and private coaching" className="h-[70vh] w-full object-cover"/>
<div className="flex items-center bg-primary px-8 py-16 text-primary-foreground lg:px-20"><div className="max-w-xl">
<p className="eyebrow text-gold">WOMEN'S WELLBEING</p><h2 className="mt-5 font-serif text-5xl">A private space for every dimension of a woman's life.</h2>
<p className="mt-6 leading-8 text-primary-foreground/70">Women's wellbeing can be shaped by relationships, motherhood, family expectations, confidence, identity, professional pressure and major life changes. Gulfwellbeing provides a discreet space to consider the whole picture rather than one isolated issue.</p>
<p className="mt-4 leading-8 text-primary-foreground/70">Explore private advisory for women's wellbeing, motherhood, relationships, confidence and transitions.</p>
<Link to="/women" className="button-gold mt-8">Explore Women's Wellbeing</Link>
</div></div></section>

<section className="grid lg:grid-cols-2">
<div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:px-20"><div className="max-w-xl">
<p className="eyebrow text-gold">MEN'S WELLBEING</p><h2 className="mt-5 font-serif text-5xl">Clarity for the man behind the responsibility.</h2>
<p className="mt-6 max-w-lg leading-8 text-muted-foreground">Men may carry professional responsibility, family expectations, leadership pressure and the role of provider while having little private space to reflect on their own wellbeing.</p>
<p className="mt-4 max-w-lg leading-8 text-muted-foreground">Gulfwellbeing offers discreet advisory around men's wellbeing, fatherhood, emotional balance, confidence, leadership and personal transitions.</p>
<Link to="/men" className="button-primary mt-8">Explore Men's Wellbeing</Link>
</div></div>
<img src={executive} loading="lazy" width={1008} height={1408} alt="Men's wellbeing and executive advisory" className="order-1 h-[70vh] w-full object-cover lg:order-2"/>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div><p className="eyebrow text-gold">BUSINESS & EXECUTIVE WELLBEING</p><h2 className="mt-5 font-serif text-5xl md:text-6xl">The person behind the position matters too.</h2></div>
<div><p className="text-lg leading-8 text-muted-foreground">For founders, executives and senior professionals, sustained responsibility can affect energy, relationships, attention and personal capacity. Private executive wellbeing advisory creates space away from the role to examine pressure, leadership, boundaries and longer-term direction.</p><p className="mt-5 text-lg leading-8 text-muted-foreground">The work is confidential and shaped around the individual rather than a generic corporate programme.</p><Link to="/business" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm">Explore Executive Wellbeing <ArrowRight className="size-4"/></Link></div>
</div></section>

<section className="bg-secondary"><div className="mx-auto max-w-5xl px-6 py-24 lg:px-12">
<p className="eyebrow text-gold">HOW THE WORK BEGINS</p><h2 className="mt-5 font-serif text-5xl md:text-6xl">A private conversation before anything else.</h2>
<div className="mt-12 grid gap-8 md:grid-cols-3">
{[
["01","Share your context","Tell us only what feels appropriate and what you would like support with."],
["02","Explore the fit","The first conversation is an opportunity to understand your needs, preferences and the most relevant format."],
["03","Shape the work","If it feels appropriate, the sessions are shaped around your circumstances, priorities and agreed focus."]
].map(([n,t,b])=><div key={n} className="border-t border-border pt-6"><span className="font-serif text-2xl text-gold">{n}</span><h3 className="mt-6 font-serif text-3xl">{t}</h3><p className="mt-4 leading-7 text-muted-foreground">{b}</p></div>)}
</div></div></section>

<section className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12"><div><p className="eyebrow text-gold">VIP CONCIERGE WELLBEING</p><h2 className="mt-5 font-serif text-5xl md:text-6xl">A more private level of wellbeing support.</h2></div><div><p className="text-lg leading-8 text-primary-foreground/70">For clients whose personal or professional lives require greater flexibility, discretion and continuity, Gulfwellbeing offers private concierge wellbeing arrangements by enquiry.</p><p className="mt-5 text-lg leading-8 text-primary-foreground/70">Sessions, scheduling, format and areas of focus can be discussed around the realities of your life, including support for executives, families and clients travelling or living internationally.</p><Link to="/business/vip-concierge-wellbeing" className="button-gold mt-8">Explore VIP Concierge Wellbeing</Link></div></div></section>

<section className="relative min-h-[70vh] overflow-hidden"><img src={stillLife} loading="lazy" width={1408} height={1008} alt="Discreet private wellbeing advisory setting" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-image-overlay"/><div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-6 py-20 lg:px-12"><div className="max-w-2xl text-primary-foreground">
<p className="eyebrow text-gold">PRIVATE CONCIERGE</p><h2 className="mt-6 font-serif text-5xl md:text-6xl">Support that adapts to the life you actually lead.</h2>
<p className="mt-6 leading-8 text-primary-foreground/75">For clients who require greater flexibility, continuity and discretion, private concierge arrangements can be discussed personally, including remote international sessions and flexible scheduling where available.</p>
<Link to="/business/vip-concierge-wellbeing" className="button-gold mt-8">Explore Private Concierge</Link>
</div></div></section>

<section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
<p className="eyebrow text-gold">PRIVATE WELLBEING · GCC · INTERNATIONAL</p><h2 className="mt-5 font-serif text-5xl">Frequently asked questions</h2>
<div className="mt-10 divide-y divide-border">
{[
["What is private wellbeing advisory?","Private wellbeing advisory is a confidential, personalised space to reflect on wellbeing, pressure, relationships, life transitions and personal priorities. It is shaped around the individual rather than a standard programme."],
["Who is Gulfwellbeing for?","Gulfwellbeing works with individuals, women, men, families and leaders who want a discreet space for personal wellbeing, reflection and change."],
["Is this available in the Gulf and internationally?","Gulfwellbeing is positioned for clients across the GCC and internationally. Session format and availability can be discussed privately."],
["What can sessions cover?","Depending on the individual's circumstances, conversations may include stress and burnout, emotional balance, relationships and family, confidence, life transitions, mindfulness, holistic wellbeing and executive pressure."],
["How do I begin?","Start with a private enquiry. Share only what feels appropriate, and the next step can be discussed personally."]
].map(([q,a])=><details key={q} className="py-6"><summary className="cursor-pointer list-none pr-8 font-serif text-2xl">{q}</summary><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{a}</p></details>)}
</div></section>

<section className="px-6 py-24 text-center"><LockKeyhole className="mx-auto size-8 text-gold"/><p className="eyebrow mt-6 text-gold">PRIVATE & DISCREET</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl">Begin with a private conversation.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">No pressure and no predefined programme. Simply a first conversation about where you are and what you are looking for.</p><Link to="/book" className="button-primary mt-9">Request a Private Session</Link></section>
</SiteShell>}

