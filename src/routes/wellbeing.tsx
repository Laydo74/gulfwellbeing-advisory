import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.wellbeing;
export const Route=createFileRoute("/wellbeing/")({head:()=>pageHead("Wellbeing — GULFWELLBEING","Private wellbeing wellbeing advisory for discerning clients across the Gulf."),component:Page});
function Page(){return <SiteShell><EditorialPage page="wellbeing" {...content}/></SiteShell>}
