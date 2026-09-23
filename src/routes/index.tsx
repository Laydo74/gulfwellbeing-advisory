import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

export const Route=createFileRoute("/")({
  head:()=>pageHead("GULFWELLBEING — Private Wellbeing Advisory & Coaching","Private wellbeing advisory and coaching with Sourour Tarkan for individuals, families and executives across the Gulf and internationally."),
  component:Home
});

const areas=[
  ["Wellbeing","A private space for clarity, balance, transitions and a more considered way forward.","/wellbeing"],
  ["Women","Personal, family and relationship support shaped around the whole of your life.","/women"],
  ["Men","Discreet perspective for responsibility, family, leadership and personal direction.","/men"],
  ["Business & Executive","Private advisory for founders, executives and senior professionals.","/business"]
] as const;

function Home(){
return <SiteShell>
<section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-primary text-primary-foreground">
<img src={hero} width={1920} height={1200} fetchPriority="high" alt="Private wellbeing advisory setting in the Gulf" className="absolute inset-0 size-full object-cover"/>
<div className="absolute inset-0 bg-hero-overlay"/>
<div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] items-end px-6 pb-16 lg:px-12 lg:pb-20">
<div className="max-w-4xl reveal">
<p className="eyebrow text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
<h1 className="mt-6 font-serif text-5xl leading-[.98] md:text-7xl lg:text-8xl">A private space to live with greater clarity.</h1>
<p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/75">Personal advisory and coaching with <strong className="text-primary-foreground">Sourour Tarkan</strong> for individuals, families and leaders navigating a demanding life.</p>
<div className="mt-9 flex flex-wrap gap-3"><Link to="/book" className="button-gold">Request a Private Session <ArrowRight className="size-4"/></Link><Link to="/wellbeing" className="button-on-dark">Explore Wellbeing</Link></div>
</div></div></section>

<section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
<div><p className="eyebrow text-gold">THE GULFWELLBEING APPROACH</p><Sparkles className="mt-8 size-7 text-gold"/></div>
<div><h2 className="font-serif text-4xl leading-tight md:text-6xl">Your circumstances are personal. Your support should be too.</h2>
<p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Gulfwellbeing offers a calm, confidential setting to step back from the noise, understand what matters and consider your next chapter with greater perspective.</p>
<p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">There is no one-size-fits-all programme. The conversation begins with you.</p>
<Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm">Meet Sourour Tarkan <ArrowRight className="size-4"/></Link>
</div></div></section>

<section className="bg-secondary"><div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<p className="eyebrow text-gold">AREAS OF ADVISORY</p>
<div className="mt-10 grid md:grid-cols-2">{areas.map((a,i)=><Link key={a[0]} to={a[2]} className="group border-t border-border p-8 transition-colors hover:bg-background md:min-h-64"><span className="font-serif text-xl text-gold">0{i+1}</span><h3 className="mt-10 font-serif text-4xl">{a[0]}</h3><p className="mt-3 max-w-sm text-muted-foreground">{a[1]}</p><ArrowRight className="mt-7 size-5 transition-transform group-hover:translate-x-2"/></Link>)}</div>
</div></section>

<section className="grid lg:grid-cols-2"><img src={woman} loading="lazy" width={1008} height={1408} alt="Private advisory for women" className="h-[70vh] w-full object-cover"/>
<div className="flex items-center bg-primary px-8 py-16 text-primary-foreground lg:px-20"><div><p className="eyebrow text-gold">FOR WOMEN</p><h2 className="mt-5 font-serif text-5xl">A private space for every dimension of your life.</h2><p className="mt-6 max-w-lg leading-7 text-primary-foreground/65">Personal, family and professional life rarely exist separately. Explore support that respects the whole context.</p><Link to="/women" className="button-gold mt-8">Explore Women's Wellbeing</Link></div></div></section>

<section className="grid lg:grid-cols-2"><div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:px-20"><div><p className="eyebrow text-gold">FOR MEN</p><h2 className="mt-5 font-serif text-5xl">Clarity for the man behind the responsibility.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">A discreet setting for leadership, family, pressure and personal direction.</p><Link to="/men" className="button-primary mt-8">Explore Men's Wellbeing</Link></div></div><img src={executive} loading="lazy" width={1008} height={1408} alt="Private advisory for men and executives" className="order-1 h-[70vh] w-full object-cover lg:order-2"/></section>

<section className="relative min-h-[70vh] overflow-hidden"><img src={stillLife} loading="lazy" width={1408} height={1008} alt="Private wellbeing advisory journal" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-image-overlay"/><div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-6 py-20 lg:px-12"><div className="max-w-2xl text-primary-foreground"><p className="eyebrow text-gold">PRIVATE CONCIERGE</p><h2 className="mt-6 font-serif text-5xl md:text-6xl">Support that adapts to the life you actually lead.</h2><p className="mt-6 leading-7 text-primary-foreground/70">For clients who require greater flexibility, continuity and discretion, private concierge arrangements are discussed personally.</p><Link to="/business/vip-concierge-wellbeing" className="button-gold mt-8">Explore Private Concierge</Link></div></div></section>

<section className="px-6 py-24 text-center lg:px-12"><LockKeyhole className="mx-auto size-8 text-gold"/><p className="eyebrow mt-6 text-gold">PRIVATE & DISCREET</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl">Begin with a private conversation.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Share only what feels appropriate. The first step is simply a conversation.</p><Link to="/book" className="button-primary mt-9">Request a Private Session</Link></section>
</SiteShell>
}
