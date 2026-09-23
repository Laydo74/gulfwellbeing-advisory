import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import hero from "@/assets/gulfwellbeing-hero.jpg";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";

type Kind = "wellbeing" | "women" | "men" | "business" | "vip" | "about" | "blog" | "privacy" | "terms";

const data: Record<Kind, {eyebrow:string; title:string; intro:string; sections:{title:string;body:string}[]}> = {
  wellbeing: {
    eyebrow:"PRIVATE WELLBEING ADVISORY",
    title:"Wellbeing شخصي، في مساحة تحترم خصوصية حياتك.",
    intro:"استشارات Wellbeing خاصة وسرية للأشخاص الذين يعيشون تحت ضغط، يمرون بمرحلة تغيير أو يحتاجون إلى مساحة هادئة لاستعادة الوضوح والتوازن.",
    sections:[
      {title:"الضغط والإرهاق",body:"مساحة للتعامل مع الضغط المتراكم، المسؤوليات الكثيرة والإرهاق قبل أن يصبح كل شيء أصعب."},
      {title:"التوازن العاطفي",body:"فهم ما يحدث داخلياً، تنظيم المساحة العاطفية واستعادة القدرة على التعامل مع الحياة بوضوح وهدوء."},
      {title:"العلاقات والأسرة",body:"دعم خاص للتعامل مع العلاقات، التواصل، الحدود والتغيرات داخل الحياة العائلية."},
      {title:"التحولات الحياتية",body:"عندما تتغير الأدوار أو الأولويات أو الظروف، يمكن أن تساعد المساحة الخاصة على فهم المرحلة التالية."},
      {title:"الحضور واستعادة الطاقة",body:"ممارسات وطرق تساعد على التوقف، الحضور واستعادة الإيقاع الشخصي بطريقة تناسب الحياة الواقعية."}
    ]
  },
  women: {
    eyebrow:"WOMEN'S WELLBEING",
    title:"مساحة خاصة للمرأة، بعيداً عن الأدوار التي تحملها كل يوم.",
    intro:"استشارات Wellbeing خاصة للنساء حول الثقة بالنفس، الأمومة، الحياة العائلية، العلاقات، الضغط والتحولات الشخصية.",
    sections:[
      {title:"الأمومة والضغط اليومي",body:"التعامل مع مسؤولية الأمومة دون اختزال المرأة في دور واحد، وإيجاد مساحة شخصية داخل الحياة العائلية."},
      {title:"الثقة بالنفس والهوية",body:"استعادة الثقة، وضوح الحدود والقدرة على اتخاذ قرارات تنسجم مع الشخص الحقيقي خلف التوقعات."},
      {title:"الزواج والعلاقات",body:"مساحة هادئة للتفكير في التواصل، الضغط العاطفي، الحدود والتغيرات داخل العلاقة."},
      {title:"الانتقالات الشخصية",body:"مراحل جديدة في الحياة، تغيّر الأولويات أو الشعور بأن النسخة القديمة من الحياة لم تعد مناسبة."}
    ]
  },
  men: {
    eyebrow:"MEN'S WELLBEING",
    title:"مساحة خاصة للرجل الذي يحمل مسؤوليات كثيرة.",
    intro:"استشارات Wellbeing خاصة للرجال حول الضغط، الأبوة، المسؤولية، الثقة، القيادة والتغيرات الشخصية.",
    sections:[
      {title:"ضغط المسؤولية",body:"عندما تصبح المسؤولية خلفية دائمة لكل قرار، تساعد المساحة الخاصة على التوقف وإعادة ترتيب الأولويات."},
      {title:"الأبوة والعائلة",body:"التعامل مع دور الأب، الأسرة والتوقعات دون فقدان المساحة الشخصية."},
      {title:"التوازن العاطفي",body:"مساحة للتعبير والتفكير في المشاعر والاحتياجات بطريقة هادئة وخاصة."},
      {title:"الثقة والقيادة",body:"الوضوح الشخصي والقدرة على اتخاذ القرارات عندما تتقاطع القيادة مع الحياة الخاصة."}
    ]
  },
  business: {
    eyebrow:"BUSINESS & EXECUTIVE",
    title:"وضوح خاص لمن يعيش تحت مسؤولية كبيرة.",
    intro:"دعم Wellbeing خاص للمؤسسين والمديرين والمهنيين الذين يحتاجون إلى مساحة مستقلة للتفكير، الوقاية من الإرهاق والحفاظ على الوضوح.",
    sections:[
      {title:"Executive Wellbeing",body:"مساحة خاصة لفهم الضغط المرتبط بالمسؤولية والقرارات والأدوار المتعددة."},
      {title:"الوقاية من الاحتراق",body:"التعرف على أنماط الضغط المستمرة وبناء مساحة شخصية أكثر استدامة قبل الوصول إلى الإنهاك."},
      {title:"وضوح القيادة",body:"وقت خاص للتفكير في القرارات، العلاقات المهنية، الحدود وأسلوب القيادة."},
      {title:"الحياة خلف المنصب",body:"لأن الحياة الخاصة لا تتوقف عند باب المكتب، يمكن أن يشمل الدعم العلاقات والأسرة والانتقالات الشخصية."}
    ]
  },
  vip: {
    eyebrow:"VIP CONCIERGE WELLBEING",
    title:"Private Concierge Wellbeing، بمستوى أعلى من المرونة والخصوصية.",
    intro:"ترتيبات Wellbeing خاصة للأفراد والعائلات والقيادات ذات الجداول المكثفة والحياة الدولية، عبر طلب خاص.",
    sections:[
      {title:"Private & discreet",body:"الخصوصية والمرونة جزء أساسي من التجربة، مع ترتيبات يتم الاتفاق عليها وفقاً للسياق والاحتياجات."},
      {title:"Flexible arrangements",body:"جلسات عن بعد وترتيبات مرنة للعملاء في الخليج ودولياً، وفق التوفر."},
      {title:"Executive & family support",body:"يمكن أن يشمل الدعم Wellbeing الشخصي، المسؤوليات التنفيذية، الحياة العائلية والتحولات الخاصة."},
      {title:"By private enquiry",body:"لا يتم عرض رسوم VIP بشكل عام. يتم فهم الاحتياج أولاً ثم مناقشة الشكل المناسب والرسوم بشكل خاص."}
    ]
  },
  about: {
    eyebrow:"ABOUT GULFWELLBEING",
    title:"مقاربة إنسانية لحياة معقدة.",
    intro:"يقود Gulfwellbeing Sourour Tarkan، وهي Wellbeing Advisor & Coach وReiki Master، وتقدم مساحة خاصة ومدروسة للتفكير والرفاه والتغيير الشخصي.",
    sections:[
      {title:"Sourour Tarkan",body:"يبدأ العمل بالاستماع وفهم الشخص وظروفه، وليس ببرنامج جاهز. يمكن أن يجمع العمل بين reflective coaching وممارسات holistic wellbeing وReiki وفقاً لاحتياجات الشخص واتفاقه."},
      {title:"Personal. Holistic. Considered.",body:"لا توجد صيغة واحدة للحياة الخاصة، ولا طريقة واحدة تناسب الجميع. يتم تشكيل كل جلسة حول السياق والأولويات وما يحتاج الشخص إلى فهمه أو تغييره."},
      {title:"الخصوصية جزء من التجربة",body:"المساحة مصممة لتكون هادئة ومحترمة، بحيث يمكن الحديث عن الظروف الشخصية دون حكم أو تعرض غير ضروري."}
    ]
  },
  blog: {
    eyebrow:"THE PRIVATE JOURNAL",
    title:"أفكار لحياة أكثر وعياً واتزاناً.",
    intro:"مقالات وتأملات حول Wellbeing، العلاقات، القيادة، الحياة العائلية والتحولات الشخصية.",
    sections:[
      {title:"Wellbeing خاص في الخليج",body:"كيف يمكن لمساحة خاصة ومدروسة أن تساعد الأشخاص الذين يعيشون حياة مليئة بالمسؤوليات."},
      {title:"الضغط والاحتراق لدى القيادات",body:"مساحة للتفكير قبل أن يصبح الضغط المستمر هو الوضع الطبيعي."},
      {title:"Wellbeing للمرأة والرجل",body:"مقاربات حول الثقة، الأسرة، المسؤولية، العلاقات والتحولات."},
      {title:"وضوح القيادة",body:"لماذا يحتاج أصحاب المسؤوليات الكبيرة أحياناً إلى مساحة خاصة بعيداً عن القرارات اليومية."}
    ]
  },
  privacy: {
    eyebrow:"PRIVACY",
    title:"الخصوصية والبيانات.",
    intro:"نحن نتعامل مع طلبات التواصل والبيانات الشخصية بعناية وبالقدر اللازم لتقديم تجربة الموقع والرد على الاستفسارات الخاصة.",
    sections:[
      {title:"البيانات التي تقدمها",body:"قد تشمل بيانات الاسم والبريد والهاتف والبلد وطريقة التواصل والوقت المفضل ورسالة الاستفسار."},
      {title:"استخدام البيانات",body:"تستخدم البيانات لمعالجة الاستفسار والتواصل معك وإدارة الطلبات الخاصة. لا نعرض طلبات العملاء للعامة."},
      {title:"الخدمات الخارجية",body:"قد يعتمد الموقع على خدمات تقنية مثل الاستضافة وقاعدة البيانات والمصادقة. تتم إدارة الوصول وفقاً لإعدادات هذه الخدمات."}
    ]
  },
  terms: {
    eyebrow:"TERMS & CONDITIONS",
    title:"شروط استخدام الموقع.",
    intro:"باستخدام هذا الموقع، أنت توافق على استخدامه لأغراض مشروعة وعلى أن المعلومات المنشورة لا تشكل بديلاً عن الرعاية الطبية أو النفسية المنظمة.",
    sections:[
      {title:"طبيعة الخدمات",body:"Gulfwellbeing يقدم Wellbeing advisory وcoaching وممارسات wellbeing. هذه الخدمات لا تُقدّم كبديل للطوارئ أو التشخيص أو العلاج الطبي أو النفسي المنظم."},
      {title:"الاستفسارات والحجوزات",body:"طلب الجلسة هو private enquiry وليس حجزاً آلياً. يتم التواصل لاحقاً لمناقشة التوفر والشكل المناسب والرسوم."},
      {title:"محتوى الموقع",body:"المحتوى مخصص للمعلومات العامة ولا يشكل نصيحة شخصية أو طبية أو قانونية."}
    ]
  }
};

export function ArabicPage({kind}:{kind:Kind}) {
  const d=data[kind];
  const isBlog=kind==="blog";
  const image=kind==="women"?woman:kind==="men"||kind==="business"?executive:stillLife;
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto grid min-h-[72vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="eyebrow text-gold">{d.eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">{d.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{d.intro}</p>
          {!["privacy","terms"].includes(kind) && <Link to="/ar/book" className="button-primary mt-9">طلب جلسة خاصة <ArrowUpLeft className="size-4"/></Link>}
        </div>
        <img src={image} width={1408} height={1008} alt="" className="h-[48vh] w-full object-cover"/>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      {d.sections.map((s,i)=><article key={s.title} className="border-t border-border py-12">
        <div className="grid gap-7 md:grid-cols-[150px_1fr]">
          <div><span className="font-serif text-3xl text-gold">0{i+1}</span></div>
          <div><h2 className="font-serif text-4xl md:text-5xl">{s.title}</h2><p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{s.body}</p></div>
        </div>
      </article>)}
    </section>
    {isBlog && <section className="bg-secondary px-6 py-16 text-center"><h2 className="font-serif text-5xl">استكشف Journal</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">مقالات إضافية حول Wellbeing، العلاقات، القيادة والتحولات.</p><Link to="/blog" className="button-primary mt-8">English Journal <ArrowRight className="size-4"/></Link></section>}
    {!["privacy","terms"].includes(kind) && <section className="bg-secondary px-6 py-20 text-center"><LockKeyhole className="mx-auto size-5 text-gold"/><h2 className="mt-5 font-serif text-5xl">ابدأ بمحادثة خاصة.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">طلب الجلسة يتم بشكل خاص، ثم يتم التواصل معك لمناقشة الخطوة التالية.</p><Link to="/ar/book" className="button-primary mt-8">طلب جلسة خاصة</Link></section>}
  </SiteShell>;
}

export function ArabicHome() {
  return <SiteShell>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
      <img src={hero} alt="مساحة خاصة وهادئة لـ Wellbeing" className="absolute inset-0 size-full object-cover"/>
      <div className="absolute inset-0 bg-linear-to-l from-primary via-primary/70 to-transparent"/>
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-end px-6 pb-16 lg:px-12 lg:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
          <h1 className="mt-6 font-serif text-6xl leading-[.95] sm:text-8xl">لمن يحمل<br/><em className="font-normal">الكثير.</em></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/75">مساحة خاصة وسرية مع Sourour Tarkan للتعامل مع الضغط، العلاقات، المسؤوليات، التغيير والقيادة بوضوح أكبر.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/ar/book" className="button-gold">طلب جلسة خاصة <ArrowUpLeft className="size-4"/></Link><Link to="/ar/wellbeing" className="button-on-dark">استكشف Wellbeing</Link></div>
        </div>
      </div>
    </section>
    <section className="px-6 py-20 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]"><p className="eyebrow">PRIVATE ADVISORY</p><div><h2 className="font-serif text-5xl leading-none sm:text-7xl">Wellbeing شخصي.<br/>ودعم يليق بخصوصية حياتك.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Gulfwellbeing يقدم مساحة هادئة وسرية للتفكير، استعادة المنظور والتعامل مع مراحل الحياة المعقدة. لا يوجد برنامج واحد للجميع.</p></div></div></section>
    <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1500px]"><p className="eyebrow">المجالات</p><h2 className="mt-4 font-serif text-5xl sm:text-7xl">مسارات خاصة</h2><div className="mt-12 grid gap-px bg-border md:grid-cols-2">
      <Area title="Private Wellbeing" text="الضغط، التوازن العاطفي، العلاقات، الحضور والتغيير." image={stillLife} href="/ar/wellbeing"/>
      <Area title="Women's Wellbeing" text="الأمومة، الثقة، العلاقات، الأسرة والتحولات الشخصية." image={woman} href="/ar/women"/>
      <Area title="Men's Wellbeing" text="المسؤولية، الأبوة، الضغط، القيادة والتوازن." image={executive} href="/ar/men"/>
      <Area title="Business & Executive" text="Executive wellbeing، وضوح القيادة والوقاية من الاحتراق." image={executive} href="/ar/business"/>
    </div></div></section>
    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2"><img src={stillLife} alt="VIP Concierge Wellbeing" className="min-h-[30rem] w-full object-cover"/><div className="flex items-center px-6 py-20 lg:px-20"><div className="max-w-xl"><LockKeyhole className="size-5 text-gold"/><p className="eyebrow mt-7 text-gold">VIP CONCIERGE WELLBEING</p><h2 className="mt-5 font-serif text-5xl sm:text-7xl">مستوى أكثر خصوصية.</h2><p className="mt-7 text-base leading-8 text-primary-foreground/70">تجربة مخصصة للأشخاص والعائلات والقيادات ذات الجداول المكثفة والحياة الدولية.</p><Link to="/business/vip-concierge-wellbeing" className="button-gold mt-9">اكتشف VIP Concierge</Link></div></div></section>
  </SiteShell>;
}
function Area({title,text,image,href}:{title:string;text:string;image:string;href:string}){return <Link to={href as any} className="group relative min-h-[28rem] overflow-hidden bg-primary text-primary-foreground"><img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.025]"/><div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="font-serif text-4xl">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-primary-foreground/70">{text}</p><ArrowUpLeft className="mt-6 size-5"/></div></Link>}
