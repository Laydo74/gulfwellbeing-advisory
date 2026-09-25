import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/the-tarkan-approach")({
  head: (ctx) => pageHeadFor(ctx, "L'Approche Tarkan | GULFWELLBEING", "Découvrez l'approche privée du bien-être développée par Sourour Tarkan : la personne avant tout, le contexte avant le conseil, l'être humain dans son ensemble.", "/fr/the-tarkan-approach"),
  component: () => <FrenchPage kind="approach" />,
});
