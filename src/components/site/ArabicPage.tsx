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
    eyebrow: "استشارات الرفاه الخاصة",
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
    title: "رفاه من يقودون الأعمال ويحملون المسؤولية.",
    intro: "استشارات خاصة في الرفاه للمؤسسين والمديرين والقيادات والمهنيين والفرق التي تواجه ضغطاً مستمراً وقرارات معقدة ومسؤولية تجاه الآخرين.",
    sections: [
      { title: "رفاه القيادات التنفيذية", body: "ضغط القيادة لا يبقى داخل ساعات العمل. يمكن أن يؤثر في التركيز والعلاقات والطاقة والقدرة الشخصية. توفر الاستشارة الخاصة مساحة سرية بعيداً عن الدور المهني لاستعادة المنظور وبناء قدرة أكثر استدامة." },
      { title: "رفاه المؤسسين", body: "يحمل المؤسس غالباً الشركة والقرارات والموظفين وعدم اليقين في الوقت نفسه. توفر الجلسات مساحة خاصة للتفكير في الضغط والحدود والهوية والتكلفة الشخصية لتحمل مسؤولية العمل." },
      { title: "وضوح القيادة واتخاذ القرار", body: "تحتاج القرارات الكبيرة أحياناً إلى مسافة عن الضجيج اليومي. يمكن للجلسات أن تمنح القائد مساحة للتفكير في المحادثات الصعبة والأولويات والحدود والاتجاه طويل المدى." },
      { title: "الضغط والوقاية من الاحتراق", body: "قد يصبح الضغط المستمر أمراً طبيعياً قبل أن يصبح واضحاً. تساعد الاستشارة الخاصة على النظر في أنماط الضغط والتعافي والعمل والحدود قبل أن يصبح تغييرها أكثر صعوبة." },
      { title: "القيادة ورفاه الفريق", body: "يؤثر القائد في البيئة الإنسانية المحيطة به. يمكن أن يركز الدعم على التواصل والتوقعات ورفاه الفريق والجانب الإنساني من مسؤولية القيادة." },
      { title: "استشارات رفاه الشركات", body: "للشركات التي تبحث عن منظور خارجي خاص حول الجانب الإنساني للقيادة والرفاه. يمكن تكييف العمل مع القيادات أو الفرق العليا أو مراحل محددة من التغيير التنظيمي." },
    ],
  },
  vip: {
    eyebrow: "VIP · رفاه خاص",
    title: "رفاه خاصة، بصيغة تناسب حياتك.",
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
    eyebrow: "عن سرور طركان",
    title: "الرفاه يبدأ من علاقة إنسانية حقيقية.",
    intro:
      "سرور طركان هي مستشارة رفاه ومدرّبة وReiki Master. تقود عملها من خلال مقاربة شخصية تضع الإنسان وسياقه وحياته الفعلية في مركز العلاقة الاستشارية.",
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
  approach: {
    eyebrow: "منهج سرور طركان",
    title: "مقاربة تبدأ بالإنسان، لا بالمشكلة.",
    intro:
      "منهج شخصي ومرن للرفاه يبدأ بفهم الإنسان كما هو، وسياقه كما هو، ثم بناء مساحة مناسبة لما يحتاج إلى فهمه أو تغييره.",
    sections: [
      {
        title: "الإنسان قبل المشكلة",
        body:
          "لا تختزل التجربة الإنسانية في عنوان واحد. نبدأ بالشخص: ما الذي يعيشه، ما الذي يحمله، وما الذي تغير في حياته.",
      },
      {
        title: "السياق قبل النصيحة",
        body:
          "قبل تقديم أي اتجاه، تأتي مساحة لفهم الواقع، المسؤوليات، العلاقات والظروف التي تشكل التجربة اليومية.",
      },
      {
        title: "الوضوح الداخلي قبل التغيير الخارجي",
        body:
          "عندما يصبح ما يحدث في الداخل أوضح، يمكن النظر إلى القرارات والحدود والعلاقات والخطوات القادمة بوعي أكبر.",
      },
      {
        title: "رفاه الإنسان ككل",
        body:
          "يمكن أن تتقاطع في العمل الحياة الخاصة، العلاقات، الأسرة، المسؤولية، القيادة ونمط الحياة، لأن هذه الجوانب لا تعيش منفصلة عن بعضها.",
      },
      {
        title: "خاص، فردي، بلا قالب جاهز",
        body:
          "لا يوجد برنامج واحد مفروض على الجميع. يتشكل الحوار والإيقاع والتركيز وفق الشخص واحتياجه وما يتم الاتفاق عليه.",
      },
    ],
  },
  blog: {
    eyebrow: "المدونة",
    title: "مساحة للأفكار التي تستحق التوقف عندها.",
    intro:
      "مقالات وتأملات حول الرفاه، العلاقات، الحياة الخاصة، المرأة، الرجل، القيادة والتحولات التي نمر بها.",
    sections: [
      {
        title: "الرفاه في حياة مليئة بالمسؤوليات",
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
          "تقدم GULFWELLBEING خدمات استشارات الرفاه وCoaching وممارسات الرفاه الشمولي. هذه الخدمات ليست بديلاً عن الطوارئ أو التشخيص أو العلاج الطبي أو النفسي المنظم.",
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
    kind === "about" ? "/images/sourour-tarkan-home.jpg" : kind === "women" ? woman : kind === "men" || kind === "business" ? executive : stillLife;
  const isLegal = kind === "privacy" || kind === "terms";
  const gulfContext: Record<Kind, { title: string; body: string }> = {
    wellbeing: { title: "استشارات خاصة لمن يعيش حياة الخليج بكل تعقيداتها", body: "قد تتقاطع الحياة بين دبي وأبوظبي والرياض والدوحة والكويت والمنامة ومسقط مع العمل والسفر والأسرة والالتزامات الاجتماعية. لذلك تُبنى الاستشارة حول سياق الشخص الفعلي، لا حول برنامج موحّد." },
    women: { title: "رفاه المرأة في الخليج، بعيداً عن القوالب الجاهزة", body: "في مدن مثل دبي وأبوظبي والرياض والدوحة، قد تتداخل الحياة المهنية والعائلية والأمومة والعلاقات بصورة خاصة. المساحة هنا مخصصة للمرأة نفسها، وما تحتاج إلى فهمه أو تغييره في هذه المرحلة." },
    men: { title: "مساحة خاصة للرجل تحت ضغط المسؤولية", body: "من دبي وأبوظبي إلى الرياض والدوحة والكويت، قد ترتبط حياة الرجل بالعمل والقيادة والأسرة واتخاذ القرار. الاستشارة تمنحه مساحة للنظر في ما يحمله بعيداً عن الحاجة إلى الظهور بصورة معينة." },
    business: { title: "رفاه القيادات والأعمال في بيئة الخليج", body: "القيادات والمؤسسون في الإمارات والسعودية وقطر والكويت والبحرين وعُمان يعملون داخل بيئات سريعة ومتغيرة. الاستشارة الخاصة تركز على الإنسان خلف الدور: الضغط، وضوح القرار، الحدود، العلاقات والقدرة على الاستمرار." },
    about: { title: "مقاربة تفهم واقع الحياة في الخليج", body: "تعمل سرور طركان مع أشخاص يعيشون بين مسؤوليات شخصية ومهنية وعائلية متداخلة، في الخليج أو ضمن حياة دولية. تبدأ العلاقة من الاستماع وفهم السياق قبل تقديم أي اتجاه." },
    approach: { title: "المنهج والسياق الخليجي", body: "لا يفترض The Tarkan Approach أن تجربة شخص في دبي هي نفسها تجربة شخص في الرياض أو الدوحة. المكان، الأسرة، العمل، السفر والمسؤوليات جزء من السياق الذي تُفهم من خلاله حياة كل شخص." },
    vip: { title: "خصوصية تناسب الحياة الدولية", body: "لمن تتوزع حياتهم بين الخليج والسفر الدولي، يمكن أن تُرتب التجربة الخاصة حول الجداول المكثفة، المرونة والحاجة إلى مستوى عالٍ من الخصوصية." },
    blog: { title: "قراءة حول الرفاه في الخليج والحياة المعاصرة", body: "تتناول المدونة موضوعات الضغط، القيادة، العلاقات، الأسرة والتحولات الشخصية من منظور عملي وتأملي يناسب حياة مليئة بالمسؤوليات في الخليج وخارجه." },
    privacy: { title: "", body: "" },
    terms: { title: "", body: "" },
  };

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid min-h-[72vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-gold">{d.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] md:text-7xl">{d.title}</h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">{d.intro}</p>
            {!isLegal && (
              <a href="/ar/book" className="button-primary mt-9">
                طلب استشارة خاصة <ArrowUpLeft className="size-4" />
              </a>
            )}
          </div>
          <img src={image} alt={kind === "about" ? "سرور طركان، مستشارة رفاه خاصة ومدرّبة وReiki Master" : `${d.eyebrow} — GULFWELLBEING`} className="mx-auto h-[38vh] w-full max-w-[34rem] object-cover lg:h-[44vh]" />
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
                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">{section.body}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {!isLegal && (
        <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-gold">الخليج</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">{gulfContext[kind].title}</h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{gulfContext[kind].body}</p>
          </div>
        </section>
      )}

      {kind === "business" && (
        <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-gold">رفاه الشركات والقيادات</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-7xl">اختر المساحة الأقرب إلى وضعك.</h2>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
              {[
                ["رفاه القيادات التنفيذية", "مساحة خاصة للمديرين والقيادات تحت ضغط المسؤولية المستمرة.", "/ar/business/executive-wellbeing"],
                ["رفاه المؤسسين", "دعم خاص لمن يحملون الشركة والقرارات وعدم اليقين.", "/ar/business/founder-wellbeing"],
                ["وضوح القيادة", "مساحة للتفكير في القرارات الصعبة والحدود والمحادثات القيادية.", "/ar/business/leadership-clarity"],
                ["الضغط والوقاية من الاحتراق", "دعم حول الضغط المستمر والتعافي والعمل والحدود.", "/ar/business/burnout-prevention"],
                ["رفاه القيادة والفريق", "دعم للقيادات التي تتحمل مسؤولية الأشخاص والتواصل والبيئة الإنسانية.", "/ar/business/team-wellbeing"],
                ["استشارات رفاه الشركات", "منظور خارجي خاص للقيادات والمؤسسات خلال التغيير والضغط.", "/ar/business/corporate-advisory"],
              ].map(([title, text, href], index) => (
                <Link key={href} to={href as any} className="group bg-background p-7 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <span className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-serif text-3xl leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground group-hover:text-primary-foreground/70">{text}</p>
                  <ArrowUpLeft className="mt-8 size-5 text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isLegal && (
        <section className="bg-secondary px-6 py-20 text-center">
          <LockKeyhole className="mx-auto size-5 text-gold" />
          <h2 className="mt-5 font-serif text-5xl">ابدأ من مساحة خاصة.</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            أخبرنا بما تبحث عنه، وسنتواصل معك بهدوء لمناقشة الخطوة المناسبة.
          </p>
          <a href="/ar/book" className="button-primary mt-8">
            إرسال طلب خاص
          </a>
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
            <p className="mt-8 max-w-2xl text-sm leading-7 text-primary-foreground/75">
              مع سرور طركان، مساحة هادئة وسرية للتعامل مع الضغوط، العلاقات، المسؤوليات والتحولات الشخصية بوضوح واتزان أكبر.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/ar/book" className="button-gold">
                طلب استشارة خاصة <ArrowUpLeft className="size-4" />
              </a>
              <a href="/ar/wellbeing" className="button-on-dark">
                اكتشف الرفاه
              </a>
            </div>
          </div>
        </div>
      </section>

      {kind === "wellbeing" && <section className="border-y border-border bg-background"><div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12"><p className="eyebrow text-gold">رفاه خاص ومصمم لك</p><h2 className="mt-4 max-w-5xl font-serif text-5xl leading-tight md:text-6xl">كل عميل مختلف. وكل رحلة شخصية.</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">يتم تصميم برنامج الرفاه الخاص وفق احتياجات العميل وأهدافه وإيقاعه الشخصي.</p><div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3"><div className="bg-background p-7"><h3 className="font-serif text-3xl">جلسة فردية</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">جلسة خاصة يتم خلالها فهم احتياج العميل وتحديد المقاربة المناسبة.</p></div><div className="bg-background p-7"><h3 className="font-serif text-3xl">برنامج رفاه شخصي</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">يتم تحديد عدد الجلسات ومدتها بعد التقييم الأولي وبحسب رحلة العميل.</p></div><div className="bg-background p-7"><h3 className="font-serif text-3xl">استشارات VIP خاصة</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">مرافقة خاصة ومستمرة وفق الاحتياجات والوتيرة التي يتم الاتفاق عليها.</p></div></div><div className="mt-12 max-w-4xl"><p className="eyebrow text-gold">رفاه خاص، مصمم حولك</p><p className="mt-4 font-serif text-3xl leading-tight md:text-4xl">لا توجد رحلتان متطابقتان في الرفاه.</p><p className="mt-5 text-sm leading-7 text-muted-foreground">في GULFWELLBEING، يتم تخصيص كل جلسة خاصة وفق احتياجاتك وأهدافك وإيقاعك. وبدلاً من البرامج المحددة مسبقاً، تصمم سرور طركان مقاربة خاصة لكل عميل، مع تحديد وتيرة الجلسات ومدتها وفق الرحلة الفردية.</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.16em] text-gold">خاص · شخصي · سري</p><Link to="/ar/book" className="button-primary mt-8 inline-flex items-center gap-2">طلب استشارة خاصة <ArrowUpLeft className="size-4"/></Link></div></div></section>}
      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">علاقة استشارية خاصة</p>
          <div>
            <h2 className="font-serif text-5xl leading-[1.12] sm:text-7xl">
              الرفاه شخصية.
              <br />
              لذلك يجب أن يكون الدعم شخصياً.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
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
            <p className="mt-7 text-base leading-8 text-primary-foreground/70">
              استشارات رفاه خاصة للمؤسسين والمديرين والقيادات والفرق، تركز على الضغط المستمر، وضوح القرار، مسؤولية القيادة والجانب الإنساني من الأداء.
            </p>
            <a href="/ar/business" className="button-gold mt-9">
              اكتشف رفاه الشركات والقيادات
            </a>
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
            <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">
              تجربة مصممة حول الجداول المكثفة، الحياة الدولية والحاجة إلى مستوى أعلى من الخصوصية والمرونة.
            </p>
            <a href="/ar/business/vip-concierge-wellbeing" className="button-primary mt-9">
              اكتشف الخدمة الخاصة
            </a>
          </div>
        </div>
        <img src={stillLife} alt="مساحة خاصة وهادئة" className="order-1 h-full min-h-[30rem] w-full object-cover lg:order-2" />
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div dir="ltr" className="mx-auto grid max-w-[1600px] lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative order-2 min-h-[520px] px-5 py-8 lg:order-2 lg:min-h-0 lg:px-10 lg:py-16">
          <div className="relative h-full overflow-hidden rounded-[2rem]">
            <img src="/images/sourour-tarkan-home.jpg" loading="lazy" alt="سرور طركان، مستشارة الرفاه ومدرّبة وReiki Master" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-primary/5 to-primary/35" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/55 via-transparent to-transparent lg:bg-linear-to-l lg:from-transparent lg:to-primary/15" />
          </div>
          <div dir="rtl" className="relative order-1 flex items-center px-7 py-24 text-right lg:order-1 lg:px-20 xl:px-28">
            <div className="max-w-xl">
              <div className="mb-10 flex items-center justify-end gap-4">
                <p className="eyebrow text-gold">تعرّف على سرور طركان</p>
                <span className="h-px w-12 bg-gold" />
              </div>
              <h2 className="font-serif text-5xl leading-[1.08] sm:text-7xl lg:text-[5.2rem]">رفاهٌ أكثر هدوءاً،<br/><em className="font-normal">وعلاقة تبدأ بالإنسان.</em></h2>
              <p className="mt-9 max-w-lg text-sm leading-7 text-primary-foreground/70 sm:text-base">علاقة خاصة تقوم على الاستماع، وفهم السياق، ورؤية الإنسان خلف الدور والمسؤوليات التي يحملها.</p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-primary-foreground/55">سرور طركان مستشارة رفاه ومدرّبة وReiki Master. تبدأ مقاربتها من الشخص نفسه، لا من قالب جاهز.</p>
              <a href="/ar/about" className="mt-10 inline-flex items-center gap-3 border-b border-gold/70 pb-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground transition-colors hover:text-gold">تعرّف على سرور طركان <ArrowUpLeft className="size-4" /></a>
            </div>
          </div>
        </div>
        </div>
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
          <div className="space-y-8 text-sm leading-7 text-muted-foreground">
            <p>
              تبدأ العلاقة بالاستماع وفهم واقع الشخص، لا بتطبيق برنامج جاهز. هناك مساحة للتعقيد، ولما لا يمكن اختزاله في عنوان واحد.
            </p>
            <p>
              يمكن أن يركز الدعم على الرفاه الشخصي، العلاقات، الأسرة، الانتقال من مرحلة إلى أخرى، القيادة أو الضغوط التي يصعب الحديث عنها في أماكن أخرى.
            </p>
            <p>
              وعندما يكون ذلك مناسباً ومطلوباً، يمكن أن تدخل ممارسات الرفاه الشمولي وReiki ضمن العمل. سرور طركان هي Reiki Master.
            </p>
            <a href="/ar/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold tracking-[.12em]">
              تعرّف على سرور طركان <ArrowUpLeft className="size-4" />
            </a>
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
            <a href="/ar/blog" className="hidden items-center gap-2 text-xs font-semibold tracking-[.12em] sm:inline-flex">
              عرض المدونة <ArrowUpLeft className="size-4" />
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["الرفاه في حياة مليئة بالمسؤوليات", "كيف نصنع مساحة لأنفسنا عندما تكون الحياة ممتلئة؟", "/ar/blog/private-wellbeing-high-responsibility"],
              ["حين يصبح الضغط هو الوضع الطبيعي", "علامات تستحق الانتباه قبل أن يتحول الإرهاق إلى أسلوب حياة.", "/ar/blog/stress-burnout-executives"],
              ["المرأة خلف كل أدوارها", "عن الثقة، الأسرة والحاجة إلى مساحة شخصية حقيقية.", "/ar/blog/womens-wellbeing-gulf"],
            ].map(([title, text, href], index) => (
              <Link key={title} to={href as any} className="group border-t border-border pt-6">
                <span className="text-[10px] text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
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
          <a href="/ar/book" className="button-gold">
            إرسال طلب خاص <ArrowUpLeft className="size-4" />
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
        <p className="mt-3 max-w-md text-sm leading-7 text-primary-foreground/70">{text}</p>
        <ArrowUpLeft className="mt-6 size-5" />
      </div>
    </a>
  );
}
