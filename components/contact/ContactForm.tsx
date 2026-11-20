"use client";
import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import CopyEmailButton from "./CopyEmailButton";

// Focus: lime border + the global lime focus ring. Invalid (only after the user has interacted): rose border.
const inputCls =
  "w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-bone placeholder-mute transition-colors hover:border-bone/30 focus:border-lime [&:user-invalid]:border-rose";

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.12em] text-bone/85">
        {label}
        {optional && <span className="normal-case tracking-normal text-mute">optional</span>}
      </span>
      {children}
    </label>
  );
}

/**
 * No backend: submitting opens the visitor's mail client with the message pre-filled,
 * then shows a note with the address and a copy button in case no mail app opens.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form data-aos="fade-up" onSubmit={onSubmit} aria-labelledby="form-title" className="tile flex flex-col gap-5 p-6 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-5">
        <h2 id="form-title" className="h-card text-bone">
          Send a message
        </h2>
        <p className="font-mono text-xs text-mute">Opens in your mail app</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required autoComplete="name" value={form.name} onChange={set("name")} placeholder="Jane Doe" className={inputCls} />
        </Field>
        <Field label="Email">
          <input type="email" required autoComplete="email" value={form.email} onChange={set("email")} placeholder="jane@company.com" className={inputCls} />
        </Field>
      </div>
      <Field label="Subject" optional>
        <input value={form.subject} onChange={set("subject")} placeholder="Full stack role at …" className={inputCls} />
      </Field>
      <Field label="Message">
        <textarea required rows={6} value={form.message} onChange={set("message")} placeholder="Tell me a bit about it…" className={`${inputCls} resize-y min-h-[9rem]`} />
      </Field>
      <button type="submit" className="btn-lime mt-1 w-full !py-4 text-base sm:w-auto sm:self-start">
        Send message <FiSend aria-hidden />
      </button>

      {/* Feedback after submit — mailto gives no success signal of its own */}
      <div role="status" aria-live="polite">
        {sent && (
          <div className="flex gap-3 rounded-xl border-2 border-lime bg-lime/10 p-4 text-sm leading-relaxed text-bone/90">
            <FiCheckCircle aria-hidden className="mt-0.5 shrink-0 text-lg text-lime" />
            <p>
              <span className="font-semibold text-bone">Almost there.</span> Your mail app should open with the message ready
              to send. If it didn&apos;t, email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="break-all font-semibold text-bone underline underline-offset-4">
                {profile.email}
              </a>{" "}
              or use the copy button below.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 text-sm text-bone/70">
        <span>Prefer your own mail app?</span>
        <CopyEmailButton />
      </div>
    </form>
  );
}
