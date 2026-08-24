"user client"
const skills = [
  {
    category: "Programming & Logic",
    items: ["Python", "JavaScript & TypeScript", "HTML5 & CSS3"]
  },
  {
    category: "Version Control",
    items: ["Git & Github"]
  }
];

import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section className="bg-transparent text-bone py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <span className="access-label">/ 02 — Capabilities</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-12 text-bone">
            Skills & Stack
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div
                className="
                  bg-ink/60
                  border
                  border-gold/10
                  rounded-card
                  p-6
                  shadow-card
                  hover:border-gold/40
                  hover:shadow-gold-glow
                  transition-all duration-300
                "
              >
                <h3 className="font-display text-2xl font-medium text-gold-bright mb-4">
                  {group.category}
                </h3>

                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-bone-dim font-mono-label text-[0.8rem] tracking-wide"
                    >
                      <span className="text-gold mr-2">{">"}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
