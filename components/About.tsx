import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-transparent"
    >
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <span className="access-label">/ 01 — Profile</span>
          <h2 className="font-display text-4xl font-medium mt-3 mb-8 text-bone">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-bone-dim leading-8">
            I am a Computer Science student passionate about Cybersecurity, Ethical Hacking, and Red Team operations, constantly improving my technical skills through hands-on labs, and offensive security projects to understand and mitigate advanced threats.

            My goal is to master offensive security techniques, identify critical vulnerabilities before malicious actors do, and contribute stronger corporate security postures.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
