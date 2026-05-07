import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Siddhesh Meher" },
      { name: "description", content: "Family business modernization, generational alignment, and scalable growth strategy." },
      { property: "og:title", content: "Expertise — Siddhesh Meher" },
      { property: "og:description", content: "Areas where Siddhesh guides the next generation of family business leaders." },
    ],
  }),
  component: Expertise,
});

const expertise = [
  { t: "From Successor to Leader", d: "Moving from \"successor\" to leader with authority and conviction." },
  { t: "Family Business Modernization", d: "Introducing systems, structure, and digital thinking into traditional setups." },
  { t: "Strategic Business Evolution", d: "Expanding business verticals while maintaining operational strength." },
  { t: "Generational Alignment", d: "Managing expectations between founders and next-gen leaders." },
  { t: "Scalable Growth Thinking", d: "Transforming stable businesses into growth-driven organizations." },
  { t: "Sustainable Engineering", d: "Building for the future with solar and modern infrastructure." },
];

const challenges = [
  "How do I enter my family business without conflict?",
  "How do I prove my capability as the next generation?",
  "How do we modernize without hurting legacy systems?",
  "How do I bring new ideas without resistance?",
  "How do we scale beyond traditional operations?",
  "How should parents handover business to 2nd generation?",
];

function Expertise() {
  return (
    <div>
      <section className="container-prose py-20">
        <span className="gold-rule mb-5" />
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Expertise</p>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3 max-w-3xl leading-tight">Where legacy meets the language of modern business.</h1>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border">
          {expertise.map((e, i) => (
            <div key={e.t} className="bg-background p-8 group hover:bg-secondary/50 transition">
              <div className="text-xs text-gold tracking-[0.25em]">0{i + 1}</div>
              <h3 className="font-serif text-2xl text-primary mt-3">{e.t}</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="gold-rule mb-5" />
            <h2 className="font-serif text-4xl text-primary leading-tight">Key challenges he addresses.</h2>
            <p className="mt-4 text-muted-foreground text-sm">The hardest questions facing the next generation of family business leaders.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {challenges.map((c, i) => (
                <li key={c} className="py-5 flex gap-6 items-baseline">
                  <span className="font-serif text-gold text-sm w-8">0{i + 1}</span>
                  <span className="font-serif text-lg text-primary">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
