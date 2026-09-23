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
    eyebrow:"استشارات العافية الخاصة",
    title:"مساحة هادئة لاستعادة التوازن والوضوح.",
    intro:"استشارات خاصة وسرية مع سورور تاركان للأشخاص الذين يواجهون ضغوطاً متراكمة، أو يعيشون مرحلة انتقالية، أو يحتاجون إلى مساحة آمنة للتوقف وإعادة ترتيب الأولويات.",
    sections:[
      {title:"الضغط والإرهاق",body:"فهم الضغوط المتراكمة والمسؤوليات المتعددة، وإيجاد أساليب أكثر هدوءاً واستدامة للتعامل معها."},
      {title:"التوازن الداخلي",body:"مساحة للتوقف، وفهم ما يحدث داخلياً، واستعادة الهدوء والقدرة على التعامل مع متطلبات الحياة بوضوح."},
      {title:"العلاقات والحياة الخاصة",body:"دعم خاص للتفكير في العلاقات، التواصل، الحدود والتغيرات التي تطرأ على الحياة الأسرية والشخصية."},
      {title:"التحولات الحياتية",body:"عندما تتغير الأولويات أو الأدوار أو الظروف، تساعد المساحة الخاصة على فهم المرحلة الجديدة والتعامل معها بوعي."},
      {title:"الحضور واستعادة الطاقة",body:"ممارسات للعناية بالذات والحضور واستعادة الإيقاع الشخصي بما يتناسب مع واقع الحياة اليومية."}
    ]
  },
  women: {
    eyebrow:"عافية المرأة",
    title:"مساحة خاصة للمرأة، بعيداً عن كل الأدوار التي تحملها.",
    intro:"دعم خاص للمرأة في الثقة بالنفس، الأمومة، العلاقات، الحياة الأسرية، الضغط والتحولات الشخصية.",
    sections:[
      {title:"الأمومة وضغط الحياة",body:"مساحة للمرأة حتى تجد مكاناً لها وسط مسؤوليات الأمومة والأسرة والعمل، من دون أن تختزل هويتها في دور واحد."},
      {title:"الثقة والهوية الشخصية",body:"التوقف أمام ما تريده المرأة فعلاً، تقوية الثقة بالنفس، ووضع حدود أكثر وضوحاً وانسجاماً مع قيمها."},
      {title:"الزواج والعلاقات",body:"مساحة هادئة للتفكير في التواصل، الضغوط العاطفية، الحدود والتغيرات داخل العلاقة."},
      {title:"المراحل والانتقالات",body:"مرافقة شخصية خلال المراحل الجديدة، تغير الأولويات أو الشعور بأن الحياة الحالية لم تعد تشبه ما كانت عليه."}
    ]
  },
  men: {
    eyebrow:"عافية الرجل",
    title:"مساحة خاصة للرجل الذي يحمل مسؤوليات كثيرة.",
    intro:"دعم خاص للرجال في التعامل مع الضغط، المسؤولية، الأبوة، الثقة، القيادة والتحولات الشخصية.",
    sections:[
      {title:"ثقل المسؤولية",body:"عندما تصبح المسؤولية حاضرة في كل قرار، تمنح المساحة الخاصة فرصة للتوقف وإعادة ترتيب الأولويات."},
      {title:"الأبوة والحياة الأسرية",body:"التعامل مع دور الأب ومسؤوليات الأسرة والتوقعات المختلفة مع الحفاظ على مساحة شخصية متوازنة."},
      {title:"التوازن العاطفي",body:"مساحة خاصة للتفكير والتعبير وفهم الاحتياجات والمشاعر بعيداً عن الضغوط اليومية."},
      {title:"الثقة والقيادة",body:"وضوح شخصي يساعد على التعامل مع القرارات والقيادة عندما تتداخل المسؤوليات المهنية مع الحياة الخاصة."}
    ]
  },
  business: {
    eyebrow:"الأعمال والقيادات",
    title:"وضوح أكبر لمن يعيش تحت مسؤولية كبيرة.",
    intro:"استشارات عافية خاصة للمؤسسين والمديرين والمهنيين الذين يحتاجون إلى مساحة مستقلة للتفكير، إدارة الضغط والحفاظ على الوضوح.",
    sections:[
      {title:"عافية القيادات",body:"مساحة خاصة للتعامل مع الضغط المرتبط بالقرارات، المسؤولية والأدوار المتعددة التي ترافق المناصب العليا."},
      {title:"الوقاية من الاحتراق",body:"التعرف على أنماط الضغط المستمرة وبناء مساحة شخصية أكثر استدامة قبل أن يتحول الإرهاق إلى أسلوب حياة."},
      {title:"وضوح القيادة",body:"وقت خاص للتفكير في القرارات، العلاقات المهنية، الحدود وأسلوب القيادة."},
      {title:"الحياة خلف المنصب",body:"لأن الحياة الخاصة لا تتوقف عند باب المكتب، يمكن أن يشمل الدعم العلاقات والأسرة والتحولات الشخصية."}
    ]
  },
  vip: {
    eyebrow:"خدمة العافية الخاصة VIP",
    title:"تجربة أكثر خصوصية، مصممة حول حياتك.",
    intro:"ترتيبات خاصة للأفراد والعائلات والقيادات ذات الجداول المكثفة والحياة الدولية، مع مستوى عالٍ من الخصوصية والمرونة.",
    sections:[
      {title:"خصوصية تامة",body:"تُبنى التجربة حول خصوصية العميل وسياقه، مع ترتيبات يتم الاتفاق عليها بشكل شخصي."},
      {title:"مرونة في المواعيد",body:"جلسات عن بُعد وترتيبات مرنة للعملاء في الخليج ودولياً، وفق التوفر."},
      {title:"دعم شخصي وعائلي وتنفيذي",body:"يمكن أن يشمل الدعم العافية الشخصية، المسؤوليات التنفيذية، الحياة العائلية والتحولات الخاصة."},
      {title:"بناءً على طلب خاص",body:"لا يتم نشر رسوم الخدمة VIP. يتم فهم الاحتياج أولاً، ثم مناقشة الصيغة المناسبة والتكلفة بشكل خاص."}
    ]
  },
  about: {
    eyebrow:"عن GULFWELLBEING",
    title:"مقاربة إنسانية لحياة مليئة بالتفاصيل والمسؤوليات.",
    intro:"تقود GULFWELLBEING سورور تاركان، مستشارة Wellbeing ومدرّبة وReiki Master، وتقدم مساحة خاصة ومدروسة للتفكير والعافية والتغيير الشخصي.",
    sections:[
      {title:"سورور تاركان",body:"يبدأ العمل بالاستماع وفهم الشخص وظروفه، وليس ببرنامج جاهز. ويمكن، بحسب احتياج الشخص ورغبته، أن يجمع العمل بين التوجيه التأملي وممارسات العافية الشمولية وReiki."},
      {title:"شخصي. شامل. مدروس.",body:"لا توجد صيغة واحدة للحياة الخاصة، ولا طريقة واحدة تناسب الجميع. تُبنى كل جلسة حول السياق والأولويات وما يحتاج الشخص إلى فهمه أو تغييره."},
      {title:"الخصوصية جزء أساسي",body:"المساحة مصممة لتكون هادئة ومحترمة، بحيث يمكن الحديث عن الأمور الشخصية بعيداً عن الأحكام أو التعرض غير الضروري."}
    ]
  },
  blog: {
    eyebrow:"المدونة",
    title:"أفكار حول العافية، الحياة والعلاقات.",
    intro:"مقالات وتأملات حول العافية الشخصية، العلاقات، الحياة الأسرية، القيادة والتحولات التي نمر بها.",
    sections:[
      {title:"العافية الخاصة في الخليج",body:"كيف يمكن لمساحة خاصة ومدروسة أن تساعد الأشخاص الذين يعيشون حياة مليئة بالمسؤوليات."},
      {title:"الضغط والاحتراق لدى القيادات",body:"كيف نتوقف وننتبه إلى الضغط المستمر قبل أن يصبح جزءاً طبيعياً من الحياة."},
      {title:"عافية المرأة والرجل",body:"أفكار حول الثقة، الأسرة، المسؤولية، العلاقات والتحولات الشخصية."},
      {title:"وضوح القيادة",body:"لماذا يحتاج أصحاب المسؤوليات الكبيرة أحياناً إلى مساحة خاصة بعيداً عن القرارات اليومية."}
    ]
  },
  privacy: {
    eyebrow:"الخصوصية",
    title:"خصوصيتك وبياناتك محل اهتمام.",
    intro:"نتعامل مع البيانات التي تقدمها عبر الموقع بعناية وبالقدر اللازم للرد على استفساراتك وإدارة طلباتك الخاصة.",
    sections:[
      {title:"البيانات التي تقدمها",body:"قد تشمل الاسم والبريد الإلكتروني والهاتف والبلد وطريقة التواصل والوقت المفضل ورسالة الاستفسار."},
      {title:"استخدام البيانات",body:"تُستخدم البيانات لمعالجة الاستفسار والتواصل معك وإدارة الطلبات الخاصة، ولا تُعرض طلبات العملاء للعامة."},
      {title:"الخدمات التقنية",body:"قد يعتمد الموقع على خدمات الاستضافة وقاعدة البيانات والمصادقة. تتم إدارة الوصول وفق إعدادات هذه الخدمات."}
    ]
  },
  terms: {
    eyebrow:"الشروط والأحكام",
    title:"شروط استخدام الموقع.",
    intro:"باستخدام هذا الموقع، توافق على استخدامه لأغراض مشروعة، وعلى أن المعلومات المنشورة لا تشكل بديلاً عن الرعاية الطبية أو النفسية المنظمة.",
    sections:[
      {title:"طبيعة الخدمات",body:"تقدم GULFWELLBEING استشارات Wellbeing وCoaching وممارسات عافية. ولا تُقدّم هذه الخدمات كبديل للطوارئ أو التشخيص أو العلاج الطبي أو النفسي المنظم."},
      {title:"الاستفسارات والجلسات",body:"طلب الجلسة هو استفسار خاص وليس حجزاً آلياً. يتم التواصل لاحقاً لمناقشة التوفر والشكل المناسب والرسوم."},
      {title:"محتوى الموقع",body:"المحتوى المنشور مخصص للمعلومات العامة ولا يشكل نصيحة شخصية أو طبية أو قانونية."}
    ]
  }
};

export function ArabicPage({kind}:{kind:Kind}) {
  const d=data[kind];
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
    {!["privacy","terms"].includes(kind) && <section className="bg-secondary px-6 py-20 text-center"><LockKeyhole className="mx-auto size-5 text-gold"/><h2 className="mt-5 font-serif text-5xl">ابدأ بخطوة خاصة.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">أرسل طلبك بشكل خاص، ثم يتم التواصل معك لمناقشة الخطوة التالية.</p><Link to="/ar/book" className="button-primary mt-8">طلب جلسة خاصة</Link></section>}
  </SiteShell>;
}

export function ArabicHome() {
  return <SiteShell>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
      <img src={hero} alt="مساحة هادئة وخاصة للعافية" className="absolute inset-0 size-full object-cover"/>
      <div className="absolute inset-0 bg-linear-to-l from-primary via-primary/72 to-transparent"/>
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-end px-6 pb-16 lg:px-12 lg:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold">استشارات Wellbeing خاصة · الخليج ودولياً</p>
          <h1 className="mt-6 font-serif text-6xl leading-[.95] sm:text-8xl">رفاهك<br/><em className="font-normal">يستحق مساحة خاصة.</em></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/75">مساحة هادئة وسرية مع سورور تاركان للتعامل مع الضغوط، العلاقات، المسؤوليات والتحولات الشخصية بوضوح واتزان أكبر.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/ar/book" className="button-gold">طلب جلسة خاصة <ArrowUpLeft className="size-4"/></Link><Link to="/ar/wellbeing" className="button-on-dark">اكتشف Wellbeing</Link></div>
        </div>
      </div>
    </section>

    <section className="px-6 py-20 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]"><p className="eyebrow">علاقة استشارية خاصة</p><div><h2 className="font-serif text-5xl leading-none sm:text-7xl">العافية شخصية.<br/>والدعم يجب أن يكون كذلك.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">تقدم GULFWELLBEING مساحة هادئة وسرية للتفكير، استعادة المنظور والتعامل مع مراحل الحياة المعقدة. لا يوجد برنامج واحد يناسب الجميع.</p></div></div></section>

    <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1500px]"><p className="eyebrow">مجالات الاستشارة</p><h2 className="mt-4 font-serif text-5xl sm:text-7xl">مسارات خاصة</h2><div className="mt-12 grid gap-px bg-border md:grid-cols-3">
      <Area title="العافية الشخصية" text="الضغط، التوازن الداخلي، العلاقات، الحضور والتحولات." image={stillLife} href="/ar/wellbeing"/>
      <Area title="عافية المرأة" text="الأمومة، الثقة، العلاقات، الأسرة والتحولات الشخصية." image={woman} href="/ar/women"/>
      <Area title="عافية الرجل" text="المسؤولية، الأبوة، الضغط، الثقة والقيادة." image={executive} href="/ar/men"/>
    </div></div></section>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2"><img src={executive} alt="دعم خاص للقيادات" className="min-h-[30rem] w-full object-cover"/><div className="flex items-center px-6 py-20 lg:px-20"><div className="max-w-xl"><p className="eyebrow text-gold">الأعمال والقيادات</p><h2 className="mt-5 font-serif text-5xl sm:text-7xl">وضوح أكبر.<br/>وحضور أقوى.</h2><p className="mt-7 text-base leading-8 text-primary-foreground/70">استشارات خاصة للمؤسسين والمديرين والمهنيين الذين يعيشون تحت ضغط المسؤولية والقرارات المستمرة.</p><Link to="/ar/business" className="button-gold mt-9">اكتشف عافية القيادات</Link></div></div></section>

    <section className="grid bg-background lg:grid-cols-[1.1fr_0.9fr]"><div className="order-2 flex items-center px-6 py-20 lg:order-1 lg:px-20"><div><LockKeyhole className="size-5 text-gold"/><p className="mt-7 eyebrow">بناءً على طلب خاص</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">خدمة VIP<br/>للعافية الخاصة</h2><p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">تجربة مصممة حول الجداول المكثفة، الحياة الدولية والحاجة إلى مستوى أعلى من الخصوصية والمرونة.</p><Link to="/ar/business/vip-concierge-wellbeing" className="button-primary mt-9">اكتشف خدمة VIP</Link></div></div><img src={stillLife} alt="مساحة خاصة وهادئة" className="order-1 h-full min-h-[30rem] w-full object-cover lg:order-2"/></section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2"><div><p className="eyebrow">مقاربة سورور تاركان</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">الاهتمام بالإنسان،<br/>من دون افتراضات.</h2></div><div className="space-y-8 text-base leading-8 text-muted-foreground"><p>يبدأ العمل بالاستماع وفهم واقع الشخص، لا بتطبيق برنامج جاهز. هناك مساحة للتعقيد، مع توجيه عملي يتناسب مع الحياة الحقيقية.</p><p>يمكن أن يركز الدعم على العافية الشخصية، العلاقات، الأسرة، الانتقال من مرحلة إلى أخرى، القيادة أو الضغوط التي يصعب الحديث عنها في أماكن أخرى.</p><p>وعندما يكون ذلك مناسباً ومطلوباً، يمكن أن تدخل ممارسات العافية الشمولية وReiki ضمن العمل. سورور تاركان هي Reiki Master.</p><Link to="/ar/about" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[.14em] text-foreground">تعرّف على سورور تاركان <ArrowUpLeft className="size-4"/></Link></div></div></section>

    <section className="bg-background px-5 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1350px]"><div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">المدونة</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">من المدونة</h2></div><Link to="/ar/blog" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] sm:inline-flex">عرض الكل <ArrowUpLeft className="size-4"/></Link></div><div className="grid gap-8 md:grid-cols-3">{[
      ["العافية الخاصة في الخليج","مساحة خاصة للأشخاص الذين يحملون مسؤوليات كبيرة.","/blog/private-wellbeing-advisory-gulf"],
      ["الضغط والاحتراق لدى القيادات","كيف ننتبه إلى الضغط المستمر قبل أن يصبح الوضع الطبيعي.","/blog/stress-burnout-executives"],
      ["عافية المرأة في الخليج","الثقة، الأسرة، العلاقات والتحولات الشخصية.","/blog/womens-wellbeing-gulf"]
    ].map(([title,text,to],i)=><Link key={title} to={to as any} className="group border-t border-border pt-6"><span className="text-[10px] text-gold">0{i+1}</span><h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.14em]">اقرأ المقال <ArrowUpLeft className="size-4"/></span></Link>)}</div></div></section>

    <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-gold">استفسار خاص</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">مساحة سرية<br/>لما يهمك حقاً.</h2></div><Link to="/ar/book" className="button-gold">طلب جلسة خاصة <ArrowUpLeft className="size-4"/></Link></div></section>
  </SiteShell>;
}

function Area({title,text,image,href}:{title:string;text:string;image:string;href:string}) {
  return <Link to={href as any} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground"><img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.025]"/><div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="font-serif text-4xl">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-primary-foreground/70">{text}</p><ArrowUpLeft className="mt-6 size-5"/></div></Link>;
}
