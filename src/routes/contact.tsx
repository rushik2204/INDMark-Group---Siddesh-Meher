import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Siddhesh Meher" },
      { name: "description", content: "Reach out to invite Siddhesh Meher to speak or to discuss family business strategy." },
      { property: "og:title", content: "Contact Siddhesh Meher" },
      { property: "og:description", content: "Speaking inquiries, partnerships, and engagements." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-prose py-20 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <span className="gold-rule mb-5" />
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
        <h1 className="font-serif text-5xl text-primary mt-3 leading-tight">Let's begin the conversation.</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">For speaking invitations, advisory engagements, or collaborations with Indmark Group Engineering — reach out directly.</p>

        <div className="mt-10 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mobile</div>
            <a href="tel:+919922920050" className="font-serif text-2xl text-primary hover:text-gold transition">+91 99229 20050</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Office</div>
            <div className="font-serif text-xl text-primary">Indmark Group Engineering</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagement</div>
            <div className="text-foreground">Keynotes · Workshops · Advisory · Family Business Strategy</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card border border-border p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" />
            <Field label="Organization" name="org" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" />
          </div>
          <Field label="Type of Engagement" name="type" placeholder="Keynote, advisory, collaboration..." />
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
          </div>
          <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition">
            {sent ? "Thank you — we'll be in touch." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
    </div>
  );
}
