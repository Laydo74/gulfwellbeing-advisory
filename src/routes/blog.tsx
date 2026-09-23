import { createFileRoute,Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import stillLife from "@/assets/private-still-life.jpg";

export const Route=createFileRoute("/blog")({
  head:()=>pageHead("The Private Journal — GULFWELLBEING","Thoughtful perspectives from Gulfwellbeing on wellbeing, relationships, leadership and life transitions."),
  component:Page
});
const categories=["Wellbeing","Leadership","Women","Men","Relationships","Life Transitions","Executive Wellbeing"];
function Page(){return <SiteShell><section className="page-hero"><div className="mx-auto grid min-h-[68vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12"><div><p className="eyebrow text-gold">THE PRIVATE JOURNAL</p><h1 className="mt-6 font-serif text-6xl md:text-8xl">Perspectives for a more considered life.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Occasional reflections on wellbeing, relationships, leadership, personal change and the realities of a demanding life.</p></div><img src={stillLife} width={1408} height={1008} alt="A private journal and writing desk" className="h-[50vh] w-full object-cover"/></div></section><section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12"><div className="flex flex-wrap gap-3">{categories.map(c=><span key={c} className="border border-border px-4 py-2 text-xs uppercase tracking-[.12em]">{c}</span>)}</div><div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{[
["Private Wellbeing Advisory in the Gulf","A personal approach for individuals and families living with demanding lives.","/blog/private-wellbeing-advisory-gulf"],
["Stress and Burnout in Executives","Creating space before sustained pressure takes over.","/blog/stress-burnout-executives"],
["Women's Wellbeing in the Gulf","Identity, relationships, family life, confidence and transitions.","/blog/womens-wellbeing-gulf"],
["Men's Wellbeing","The pressure behind responsibility, fatherhood and leadership.","/blog/mens-wellbeing-pressure"],
["Relationships & Family Wellbeing","Making space for communication, boundaries and what matters.","/blog/relationships-family-wellbeing"],
["Life Transitions & Wellbeing","Finding perspective when familiar roles and priorities change.","/blog/life-transitions-wellbeing"]
].map(([title,text,to],i)=><Link key={to} to={to as any} className="group bg-background p-7 transition-colors hover:bg-secondary"><span className="text-xs text-gold">0{i+1}</span><h2 className="mt-10 font-serif text-3xl leading-tight">{title}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm">Read the perspective <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></span></Link>)}</div></section></SiteShell>}
