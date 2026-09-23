import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.business;
export const Route=createFileRoute("/business")({head:()=>pageHead("Business — GULFWELLBEING","Private business wellbeing advisory for discerning clients across the Gulf."),component:Page});
function Page(){return <SiteShell><EditorialPage page="business" {...content}/></SiteShell>}
