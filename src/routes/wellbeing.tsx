import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.wellbeing;
export const Route=createFileRoute("/wellbeing")({head:()=>pageHead("Private Wellbeing Advisory & Coaching | GULFWELLBEING","Private wellbeing advisory and coaching for stress, emotional balance, relationships, life transitions, mindfulness and holistic wellbeing across the Gulf and internationally."),component:Page});
function Page(){return <SiteShell><EditorialPage page="wellbeing" {...content}/></SiteShell>}
