import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.women;
export const Route=createFileRoute("/women")({head:()=>pageHead("Women's Wellbeing Advisory & Coaching | GULFWELLBEING","Private women's wellbeing advisory for motherhood, relationships, confidence, family life and personal transitions across the Gulf and internationally."),component:Page});
function Page(){return <SiteShell><EditorialPage page="women" {...content}/></SiteShell>}
