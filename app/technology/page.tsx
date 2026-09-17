import { CapabilityPage } from "@/components/capability-page";
import { pageContent } from "@/lib/data";

export const metadata = { title: "Technology" };

export default function TechnologyPage() {
  return <CapabilityPage content={pageContent.technology} variant="mesh" />;
}
