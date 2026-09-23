import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageMeta";
import { ArabicHome } from "@/components/site/ArabicPage";

export const Route=createFileRoute("/ar")({
  head:()=>pageHead("GULFWELLBEING | استشارات Wellbeing خاصة","استشارات Wellbeing خاصة وسرية مع سورور تاركان للأفراد والعائلات والقيادات."),
  component:ArabicHome
});
