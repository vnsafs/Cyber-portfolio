import Reveal from "@/components/Reveal";

export default function ProjectsInProgress() {
  const projects = [
    {
      title: "Web Recon & Subdomain Tool",
      description:
        "Automated tool for active reconnaissance, subdomain enumeration, and directory discovery.",
      technologies: ["Python", "Requests", "OSINT"]
    },
    {
      title: "Active Directory Home Lab",
      description:
        "Simulated corporate environment for practicing internal reconnaissance and domain enumeration techniques.",
      technologies: ["Windows Server", "PowerShell", "VirtualBox"]
    },
    {
      title: "Social Engineering Simulator",
      description:
        "Educational phishing simulation platform designed for credential harvesting awareness training.",
      technologies: ["Python", "Flask", "HTML/CSS"]
    },
    {
      title: "Pentest & CTF Documentation",
      description:
        "Structured penetration testing reports and technical write-ups of security challenges.",
      technologies: ["Markdown", "TryHackMe", "Reporting "]
    }
  ];

  return (
    <section className="bg-transparent text-bone py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <span className="access-label">/ 03 — Selected Work</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-12 text-bone">
            Projects<span className="font-display text-4xl font-medium mt-3 mb-12 text-bone"> In Progress</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
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
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <h3 className="font-display text-2xl font-medium mb-4 text-bone">
                  {project.title}
                </h3>

                <p className="text-bone-dim mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-transparent
                        border
                        border-gold/30
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-mono-label
                        tracking-wide
                        text-gold
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="bg-gold text-void font-medium px-4 py-2 rounded-sm hover:bg-gold-bright hover:shadow-gold-glow transition-all duration-300">
                    GitHub
                  </button>

                  <button className="border border-gold/40 text-bone-dim px-4 py-2 rounded-sm hover:text-bone hover:border-gold transition-all duration-300">
                    Demo
                  </button>
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
