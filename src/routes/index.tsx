import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/siddhesh-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const pillars = [
  { t: "Trust", d: "Long-term partnerships built on consistent delivery." },
  { t: "Precision", d: "Engineering benchmarks set by exacting standards." },
  { t: "Evolution", d: "Modernizing tradition with structure and foresight." },
];

const verticals = ["Cable Trays", "Hot Dip Galvanizing", "Solar Mounting Structures", "Structural Fabrication"];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Second-Generation CEO · Speaker</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-primary">
              From <em className="text-gold not-italic font-serif">Legacy</em><br />
              to Leadership.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Real lessons from a second-generation CEO. Not theory. Not frameworks from books — built from the lived experience of leading and transforming a family business.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition">
                Invite Siddhesh to Speak
              </Link>
              <Link to="/about" className="px-6 py-3 border border-primary text-primary text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition">
                Learn the Story
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 fade-up">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/40" />
              <img src={portrait} alt="Siddhesh Meher, CEO of Indmark Group Engineering" className="relative w-full object-cover aspect-[4/5] grayscale-[20%]" />
              <div className="absolute -bottom-6 -left-6 bg-background border border-border px-5 py-3 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">CEO</div>
                <div className="font-serif text-primary">Indmark Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-16 grid md:grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.t}>
              <div className="font-serif text-3xl text-primary">{p.t}</div>
              <span className="gold-rule my-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indmark verticals */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="gold-rule mb-5" />
            <h2 className="font-serif text-4xl text-primary leading-tight">A multi-vertical engineering business.</h2>
            <p className="mt-5 text-muted-foreground">Under his leadership, Indmark Group has become synonymous with trust, precision, and engineering excellence — delivering across four core verticals.</p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {verticals.map((v, i) => (
              <div key={v} className="bg-background p-8">
                <div className="text-xs text-gold tracking-widest">0{i + 1}</div>
                <div className="font-serif text-xl text-primary mt-3">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-prose py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { n: "20+", l: "Years of Legacy" },
            { n: "4", l: "Engineering Verticals" },
            { n: "100%", l: "In-House Galvanizing" },
            { n: "1", l: "Vision Forward" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-8 text-center">
              <div className="font-serif text-5xl text-primary">{s.n}</div>
              <span className="gold-rule mx-auto mt-4" />
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-royal text-primary-foreground">
        <div className="container-prose py-20">
          <div className="max-w-2xl">
            <span className="gold-rule-thick mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">The Journey — Son to CEO.</h2>
            <p className="mt-5 text-primary-foreground/70">A transition lived through three deliberate chapters.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-primary-foreground/10">
            {[
              { y: "Chapter I", t: "Inheritance", d: "Learning the floor, the people, and the discipline behind every weld." },
              { y: "Chapter II", t: "Transition", d: "Earning authority, introducing systems, modernizing without conflict." },
              { y: "Chapter III", t: "Leadership", d: "Scaling four verticals with clarity, structure, and long-term vision." },
            ].map((c, i) => (
              <div key={c.t} className="p-10 border border-primary-foreground/5" style={{ background: `oklch(${0.18 + i * 0.04} 0.08 260)` }}>
                <div className="text-xs tracking-[0.3em] text-primary-foreground/50 uppercase">{c.y}</div>
                <div className="font-serif text-3xl mt-4">{c.t}</div>
                <span className="block w-10 h-px bg-primary-foreground/30 my-5" />
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-background">
        <div className="container-prose py-20 text-center">
          <span className="text-gold text-5xl font-serif">“</span>
          <p className="font-serif text-2xl md:text-3xl max-w-3xl mx-auto leading-snug mt-2 text-primary">
            Growth in family business is not about replacing the old — it's about evolving it.
          </p>
          <span className="gold-rule-thick mx-auto mt-8" />
          <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Siddhesh Meher</div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24">
        <div className="relative overflow-hidden border border-border p-10 md:p-16 bg-secondary/50">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold-gradient" />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="font-serif text-3xl md:text-4xl text-primary leading-tight">Bring lived leadership to your stage.</h3>
              <p className="mt-3 text-muted-foreground">Keynotes, panels, and family business forums worldwide.</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/contact" className="inline-block px-7 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-gold hover:text-primary transition">
                Start the conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
