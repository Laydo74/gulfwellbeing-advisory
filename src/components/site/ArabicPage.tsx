import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, LockKeyhole } from "lucide-react";
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
    eyebrow: "الرفاه والعافية الخاصة",
    title: "مساحة هادئة تعود فيها إلى نفسك.",
    intro:
      "استشارات خاصة لمن يحتاج إلى التوقف قليلاً، رؤية الصورة بوضوح، واستعادة قدر أكبر من الاتزان وسط متطلبات الحياة.",
    sections: [
      {
        title: "حين يصبح كل شيء كثيراً",
        body:
          "الضغط لا يأتي دائماً من حدث واحد. أحياناً يتراكم العمل، الأسرة، العلاقات والقرارات حتى يصبح من الصعب معرفة ما الذي يحتاج إلى الاهتمام أولاً. هنا تبدأ المساحة الخاصة: بالتوقف، ثم الإنصات.",
      },
      {
        title: "وضوح من الداخل",
        body:
          "الجلسة ليست قائمة نصائح جاهزة. إنها مساحة للتفكير بصوت مسموع، فهم ما يحدث، والاقتراب من القرارات والأولويات بطريقة أكثر هدوءاً وصدقاً.",
      },
      {
        title: "العلاقات والحياة الخاصة",
        body:
          "يمكن أن تتناول الجلسات العلاقات، التواصل، الحدود، الحياة الأسرية أو التغيرات التي تحدث داخل الدائرة الخاصة، بعيداً عن ضغط التوقعات الخارجية.",
      },
      {
        title: "الانتقال إلى مرحلة جديدة",
        body:
          "بعض المراحل لا تحتاج إلى مزيد من السرعة، بل إلى مساحة لفهمها. سواء كان التغيير شخصياً أو عائلياً أو مهنياً، يمكن بناء هذه المرحلة بوعي أكبر.",
      },
      {
        title: "الحضور والعناية بالذات",
        body:
          "يمكن أن تتضمن المقاربة ممارسات تساعد على الحضور، الهدوء واستعادة الإيقاع الشخصي، بما يتناسب مع حياة العميل واحتياجه.",
      },
    ],
  },
  women: {
    eyebrow: "رفاه المرأة",
    title: "مساحة للمرأة خلف كل الأدوار التي تحملها.",
    intro:
      "مساحة خاصة للمرأة التي تعطي كثيراً للآخرين، وتحتاج هي أيضاً إلى وقت هادئ تسمع فيه نفسها وتعيد ترتيب ما يهمها.",
    sections: [
      {
        title: "أنتِ قبل كل شيء",
        body:
          "بين الأسرة والعمل والعلاقات والمسؤوليات، قد تضيع المساحة الشخصية. هنا يمكن للمرأة أن تتوقف من دون أن تكون مطالبة بأداء دور آخر.",
      },
      {
        title: "الثقة والذات",
        body:
          "استعادة الثقة ليست دائماً مسألة تغيير كبير. أحياناً تبدأ من فهم الاحتياجات، الإصغاء إلى الذات، ووضع حدود أكثر وضوحاً مع الآخرين ومع النفس.",
      },
      {
        title: "الأمومة من دون فقدان الذات",
        body:
          "الأمومة تجربة عميقة، لكنها لا تختصر المرأة. يمكن تخصيص مساحة للتعامل مع الضغط، الذنب، التوقعات والتوازن بين الأسرة والحياة الشخصية.",
      },
      {
        title: "الزواج والعلاقات",
        body:
          "مساحة هادئة للتفكير في التواصل، المسافة، الاحتياجات والحدود داخل العلاقات، من دون أحكام أو وصفات عامة.",
      },
      {
        title: "التحولات الشخصية",
        body:
          "عندما تتغير الحياة أو الأولويات أو الصورة التي كانت المرأة تحملها عن نفسها، يمكن أن تساعد المساحة الخاصة على الاقتراب من المرحلة الجديدة بثقة ووضوح.",
      },
    ],
  },
  men: {
    eyebrow: "رفاه الرجل",
    title: "مساحة للرجل بعيداً عن صورة الرجل الذي يجب أن يتحمل كل شيء.",
    intro:
      "استشارات خاصة للرجل الذي يعيش تحت ضغط المسؤولية، ويحتاج إلى مكان هادئ للتفكير والتعبير وإعادة ترتيب الداخل والخارج.",
    sections: [
      {
        title: "ما وراء المسؤولية",
        body:
          "المسؤولية جزء من الحياة، لكنها لا يجب أن تلغي الشخص الذي يحملها. تمنح الجلسة مساحة للتوقف بعيداً عن القرارات والالتزامات اليومية.",
      },
      {
        title: "الأبوة والأسرة",
        body:
          "الأبوة تحمل معها أدواراً وتوقعات كثيرة. يمكن أن تكون الجلسة مساحة للتفكير في العلاقة مع الأبناء، الشريك والأسرة، مع الحفاظ على مساحة شخصية.",
      },
      {
        title: "الضغط الذي لا يُقال",
        body:
          "ليس كل ما يثقل الإنسان يجد طريقه إلى الكلام. المساحة الخاصة تسمح بالتعبير والتأمل وفهم الاحتياجات بعيداً عن فكرة أن القوة تعني الصمت.",
      },
      {
        title: "الثقة والقيادة",
        body:
          "عندما تتداخل القيادة مع الحياة الخاصة، يصبح الوضوح الداخلي مهماً بقدر القرار الخارجي. يمكن أن تركز الجلسات على الحضور، الحدود وطريقة التعامل مع المسؤولية.",
      },
    ],
  },
  business: {
    eyebrow: "رفاه الشركات والقيادات",
    title: "عندما تكون مسؤولاً عن الكثير، تحتاج إلى مساحة لك أنت.",
    intro:
      "استشارات خاصة في الرفاه للمؤسسين والمديرين والمهنيين الذين يعيشون تحت ضغط القرارات، التوقعات والمسؤولية المستمرة.",
    sections: [
      {
        title: "خلف المنصب",
        body:
          "المنصب قد يطلب منك أن تكون واضحاً وحاضراً طوال الوقت. الاستشارة الخاصة توفر مساحة لا تحتاج فيها إلى قيادة أحد، بل إلى التوقف وفهم ما يحدث معك.",
      },
      {
        title: "الضغط قبل الاحتراق",
        body:
          "الإرهاق لا يبدأ دائماً بانهيار واضح. قد يبدأ بتراجع المساحة الشخصية، النوم، الحضور أو القدرة على الاستمتاع بالحياة. الانتباه المبكر يصنع فرقاً.",
      },
      {
        title: "وضوح في القيادة",
        body:
          "مساحة مستقلة للتفكير في القرارات، العلاقات المهنية، الحدود، الحضور الشخصي والضغط الذي يصاحب المسؤولية الكبيرة.",
      },
      {
        title: "الحياة خارج العمل",
        body:
          "النجاح المهني لا يلغي الحياة الخاصة. يمكن أن تشمل المقاربة الأسرة، العلاقات، الانتقالات الشخصية والتوازن بين الشخص الذي يقود والشخص الذي يعيش.",
      },
    ],
  },
  vip: {
    eyebrow: "VIP · رفاه خاص",
    title: "عافية خاصة، بصيغة تناسب حياتك.",
    intro:
      "خدمة مصممة للأفراد والعائلات والقيادات الذين يقدّرون الخصوصية، المرونة والعلاقة الاستشارية الشخصية.",
    sections: [
      {
        title: "الخصوصية أولاً",
        body:
          "تبدأ التجربة بفهم احتياج العميل وسياقه، ثم بناء الصيغة المناسبة حوله. لا توجد تجربة جماعية أو مسار مفروض مسبقاً.",
      },
      {
        title: "مرونة تتناسب مع نمط الحياة",
        body:
          "جلسات عن بُعد وترتيبات مرنة للعملاء في الخليج ودولياً، وفق التوفر وطبيعة العلاقة الاستشارية.",
      },
      {
        title: "للشخص والعائلة والقيادة",
        body:
          "يمكن أن تمتد المقاربة إلى الرفاه الشخصي، الحياة العائلية، الضغوط التنفيذية والتحولات التي تتطلب مستوى أعلى من الخصوصية.",
      },
      {
        title: "بناءً على طلب خاص",
        body:
          "لا تُعرض رسوم خدمة VIP بشكل عام. يتم أولاً فهم الاحتياج، ثم مناقشة الصيغة والتوفر والاستثمار المطلوب بشكل خاص.",
      },
    ],
  },
  about: {
    eyebrow: "عن GULFWELLBEING",
    title: "العافية تبدأ من علاقة إنسانية حقيقية.",
    intro:
      "تقود GULFWELLBEING سرور طركان، مستشارة الرفاه ومدرّبة وReiki Master، من خلال مقاربة خاصة تجمع الإصغاء، الوعي وممارسات الرفاه الشمولي بحسب احتياج كل شخص.",
    sections: [
      {
        title: "سرور طركان",
        body:
          "تبدأ العلاقة بالاستماع إلى الشخص كما هو، مع حياته ومسؤولياته وسياقه الخاص. لا يوجد قالب واحد يُفرض على الجميع، ولا حاجة إلى اختزال التجربة الإنسانية في عنوان واحد.",
      },
      {
        title: "مقاربة شخصية",
        body:
          "يمكن أن تركز الجلسات على الضغط، العلاقات، الأسرة، الثقة، التحولات، القيادة أو الحاجة إلى استعادة قدر أكبر من الاتزان. تُبنى الأولويات وفق ما يهم العميل فعلاً.",
      },
      {
        title: "الرفاه الشمولي وReiki",
        body:
          "عندما يكون ذلك مناسباً ومطلوباً من العميل، يمكن أن تدخل ممارسات الرفاه الشمولي وReiki ضمن التجربة. سرور طركان هي Reiki Master.",
      },
      {
        title: "مساحة بلا أحكام",
        body:
          "الخصوصية والاحترام ليسا تفصيلاً إضافياً. هما جزء من طبيعة العلاقة الاستشارية، بحيث يستطيع العميل التحدث والتفكير بحرية أكبر.",
      },
    ],
  },
  blog: {
    eyebrow: "المدونة",
    title: "مساحة للأفكار التي تستحق التوقف عندها.",
    intro:
      "مقالات وتأملات حول العافية، العلاقات، الحياة الخاصة، المرأة، الرجل، القيادة والتحولات التي نمر بها.",
    sections: [
      {
        title: "العافية في حياة مليئة بالمسؤوليات",
        body:
          "كيف نصنع مساحة لأنفسنا عندما تكون الحياة ممتلئة بالعمل والأسرة والقرارات؟",
      },
      {
        title: "الضغط والاحتراق",
        body:
          "علامات الضغط المستمر، أهمية التوقف، وكيف يمكن استعادة مساحة شخصية قبل أن يصبح الإرهاق أسلوب حياة.",
      },
      {
        title: "المرأة بين العطاء والذات",
        body:
          "عن الثقة، الأمومة، العلاقات والحاجة إلى مساحة لا تكون فيها المرأة مطالبة بالعطاء طوال الوقت.",
      },
      {
        title: "الرجل ومسؤولية التحمل",
        body:
          "عن الأبوة، المسؤولية، الضغط والصورة التي تجعل التعبير عن الاحتياج أمراً صعباً.",
      },
    ],
  },
  privacy: {
    eyebrow: "الخصوصية",
    title: "الخصوصية جزء من الطريقة التي نعمل بها.",
    intro:
      "نستخدم البيانات التي تختار مشاركتها معنا بالقدر اللازم للتواصل معك وإدارة استفسارك أو طلبك الخاص.",
    sections: [
      {
        title: "ما الذي قد تقدمه لنا؟",
        body:
          "قد يشمل ذلك الاسم، البريد الإلكتروني، رقم الهاتف، البلد، طريقة التواصل المفضلة، الوقت المناسب ورسالة الاستفسار.",
      },
      {
        title: "كيف نستخدمها؟",
        body:
          "تُستخدم البيانات للرد على الاستفسارات، تنسيق التواصل وإدارة الطلبات الخاصة. لا تُعرض بيانات طلبات العملاء للعامة.",
      },
      {
        title: "الخدمات التقنية",
        body:
          "قد يعتمد الموقع على خدمات استضافة وقاعدة بيانات ومصادقة من أطراف تقنية. تتم إدارة الوصول وفق إعدادات هذه الخدمات.",
      },
    ],
  },
  terms: {
    eyebrow: "الشروط والأحكام",
    title: "استخدام الموقع والخدمات.",
    intro:
      "باستخدام الموقع، توافق على استخدامه بصورة مشروعة، وعلى فهم طبيعة خدمات الرفاه وCoaching وحدودها.",
    sections: [
      {
        title: "طبيعة الخدمة",
        body:
          "تقدم GULFWELLBEING خدمات استشارات الرفاه وCoaching وممارسات عافية شمولية. هذه الخدمات ليست بديلاً عن الطوارئ أو التشخيص أو العلاج الطبي أو النفسي المنظم.",
      },
      {
        title: "طلب الجلسة",
        body:
          "إرسال النموذج هو استفسار خاص وليس حجزاً آلياً مؤكداً. يتم التواصل لاحقاً لمناقشة التوفر، الصيغة والرسوم.",
      },
      {
        title: "محتوى الموقع",
        body:
          "المقالات والمعلومات المنشورة لأغراض عامة ولا تشكل نصيحة طبية أو نفسية أو قانونية أو بديلاً عن رعاية متخصصة عند الحاجة.",
      },
    ],
  },
};

export function ArabicPage({ kind }: { kind: Kind }) {
  const d = data[kind];
  const image =
    kind === "women" ? woman : kind === "men" || kind === "business" ? executive : stillLife;
  const isLegal = kind === "privacy" || kind === "terms";

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid min-h-[72vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-gold">{d.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] md:text-7xl">{d.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted-foreground">{d.intro}</p>
            {!isLegal && (
              <Link to="/ar/book" className="button-primary mt-9">
                طلب استشارة خاصة <ArrowUpLeft className="size-4" />
              </Link>
            )}
          </div>
          <img src={image} width={1408} height={1008} alt="" className="h-[48vh] w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        {d.sections.map((section, index) => (
          <article key={section.title} className="border-t border-border py-12">
            <div className="grid gap-7 md:grid-cols-[150px_1fr]">
              <div>
                <span className="font-serif text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h2 className="font-serif text-4xl leading-tight md:text-5xl">{section.title}</h2>
                <p className="mt-5 max-w-3xl text-base leading-9 text-muted-foreground">{section.body}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!isLegal && (
        <section className="bg-secondary px-6 py-20 text-center">
          <LockKeyhole className="mx-auto size-5 text-gold" />
          <h2 className="mt-5 font-serif text-5xl">ابدأ من مساحة خاصة.</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            أخبرنا بما تبحث عنه، وسنتواصل معك بهدوء لمناقشة الخطوة المناسبة.
          </p>
          <Link to="/ar/book" className="button-primary mt-8">
            إرسال طلب خاص
          </Link>
        </section>
      )}
    </SiteShell>
  );
}

export function ArabicHome() {
  return (
    <SiteShell>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
        <img src={hero} alt="GULFWELLBEING" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-l from-primary via-primary/72 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-end px-6 pb-16 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold">استشارات خاصة في الرفاه · الخليج ودولياً</p>
            <h1 className="mt-6 font-serif text-6xl leading-[1.02] sm:text-8xl">
              مساحة خاصة
              <br />
              <em className="font-normal">تعود فيها إلى نفسك.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-primary-foreground/75">
              مع سرور طركان، مساحة هادئة وسرية للتعامل مع الضغوط، العلاقات، المسؤوليات والتحولات الشخصية بوضوح واتزان أكبر.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/ar/book" className="button-gold">
                طلب استشارة خاصة <ArrowUpLeft className="size-4" />
              </Link>
              <Link to="/ar/wellbeing" className="button-on-dark">
                اكتشف الرفاه
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">علاقة استشارية خاصة</p>
          <div>
            <h2 className="font-serif text-5xl leading-[1.12] sm:text-7xl">
              العافية شخصية.
              <br />
              لذلك يجب أن يكون الدعم شخصياً.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-9 text-muted-foreground">
              GULFWELLBEING مساحة خاصة للتفكير، استعادة المنظور والتعامل مع مراحل الحياة المعقدة. لا برنامج واحداً يناسب الجميع، ولا حاجة إلى أن تضع نفسك داخل قالب جاهز.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow">مسارات خاصة</p>
          <h2 className="mt-4 font-serif text-5xl sm:text-7xl">اختر المساحة الأقرب إليك.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            <Area title="الرفاه الشخصي" text="للضغط، التوازن، العلاقات والتحولات التي تحتاج إلى مساحة." image={stillLife} href="/ar/wellbeing" />
            <Area title="رفاه المرأة" text="مساحة للمرأة خلف أدوارها ومسؤولياتها اليومية." image={woman} href="/ar/women" />
            <Area title="رفاه الرجل" text="للرجل الذي يحمل مسؤوليات كثيرة ويحتاج إلى مساحة له." image={executive} href="/ar/men" />
          </div>
        </div>
      </section>

      <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
        <img src={executive} alt="الأعمال والقيادات" className="min-h-[30rem] w-full object-cover" />
        <div className="flex items-center px-6 py-20 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">الأعمال والقيادات</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.08] sm:text-7xl">
              خلف كل قرار كبير،
              <br />
              هناك إنسان.
            </h2>
            <p className="mt-7 text-base leading-9 text-primary-foreground/70">
              استشارات رفاه خاصة للمؤسسين والمديرين والقيادات والفرق، تركز على الضغط المستمر، وضوح القرار، مسؤولية القيادة والجانب الإنساني من الأداء.
            </p>
            <Link to="/ar/business" className="button-gold mt-9">
              اكتشف رفاه الشركات والقيادات
            </Link>
          </div>
        </div>
      </section>

      <section className="grid bg-background lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:px-20">
          <div>
            <LockKeyhole className="size-5 text-gold" />
            <p className="mt-7 eyebrow">بناءً على طلب خاص</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.08] sm:text-7xl">
              VIP الرفاه
              <br />
              بمعنى الخصوصية.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-9 text-muted-foreground">
              تجربة مصممة حول الجداول المكثفة، الحياة الدولية والحاجة إلى مستوى أعلى من الخصوصية والمرونة.
            </p>
            <Link to="/ar/business/vip-concierge-wellbeing" className="button-primary mt-9">
              اكتشف الخدمة الخاصة
            </Link>
          </div>
        </div>
        <img src={stillLife} alt="مساحة خاصة وهادئة" className="order-1 h-full min-h-[30rem] w-full object-cover lg:order-2" />
      </section>

      <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">مقاربة سرور طركان</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.08] sm:text-7xl">
              الإنسان أولاً.
              <br />
              والقالب ليس مطلوباً.
            </h2>
          </div>
          <div className="space-y-8 text-base leading-9 text-muted-foreground">
            <p>
              تبدأ العلاقة بالاستماع وفهم واقع الشخص، لا بتطبيق برنامج جاهز. هناك مساحة للتعقيد، ولما لا يمكن اختزاله في عنوان واحد.
            </p>
            <p>
              يمكن أن يركز الدعم على الرفاه الشخصي، العلاقات، الأسرة، الانتقال من مرحلة إلى أخرى، القيادة أو الضغوط التي يصعب الحديث عنها في أماكن أخرى.
            </p>
            <p>
              وعندما يكون ذلك مناسباً ومطلوباً، يمكن أن تدخل ممارسات الرفاه الشمولي وReiki ضمن العمل. سرور طركان هي Reiki Master.
            </p>
            <Link to="/ar/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold tracking-[.12em]">
              تعرّف على سرور طركان <ArrowUpLeft className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">المدونة</p>
              <h2 className="mt-3 font-serif text-5xl sm:text-7xl">أفكار تستحق التوقف عندها.</h2>
            </div>
            <Link to="/ar/blog" className="hidden items-center gap-2 text-xs font-semibold tracking-[.12em] sm:inline-flex">
              عرض المدونة <ArrowUpLeft className="size-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["العافية في حياة مليئة بالمسؤوليات", "كيف نصنع مساحة لأنفسنا عندما تكون الحياة ممتلئة؟"],
              ["حين يصبح الضغط هو الوضع الطبيعي", "علامات تستحق الانتباه قبل أن يتحول الإرهاق إلى أسلوب حياة."],
              ["المرأة خلف كل أدوارها", "عن الثقة، الأسرة والحاجة إلى مساحة شخصية حقيقية."],
            ].map(([title, text], index) => (
              <Link key={title} to="/ar/blog" className="group border-t border-border pt-6">
                <span className="text-[10px] text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[.12em]">
                  اقرأ من المدونة <ArrowUpLeft className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection isArabic />

      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">استفسار خاص</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.08] sm:text-7xl">
              بعض الأمور
              <br />
              تستحق مساحة خاصة.
            </h2>
          </div>
          <Link to="/ar/book" className="button-gold">
            إرسال طلب خاص <ArrowUpLeft className="size-4" />
          </Link>
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
    <Link to={href as any} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-serif text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-8 text-primary-foreground/70">{text}</p>
        <ArrowUpLeft className="mt-6 size-5" />
      </div>
    </Link>
  );
}
