import { createFileRoute } from "@tanstack/react-router";
import { ArabicPage } from "@/components/site/ArabicPage";
import { pageHead } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/men")({
  head: () => pageHead("رفاه الرجل في الخليج | استشارات خاصة | GULFWELLBEING", "استشارات خاصة في رفاه الرجل حول الضغط والأبوة والمسؤولية والقيادة والتغيرات الشخصية في دبي وأبوظبي والرياض والدوحة وعبر الخليج.", "/ar/men"),
  component: () => <ArabicPage kind="men" />,
});
