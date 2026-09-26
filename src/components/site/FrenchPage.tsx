import { Link } from "@tanstack/react-router";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { FaqSection } from "./FaqSection";
import { SiteShell } from "@/components/site/SiteShell";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

type Kind =
  | "wellbeing"
  | "women"
  | "men"
  | "business"
  | "vip"
  | "about"
  | "approach"
  | "blog"
  | "privacy"
  | "terms";

type Section = { title: string; body: string };

type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

const data: Record<Kind, PageData> = {
  wellbeing: {
    eyebrow: "CONSEIL PRIVÉ EN BIEN-ÊTRE DANS LE GOLFE",
    title: "Un accompagnement privé pour une vie plus posée.",
    intro:
      "GULFWELLBEING propose un accompagnement et un coaching privés en ligne pour les personnes confrontées au stress, à la pression émotionnelle, aux relations, aux transitions de vie et aux exigences d'une vie bien remplie. Les séances sont personnelles, discrètes et adaptées à votre situation, où que vous soyez dans le Golfe ou à l'international.",
    sections: [
      { title: "Stress & épuisement professionnel", body: "Une pression soutenue peut affecter la concentration, les relations, l'énergie et la capacité à être présent. Le conseil privé crée un espace pour comprendre ce qui alimente cette pression et envisager des manières plus durables de travailler et de vivre." },
      { title: "Équilibre émotionnel", body: "Un cadre confidentiel pour réfléchir aux émotions difficiles, aux schémas récurrents et aux périodes plus difficiles à traverser. L'accent est mis sur une conscience et une perspective plus claires, plutôt que sur un programme standardisé." },
      { title: "Transitions de vie", body: "Les changements de carrière, de vie familiale, de relations, d'identité ou de priorités personnelles peuvent demander un regard différent. GULFWELLBEING offre un accompagnement réfléchi pendant que vous clarifiez ce qui a changé, ce qui compte aujourd'hui et la direction que vous souhaitez prendre." },
      { title: "Relations & vie de famille", body: "Les relations proches peuvent s'accompagner d'attentes, de difficultés de communication et de responsabilités concurrentes. Les séances offrent un espace privé pour examiner les limites, la communication, la dynamique familiale et les choix qui se présentent à vous." },
      { title: "Pleine conscience & présence", body: "Les pratiques de pleine conscience peuvent soutenir une conscience plus fine des pensées, des émotions et des réactions quotidiennes. Lorsque cela est pertinent, des pratiques réflexives s'intègrent à une conversation plus large sur le bien-être, construite autour de la personne." },
      { title: "Énergie & restauration", body: "Le bien-être concerne aussi la façon dont vous vivez votre énergie, votre attention et votre capacité. Des pratiques holistiques, dont le Reiki lorsque cela est approprié et souhaité par le client, peuvent faire partie d'une approche individuelle du bien-être." },
    ],
  },
  women: {
    eyebrow: "CONSEIL PRIVÉ POUR LES FEMMES",
    title: "Le bien-être des femmes, considéré dans son ensemble.",
    intro:
      "Conseil privé en bien-être pour les femmes confrontées aux relations, à la maternité, aux responsabilités familiales, à la confiance en soi, à l'identité, à la pression professionnelle et aux périodes de changement, pour des clientes de Dubaï, Abou Dhabi, Riyad, Doha et l'ensemble du Golfe.",
    sections: [
      { title: "Le bien-être des femmes", body: "Le bien-être des femmes est façonné par de nombreux aspects de la vie qui se chevauchent. GULFWELLBEING crée un espace confidentiel pour considérer vos propres besoins aux côtés des relations, de la famille, du travail, des attentes et des priorités personnelles." },
      { title: "Maternité", body: "La maternité peut apporter amour et sens, mais aussi responsabilité, fatigue, identité en mutation et pression liée à des attentes contradictoires. Les séances offrent un espace pour réfléchir à la femme au-delà de son rôle et à ce dont elle a besoin aujourd'hui." },
      { title: "Famille & vie privée", body: "La dynamique familiale peut se complexifier lorsque responsabilités, attentes et limites personnelles se superposent. Une conversation privée peut vous aider à examiner ce qui se passe et à décider de ce qui mérite votre attention." },
      { title: "Confiance & confiance en soi", body: "La confiance ne se résume pas à la performance. Elle peut aussi passer par la confiance en son propre jugement, une communication claire et des décisions qui reflètent vos valeurs et votre situation." },
      { title: "Pression conjugale & relationnelle", body: "Les relations peuvent comporter une distance émotionnelle, des difficultés de communication, des attentes ou des décisions difficiles à aborder ailleurs. GULFWELLBEING offre un cadre discret pour réfléchir sans jugement." },
      { title: "Transitions pour les femmes", body: "Les changements dans le travail, le mariage, la maternité, la vie de famille ou l'identité personnelle peuvent modifier la manière dont vous vous percevez et envisagez l'avenir. L'accompagnement aide à créer une perspective autour d'un nouveau chapitre." },
    ],
  },
  men: {
    eyebrow: "CONSEIL PRIVÉ POUR LES HOMMES",
    title: "Le bien-être des hommes, au-delà du rôle et de la responsabilité.",
    intro:
      "Accompagnement discret en bien-être pour les hommes qui portent une responsabilité professionnelle, des attentes familiales, une pression de leadership et des questions personnelles, pour des clients de Dubaï, Abou Dhabi, Riyad, Doha et l'ensemble du Golfe.",
    sections: [
      { title: "Le bien-être des hommes", body: "Le bien-être des hommes peut être étroitement lié au travail, à la famille, à la responsabilité, à l'identité et aux attentes liées à la force. Le conseil privé offre un espace pour considérer l'ensemble de la situation plutôt qu'un seul problème isolé." },
      { title: "Paternité & pression", body: "La paternité peut apporter la responsabilité autant que la pression de pourvoir, de protéger et de rester présent. Les séances offrent un espace privé pour réfléchir aux attentes, au couple, à la vie de famille et à sa propre capacité." },
      { title: "Équilibre émotionnel", body: "Lorsque la pression se prolonge, les émotions peuvent devenir difficiles à reconnaître ou à exprimer. Une relation de conseil privée peut créer un espace pour une conscience plus fine, une perspective et des réponses plus délibérées." },
      { title: "Confiance & leadership", body: "Le leadership commence par une clarté sur les décisions, les limites, la communication et la responsabilité. L'accompagnement peut soutenir une approche plus réfléchie des pressions qui accompagnent le leadership." },
      { title: "Le rôle de pourvoyeur", body: "Être celui sur qui l'on compte peut représenter un poids émotionnel et pratique invisible. C'est un espace privé pour examiner les attentes, la responsabilité et l'équilibre entre pourvoir aux besoins des autres et préserver son propre bien-être." },
      { title: "Transitions pour les hommes", body: "Changements de carrière, décisions professionnelles, évolutions relationnelles, paternité et changements d'identité peuvent créer un besoin de perspective. L'accompagnement soutient la réflexion durant ces périodes de transition." },
    ],
  },
  business: {
    eyebrow: "BIEN-ÊTRE EN ENTREPRISE & CONSEIL EXÉCUTIF PRIVÉ",
    title: "Le bien-être des dirigeants et de ceux qui portent la responsabilité.",
    intro:
      "Conseil privé en bien-être pour fondateurs, dirigeants, cadres supérieurs et organisations, pour des clients à Dubaï, Abou Dhabi, Riyad, Djeddah, Doha, Koweït, Bahreïn et Oman, confrontés à une pression soutenue, des décisions complexes, une responsabilité envers autrui et l'aspect humain de la performance.",
    sections: [
      { title: "Bien-être des cadres dirigeants", body: "La pression du leadership ne s'arrête pas aux heures de bureau. Elle peut affecter l'attention, les relations, l'énergie et la capacité personnelle. Le conseil privé crée un espace confidentiel, loin du rôle professionnel, pour retrouver une perspective et bâtir une capacité plus durable." },
      { title: "Bien-être des fondateurs", body: "Un fondateur porte souvent l'entreprise, les décisions, les équipes et l'incertitude à la fois. Les séances offrent un espace privé pour réfléchir à la pression, aux limites, à l'identité et au coût personnel de porter une entreprise." },
      { title: "Clarté de leadership & prise de décision", body: "Les décisions stratégiques ont parfois besoin de distance par rapport au bruit immédiat. Les séances peuvent offrir un espace pour réfléchir aux conversations difficiles, aux priorités concurrentes, aux limites et à l'orientation à plus long terme avec davantage de recul." },
      { title: "Pression & prévention de l'épuisement", body: "Une pression soutenue peut devenir normale avant de devenir visible. Le conseil privé aide les dirigeants à examiner les schémas de pression, de récupération, de charge de travail et de limites avant qu'ils ne deviennent plus difficiles à changer." },
      { title: "Leadership & bien-être des équipes", body: "Les dirigeants façonnent l'environnement humain qui les entoure. L'accompagnement peut soutenir des approches réfléchies de la communication, des attentes, du bien-être des équipes et des responsabilités liées à la direction de personnes." },
      { title: "Conseil en bien-être des entreprises", body: "Pour les organisations qui recherchent un regard extérieur discret sur l'aspect humain du leadership et du bien-être. Le travail peut être adapté à des groupes de direction, des équipes seniors ou des périodes spécifiques de changement organisationnel." },
    ],
  },
  vip: {
    eyebrow: "VIP · BIEN-ÊTRE PRIVÉ",
    title: "Un bien-être privé, sur mesure pour votre vie.",
    intro:
      "Un service conçu pour les particuliers, les familles et les dirigeants qui accordent de la valeur à la confidentialité, à la flexibilité et à une relation de conseil personnelle.",
    sections: [
      { title: "La confidentialité avant tout", body: "L'expérience commence par la compréhension du besoin et du contexte du client, puis par la construction du format adapté autour de cela. Il n'existe ni expérience collective, ni parcours imposé à l'avance." },
      { title: "Une flexibilité adaptée au mode de vie", body: "Séances à distance et arrangements flexibles pour les clients dans le Golfe et à l'international, selon la disponibilité et la nature de la relation de conseil." },
      { title: "Pour la personne, la famille et le leadership", body: "L'approche peut s'étendre au bien-être personnel, à la vie de famille, aux pressions exécutives et aux transitions qui nécessitent un niveau plus élevé de confidentialité." },
      { title: "Sur demande privée uniquement", body: "Les tarifs du service VIP ne sont pas communiqués publiquement. Le besoin est d'abord compris, puis le format, la disponibilité et l'investissement sont discutés de façon privée." },
    ],
  },
  about: {
    eyebrow: "À PROPOS DE SOUROUR TARKAN",
    title: "Le bien-être commence par une relation humaine authentique.",
    intro:
      "Sourour Tarkan est conseillère privée en bien-être, coach et Reiki Master. Son travail s'appuie sur une approche personnelle qui place la personne, son contexte et sa vie réelle au centre de la relation de conseil.",
    sections: [
      { title: "Sourour Tarkan", body: "La relation commence par écouter la personne telle qu'elle est, avec sa vie, ses responsabilités et son contexte propre. Il n'existe pas de modèle unique imposé à tous, ni besoin de réduire l'expérience humaine à un seul intitulé." },
      { title: "Une approche personnelle", body: "Les séances peuvent porter sur la pression, les relations, la famille, la confiance, les transitions, le leadership ou le besoin de retrouver un plus grand équilibre. Les priorités sont construites selon ce qui compte réellement pour le client." },
      { title: "Bien-être holistique & Reiki", body: "Lorsque cela est approprié et souhaité par le client, des pratiques de bien-être holistique et le Reiki peuvent s'intégrer à l'expérience. Sourour Tarkan est Reiki Master." },
      { title: "Un espace sans jugement", body: "La confidentialité et le respect ne sont pas un détail supplémentaire. Ils font partie de la nature même de la relation de conseil, afin que le client puisse parler et réfléchir plus librement." },
    ],
  },
  approach: {
    eyebrow: "L'APPROCHE TARKAN",
    title: "Une approche qui commence par la personne, non par le problème.",
    intro:
      "Une approche personnelle et flexible du bien-être qui commence par comprendre la personne telle qu'elle est, son contexte tel qu'il est, puis construit l'espace adapté à ce qu'elle a besoin de comprendre ou de changer.",
    sections: [
      { title: "La personne avant le problème", body: "L'expérience humaine ne se réduit pas à un seul intitulé. Nous commençons par la personne : ce qu'elle vit, ce qu'elle porte et ce qui a changé dans sa vie." },
      { title: "Le contexte avant le conseil", body: "Avant toute orientation vient un espace pour comprendre la réalité, les responsabilités, les relations et les circonstances qui façonnent le vécu quotidien." },
      { title: "La clarté intérieure avant le changement extérieur", body: "Lorsque ce qui se passe à l'intérieur devient plus clair, il devient possible de considérer les décisions, les limites, les relations et les prochaines étapes avec davantage de conscience." },
      { title: "Le bien-être de la personne dans son ensemble", body: "La vie privée, les relations, la famille, la responsabilité, le leadership et le mode de vie peuvent se croiser dans le travail, car ces aspects ne vivent pas séparément les uns des autres." },
      { title: "Privé, individuel, sans scénario imposé", body: "Il n'existe pas de programme unique imposé à tous. Le dialogue, le rythme et le focus se construisent selon la personne, son besoin et ce qui est convenu ensemble." },
    ],
  },
  blog: {
    eyebrow: "LE BLOG",
    title: "Un espace pour des idées qui méritent qu'on s'y arrête.",
    intro:
      "Articles et réflexions sur le bien-être, les relations, la vie privée, les femmes, les hommes, le leadership et les transitions que nous traversons.",
    sections: [
      { title: "Le bien-être dans une vie chargée de responsabilités", body: "Comment se créer un espace pour soi-même lorsque la vie est remplie de travail, de famille et de décisions ?" },
      { title: "Pression & épuisement", body: "Les signes d'une pression continue, l'importance de s'arrêter, et comment retrouver un espace personnel avant que l'épuisement ne devienne un mode de vie." },
      { title: "La femme entre le don de soi et elle-même", body: "Sur la confiance, la maternité, les relations et le besoin d'un espace où la femme n'est pas constamment sollicitée pour donner." },
      { title: "L'homme et la responsabilité de porter", body: "Sur la paternité, la responsabilité, la pression et l'image qui rend l'expression du besoin difficile." },
    ],
  },
  privacy: {
    eyebrow: "CONFIDENTIALITÉ",
    title: "La confidentialité fait partie de notre façon de travailler.",
    intro:
      "Nous utilisons les données que vous choisissez de partager avec nous dans la mesure nécessaire pour vous contacter et traiter votre demande privée.",
    sections: [
      { title: "Ce que vous pouvez nous fournir", body: "Cela peut inclure votre nom, votre e-mail, votre numéro de téléphone, votre pays, votre méthode de contact préférée, un horaire adapté et le message de votre demande." },
      { title: "Comment nous les utilisons", body: "Les données sont utilisées pour répondre aux demandes, coordonner la communication et gérer les demandes privées. Les données des demandes clients ne sont jamais rendues publiques." },
      { title: "Services techniques", body: "Le site peut s'appuyer sur des services d'hébergement, de base de données et d'authentification tiers. L'accès est géré selon les paramètres de ces services." },
    ],
  },
  terms: {
    eyebrow: "CONDITIONS GÉNÉRALES",
    title: "Utilisation du site et des services.",
    intro:
      "En utilisant ce site, vous acceptez de l'utiliser de manière légale et de comprendre la nature des services de bien-être et de coaching ainsi que leurs limites.",
    sections: [
      { title: "Nature du service", body: "GULFWELLBEING propose des services de conseil en bien-être, de coaching et de pratiques de bien-être holistique. Ces services ne remplacent pas les urgences, un diagnostic ou un traitement médical ou psychologique structuré." },
      { title: "Demande de séance", body: "L'envoi du formulaire constitue une demande privée et non une réservation automatique confirmée. Le contact est établi ultérieurement pour discuter de la disponibilité, du format et des tarifs." },
      { title: "Contenu du site", body: "Les articles et informations publiés le sont à des fins générales et ne constituent ni un avis médical, psychologique ou juridique, ni un substitut à un accompagnement spécialisé lorsque celui-ci est nécessaire." },
    ],
  },
};

export function FrenchPage({ kind }: { kind: Kind }) {
  const d = data[kind];
  const image =
    kind === "about" ? "/images/sourour-tarkan-home.jpg" : kind === "women" ? woman : kind === "men" || kind === "business" ? executive : stillLife;
  const isLegal = kind === "privacy" || kind === "terms";
  const gulfContext: Record<Kind, { title: string; body: string }> = {
    wellbeing: { title: "Un conseil privé pour vivre la vie du Golfe avec toute sa complexité", body: "La vie peut se répartir entre Dubaï, Abou Dhabi, Riyad, Doha, Koweït, Manama et Mascate, entre le travail, les déplacements, la famille et les engagements sociaux. C'est pourquoi l'accompagnement se construit autour du contexte réel de la personne, et non autour d'un programme uniforme." },
    women: { title: "Le bien-être des femmes dans le Golfe, loin des modèles imposés", body: "Dans des villes comme Dubaï, Abou Dhabi, Riyad ou Doha, la vie professionnelle, familiale, la maternité et les relations peuvent s'entrecroiser d'une manière particulière. Cet espace est dédié à la femme elle-même, et à ce qu'elle a besoin de comprendre ou de changer à ce stade de sa vie." },
    men: { title: "Un espace privé pour l'homme sous la pression de la responsabilité", body: "De Dubaï et Abou Dhabi à Riyad, Doha et le Koweït, la vie d'un homme peut être étroitement liée au travail, au leadership, à la famille et à la prise de décision. L'accompagnement lui offre un espace pour considérer ce qu'il porte, loin du besoin de paraître d'une certaine façon." },
    business: { title: "Le bien-être des dirigeants et des entreprises dans l'environnement du Golfe", body: "Les dirigeants et fondateurs aux Émirats, en Arabie saoudite, au Qatar, au Koweït, à Bahreïn et à Oman évoluent dans des environnements rapides et changeants. Le conseil privé se concentre sur la personne derrière le rôle : la pression, la clarté décisionnelle, les limites, les relations et la capacité à durer." },
    about: { title: "Une approche qui comprend la réalité de la vie dans le Golfe", body: "Sourour Tarkan travaille avec des personnes qui vivent entre des responsabilités personnelles, professionnelles et familiales entremêlées, dans le Golfe ou dans le cadre d'une vie internationale. La relation commence par l'écoute et la compréhension du contexte avant toute orientation." },
    approach: { title: "L'approche et le contexte du Golfe", body: "L'Approche Tarkan ne suppose pas que l'expérience d'une personne à Dubaï soit identique à celle d'une personne à Riyad ou à Doha. Le lieu, la famille, le travail, les déplacements et les responsabilités font partie du contexte à travers lequel la vie de chaque personne est comprise." },
    vip: { title: "Une confidentialité adaptée à une vie internationale", body: "Pour ceux dont la vie se répartit entre le Golfe et les déplacements internationaux, l'expérience privée peut être organisée autour d'emplois du temps chargés, de la flexibilité et du besoin d'un niveau élevé de confidentialité." },
    blog: { title: "Des lectures sur le bien-être dans le Golfe et la vie contemporaine", body: "Le blog aborde la pression, le leadership, les relations, la famille et les transitions personnelles avec un regard pratique et réfléchi, adapté à une vie chargée de responsabilités dans le Golfe et au-delà." },
    privacy: { title: "", body: "" },
    terms: { title: "", body: "" },
  };

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid min-h-[60vh] max-w-[1280px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-gold">{d.eyebrow}</p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] md:text-6xl">{d.title}</h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">{d.intro}</p>
            {!isLegal && (
              <a href="/fr/book" className="button-primary mt-9">
                Demander une consultation privée <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
          <img src={image} alt={kind === "about" ? "Sourour Tarkan, conseillère privée en bien-être et coach, Reiki Master" : `${d.eyebrow} — GULFWELLBEING`} className="mx-auto h-[34vh] w-full max-w-[30rem] object-cover lg:h-[48vh]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        {d.sections.map((section, index) => (
          <article key={section.title} className="border-t border-border py-12">
            <div className="grid gap-7 md:grid-cols-[150px_1fr]">
              <div>
                <span className="font-serif text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl leading-tight md:text-3xl">{section.title}</h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">{section.body}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!isLegal && (
        <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-gold">LE GOLFE</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">{gulfContext[kind].title}</h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{gulfContext[kind].body}</p>
          </div>
        </section>
      )}

      {kind === "business" && (
        <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-gold">BIEN-ÊTRE EN ENTREPRISE</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-7xl">Choisissez l'espace le plus proche de votre situation.</h2>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
              {[
                ["Bien-être des cadres dirigeants", "Un espace privé pour les dirigeants sous pression continue de responsabilité.", "/fr/business/executive-wellbeing"],
                ["Bien-être des fondateurs", "Un accompagnement privé pour ceux qui portent l'entreprise, les décisions et l'incertitude.", "/fr/business/founder-wellbeing"],
                ["Clarté de leadership", "Un espace pour réfléchir aux décisions difficiles, aux limites et aux conversations de direction.", "/fr/business/leadership-clarity"],
                ["Pression & prévention de l'épuisement", "Un accompagnement autour de la pression continue, de la récupération, du travail et des limites.", "/fr/business/burnout-prevention"],
                ["Leadership & bien-être des équipes", "Un accompagnement pour les dirigeants responsables des personnes, de la communication et de l'environnement humain.", "/fr/business/team-wellbeing"],
                ["Conseil en bien-être des entreprises", "Un regard extérieur privé pour les dirigeants et organisations en période de changement.", "/fr/business/corporate-advisory"],
              ].map(([title, text, href], index) => (
                <Link key={href} to={href as any} className="group bg-background p-7 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <span className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-serif text-3xl leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground group-hover:text-primary-foreground/70">{text}</p>
                  <ArrowUpRight className="mt-8 size-5 text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isLegal && (
        <section className="bg-secondary px-6 py-20 text-center">
          <LockKeyhole className="mx-auto size-5 text-gold" />
          <h2 className="mt-5 font-serif text-5xl">Commencez par un espace privé.</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Dites-nous ce que vous recherchez ; nous reviendrons vers vous en toute discrétion pour discuter de la suite.
          </p>
          <a href="/fr/book" className="button-primary mt-8">
            Envoyer une demande privée
          </a>
        </section>
      )}
    </SiteShell>
  );
}

export function FrenchHome() {
  return (
    <SiteShell>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
        <img src={hero} alt="GULFWELLBEING" className="absolute inset-0 size-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/72 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-end px-6 pb-16 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold">CONSEIL PRIVÉ EN BIEN-ÊTRE · GOLFE & INTERNATIONAL</p>
            <h1 className="mt-6 font-serif text-6xl leading-[1.02] sm:text-8xl">
              Un espace privé
              <br />
              <em className="font-normal">pour revenir à vous-même.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-primary-foreground/75">
              Avec Sourour Tarkan, un espace calme et confidentiel pour aborder la pression, les relations, les responsabilités et les transitions personnelles avec plus de clarté et d'équilibre.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/fr/book" className="button-gold">
                Demander une consultation privée <ArrowUpRight className="size-4" />
              </a>
              <a href="/fr/wellbeing" className="button-on-dark">
                Découvrir le bien-être
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">UNE RELATION DE CONSEIL PRIVÉE</p>
          <div>
            <h2 className="font-serif text-5xl leading-[1.12] sm:text-7xl">
              Le bien-être est personnel.
              <br />
              L'accompagnement doit l'être aussi.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
              GULFWELLBEING est un espace privé pour réfléchir, retrouver une perspective et traverser des étapes de vie complexes. Aucun programme unique ne convient à tous, et il n'est pas nécessaire de vous couler dans un modèle préétabli.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow">PARCOURS PRIVÉS</p>
          <h2 className="mt-4 font-serif text-5xl sm:text-7xl">Choisissez l'espace le plus proche de vous.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            <Area title="Bien-être personnel" text="Pour la pression, l'équilibre, les relations et les transitions qui ont besoin d'espace." image={stillLife} href="/fr/wellbeing" />
            <Area title="Bien-être des femmes" text="Un espace pour la femme, au-delà de ses rôles et responsabilités quotidiennes." image={woman} href="/fr/women" />
            <Area title="Bien-être des hommes" text="Pour l'homme qui porte de nombreuses responsabilités et a besoin d'un espace pour lui." image={executive} href="/fr/men" />
          </div>
        </div>
      </section>

      <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
        <img src={executive} alt="Entreprises et dirigeants" className="min-h-[30rem] w-full object-cover" />
        <div className="flex items-center px-6 py-20 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">ENTREPRISES & DIRIGEANTS</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.08] sm:text-7xl">
              Derrière chaque grande décision,
              <br />
              il y a un être humain.
            </h2>
            <p className="mt-7 text-sm leading-7 text-primary-foreground/70">
              Conseil privé en bien-être pour fondateurs, dirigeants, cadres et équipes, centré sur la pression continue, la clarté décisionnelle, la responsabilité du leadership et l'aspect humain de la performance.
            </p>
            <a href="/fr/business" className="button-gold mt-9">
              Découvrir le bien-être en entreprise
            </a>
          </div>
        </div>
      </section>

      <section className="grid bg-background lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:px-20">
          <div>
            <LockKeyhole className="size-5 text-gold" />
            <p className="mt-7 eyebrow">SUR DEMANDE PRIVÉE</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.08] sm:text-7xl">
              Bien-être VIP,
              <br />
              au sens de la confidentialité.
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">
              Une expérience conçue autour d'emplois du temps chargés, d'une vie internationale et du besoin d'un niveau supérieur de confidentialité et de flexibilité.
            </p>
            <a href="/fr/business/vip-concierge-wellbeing" className="button-primary mt-9">
              Découvrir le service privé
            </a>
          </div>
        </div>
        <img src={stillLife} alt="Un espace privé et apaisé" className="order-1 h-full min-h-[30rem] w-full object-cover lg:order-2" />
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1600px] lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative order-2 min-h-[520px] px-5 py-8 lg:order-2 lg:min-h-0 lg:px-10 lg:py-16">
          <div className="relative h-full overflow-hidden rounded-[2rem]">
            <img src="/images/sourour-tarkan-home.jpg" loading="lazy" alt="Sourour Tarkan, conseillère privée en bien-être et coach, Reiki Master" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-primary/5 to-primary/35" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/55 via-transparent to-transparent lg:bg-linear-to-l lg:from-transparent lg:to-primary/15" />
          </div>
        </div>
          <div className="relative order-1 flex items-center px-7 py-24 lg:order-1 lg:px-20 xl:px-28">
            <div className="max-w-xl">
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="eyebrow text-gold">À LA RENCONTRE DE SOUROUR TARKAN</p>
              </div>
              <h2 className="font-serif text-5xl leading-[1.08] sm:text-7xl lg:text-[5.2rem]">Un bien-être plus apaisé,<br/><em className="font-normal">une relation qui commence par l'humain.</em></h2>
              <p className="mt-9 max-w-lg text-sm leading-7 text-primary-foreground/70 sm:text-lg">Une relation privée fondée sur l'écoute, la compréhension du contexte et la vision de la personne derrière le rôle et les responsabilités qu'elle porte.</p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-primary-foreground/55">Sourour Tarkan est conseillère privée en bien-être, coach et Reiki Master. Son approche commence par la personne, non par un modèle préétabli.</p>
              <a href="/fr/about" className="mt-10 inline-flex items-center gap-3 border-b border-gold/70 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:text-gold">À la rencontre de Sourour Tarkan <ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">L'APPROCHE TARKAN</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.08] sm:text-7xl">
              L'humain d'abord.
              <br />
              Aucun modèle imposé.
            </h2>
          </div>
          <div className="space-y-8 text-sm leading-7 text-muted-foreground">
            <p>
              La relation commence par l'écoute et la compréhension de la réalité de la personne, non par l'application d'un programme préétabli. Il y a de la place pour la complexité, et pour ce qui ne peut être réduit à un seul intitulé.
            </p>
            <p>
              L'accompagnement peut porter sur le bien-être personnel, les relations, la famille, le passage d'une étape de vie à une autre, le leadership ou les pressions qu'il est difficile d'aborder ailleurs.
            </p>
            <p>
              Lorsque cela est approprié et souhaité, des pratiques de bien-être holistique et le Reiki peuvent s'intégrer au travail. Sourour Tarkan est Reiki Master.
            </p>
            <a href="/fr/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold tracking-[.12em]">
              À la rencontre de Sourour Tarkan <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">LE BLOG</p>
              <h2 className="mt-3 font-serif text-5xl sm:text-7xl">Des idées qui méritent qu'on s'y arrête.</h2>
            </div>
            <a href="/fr/blog" className="hidden items-center gap-2 text-xs font-semibold tracking-[.12em] sm:inline-flex">
              Voir le blog <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Le conseil privé en bien-être dans le Golfe", "Un espace privé pour les personnes qui portent une responsabilité importante.", "/fr/blog/conseil-prive-bien-etre-golfe"],
              ["Stress et épuisement chez les dirigeants", "Reconnaître une pression continue avant qu'elle ne devienne la norme.", "/fr/blog/stress-epuisement-dirigeants"],
              ["Le bien-être des femmes dans le Golfe", "Confiance, vie de famille, relations et transitions personnelles.", "/fr/blog/bien-etre-femmes-golfe"],
            ].map(([title, text, href], index) => (
              <Link key={title} to={href as any} className="group border-t border-border pt-6">
                <span className="text-[10px] text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[.12em]">
                  Lire l'article <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection locale="fr" />

      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">DEMANDE PRIVÉE</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.08] sm:text-7xl">
              Certaines choses
              <br />
              méritent un espace privé.
            </h2>
          </div>
          <a href="/fr/book" className="button-gold">
            Demander une consultation privée <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

function Area({
  title,
  text,
  image,
  href,
}: {
  title: string;
  text: string;
  image: string;
  href: string;
}) {
  return (
    <a href={href as any} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-serif text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-8 text-primary-foreground/70">{text}</p>
        <ArrowUpRight className="mt-6 size-5" />
      </div>
    </a>
  );
}
