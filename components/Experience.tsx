import Reveal from "@/components/Reveal";

export default function Experience() {
  const timeline = [
    {
      title: "Computer Science Student",
      description:
        "Building a strong foundation in systems architecture, operating systems, and core computer science concepts."
    },
    {
      title: "Cybersecurity Labs",
      description:
        "Hands-on execution of labs focusing on network penetration testing, web app vulnerabilities, and privilige escalation."
    },
    {
      title: "Personal Projects",
      description:
        "Developing custom scripts, reconnaissance tools, and automation scripts for security assessments."
    },
    {
      title: "Certifications & Continuous Learning",
      description:
        "Pursuing industry-standard certifications and expanding knowledge in advanced threat vectors."
    }
  ];

  return (
    <section className="bg-transparent text-bone py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <span className="access-label">/ 04 — Trajectory</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-12 text-bone">
            Learning Journey
          </h2>
        </Reveal>

        <div className="space-y-8">

          {timeline.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="border-l-2 border-gold/40 pl-6 hover:border-gold transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-bone">
                  {item.title}
                </h3>

                <p className="text-steel">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
