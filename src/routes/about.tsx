import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/siddhesh-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siddhesh Meher" },
      { name: "description", content: "Visionary leader in engineering and CEO of Indmark Group. A second-generation entrepreneur balancing tradition with transformation." },
      { property: "og:title", content: "About Siddhesh Meher" },
      { property: "og:description", content: "Real-life second-generation entrepreneur scaling a multi-vertical engineering business." },
    ],
  }),
  component: About,
});

const points = [
  "Real-life second-generation entrepreneur",
  "CEO actively scaling a multi-vertical engineering business",
  "Proven ability to balance tradition + transformation",
  "Builds businesses with a long-term, sustainable vision",
];

function About() {
  return (
    <div className="container-prose py-20">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <img src={portrait} alt="Siddhesh Meher" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:col-span-7">
          <span className="gold-rule mb-5" />
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
          <h1 className="font-serif text-5xl text-primary mt-3 leading-tight">A leader who has lived the transition.</h1>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>Siddhesh Meher is a visionary leader in the engineering industry and the CEO of <span className="text-foreground">Indmark Group Engineering</span> — a company known for delivering high-quality solutions in cable trays, hot dip galvanizing, solar panel mounting structures, and structural fabrication.</p>
            <p>As a second-generation entrepreneur himself, Siddhesh has successfully transitioned from being part of a family business to leading it with innovation, structure, and modern thinking.</p>
            <p>He brings a rare combination of ground-level business experience and strategic foresight, making him uniquely positioned to guide the next generation of entrepreneurs entering family businesses.</p>
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-2xl text-primary">He doesn't teach transition — he has lived it.</h3>
            <ul className="mt-5 space-y-3">
              {points.map(p => (
                <li key={p} className="flex gap-3 text-sm">
                  <span className="text-gold mt-[6px]">◆</span>
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-4 gap-px bg-border border border-border">
        {[
          { k: "Trust", v: "Built on delivery" },
          { k: "Precision", v: "Engineering excellence" },
          { k: "Vision", v: "Future-focused" },
          { k: "Sustainability", v: "Solar & beyond" },
        ].map(s => (
          <div key={s.k} className="bg-background p-8 text-center">
            <div className="font-serif text-2xl text-primary">{s.k}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
