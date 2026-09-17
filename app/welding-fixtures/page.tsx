import { CapabilityPage } from "@/components/capability-page";
import { pageContent } from "@/lib/data";

export const metadata = { title: "Welding Fixture Division" };

export default function WeldingFixturesPage() {
  return <CapabilityPage content={pageContent.welding} variant="robot" accent="ember" />;
}
