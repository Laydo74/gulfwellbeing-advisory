import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.women;
export const Route=createFileRoute("/women/")({head:()=>pageHead("Women — GULFWELLBEING","Private women wellbeing advisory for discerning clients across the Gulf."),component:Page});
function Page(){return <SiteShell><EditorialPage page="women" {...content}/></SiteShell>}
