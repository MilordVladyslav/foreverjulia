"use client";

import { useState, useEffect } from "react";

/* ── Falling petals ─────────────────────────────────────────── */
type Petal = { id: number; left: number; delay: number; duration: number; emoji: string };

const PETAL_EMOJIS = ["🌸", "🌹", "🌷", "💮", "🩷"];

function usePetals(count = 18) {
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    setPetals(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 6 + Math.random() * 6,
          emoji: PETAL_EMOJIS[i % PETAL_EMOJIS.length],
        }))
    );
  }, [count]);
  return petals;
}

/* ── Reasons list ───────────────────────────────────────────── */
const REASONS = [
  { icon: "🌟", text: "Your laugh makes everything brighter" },
  { icon: "🤍", text: "The way you care so deeply for others" },
  { icon: "✨", text: "How you turn ordinary days into memories" },
  { icon: "🌷", text: "Your strength, warmth and endless grace" },
  { icon: "💕", text: "Simply — for being perfectly, wonderfully you" },
];

/* ── Envelope / Letter ──────────────────────────────────────── */
function Envelope({ onOpen }: { onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  return (
      <button
          onClick={onOpen}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="cursor-pointer flex flex-col items-center gap-2 group"
          aria-label="Open love letter"
      >
        <div
            className="text-7xl transition-transform duration-300"
            style={{ transform: hover ? "scale(1.15) rotate(-6deg)" : "scale(1) rotate(0deg)" }}
        >
          💌
        </div>
        <span
            className="px-7 py-3 rounded-full text-white text-base font-semibold shadow-lg transition-all duration-300"
            style={{
              background: hover
                  ? "linear-gradient(135deg,#9f1239,#e11d48)"
                  : "linear-gradient(135deg,#e11d48,#fb7185)",
              boxShadow: hover
                  ? "0 8px 28px rgba(159,18,57,0.5)"
                  : "0 4px 14px rgba(225,29,72,0.3)",
            }}
        >
        Open my letter to you 💕
      </span>
      </button>
  );
}

/* ── Main page ──────────────────────────────────────────────── */
export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const petals = usePetals(18);

  return (
      <main className="relative min-h-screen overflow-x-hidden flex flex-col items-center bg-gradient-to-b from-rose-50 via-pink-100 to-rose-200 pb-16">

        {/* ── Falling petals ── */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
          {petals.map((p) => (
              <span
                  key={p.id}
                  className="absolute top-0 text-xl select-none"
                  style={{
                    left: `${p.left}%`,
                    animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
                    opacity: 0,
                  }}
              >
            {p.emoji}
          </span>
          ))}
        </div>

        {/* ── Hero ── */}
        <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10 w-full max-w-2xl">
          <div className="animate-heartbeat text-7xl mb-6 drop-shadow-xl">💝</div>

          <h1 className="shimmer-text text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-fade-up">
            Forever Julia
          </h1>

          <p className="text-rose-700 text-lg md:text-xl font-light max-w-md mt-4 leading-relaxed animate-fade-up-1">
            Happy Valentine's Day, my love.
            <br />
            Every moment with you is my favourite story.
          </p>

          <div className="mt-10 animate-fade-up-2">
            {letterOpen ? (
                <p className="text-rose-500 text-sm tracking-widest uppercase animate-fade-up">
                  💌 Letter opened — read on below ↓
                </p>
            ) : (
                <Envelope onOpen={() => setLetterOpen(true)} />
            )}
          </div>
        </section>

        {/* ── Love letter ── */}
        {letterOpen && (
            <section className="relative z-10 w-full max-w-2xl px-6 pb-10 animate-fade-up">
              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
                <p className="text-rose-400 text-xs uppercase tracking-widest font-semibold mb-6">
                  A letter from my heart 💌
                </p>
                <p className="text-rose-900 text-2xl font-semibold mb-4">My dearest Julia,</p>
                <p className="text-rose-800 text-base md:text-lg leading-loose mb-4">
                  Some love stories start with a glance — ours started with something rarer: a quiet certainty
                  that the world was gentler, warmer, and more beautiful with you in it.
                </p>
                <p className="text-rose-800 text-base md:text-lg leading-loose mb-6">
                  Thank you for your laughter, your patience, and for choosing to share your life with me.
                  You are not just my Valentine — you are my home.
                </p>
                <p className="text-rose-600 text-lg italic">
                  With all my love, always and forever. 🌹
                </p>
              </div>
            </section>
        )}

        {/* ── Reasons ── */}
        <section className="relative z-10 w-full max-w-2xl px-6 animate-fade-up-3">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-8">
            Why I love you 🌷
          </h2>

          <ul className="flex flex-col gap-4">
            {REASONS.map(({ icon, text }, i) => (
                <li
                    key={i}
                    className="glass-card flex items-center gap-5 rounded-2xl px-6 py-4 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl shrink-0">{icon}</span>
                  <span className="text-rose-900 text-base md:text-lg">{text}</span>
                </li>
            ))}
          </ul>
        </section>

        {/* ── Quote ── */}
        <section className="relative z-10 w-full max-w-xl px-6 mt-14 animate-fade-up-4">
          <div className="glass-card rounded-3xl p-8 text-center shadow-xl">
            <p className="text-rose-300 text-4xl mb-4">"</p>
            <p className="text-rose-800 text-lg md:text-xl italic leading-relaxed">
              You are every reason, every hope and every dream I've ever had.
            </p>
            <p className="text-rose-400 text-sm mt-4 tracking-wider">— Nicholas Sparks</p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative z-10 mt-14 text-rose-400 text-sm text-center animate-fade-up-4">
          Made with 💕 just for you · Valentine's Day 2026
        </footer>
      </main>
  );
}
