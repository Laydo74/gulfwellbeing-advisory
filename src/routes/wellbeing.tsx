import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.wellbeing;
export const Route=createFileRoute("/wellbeing")({head: (ctx) => pageHeadFor(ctx, "Private Wellbeing Advisor in Dubai & the Gulf | GULFWELLBEING","Private wellbeing advisory and coaching for stress, emotional balance, relationships, life transitions, mindfulness and holistic wellbeing in Dubai, Abu Dhabi, Riyadh, Doha and across the Gulf.","/wellbeing"),component:Page});
function Page(){return <SiteShell><EditorialPage page="wellbeing" {...content}/></SiteShell>}
