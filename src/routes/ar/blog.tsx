import { createFileRoute, Outlet } from "@tanstack/react-router";
import { pageHead } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/blog")({
  head: () => pageHead("المدونة الخاصة | GULFWELLBEING", "مقالات عربية أصلية حول الرفاه الشخصي، رفاه المرأة والرجل، العلاقات، الأسرة، القيادة والتحولات الحياتية."),
  component: () => <Outlet />,
});
