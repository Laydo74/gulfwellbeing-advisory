import { createFileRoute,Link } from "@tanstack/react-router";
import { ArrowRight,LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import stillLife from "@/assets/private-still-life.jpg";

export const Route=createFileRoute("/about")({
  head:()=>pageHead("About Sourour Tarkan — GULFWELLBEING","Meet Sourour Tarkan, wellbeing advisor and coach, and discover the private Gulfwellbeing approach."),
  component:Page
});

const sections=[
  ["practitioner","THE ADVISOR","Sourour Tarkan","Gulfwellbeing is led by Sourour Tarkan, a private wellbeing advisor and coach whose work brings together reflective coaching, holistic wellbeing practices and Reiki. She is a Reiki Master, offering a personal and discreet space for reflection, wellbeing and meaningful change. The work is centred on listening carefully, understanding the person behind the circumstances and shaping each conversation around what is relevant to that individual. Gulfwellbeing is designed for private clients seeking a discreet space for wellbeing, reflection and meaningful personal change across the Gulf and internationally."],
  ["approach","THE APPROACH","Personal. Holistic. Considered.","There is no standard version of a private life, and there is no single formula for wellbeing. Sourour's approach begins with your context: what you are carrying, what has changed, what you want to understand and where you want to go next. Sessions may draw on reflective coaching, holistic wellbeing practices and Reiki according to the individual's needs, preferences and agreed focus."],
  ["private-confidential","PRIVATE & CONFIDENTIAL","A space where you can speak freely.","Discretion is part of the experience. Sessions are designed as a calm, respectful setting where personal circumstances can be discussed without judgement or unnecessary exposure. The pace, focus and format are shaped around the client."]
] as const;

function Page(){return <SiteShell><section className="page-hero"><div className="mx-auto grid min-h-[74vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12"><div><p className="eyebrow text-gold">ABOUT GULFWELLBEING</p><h1 className="mt-6 font-serif text-6xl md:text-7xl">A human approach to a complex life.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Private wellbeing advisory and coaching with Sourour Tarkan, a Reiki Master and wellbeing advisor, shaped around the person rather than a predefined programme.</p></div><img src="/images/sourour-tarkan-about.jpg" width={240} height={300} alt="Sourour Tarkan, private wellbeing advisor and coach" className="h-[55vh] w-full object-cover object-center"/></div></section>
<section className="mx-auto max-w-5xl px-6 py-20">{sections.map(([id,eyebrow,title,body],i)=><article id={id} key={id} className="scroll-mt-28 border-t border-border py-16"><div className="grid gap-8 md:grid-cols-[180px_1fr]"><div><span className="font-serif text-3xl text-gold">0{i+1}</span><p className="eyebrow mt-5">{eyebrow}</p></div><div><h2 className="font-serif text-5xl">{title}</h2><p className="mt-6 max-w-2xl leading-8 text-muted-foreground">{body}</p>{i===2&&<div className="mt-8 flex items-center gap-3 text-sm"><LockKeyhole className="size-5 text-gold"/>Discretion is treated as part of the experience.</div>}</div></div></article>)}</section>
<section className="bg-secondary px-6 py-20 text-center"><h2 className="font-serif text-5xl">Begin with a private conversation.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">The first conversation is simply an opportunity to see whether the approach feels right for you.</p><Link to="/book" className="button-primary mt-8">Book a Private Session <ArrowRight className="size-4"/></Link></section></SiteShell>}
