import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead } from "@/components/site/PageMeta";
import { arabicPosts } from "@/lib/arabic-blog";

export const Route = createFileRoute("/ar/blog/$slug")({
  loader: ({ params }) => arabicPosts[params.slug] ?? null,
  head: ({ loaderData }) => loaderData
    ? pageHead(`${loaderData.title} | GULFWELLBEING`, loaderData.description)
    : pageHead("المقال | GULFWELLBEING", "مقال من مدونة GULFWELLBEING."),
  component: Page,
});

function Page() {
  const post = Route.useLoaderData();
  if (!post) return <SiteShell><section className="px-6 py-32 text-center"><h1 className="font-serif text-5xl">المقال غير متاح</h1><Link to="/ar/blog" className="button-primary mt-8">العودة إلى المدونة</Link></section></SiteShell>;
  return <SiteShell>
    <article>
      <header className="page-hero">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center lg:px-12 lg:py-32">
          <p className="eyebrow text-gold">{post.category}</p>
          <h1 className="mx-auto mt-6 max-w-5xl font-serif text-5xl leading-[1.08] md:text-7xl">{post.title}</h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">{post.intro}</p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        {post.sections.map((section, index) => <section key={section.title} className="border-t border-border py-12">
          <p className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{section.title}</h2>
          <p className="mt-6 text-base leading-9 text-muted-foreground">{section.body}</p>
        </section>)}
        <div className="mt-8 border-t border-border pt-10">
          <Link to="/ar/blog" className="inline-flex items-center gap-2 text-sm font-semibold">العودة إلى المدونة <ArrowUpLeft className="size-4"/></Link>
        </div>
      </div>
    </article>
  </SiteShell>;
}
