import { CapabilityPage } from "@/components/capability-page";
import { pageContent } from "@/lib/data";

export const metadata = { title: "CAE & Testing Lab" };

export default function CaeLabPage() {
  return <CapabilityPage content={pageContent.cae} variant="mesh" />;
}
