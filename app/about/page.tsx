import { CapabilityPage } from "@/components/capability-page";
import { pageContent } from "@/lib/data";

export const metadata = { title: "About BU5" };

export default function AboutPage() {
  return <CapabilityPage content={pageContent.about} variant="tooling" />;
}
