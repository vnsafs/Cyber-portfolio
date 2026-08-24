import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-4xl">

        <Reveal>
          {/* badge */}
          <div className="inline-block px-4 py-2 rounded-sm border border-gold/30 bg-gold/5 mb-6 access-label">
            Cybersecurity • Red Team • Offensive Security
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* title */}
          <h1 className="font-display text-6xl md:text-8xl font-medium tracking-tight text-bone">
            Vanessa Silva
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          {/* subtitle */}
          <p className="text-2xl md:text-3xl font-light text-bone-dim mt-4">
            Computer Science Student | Cybersecurity & Red Team Enthusiast
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          {/* description */}
          <p className="mt-6 text-steel max-w-2xl mx-auto">
            Passionate about ethical hacking, vulnerability analysis, and offensive security practices.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          {/* buttons */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <a
              href="https://github.com/vnsafs"
              className="border border-gold/30 px-6 py-3 rounded-sm text-bone-dim hover:text-bone hover:border-gold hover:shadow-gold-glow transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vanessafelipedasilva"
              className="border border-gold/30 px-6 py-3 rounded-sm text-bone-dim hover:text-bone hover:border-gold hover:shadow-gold-glow transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="/cv.pdf"
              className="border border-gold bg-gold/10 px-6 py-3 rounded-sm text-gold-bright hover:bg-gold/20 hover:shadow-gold-glow-lg transition-all duration-300"
            >
              Download CV
            </a>

          </div>
        </Reveal>

      </div>

    </section>
  );
}
