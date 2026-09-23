import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.men;
export const Route=createFileRoute("/men")({head:()=>pageHead("Men's Wellbeing Advisory & Coaching | GULFWELLBEING","Private men's wellbeing advisory for pressure, fatherhood, emotional balance, leadership and personal transitions across the Gulf and internationally."),component:Page});
function Page(){return <SiteShell><EditorialPage page="men" {...content}/></SiteShell>}
