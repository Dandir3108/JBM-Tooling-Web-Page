import { CapabilityPage } from "@/components/capability-page";
import { pageContent } from "@/lib/data";

export const metadata = { title: "Tooling Division" };

export default function ToolingPage() {
  return <CapabilityPage content={pageContent.tooling} variant="tooling" />;
}
