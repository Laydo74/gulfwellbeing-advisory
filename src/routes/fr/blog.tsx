import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import stillLife from "@/assets/private-still-life.jpg";

export const Route = createFileRoute("/fr/blog")({
  head: (ctx) => pageHeadFor(ctx, "Le Journal Privé | GULFWELLBEING", "Réflexions originales sur le bien-être privé, les relations, le leadership, la pression exécutive et les transitions de vie, dans le Golfe et à l'international.", "/fr/blog"),
  component: Page,
});

type ArticleProps = { eyebrow: string; title: string; description: string; sections: [string, string][]; faqs: [string, string][] };

function FrArticle({ eyebrow, title, description, sections, faqs }: ArticleProps) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = origin ? origin + window.location.pathname : window.location.pathname;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    inLanguage: "fr",
    author: { "@type": "Person", name: "Sourour Tarkan", url: origin ? origin + "/fr/about" : "/fr/about" },
    publisher: { "@type": "Organization", name: "GULFWELLBEING" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: origin ? [origin + "/images/sourour-tarkan-home.jpg"] : ["/images/sourour-tarkan-home.jpg"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: origin ? origin + "/fr" : "/fr" },
      { "@type": "ListItem", position: 2, name: "Journal", item: origin ? origin + "/fr/blog" : "/fr/blog" },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };
  return (
    <SiteShell>
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <header className="page-hero"><div className="mx-auto max-w-4xl px-6 py-24 lg:px-12 lg:py-32"><p className="eyebrow text-gold">{eyebrow}</p><h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">{title}</h1><p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground">{description}</p></div></header>
        <figure className="mx-auto max-w-6xl px-6 pt-10 lg:px-12 lg:pt-16">
          <img src={stillLife} width={1408} height={1008} alt={title + " — Journal privé GULFWELLBEING"} className="h-[38vh] w-full object-cover lg:h-[52vh]" loading="eager" />
          <figcaption className="mt-3 text-xs uppercase tracking-[.16em] text-muted-foreground">GULFWELLBEING · Journal privé du bien-être</figcaption>
        </figure>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1fr_.32fr] lg:px-12 lg:py-28">
          <div className="space-y-14">
            {sections.map((s) => (
              <section key={s[0]}><h2 className="font-serif text-3xl md:text-4xl">{s[0]}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">{s[1]}</p></section>
            ))}
            <section className="border-t border-border pt-12"><p className="eyebrow text-gold">FAQ</p><h2 className="mt-4 font-serif text-4xl">Questions fréquentes</h2><div className="mt-8 divide-y divide-border">{faqs.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">{a}</p></details>)}</div></section>
            <section className="border-t border-border pt-10"><p className="eyebrow text-gold">DEMANDE PRIVÉE</p><h2 className="mt-4 font-serif text-4xl">Si cela reflète ce que vous traversez, une conversation privée peut être la prochaine étape.</h2><Link to="/fr/book" className="button-gold mt-7">Demander une consultation privée <ArrowRight className="size-4" /></Link></section>
          </div>
          <aside className="lg:border-s lg:border-border lg:ps-10">
            <p className="eyebrow text-gold">EXPLORER</p>
            <div className="mt-5 space-y-4">
              <Link to="/fr/wellbeing" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être personnel<ArrowRight className="size-4" /></Link>
              <Link to="/fr/women" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être des femmes<ArrowRight className="size-4" /></Link>
              <Link to="/fr/men" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être des hommes<ArrowRight className="size-4" /></Link>
              <Link to="/fr/business" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être en entreprise<ArrowRight className="size-4" /></Link>
              <Link to="/fr/the-tarkan-approach" className="flex items-center justify-between border-b border-border pb-4 text-sm">L'Approche Tarkan<ArrowRight className="size-4" /></Link>
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}

const articles: Record<string, ArticleProps> = {
  "conseil-prive-bien-etre-golfe": {
    eyebrow: "CONSEIL PRIVÉ EN BIEN-ÊTRE",
    title: "Le conseil privé en bien-être dans le Golfe : ce qu'une approche plus personnelle peut offrir",
    description: "Une introduction posée au conseil privé en bien-être pour les personnes et les familles qui mènent une vie personnelle ou professionnelle exigeante.",
    sections: [
      ["Un accompagnement différent", "Le conseil privé en bien-être ne repose pas sur un programme standard. Il commence par le contexte de la personne : les responsabilités qu'elle porte, les relations qui comptent, les changements en cours et les zones où davantage de clarté serait utile."],
      ["Pourquoi la confidentialité compte", "Pour les dirigeants, entrepreneurs, familles et personnalités publiques, pouvoir parler sans jouer un rôle a une réelle valeur. Une relation de conseil discrète crée un espace pour examiner la pression, les limites, les décisions et les priorités personnelles, loin des exigences du quotidien."],
      ["Ce que les séances peuvent explorer", "Selon le sujet convenu, les échanges peuvent porter sur le stress, l'équilibre émotionnel, les relations, la confiance en soi, les transitions de vie, la pleine conscience ou le bien-être holistique. L'accent est mis sur la personne plutôt que sur une formule figée."],
      ["Le contexte du Golfe compte", "Les clients vivant à Dubaï, Abou Dhabi, Doha, Riyad, Djeddah, Koweït City, Manama ou Mascate peuvent composer avec des carrières internationales, des relations familiales élargies, des déplacements fréquents et des emplois du temps très chargés. Une conversation utile a donc besoin de contexte : il ne s'agit pas d'imposer une routine de bien-être générique, mais de comprendre la vie réelle de la personne et ce qu'elle souhaite y changer."],
    ],
    faqs: [
      ["Qu'est-ce que le conseil privé en bien-être ?", "C'est un espace confidentiel et personnalisé pour explorer le bien-être, la clarté, les relations, le changement personnel et les réalités d'une vie exigeante."],
      ["À qui s'adresse le conseil privé en bien-être ?", "Il peut concerner des particuliers, des familles, des dirigeants, des entrepreneurs et toute personne qui accorde de la valeur à la discrétion et à une approche très individuelle."],
      ["Les séances peuvent-elles se dérouler à distance dans le Golfe ?", "Oui. Une relation de conseil privée peut être organisée à distance pour des clients dans tout le Golfe et à l'international."],
      ["Le conseil en bien-être remplace-t-il un suivi médical ou psychologique ?", "Non. Lorsqu'un suivi clinique, médical ou psychologique est nécessaire, des professionnels qualifiés doivent être impliqués."],
    ],
  },
  "stress-epuisement-dirigeants": {
    eyebrow: "BIEN-ÊTRE EXÉCUTIF",
    title: "Stress et épuisement chez les dirigeants",
    description: "Créer de l'espace avant qu'une pression soutenue ne prenne le dessus.",
    sections: [
      ["Quand la haute performance devient un état permanent", "La pression exécutive peut être difficile à reconnaître précisément parce que tout continue de fonctionner : les réunions ont lieu, les décisions sont prises, les responsabilités sont assumées, tandis que le repos, les relations et l'attention personnelle reçoivent progressivement moins de place."],
      ["La différence entre pression et recul", "Une conversation privée sur le bien-être peut créer une distance avec les exigences immédiates du leadership. Cette distance permet d'examiner ce qui est réellement nécessaire, ce qui est devenu une habitude et où les limites se sont estompées."],
      ["Le bien-être exécutif dans le Golfe", "Les dirigeants du Golfe évoluent souvent entre plusieurs cultures, fuseaux horaires et réseaux professionnels. La croissance des affaires, les engagements familiaux, les déplacements et l'attente d'une disponibilité constante peuvent créer un environnement particulièrement dense."],
      ["Au-delà de la productivité", "Le bien-être ne devrait pas se réduire à un indicateur de performance supplémentaire. Une relation de conseil privée peut explorer la personne derrière le rôle : les relations, l'identité, l'équilibre émotionnel, les priorités personnelles et la capacité à vivre pleinement en dehors du travail."],
    ],
    faqs: [
      ["Que peut explorer le conseil privé en bien-être exécutif ?", "Il peut explorer la pression continue, les limites, la fatigue décisionnelle, les relations, les priorités personnelles et l'aspect humain du leadership."],
      ["Le bien-être exécutif ne concerne-t-il que la productivité ?", "Non. L'approche considère aussi la personne derrière le rôle : relations, identité, équilibre émotionnel et vie en dehors du travail."],
      ["Les dirigeants dans le Golfe peuvent-ils travailler à distance avec une conseillère ?", "Oui. Des séances privées à distance peuvent assurer une continuité pour les dirigeants qui voyagent ou travaillent entre plusieurs pays du Golfe et à l'international."],
      ["Quand faut-il consulter un professionnel de santé clinique ?", "Si des symptômes ou des préoccupations nécessitent un diagnostic ou un traitement, des professionnels médicaux ou de santé mentale qualifiés doivent prendre le relais."],
    ],
  },
  "bien-etre-femmes-golfe": {
    eyebrow: "BIEN-ÊTRE DES FEMMES",
    title: "Le bien-être des femmes dans le Golfe",
    description: "Identité, relations, vie de famille, confiance et transitions.",
    sections: [
      ["Les multiples dimensions du bien-être des femmes", "Le bien-être des femmes peut mobiliser plusieurs réalités à la fois : identité professionnelle, vie de famille, couple, maternité, confiance en soi, attentes et aspirations personnelles. Dans les communautés du Golfe, ces dimensions peuvent être influencées par les structures familiales, la culture et les responsabilités sociales."],
      ["Un espace qui appartient à la personne", "De nombreuses femmes passent une grande partie de leur temps à répondre aux besoins des autres. Une séance privée peut offrir autre chose : un temps délibérément centré sur la personne elle-même, pour explorer la confiance, l'équilibre émotionnel, les limites, les relations ou les transitions."],
      ["Des femmes menant des vies internationales exigeantes", "Pour les femmes qui se déplacent entre les villes du Golfe, une carrière internationale et des engagements familiaux, la continuité peut être particulièrement précieuse. Une relation de conseil privée à distance peut offrir un espace de réflexion constant, même lorsque les routines et les lieux changent."],
      ["Maternité, identité et changement", "La maternité peut apporter du sens et de l'amour tout en modifiant le temps, l'identité et les attentes. Les conversations privées sur le bien-être peuvent explorer la tension entre prendre soin des autres et préserver un sentiment de soi."],
    ],
    faqs: [
      ["Que peuvent explorer les séances de bien-être des femmes ?", "Les sujets peuvent inclure la confiance en soi, les relations, la maternité, les limites, l'équilibre émotionnel, les transitions et les priorités personnelles."],
      ["L'approche est-elle spécifique aux femmes vivant dans le Golfe ?", "L'approche tient compte des réalités de la vie dans le Golfe tout en restant individuelle ; aucune expérience culturelle ou familiale unique n'est présumée."],
      ["Les mères peuvent-elles disposer d'un espace privé pour elles-mêmes ?", "Oui. Une séance peut offrir un temps dédié pour considérer son identité, ses besoins et ses priorités, aux côtés des responsabilités de la maternité."],
      ["Les séances sont-elles confidentielles ?", "Le service est conçu comme une relation de conseil privée et discrète, avec des limites professionnelles appropriées."],
    ],
  },
};

function Page() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/fr/blog/") ? location.pathname.split("/").filter(Boolean)[2] : "";
  const article = articles[slug];
  if (article) return <FrArticle {...article} />;

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid min-h-[68vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-gold">LE JOURNAL PRIVÉ</p>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl">Des perspectives pour une vie plus posée.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Réflexions occasionnelles sur le bien-être, les relations, le leadership, le changement personnel et les réalités d'une vie exigeante.</p>
          </div>
          <img src={stillLife} width={1408} height={1008} alt="Un journal privé et un bureau d'écriture" className="h-[50vh] w-full object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="mt-2 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Le conseil privé en bien-être dans le Golfe", "Une approche personnelle pour les personnes et les familles menant une vie exigeante.", "/fr/blog/conseil-prive-bien-etre-golfe"],
            ["Stress et épuisement chez les dirigeants", "Créer de l'espace avant qu'une pression soutenue ne prenne le dessus.", "/fr/blog/stress-epuisement-dirigeants"],
            ["Le bien-être des femmes dans le Golfe", "Identité, relations, vie de famille, confiance et transitions.", "/fr/blog/bien-etre-femmes-golfe"],
          ].map(([title, text, to], i) => (
            <div key={to} className="group relative z-10 bg-background p-7 transition-colors hover:bg-secondary">
              <span className="text-xs text-gold">0{i + 1}</span>
              <Link to={to ?? "/fr/blog"} className="relative z-20 block cursor-pointer"><h2 className="mt-10 font-serif text-3xl leading-tight hover:underline">{title}</h2></Link>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
              <Link to={to ?? "/fr/blog"} className="relative z-20 mt-6 inline-flex cursor-pointer items-center gap-2 text-sm">Lire l'article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl text-sm leading-7 text-muted-foreground">D'autres perspectives en français — sur les relations, les transitions de vie, la pleine conscience et le leadership — sont ajoutées régulièrement au journal.</p>
      </section>
    </SiteShell>
  );
}
