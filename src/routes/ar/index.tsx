import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageMeta";
import { ArabicHome } from "@/components/site/ArabicPage";

export const Route = createFileRoute("/ar/")({
  head: () => pageHead("GULFWELLBEING | استشارات خاصة في الرفاه", "استشارات خاصة في الرفاه وسرية مع سرور طركان للأفراد والعائلات والقيادات."),
  component: ArabicHome,
});
