import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHeadFor } from "@/components/site/PageMeta";

const principles = [
  ["01","LA PERSONNE AVANT LE PROBLÈME","Nous ne réduisons pas une personne à un seul problème. Le point de départ est l'individu : ce qu'il vit, ce qu'il porte, ce qui a changé et ce qui compte maintenant."],
  ["02","LE CONTEXTE AVANT LE CONSEIL","Avant toute orientation vient la compréhension. Les circonstances de vie, les responsabilités, les relations et l'environnement déterminent ce que l'accompagnement peut réellement signifier."],
  ["03","LA CLARTÉ INTÉRIEURE AVANT LE CHANGEMENT EXTÉRIEUR","Une plus grande clarté peut créer l'espace nécessaire pour prendre des décisions, poser des limites, avoir certaines conversations et avancer avec davantage de discernement."],
  ["04","LE BIEN-ÊTRE DE LA PERSONNE DANS SON ENSEMBLE","Vie privée, relations, famille, responsabilité, leadership et mode de vie peuvent se croiser. L'approche considère la personne dans son ensemble plutôt que de séparer artificiellement les domaines de sa vie."],
  ["05","PRIVÉ, INDIVIDUEL, SANS SCÉNARIO IMPOSÉ","Il n'existe pas de programme fixe imposé à tous. Le sujet, le rythme et le format sont construits autour de la personne et de la raison de la conversation."]
] as const;

export const Route = createFileRoute("/fr/the-tarkan-approach")({
  head: (ctx) => pageHeadFor(ctx, "L'Approche Tarkan | Conseil privé en bien-être dans le Golfe | GULFWELLBEING", "Découvrez l'Approche Tarkan de Sourour Tarkan : une démarche privée, contextuelle et centrée sur la personne pour le bien-être dans le Golfe et à l'international.", "/fr/the-tarkan-approach"),
  component: Page,
});

function Page() {
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow text-gold">L'APPROCHE TARKAN</p>
        <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[1.02] md:text-8xl">Une autre manière d'aborder le bien-être.</h1>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted-foreground">Une approche privée, globale et personnelle, construite autour de l'individu plutôt que d'une formule prédéfinie.</p>
      </div>
    </section>
    <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
        <div><p className="eyebrow text-gold">LA PHILOSOPHIE</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">La personne vient en premier.</h2></div>
        <p className="max-w-3xl text-sm leading-7 text-primary-foreground/70">L'Approche Tarkan commence par l'écoute. Elle laisse une place à la complexité, au contexte personnel et à la réalité derrière le rôle que l'on porte. Ce n'est pas un programme rigide et ce n'est pas une tentative de transformer une vie complexe en liste de tâches.</p>
      </div>
    </section>
    <section className="mx-auto max-w-[1300px] px-6 py-20 lg:px-12 lg:py-32">
      {principles.map(([n,label,description]) => <article key={n} className="grid gap-8 border-t border-border py-16 md:grid-cols-[90px_1fr] lg:gap-16 lg:py-20">
        <span className="font-serif text-2xl text-gold/70">{n}</span>
        <div>
          <p className="text-[9px] uppercase tracking-[.26em] text-muted-foreground/60">{label}</p>
          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-7xl lg:text-[5.8rem]">{description}</h2>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-muted-foreground">{label.charAt(0) + label.slice(1).toLowerCase()} — une formulation qui reste au service de la réalité de la personne, et non l'inverse.</p>
        </div>
      </article>)}
    </section>
    <section className="bg-secondary px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow text-gold">LE GOLFE & L'INTERNATIONAL</p>
        <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Une approche, mais aucune vie identique.</h2>
        <p className="mt-7 max-w-3xl text-sm leading-7 text-muted-foreground">Une vie entre Dubaï, Abou Dhabi, Riyad, Djeddah, Doha, Koweït, Manama ou Mascate, ou entre le Golfe et le reste du monde, peut réunir travail, voyages, famille et responsabilités. L'Approche Tarkan ne suppose pas que ces expériences se ressemblent : elle commence par le contexte de la personne.</p>
      </div>
    </section>
    <section className="bg-background px-6 py-20 text-center lg:py-28">
      <p className="eyebrow text-gold">UNE CONVERSATION PRIVÉE</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">Commencez par ce qui compte pour vous.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">Si vous recherchez un conseil privé en bien-être, vous pouvez partager uniquement ce qui vous semble pertinent et demander une première conversation.</p>
      <Link to="/fr/book" className="button-primary mt-9 inline-flex items-center gap-2">Demander une consultation privée <ArrowRight className="size-4" /></Link>
    </section>
  </SiteShell>;
}
