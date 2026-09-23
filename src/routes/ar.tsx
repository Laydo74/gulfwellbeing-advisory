import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageMeta";
import { ArabicHome } from "@/components/site/ArabicPage";

export const Route=createFileRoute("/ar")({
  head:()=>pageHead("GULFWELLBEING | Private Wellbeing Advisory بالعربية","استشارات Wellbeing خاصة وسرية مع Sourour Tarkan للأفراد والعائلات والقيادات."),
  component:ArabicHome
});
