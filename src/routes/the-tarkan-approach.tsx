import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

const principles = [
  ["01", "THE PERSON BEFORE THE PROBLEM", "We do not reduce a person to a single issue. The starting point is the individual: what they are carrying, what has changed, and what matters now.", "We begin with the person, not the label."],
  ["02", "CONTEXT BEFORE ADVICE", "Before direction comes understanding. Life circumstances, responsibilities, relationships and the environment around the person shape what support can realistically mean.", "Understanding the circumstances comes before prescribing a direction."],
  ["03", "INNER CLARITY BEFORE OUTER CHANGE", "Greater clarity can create space for more considered decisions, boundaries, conversations and next steps.", "Clarity is given room before change is demanded."],
  ["04", "WHOLE-PERSON WELLBEING", "Private life, relationships, family, responsibility, leadership and lifestyle can overlap. The approach considers the person as a whole rather than separating life into isolated categories.", "The different parts of a life are considered together."],
  ["05", "PRIVATE, INDIVIDUAL, UNSCRIPTED", "There is no fixed programme imposed on everyone. The focus, pace and format are shaped around the person and the purpose of the conversation.", "The work remains personal, private and responsive rather than scripted."]
] as const;

export const Route = createFileRoute("/the-tarkan-approach")({
  head: (ctx) => pageHeadFor(ctx, "The Tarkan Approach — GULFWELLBEING", "Discover the private wellbeing approach developed around Sourour Tarkan's person-first, contextual and whole-person philosophy."),
  component: Page,
});

function Page() {
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow text-gold">THE TARKAN APPROACH</p>
        <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[1.02] md:text-8xl">A different way of approaching wellbeing.</h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">A private, whole-person approach shaped around the individual rather than a predefined formula.</p>
      </div>
    </section>
    <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="eyebrow text-gold">THE PHILOSOPHY</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">The person comes first.</h2></div>
        <p className="max-w-3xl text-lg leading-9 text-primary-foreground/70">The Tarkan Approach begins with listening. It makes room for complexity, personal context and the reality behind the role a person may be carrying. It is not a rigid programme, and it is not designed to turn a complex life into a checklist.</p>
      </div>
    </section>
    <section className="mx-auto max-w-[1300px] px-6 py-20 lg:px-12 lg:py-32">
      {principles.map(([n,title,description,closing])=><article key={n} className="grid gap-8 border-t border-border py-14 md:grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr]"><span className="font-serif text-3xl text-gold">{n}</span><div><h2 className="max-w-5xl font-sans text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl">{title}</h2><p className="mt-6 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">{description}</p><p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-foreground/70 sm:text-base">{closing}</p></div></article>)}
    </section>
    <section className="bg-secondary px-6 py-20 text-center lg:py-28">
      <p className="eyebrow text-gold">A PRIVATE CONVERSATION</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">Begin with what matters to you.</h2>
      <Link to="/book" className="button-primary mt-9 inline-flex items-center gap-2">Request a Private Conversation <ArrowRight className="size-4" /></Link>
    </section>
  </SiteShell>;
}
