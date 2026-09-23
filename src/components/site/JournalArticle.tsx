import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

type ArticleProps={eyebrow:string;title:string;description:string;sections:[string,string][];related:{label:string;to:string}[]};

export function JournalArticle({eyebrow,title,description,sections,related}:ArticleProps){
 return <SiteShell><article>
  <header className="page-hero"><div className="mx-auto max-w-4xl px-6 py-24 lg:px-12 lg:py-32"><p className="eyebrow text-gold">{eyebrow}</p><h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></div></header>
  <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1fr_.32fr] lg:px-12 lg:py-28">
   <div className="space-y-12">{sections.map(s=><section key={s[0]}><h2 className="font-serif text-3xl md:text-4xl">{s[0]}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{s[1]}</p></section>)}
   <section className="border-t border-border pt-10"><p className="eyebrow text-gold">PRIVATE ENQUIRY</p><h2 className="mt-4 font-serif text-4xl">If this reflects what you are navigating, a private conversation can be the next step.</h2><Link to="/book" className="button-gold mt-7">Request a Private Session <ArrowRight className="size-4"/></Link></section></div>
   <aside className="lg:border-s lg:border-border lg:ps-10"><p className="eyebrow text-gold">EXPLORE</p><div className="mt-5 space-y-4">{related.map(r=><Link key={r.to} to={r.to} className="flex items-center justify-between border-b border-border pb-4 text-sm">{r.label}<ArrowRight className="size-4"/></Link>)}</div></aside>
  </div>
 </article></SiteShell>
}