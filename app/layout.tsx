import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const lettaRillok = localFont({
    src: "./fonts/LettaRillokCyrillic-Script.woff2",
    variable: "--font-letta-rillok",
    display: "swap",
    style: "italic",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Forever Julia 💕",
    description: "A Valentine's Day message, just for you.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={lettaRillok.variable}>
        <body className="min-h-screen">{children}</body>
        </html>
    );
}
