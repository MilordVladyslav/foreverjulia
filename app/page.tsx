"use client";

import {useState} from "react";
import Image from "next/image";
import bouquetSoft from "./images/image_2026-04-16_02-13-50.png";
import bouquetRed from "./images/image_2026-04-16_02-14-59.png";
import winterPark from "./images/photo_2026-04-16_04-45-20.jpg";

type Petal = { id: number; left: number; delay: number; duration: number; emoji: string };

const PETAL_EMOJIS = ["🌸", "🌹", "🌷", "💮", "🩷", "❄️"];

function makePetals(count: number): Petal[] {
    return Array.from({length: count}, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        emoji: PETAL_EMOJIS[i % PETAL_EMOJIS.length],
    }));
}

function usePetals(count = 18) {
    const [petals] = useState<Petal[]>(() => makePetals(count));
    return petals;
}


/* ── Reasons list ───────────────────────────────────────────── */
const REASONS = [
    {icon: "🌟", text: "Your laugh makes everything brighter"},
    {icon: "🤍", text: "The way you care so deeply for others"},
    {icon: "✨", text: "How you turn ordinary days into memories"},
    {icon: "🌷", text: "Your strength, warmth and endless grace"},
    {icon: "💕", text: "Simply — for being perfectly, wonderfully you"},
    {icon: "🌸", text: "Your beauty and charm"},
];

const FLOWER_CARDS = [
    {
        image: bouquetSoft,
        alt: "Soft peach roses and blue hydrangeas bouquet",
        title: "Gentle as you are",
        text: "Like these soft petals — delicate, beautiful, and impossible not to adore. Every shade reminds me of the quiet tenderness you bring into my life.",
        accent: "from-blue-100 to-rose-100",
        titleColor: "text-rose-800",
        textColor: "text-rose-900",
    },
    {
        image: bouquetRed,
        alt: "Deep crimson peony tulips bouquet",
        title: "Passionately, deeply, yours",
        text: "Bold, full of life, and breathtakingly beautiful — just like the love I have for you. Rich, deep, and more wonderful with every passing day.",
        accent: "from-rose-100 to-red-100",
        titleColor: "text-rose-800",
        textColor: "text-rose-900",
    },
];

/* ── Envelope / Letter ──────────────────────────────────────── */
function Envelope({onOpen}: { onOpen: () => void }) {
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
                style={{transform: hover ? "scale(1.15) rotate(-6deg)" : "scale(1) rotate(0deg)"}}
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
        <main
            className="relative min-h-screen overflow-x-hidden flex flex-col items-center bg-gradient-to-b from-rose-50 via-pink-100 to-rose-200 pb-16">

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
                    <br/>
                    Every moment with you is my favourite story.
                </p>

                <div className="mt-10 animate-fade-up-2">
                    {letterOpen ? (
                        <p className="text-rose-500 text-sm tracking-widest uppercase animate-fade-up">
                            💌 Letter opened — read on below ↓
                        </p>
                    ) : (
                        <Envelope onOpen={() => setLetterOpen(true)}/>
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
                        <p
                            className="text-cursive text-rose-900 text-6xl font-semibold mb-4"
                            style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                        >
                            My dearest Julia,
                        </p>
                        <p
                            className="text-rose-800 text-6xl leading-8 mb-4"
                            style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                        >

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
            <section className="relative z-10 w-full max-w-3xl px-6 animate-fade-up-3">
                <h2
                    className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-8"
                    style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                >
                    Why I love you 🌷
                </h2>

                <ul className="grid md:grid-cols-2 gap-4">
                    {REASONS.map(({icon, text}, i) => (
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

            {/* ── Flower cards ── */}
            <section className="relative z-10 w-full max-w-3xl px-6 mt-16 animate-fade-up-4">
                <h2
                    className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-10"
                >
                    Flowers for you 🌸
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {FLOWER_CARDS.map(({image, alt, title, text, accent, titleColor, textColor}, i) => (
                        <div
                            key={i}
                            className={`rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b ${accent} transition-transform duration-300 hover:-translate-y-2 hover:shadow-rose-200`}
                        >
                            {/* Photo */}
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    placeholder="blur"
                                />
                            </div>

                            {/* Text */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>{title}</h3>
                                <p className={`text-sm md:text-base leading-relaxed ${textColor}`}>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
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

            <section className="relative z-10 w-full max-w-3xl px-6 mt-14 animate-fade-up-4">

                {/* Winter photo with overlay */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src={winterPark}
                            alt="Winter city park at sunset"
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-cover"
                            placeholder="blur"
                        />
                        {/* Dark gradient overlay so text is readable */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-slate-900/40"/>
                    </div>

                    {/* Snowflakes scattered over photo */}
                    {["❄️", "❄️", "❄️", "❄️", "❄️", "❄️"].map((s, i) => (
                        <span
                            key={i}
                            className="absolute text-white/50 select-none animate-float pointer-events-none"
                            style={{
                                top: `${[10, 20, 8, 35, 15, 28][i]}%`,
                                left: `${[8, 25, 55, 72, 88, 42][i]}%`,
                                fontSize: `${[1.1, 0.8, 1.4, 0.9, 1.2, 0.7][i]}rem`,
                                animationDelay: `${[0, 1.2, 0.5, 1.8, 0.9, 2.2][i]}s`,
                                animationDuration: `${[4, 5, 3.5, 4.5, 3.8, 5.2][i]}s`,
                            }}
                        >
                                {s}
                            </span>
                    ))}

                    {/* Poem overlay — bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center">
                        <p
                            className="shimmer-text text-3xl md:text-4xl mb-6"
                        >
                            A Winter Love ❄️
                        </p>

                        <div
                            className="text-white/90 text-base md:text-lg leading-7 italic drop-shadow-lg"
                        >
                            <p>The snow fell soft on frozen ground,</p>
                            <p>and in that hush, I heard the sound</p>
                            <p>of something warm inside the cold —</p>
                            <p>a quiet love that can't be told.</p>

                            <p className="mt-5">We walked through parks of silver-white,</p>
                            <p>the bare trees framed in golden light,</p>
                            <p>and every breath of winter air</p>
                            <p>was sweeter, Julia, because you were there.</p>

                            <p className="mt-5">Let winters come and seasons turn —</p>
                            <p>beside you, I will always burn</p>
                            <p>with something warmer than the sun:</p>
                            <p>a love that's only just begun.</p>
                        </div>

                        <p className="text-white/60 text-sm mt-6 tracking-wider">— forever yours 💕</p>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="relative z-10 mt-14 text-rose-400 text-sm text-center animate-fade-up-4">
                Made with 💕 just for you · Valentine's Day 2026
            </footer>
        </main>
    );
}
