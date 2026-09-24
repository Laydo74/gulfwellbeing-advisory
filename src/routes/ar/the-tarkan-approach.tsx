import { Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";

const principles = [
  ["01", "الإنسان قبل المشكلة", "لا نختزل الإنسان في مشكلة أو عنوان واحد. البداية هي الشخص نفسه: ما الذي يعيشه، ما الذي يحمله، وما الذي تغير في حياته."],
  ["02", "السياق قبل النصيحة", "قبل أي اتجاه، تأتي مساحة لفهم الواقع والمسؤوليات والعلاقات والظروف التي تشكل الحياة اليومية."],
  ["03", "الوضوح الداخلي قبل التغيير الخارجي", "عندما يصبح ما يحدث في الداخل أوضح، يمكن النظر إلى القرارات والحدود والعلاقات والخطوات القادمة بوعي أكبر."],
  ["04", "رفاه الإنسان ككل", "الحياة الخاصة والعلاقات والأسرة والمسؤولية والقيادة ونمط الحياة قد تتقاطع، لذلك تُفهم التجربة ككل لا كأجزاء منفصلة."],
  ["05", "خاص، فردي، بلا قالب جاهز", "لا يوجد برنامج واحد مفروض على الجميع. يتشكل التركيز والإيقاع وطريقة العمل وفق الشخص واحتياجه وما يتم الاتفاق عليه."]
] as const;

export const Route = createFileRoute("/ar/the-tarkan-approach")({
  head: () => pageHead("منهج سرور طركان — GULFWELLBEING", "اكتشف منهج سرور طركان الشخصي في الرفاه: الإنسان أولاً، فهم السياق، والرفاه ككل."),
  component: Page,
});

function Page() {
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow text-gold">منهج سرور طركان</p>
        <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[1.08] md:text-8xl">مقاربة تبدأ بالإنسان، لا بالمشكلة.</h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">منهج خاص وشخصي يراعي الإنسان وسياقه وحياته الفعلية، بدلاً من تطبيق برنامج جاهز على الجميع.</p>
      </div>
    </section>
    <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="eyebrow text-gold">الفلسفة</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">الإنسان أولاً.</h2></div>
        <p className="max-w-3xl text-lg leading-9 text-primary-foreground/70">يبدأ منهج سرور طركان بالإنصات. يترك مساحة للتعقيد والسياق الشخصي والواقع خلف الدور الذي قد يحمله الإنسان. ليس برنامجاً جامداً، ولا يحاول اختزال الحياة المعقدة في قائمة جاهزة.</p>
      </div>
    </section>
    <section className="mx-auto max-w-[1300px] px-6 py-20 lg:px-12 lg:py-32">
      {principles.map(([n,eyebrow,title,body])=><article key={n} className="grid gap-8 border-t border-border py-14 md:grid-cols-[100px_260px_1fr]"><span className="font-serif text-3xl text-gold">{n}</span><p className="eyebrow">{eyebrow}</p><div><h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{body}</p></div></article>)}
    </section>
    <section className="bg-secondary px-6 py-20 text-center lg:py-28">
      <p className="eyebrow text-gold">مساحة خاصة</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">ابدأ بما يهمك أنت.</h2>
      <Link to="/ar/book" className="button-primary mt-9 inline-flex items-center gap-2">طلب استشارة خاصة <ArrowUpLeft className="size-4" /></Link>
    </section>
  </SiteShell>;
}
