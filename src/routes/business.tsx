import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.business;
export const Route=createFileRoute("/business")({head:()=>pageHead("Executive Wellbeing & Private Advisory | GULFWELLBEING","Private executive wellbeing advisory for founders, executives and senior professionals navigating pressure, burnout prevention, leadership and responsibility."),component:Page});
function Page(){return <SiteShell><EditorialPage page="business" {...content}/></SiteShell>}
