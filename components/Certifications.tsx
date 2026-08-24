import Reveal from "@/components/Reveal";

export default function Certifications() {
  const certifications = [
    "AWS Cloud Practitioner (Planned)",
    "CompTIA Security+ (Planned)",
    "Microsoft AZ-900 (Planned)"
  ];

  return (
    <section
     className="bg-transparent text-bone py-24 px-6"
      id="certifications"
    >
      <div className="max-w-5xl mx-auto">

        <Reveal>
          <span className="access-label">/ 05 — Credentials</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-12 text-bone">
            Certifications In Progress
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((cert, i) => (
            <Reveal key={cert} delay={i * 0.08}>
              <div
                className="
                  bg-ink/60
                  backdrop-blur-md
                  border border-gold/15
                  rounded-card
                  p-6
                  text-center
                  text-bone-dim
                  hover:border-gold/50
                  hover:shadow-gold-glow
                  transition-all duration-300
                "
              >
                <p className="font-medium">
                  {cert}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
