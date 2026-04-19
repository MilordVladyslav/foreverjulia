"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import bouquetSoft from "./images/image_2026-04-16_02-13-50.png";
import bouquetRed from "./images/image_2026-04-16_02-14-59.png";
import winterPark from "./images/photo_2026-04-16_04-45-20.jpg";
import flamedCoffee from "./images/image_2026-04-16_04-18-47.png";
import wineToast from "./images/photo_2026-04-16_04-27-59.jpg";

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
    {icon: "🌟", text: "Твій сміх робить все яскравішим"},
    {icon: "🤍", text: "Як ти турбуєшся про мене. 13 лютого я не забуду"},
    {icon: "✨", text: "Як ти перетворюєш звичайні дні на спогади"},
    {icon: "🌷", text: "Твоя стійкість, наполегливість, тепло що ти даруєш"},
    {icon: "💕", text: "За те, як ти кохаєш"},
    {icon: "🌸", text: "За твою красу, душевну та зовнішню"},
];

const FLOWER_CARDS = [
    {
        image: bouquetSoft,
        alt: "Soft peach tulips and blue hydrangeas bouquet",
        title: "Палаючі, як наше з тобою щире кохання",
        text: "Квіти як ти, розкішні, свіжі, тривалі, немовби наші почуття одне до одних",
        accent: "from-blue-100 to-rose-100",
        titleColor: "text-rose-800",
        textColor: "text-rose-900",
    },
    {
        image: bouquetRed,
        alt: "Deep crimson peony tulips bouquet",
        title: "Ніжні, та кольору тієї холодної зими",
        text: "Пам'ятаю нашу розмову про шеріденс, та себе, котрий через годину був готовий заради тебе на щось більше, ніж слова",
        accent: "from-rose-100 to-red-100",
        titleColor: "text-rose-800",
        textColor: "text-rose-900",
    },
];


const MOMENTS = [
    {
        image: flamedCoffee,
        alt: "Two flamed Irish coffees glowing in the dark",
        title: "Warmth in every sip",
        text: "Even on the coldest evenings, everything feels warm when we are together. These little flames — just like us — burning bright in the dark.",
    },
    {
        image: wineToast,
        alt: "Two wine glasses clinking at a restaurant",
        title: "Here's to us",
        text: "Every toast is a promise — to more evenings like this, more laughter, more love. To us, always.",
    },
];


function AreYouMine() {
    const [agreed, setAgreed] = useState(false);
    const [noPos, setNoPos] = useState({top: 50, left: 60});

    function escapeButton() {
        // Keep trying until we find a position far enough from current
        let top: number, left: number;
        do {
            top = 8 + Math.random() * 72; // 8%–80% (keep inside box)
            left = 8 + Math.random() * 68; // 8%–76% (account for button width)
        } while (
            Math.abs(top - noPos.top) < 20 &&
            Math.abs(left - noPos.left) < 20
            );
        setNoPos({top, left});
    }

    return (
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center shadow-xl">
            {agreed ? (
                <div className="animate-fade-up">
                    <div className="text-6xl mb-4 animate-heartbeat">💝</div>
                    <p
                        className="shimmer-text text-3xl md:text-4xl font-bold mb-3"
                        style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                    >
                        I knew it! 🌹
                    </p>
                    <p className="text-rose-700 text-lg mt-2">
                        Forever and always, my love. 💕
                    </p>
                </div>
            ) : (
                <>
                    <p
                        className="text-rose-800 text-2xl md:text-3xl font-bold mb-2"
                        style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                    >
                        Will you be mine? 💌
                    </p>
                    <p className="text-rose-600 text-base mb-10">
                        Choose wisely — only one answer is correct 😉
                    </p>

                    {/* Button arena — fixed height so the No button has room to roam */}
                    <div className="relative w-full h-36">
                        {/* Yes */}
                        <button
                            onClick={() => setAgreed(true)}
                            className="cursor-pointer absolute px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition-transform duration-150 hover:scale-110 active:scale-95"
                            style={{
                                top: "50%",
                                left: "28%",
                                transform: "translate(-50%, -50%)",
                                background: "linear-gradient(135deg, #e11d48, #fb7185)",
                                boxShadow: "0 4px 18px rgba(225,29,72,0.35)",
                            }}
                        >
                            Yes! 💕
                        </button>

                        {/* No — runs away on hover */}
                        <button
                            onMouseEnter={escapeButton}
                            onTouchStart={escapeButton}
                            className="absolute px-8 py-3 rounded-full font-semibold text-base shadow-md cursor-default select-none"
                            style={{
                                top: `${noPos.top}%`,
                                left: `${noPos.left}%`,
                                transform: "translate(-50%, -50%)",
                                background: "rgba(251,113,133,0.15)",
                                border: "1px solid rgba(251,113,133,0.3)",
                                color: "#be123c",
                                transition: "top 0s, left 0s", // instant jump — no easing
                            }}
                        >
                            No 🙈
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

function AgreementSection() {
    const [agreed, setAgreed] = useState(false);
    const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    function runAway() {
        const container = containerRef.current;
        if (!container) return;
        const {width, height} = container.getBoundingClientRect();
        const btnW = 130, btnH = 48;
        const newX = Math.random() * (width - btnW);
        const newY = Math.random() * (height - btnH);
        setNoPos({x: newX, y: newY});
    }

    if (agreed) {
        return (
            <div className="glass-card rounded-3xl p-10 text-center shadow-2xl animate-fade-up">
                <div className="text-6xl mb-4 animate-heartbeat">💝</div>
                <p
                    className="shimmer-text text-3xl md:text-4xl font-bold mb-3"
                    style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                >
                    I knew it! 🎉
                </p>
                <p className="text-rose-800 text-lg mt-2">
                    You are my favourite person in the whole world. 💕
                </p>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <p className="text-rose-400 text-xs uppercase tracking-widest font-semibold mb-4">
                One important question 💌
            </p>
            <p
                className="text-rose-900 text-2xl md:text-3xl font-bold mb-2"
                style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
            >
                Will you be my Valentine?
            </p>
            <p className="text-rose-700 text-base mb-10">
                Think carefully — there is only one right answer 😏
            </p>

            {/* Button arena */}
            <div
                ref={containerRef}
                className="relative w-full"
                style={{height: "10rem"}}
            >
                {/* Agree — centered, always stays put */}
                <button
                    onClick={() => setAgreed(true)}
                    className="cursor-pointer absolute rounded-full text-white text-base font-semibold px-8 py-3 shadow-lg transition-all duration-200 hover:scale-105"
                    style={{
                        background: "linear-gradient(135deg, #e11d48, #fb7185)",
                        boxShadow: "0 4px 18px rgba(225,29,72,0.35)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    Yes, of course! 💕
                </button>

                {/* Disagree — runs away on hover */}
                <button
                    onMouseEnter={runAway}
                    onFocus={runAway}
                    className="absolute rounded-full text-rose-400 text-base font-semibold px-8 py-3 shadow-md select-none"
                    style={{
                        background: "rgba(255,255,255,0.7)",
                        border: "1.5px solid rgba(251,113,133,0.3)",
                        transition: "left 0s, top 0s",   // instant teleport, no sliding
                        left: noPos ? `${noPos.x}px` : "50%",
                        top: noPos ? `${noPos.y}px` : "75%",
                        transform: noPos ? "none" : "translate(-50%, 0)",
                        cursor: "default",
                    }}
                >
                    No... 🙈
                </button>
            </div>
        </div>
    );
}


/* ── Slideshow component ── */
function MomentSlideshow() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    function goTo(index: number) {
        setVisible(false);
        setTimeout(() => {
            setCurrent(index);
            setVisible(true);
        }, 350);
    }

    // Auto-advance every 5 seconds
    useEffect(() => {
        const t = setInterval(() => {
            goTo((current + 1) % MOMENTS.length);
        }, 5000);
        return () => clearInterval(t);
    }, [current]);

    const slide = MOMENTS[current];

    return (
        <div className="rounded-3xl overflow-hidden shadow-2xl glass-card">
            {/* Photo */}
            <div
                className={`relative w-full aspect-[4/3] transition-opacity duration-350 ${visible ? "opacity-100" : "opacity-0"}`}
                style={{transition: "opacity 0.35s ease-in-out"}}
            >
                <Image
                    key={current}
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                    placeholder="blur"
                />
            </div>

            {/* Text */}
            <div
                className="p-6 text-center"
                style={{
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.35s ease-in-out",
                }}
            >
                <h3
                    className="text-xl md:text-2xl font-bold text-rose-800 mb-3"
                    style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                >
                    {slide.title}
                </h3>
                <p className="text-rose-900 text-sm md:text-base leading-relaxed">
                    {slide.text}
                </p>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-3 pb-6">
                {MOMENTS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="cursor-pointer rounded-full transition-all duration-300"
                        style={{
                            width: i === current ? "1.75rem" : "0.6rem",
                            height: "0.6rem",
                            background: i === current
                                ? "linear-gradient(90deg, #e11d48, #fb7185)"
                                : "rgba(251,113,133,0.35)",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

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
        Мій лист для тебе 💕
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
                    Назавжди Юлія
                </h1>


                <p className="text-rose-700 text-lg md:text-xl font-light max-w-md mt-4 leading-relaxed animate-fade-up-1">
                    Вітаю з манікюром, моя люба!
                    <br/>
                    Кожен момент з тобою є моєю улюбленою історією.
                </p>

                <div className="mt-10 animate-fade-up-2">
                    {letterOpen ? (
                        <p className="text-rose-500 text-sm tracking-widest uppercase animate-fade-up">
                            💌 Приємного читання ^_^ ↓
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
                            Від щирого серця 💌
                        </p>
                        <p
                            className="text-cursive text-rose-900 text-6xl font-semibold mb-4"
                            style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                        >
                            Моя дорога Юлія,
                        </p>
                        <p
                            className="text-rose-800 text-6xl leading-10 mb-4"
                            style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                        >

                            Деякі історії кохання починаються з першого погляду - наша ж почалася з чогось рідкіснішого:
                            тихої впевненості, що світ буде ніжнішим, теплішим і прекраснішим з тобою в ньому.
                        </p>
                        <p className="text-rose-800 text-6xl leading-10 mb-6"
                           style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}>
                            Дякую тобі за твій сміх, твоє неповторне мявкання, і за те, що ти дозволила бути з тобою,
                            Ти моя єдина. Та, для якої я почав писати вірші
                        </p>
                        <p className="text-rose-600 text-6xl leading-10"
                           style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}>
                            З усією моєю любов&#39;ю, завжди і назавжди <span className="text-2xl">🌹</span>
                        </p>
                    </div>
                </section>
            )}

            {/* ── Reasons ── */}
            <section className="relative z-10 w-full max-w-3xl px-6 animate-fade-up-3">
                <h2
                    className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-8"
                >
                    Чому я кохаю тебе🌷
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
                        Ти - моя причина, надія, спогад, муза, та досягнення
                    </p>
                    <p className="text-rose-400 text-sm mt-4 tracking-wider">- Твій Влад</p>
                </div>
            </section>

            {/*<section className="relative z-10 w-full max-w-3xl px-6 mt-14 animate-fade-up-4">*/}

            {/*    /!* Winter photo with overlay *!/*/}
            {/*    <div className="relative rounded-3xl overflow-hidden shadow-2xl">*/}
            {/*        <div className="relative w-full aspect-[4/3]">*/}
            {/*            <Image*/}
            {/*                src={winterPark}*/}
            {/*                alt="Winter city park at sunset"*/}
            {/*                fill*/}
            {/*                sizes="(max-width: 768px) 100vw, 768px"*/}
            {/*                className="object-cover"*/}
            {/*                placeholder="blur"*/}
            {/*            />*/}
            {/*            /!* Dark gradient overlay so text is readable *!/*/}
            {/*            <div*/}
            {/*                className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-slate-900/400"/>*/}
            {/*        </div>*/}

            {/*        /!* Snowflakes scattered over photo *!/*/}
            {/*        {["❄️", "❄️", "❄️", "❄️", "❄️", "❄️"].map((s, i) => (*/}
            {/*            <span*/}
            {/*                key={i}*/}
            {/*                className="absolute text-white/50 select-none animate-float pointer-events-none"*/}
            {/*                style={{*/}
            {/*                    top: `${[10, 20, 8, 35, 15, 28][i]}%`,*/}
            {/*                    left: `${[8, 25, 55, 72, 88, 42][i]}%`,*/}
            {/*                    fontSize: `${[1.1, 0.8, 1.4, 0.9, 1.2, 0.7][i]}rem`,*/}
            {/*                    animationDelay: `${[0, 1.2, 0.5, 1.8, 0.9, 2.2][i]}s`,*/}
            {/*                    animationDuration: `${[4, 5, 3.5, 4.5, 3.8, 5.2][i]}s`,*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                    {s}*/}
            {/*                </span>*/}
            {/*        ))}*/}

            {/*        /!* Poem overlay — bottom of photo *!/*/}
            {/*        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center">*/}
            {/*            <p*/}
            {/*                className="shimmer-text text-3xl md:text-4xl mb-6"*/}
            {/*            >*/}
            {/*                A Winter Love ❄️*/}
            {/*            </p>*/}

            {/*            <div*/}
            {/*                className="text-white/90 text-base md:text-lg leading-7 italic drop-shadow-lg"*/}
            {/*            >*/}
            {/*                <p>The snow fell soft on frozen ground,</p>*/}
            {/*                <p>and in that hush, I heard the sound</p>*/}
            {/*                <p>of something warm inside the cold —</p>*/}
            {/*                <p>a quiet love that can't be told.</p>*/}

            {/*                <p className="mt-5">We walked through parks of silver-white,</p>*/}
            {/*                <p>the bare trees framed in golden light,</p>*/}
            {/*                <p>and every breath of winter air</p>*/}
            {/*                <p>was sweeter, Julia, because you were there.</p>*/}

            {/*                <p className="mt-5">Let winters come and seasons turn —</p>*/}
            {/*                <p>beside you, I will always burn</p>*/}
            {/*                <p>with something warmer than the sun:</p>*/}
            {/*                <p>a love that's only just begun.</p>*/}
            {/*            </div>*/}

            {/*            <p className="text-white/60 text-sm mt-6 tracking-wider">— forever yours 💕</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* ── Poetry ── */}
            <section className="relative z-10 w-full max-w-3xl px-6 mt-14 animate-fade-up-4">

                {/* ── Mobile: CSS winter background (no photo) ── */}
                <div
                    className="block md:hidden relative rounded-3xl overflow-hidden shadow-2xl p-8 text-center"
                    style={{
                        background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 40%, #1e293b 70%, #0f172a 100%)",
                    }}
                >
                    {/* Snowflakes */}
                    {["❄️", "❄️", "❄️", "❄️", "❄️", "❄️"].map((s, i) => (
                        <span
                            key={i}
                            className="absolute text-white/40 select-none animate-float pointer-events-none"
                            style={{
                                top: `${[8, 18, 6, 32, 12, 25][i]}%`,
                                left: `${[6, 22, 52, 70, 86, 40][i]}%`,
                                fontSize: `${[1.1, 0.8, 1.4, 0.9, 1.2, 0.7][i]}rem`,
                                animationDelay: `${[0, 1.2, 0.5, 1.8, 0.9, 2.2][i]}s`,
                                animationDuration: `${[4, 5, 3.5, 4.5, 3.8, 5.2][i]}s`,
                            }}
                        >
                                {s}
                            </span>
                    ))}
                    {/* Faint moon glow */}
                    <div
                        className="absolute top-4 right-8 w-16 h-16 rounded-full bg-amber-100/10 blur-2xl pointer-events-none"/>

                    <p className="shimmer-text text-3xl mb-6">A Winter Love ❄️</p>
                    <div className="text-white/85 text-base leading-7 italic drop-shadow-lg space-y-1">
                        <p>The snow fell soft on frozen ground,</p>
                        <p>and in that hush, I heard the sound</p>
                        <p>of something warm inside the cold —</p>
                        <p>a quiet love that can&apos;t be told.</p>
                        <p className="mt-5">We walked through parks of silver-white,</p>
                        <p>the bare trees framed in golden light,</p>
                        <p>and every breath of winter air</p>
                        <p>was sweeter, Julia, because you were there.</p>
                        <p className="mt-5">Let winters come and seasons turn —</p>
                        <p>beside you, I will always burn</p>
                        <p>with something warmer than the sun:</p>
                        <p>a love that&apos;s only just begun.</p>
                    </div>
                    <p className="text-white/50 text-sm mt-6 tracking-wider">— forever yours 💕</p>
                </div>

                {/* ── Desktop: real winter photo ── */}
                <div className="hidden md:block relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src={winterPark}
                            alt="Winter city park at sunset"
                            fill
                            sizes="768px"
                            className="object-cover"
                            placeholder="blur"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/60 to-slate-900/20"/>
                    </div>

                    {/* Snowflakes */}
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

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center">
                        <p className="shimmer-text text-3xl md:text-4xl mb-6">A Winter Love ❄️</p>
                        <div className="text-white/90 text-base md:text-lg leading-7 italic drop-shadow-lg">
                            <p>The snow fell soft on frozen ground,</p>
                            <p>and in that hush, I heard the sound</p>
                            <p>of something warm inside the cold —</p>
                            <p>a quiet love that can&apos;t be told.</p>
                            <p className="mt-5">We walked through parks of silver-white,</p>
                            <p>the bare trees framed in golden light,</p>
                            <p>and every breath of winter air</p>
                            <p>was sweeter, Julia, because you were there.</p>
                            <p className="mt-5">Let winters come and seasons turn —</p>
                            <p>beside you, I will always burn</p>
                            <p>with something warmer than the sun:</p>
                            <p>a love that&apos;s only just begun.</p>
                        </div>
                        <p className="text-white/60 text-sm mt-6 tracking-wider">— forever yours 💕</p>
                    </div>
                </div>
            </section>


            <section className="relative z-10 w-full max-w-xl px-6 mt-16 animate-fade-up-4">
                <h2
                    className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-10"
                    style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                >
                    Our moments 🕯️
                </h2>
                <MomentSlideshow/>
            </section>


            <section className="relative z-10 w-full max-w-xl px-6 mt-16 animate-fade-up-4">
                <h2
                    className="text-center text-3xl md:text-4xl font-bold text-rose-800 mb-10"
                    style={{fontFamily: "var(--font-letta-rillok), Georgia, serif", fontStyle: "italic"}}
                >
                    One last question 💭
                </h2>
                <AreYouMine/>
            </section>


            {/* ── Footer ── */}
            <footer className="relative z-10 mt-14 text-rose-400 text-sm text-center animate-fade-up-4">
                Made with 💕 just for you · Valentine's Day 2026
            </footer>
        </main>
    );
}
