import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Siddhesh Meher" },
      { name: "description", content: "Keynote topics on family business, succession, and second-generation leadership." },
      { property: "og:title", content: "Speaking — Siddhesh Meher" },
      { property: "og:description", content: "Invite Siddhesh Meher to speak on legacy, leadership, and modernization." },
    ],
  }),
  component: Speaking,
});

const topics = [
  { t: "Entering Family Business: What No One Tells You", d: "The honest realities of stepping into an established family enterprise." },
  { t: "From Son to CEO: The Real Transition Journey", d: "Walking through identity, authority, and earned credibility." },
  { t: "Modernizing Traditional Businesses Without Conflict", d: "How to introduce systems and digital thinking — without breaking trust." },
  { t: "Balancing Legacy with Innovation", d: "Honoring what built the business while preparing for what's next." },
  { t: "Scaling Family Businesses in Today's Competitive World", d: "Strategies for sustainable, growth-driven evolution." },
];

function Speaking() {
  return (
    <div className="container-prose py-20">
      <div className="max-w-3xl">
        <span className="gold-rule mb-5" />
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Speaking</p>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3 leading-tight">Talks built from the boardroom — not the bookshelf.</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">Siddhesh shares lived experience from leading and transforming a multi-vertical engineering business. Each keynote is grounded in real situations, real conflicts, and real outcomes.</p>
      </div>

      <div className="mt-16 space-y-px bg-border border border-border">
        {topics.map((t, i) => (
          <div key={t.t} className="bg-background p-8 grid md:grid-cols-12 gap-6 items-baseline group hover:bg-secondary/40 transition">
            <div className="md:col-span-1 text-gold font-serif text-2xl">0{i + 1}</div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-2xl text-primary">{t.t}</h3>
              <p className="text-muted-foreground text-sm mt-2">{t.d}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Keynote · Workshop · Panel</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border border-border p-10 md:p-16 text-center bg-secondary/40">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">Bring this conversation to your stage.</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Conferences, family business forums, leadership programs, and corporate offsites.</p>
        <Link to="/contact" className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition">
          Request availability
        </Link>
      </div>
    </div>
  );
}
