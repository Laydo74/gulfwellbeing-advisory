import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.business;
export const Route=createFileRoute("/business")({head:()=>pageHead("Business Wellbeing & Private Executive Advisory | GULFWELLBEING","Private business wellbeing advisory for founders, executives, senior professionals and organisations navigating pressure, leadership, burnout prevention and the human side of performance."),component:Page});
function Page(){return <SiteShell><EditorialPage page="business" {...content}/></SiteShell>}
