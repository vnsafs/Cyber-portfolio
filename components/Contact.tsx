import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent text-bone py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="access-label">/ 06 — Open Channel</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-12 text-bone">
            Contact
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-2xl font-medium mb-6 text-bone">
                Let's Connect
              </h3>
              <div className="space-y-5 text-bone-dim">
                <div className="flex flex-col gap-1">
                  <span className="access-label">Email</span>
                  <a
                    href="mailto:vanessafelipe948@gmail.com"
                    className="text-bone-dim hover:text-gold-bright transition-colors break-all"
                  >
                    vanessafelipe948@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="access-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/vanessafelipedasilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone-dim hover:text-gold-bright transition-colors break-all"
                  >
                    linkedin.com/in/vanessafelipedasilva
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="access-label">GitHub</span>
                  <a
                    href="https://github.com/vnsafs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone-dim hover:text-gold-bright transition-colors break-all"
                  >
                    github.com/vnsafs
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          {/* Right side form */}
          <Reveal delay={0.2}>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-ink/60 border border-gold/15 rounded-sm p-3 outline-none text-bone placeholder:text-steel-dim focus:border-gold focus:shadow-gold-glow transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-ink/60 border border-gold/15 rounded-sm p-3 outline-none text-bone placeholder:text-steel-dim focus:border-gold focus:shadow-gold-glow transition-all duration-300"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border border-gold/15 rounded-sm p-3 outline-none text-bone placeholder:text-steel-dim focus:border-gold focus:shadow-gold-glow transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-void font-medium hover:bg-gold-bright hover:shadow-gold-glow-lg transition-all duration-300 px-6 py-3 rounded-sm"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
