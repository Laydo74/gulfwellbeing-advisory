import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import sourourPortrait from "@/assets/sourour-tarkan-official.jpeg.asset.json";
import { SiteShell } from "@/components/site/SiteShell";

type Locale = "en" | "fr" | "ar";

const content = {
  en: {
    eyebrow: "ABOUT SOUROUR TARKAN",
    title: "A personal approach to wellbeing.",
    lead: "Sourour Tarkan offers private wellbeing coaching shaped around the individual, their circumstances and the questions they are navigating.",
    paragraphs: [
      "Her work begins with listening. Each conversation is shaped around the person's priorities, relationships, responsibilities and current circumstances, rather than a standard programme.",
      "The approach brings together reflective conversation, practical coaching and optional holistic wellbeing practices. Reiki is never assumed or required; it is considered only when appropriate and welcomed by the client.",
      "Sourour communicates in Arabic, English and French. Enquiries are welcome from across the Gulf and internationally; the format, availability and scope of support are discussed privately.",
    ],
    quote: "A meaningful change begins with being heard, understood and able to see the next step.",
    credentialsLabel: "SELECTED TRAINING",
    credentials: [
      "Reiki Grand Master — Usui Reiki, Level III · International School of Reiki · October 2020",
      "Advanced Reiki Kundalini Master — Level IV · Géry Cuvelier · 2020",
    ],
    pillarsLabel: "HOW THE WORK IS SHAPED",
    pillarsTitle: "A considered space for real life.",
    pillars: [
      ["Listening & Context", "Understand the circumstances, relationships and responsibilities that shape the situation."],
      ["Personal Clarity", "Make room to reflect, recognise priorities and consider the choices available."],
      ["Practical Next Steps", "Identify realistic actions that fit the person's life and current capacity."],
      ["Optional Holistic Practice", "Reiki may be discussed as a complementary practice when appropriate and specifically welcomed by the client."],
    ],
    ctaLabel: "A PRIVATE CONVERSATION",
    ctaTitle: "Begin with what matters to you.",
    ctaBody: "Every enquiry is considered individually. The first step is a private conversation about your circumstances and the kind of support you are looking for.",
    cta: "Request a private conversation",
    href: "/book" as const,
  },
  fr: {
    eyebrow: "À PROPOS DE SOUROUR TARKAN",
    title: "Une approche personnelle du bien-être.",
    lead: "Sourour Tarkan propose un accompagnement privé en bien-être, construit autour de la personne, de sa situation et des questions qu'elle traverse.",
    paragraphs: [
      "Son travail commence par l'écoute. Chaque échange tient compte des priorités, des relations, des responsabilités et de la réalité actuelle de la personne, plutôt que d'un programme standardisé.",
      "Son approche associe dialogue réflexif, accompagnement pratique et pratiques complémentaires de bien-être, proposées en option. Le Reiki n'est jamais imposé : il est envisagé uniquement lorsqu'il est approprié et souhaité par le client.",
      "Sourour accompagne en arabe, en anglais et en français. Les demandes sont ouvertes depuis le Golfe et l'international ; le format, les disponibilités et le cadre de l'accompagnement sont discutés en privé.",
    ],
    quote: "Un changement porteur de sens commence lorsque l'on se sent écouté, compris et capable de discerner la prochaine étape.",
    credentialsLabel: "FORMATIONS SÉLECTIONNÉES",
    credentials: [
      "Reiki Grand Master — Reiki Usui, niveau III · International School of Reiki · octobre 2020",
      "Advanced Reiki Kundalini Master — niveau IV · Géry Cuvelier · 2020",
    ],
    pillarsLabel: "LES PRINCIPES DE L'ACCOMPAGNEMENT",
    pillarsTitle: "Un espace réfléchi pour la réalité de la vie.",
    pillars: [
      ["Écoute & contexte", "Comprendre la situation, les relations et les responsabilités qui façonnent ce que vous traversez."],
      ["Clarté personnelle", "Prendre le temps de réfléchir, de reconnaître ses priorités et d'envisager les choix possibles."],
      ["Prochaines étapes concrètes", "Identifier des actions réalistes, adaptées à la vie et aux possibilités de chacun."],
      ["Pratique holistique facultative", "Le Reiki peut être évoqué comme pratique complémentaire lorsqu'il est approprié et expressément souhaité."],
    ],
    ctaLabel: "UNE CONVERSATION PRIVÉE",
    ctaTitle: "Commencez par ce qui compte pour vous.",
    ctaBody: "Chaque demande est examinée individuellement. Le premier pas consiste en un échange privé sur votre situation et le type d'accompagnement recherché.",
    cta: "Demander un échange privé",
    href: "/fr/book" as const,
  },
  ar: {
    eyebrow: "عن سرور طركان",
    title: "مقاربة شخصية للرفاه.",
    lead: "تقدم سرور طركان مرافقة خاصة في مجال الرفاه، تنطلق من الشخص وظروفه والأسئلة التي يمر بها.",
    paragraphs: [
      "يبدأ عملها بالاستماع. ويُبنى كل حوار حول أولويات الشخص وعلاقاته ومسؤولياته وظروفه الحالية، لا وفق برنامج موحد للجميع.",
      "تجمع المقاربة بين الحوار التأملي والمرافقة العملية وممارسات الرفاه التكاملية الاختيارية. لا يُفرض Reiki أبداً، ولا يُقترح إلا عندما يكون مناسباً ويرغب به العميل.",
      "تقدم سرور جلساتها بالعربية والإنجليزية والفرنسية. ويمكن إرسال الطلبات من مختلف دول الخليج ومن خارجها، على أن تتم مناقشة الصيغة والتوافر ونطاق المرافقة بشكل خاص.",
    ],
    quote: "يبدأ التغيير الحقيقي عندما يجد الإنسان من يستمع إليه ويفهمه ويساعده على رؤية الخطوة التالية.",
    credentialsLabel: "تدريبات مختارة",
    credentials: [
      "Reiki Grand Master — ريكي أوسوي، المستوى الثالث · International School of Reiki · أكتوبر 2020",
      "Advanced Reiki Kundalini Master — المستوى الرابع · Géry Cuvelier · 2020",
    ],
    pillarsLabel: "كيف تُبنى المرافقة",
    pillarsTitle: "مساحة واعية تتسع لحقيقة الحياة.",
    pillars: [
      ["الاستماع وفهم السياق", "فهم الظروف والعلاقات والمسؤوليات التي تشكل الوضع الحالي."],
      ["الوضوح الشخصي", "إتاحة مساحة للتأمل وتحديد الأولويات والنظر في الخيارات المتاحة."],
      ["خطوات عملية تالية", "تحديد خطوات واقعية تتناسب مع حياة الشخص وقدرته الحالية."],
      ["ممارسة تكاملية اختيارية", "يمكن مناقشة Reiki كممارسة تكميلية عندما تكون مناسبة ويطلبها العميل تحديداً."],
    ],
    ctaLabel: "محادثة خاصة",
    ctaTitle: "ابدأ بما يهمك أنت.",
    ctaBody: "يُنظر إلى كل طلب بشكل فردي. وتبدأ الخطوة الأولى بحوار خاص حول ظروفك ونوع الدعم الذي تبحث عنه.",
    cta: "طلب محادثة خاصة",
    href: "/ar/book" as const,
  },
} as const;

export function AboutSourour({ locale }: { locale: Locale }) {
  const d = content[locale];
  const rtl = locale === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <SiteShell>
      <main dir={rtl ? "rtl" : "ltr"}>
        <section className="page-hero border-b border-border">
          <div className="mx-auto grid min-h-[76vh] max-w-[1440px] items-stretch lg:grid-cols-[1.06fr_.94fr]">
            <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <div className="reveal max-w-3xl">
                <p className="eyebrow text-gold">{d.eyebrow}</p>
                <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{d.title}</h1>
                <p className="mt-8 max-w-2xl font-serif text-xl leading-8 text-foreground/80 sm:text-2xl">{d.lead}</p>
                <Link to={d.href} className="button-primary mt-9">{d.cta}<Arrow className="size-4" /></Link>
              </div>
            </div>
            <div className="min-h-[480px] overflow-hidden lg:min-h-full">
              <img src={sourourPortrait.url} alt={rtl ? "سرور طركان، مستشارة رفاه ومدربة في أسلوب الحياة الشمولي" : locale === "fr" ? "Sourour Tarkan, conseillère en bien-être et coach de vie holistique" : "Sourour Tarkan, wellbeing advisor and holistic lifestyle coach"} className="h-full min-h-[480px] w-full object-cover object-center" />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-24">
            <div>
              <p className="eyebrow text-gold">{d.eyebrow}</p>
              <blockquote className="mt-6 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">“{d.quote}”</blockquote>
            </div>
            <div className="space-y-6 text-base leading-8 text-primary-foreground/75">
              {d.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="flex items-center gap-3 pt-2 text-sm text-primary-foreground"><LockKeyhole className="size-4 text-gold" />{rtl ? "السرية جزء من كل تعاون." : locale === "fr" ? "La confidentialité est au cœur de chaque accompagnement." : "Confidentiality is central to every engagement."}</div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
            <p className="eyebrow text-gold">{d.credentialsLabel}</p>
            <div className="mt-8 grid border-y border-border md:grid-cols-2">
              {d.credentials.map((credential, index) => {
                const isLastRow = index >= d.credentials.length - (d.credentials.length % 2 === 0 ? 2 : 1);
                const hasPair = index % 2 === 0 && index + 1 < d.credentials.length;
                return <div key={credential} className={`flex min-h-28 items-center gap-5 border-border py-6 md:px-8 ${isLastRow ? "" : "border-b"} ${hasPair ? (rtl ? "md:border-l" : "md:border-r") : ""}`}><span className="font-serif text-2xl text-gold">0{index + 1}</span><p className="max-w-md text-sm leading-6">{credential}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-24">
            <p className="eyebrow text-gold">{d.pillarsLabel}</p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{d.pillarsTitle}</h2>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {d.pillars.map(([title, body], index) => <article key={title} className="min-h-64 bg-background p-7 sm:p-8"><span className="font-serif text-3xl text-gold">0{index + 1}</span><h3 className="mt-8 font-serif text-2xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-20 text-center lg:py-28">
          <p className="eyebrow text-gold">{d.ctaLabel}</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{d.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">{d.ctaBody}</p>
          <Link to={d.href} className="button-primary mt-9">{d.cta}<Arrow className="size-4" /></Link>
        </section>
      </main>
    </SiteShell>
  );
}