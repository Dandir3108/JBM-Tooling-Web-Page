"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const initialStatus = {
  type: "idle" as "idle" | "success" | "error",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState(initialStatus);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit inquiry.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: "Inquiry sent to Marketing.N4@jbmgroup.com.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to submit inquiry.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="glass rounded-lg p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Division" name="division" />
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-steel">Project Requirement</span>
        <textarea
          name="requirement"
          required
          rows={6}
          className="w-full rounded-md border border-white/10 bg-carbon/70 px-4 py-3 text-white outline-none transition placeholder:text-steel/60 focus:border-plasma focus:shadow-glow"
          placeholder="Tooling, fixtures, CAE validation, timeline..."
        />
      </label>
      <button
        disabled={submitting}
        className="mt-5 inline-flex items-center gap-2 rounded-md bg-plasma px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-carbon transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit Inquiry"}
        <Send className="h-4 w-4" />
      </button>
      {status.message ? (
        <p
          className={`mt-4 text-sm ${
            status.type === "success" ? "text-plasma" : "text-ember"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-steel">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-white/10 bg-carbon/70 px-4 py-3 text-white outline-none transition placeholder:text-steel/60 focus:border-plasma focus:shadow-glow"
        placeholder={label}
      />
    </label>
  );
}
