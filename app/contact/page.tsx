import { Building2, Mail, MapPin, Phone, Route } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Contact" };

const contactDetails = [
  { label: "Company", value: "JBM Group - BU5 Tooling Business", Icon: Building2 },
  { label: "Phone", value: "+91 00000 00000", Icon: Phone },
  { label: "Email", value: "bu5.tooling@jbmgroup.com", Icon: Mail },
  { label: "Location", value: "Automotive manufacturing and engineering division", Icon: MapPin },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden pt-28">
      <section className="relative px-4 py-20">
        <div className="absolute inset-0 bg-industrial-grid bg-[length:52px_52px] opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact BU5"
              title="Start a tooling, fixture, CAE, or manufacturing technology discussion."
              summary="Connect with the relevant BU5 division for project requirements, engineering reviews, and capability discussions."
            />
            <div className="mt-10 grid gap-4">
              {contactDetails.map(({ label, value, Icon }) => (
                <div key={label} className="glass rounded-lg p-5">
                  <Icon className="h-5 w-5 text-plasma" />
                  <div className="mt-4 text-xs uppercase tracking-[0.2em] text-steel">{label}</div>
                  <div className="mt-1 text-white">{value}</div>
                </div>
              ))}
            </div>
            <div className="glass mt-5 min-h-60 overflow-hidden rounded-lg p-5">
              <Route className="h-6 w-6 text-ember" />
              <div className="mt-5 h-36 rounded-md border border-white/10 bg-[radial-gradient(circle_at_35%_45%,rgba(8,217,255,.34),transparent_8rem),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]" />
              <div className="mt-4 text-sm text-steel">Map placeholder ready for Google Maps or Mapbox integration.</div>
            </div>
          </div>
          <div className="lg:pt-20">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
