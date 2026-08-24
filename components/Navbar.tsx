export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        backdrop-blur-2xl
        bg-void/40
        border-b border-gold/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <h1
          className="
            font-mono-label
            text-bone
            font-medium
            tracking-[0.2em]
            uppercase
            text-sm
          "
        >
          CyberPortfolio
        </h1>
      </div>
    </header>
  );
}
