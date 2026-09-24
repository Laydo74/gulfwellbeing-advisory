import { createFileRoute } from "@tanstack/react-router";
import { ArabicPage } from "@/components/site/ArabicPage";
import { pageHead } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/women")({
  head: () => pageHead("رفاه المرأة في الخليج | استشارات خاصة | GULFWELLBEING", "استشارات خاصة في رفاه المرأة حول الأمومة والثقة والعلاقات والحياة العائلية والتحولات الشخصية في دبي وأبوظبي والرياض والدوحة وعبر الخليج.", "/ar/women"),
  component: () => <ArabicPage kind="women" />,
});
