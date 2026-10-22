import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maharshi Sinha — Software Development Engineer | Notebook Portfolio",
  description: "Personal engineering journal and portfolio of Maharshi Sinha. Cross-platform mobile development with Flutter, modern web architecture with Next.js & React, and cloud backend systems.",
  keywords: ["Maharshi Sinha", "Software Development Engineer", "Flutter Developer", "Next.js", "React", "Firebase", "Portfolio"],
  authors: [{ name: "Maharshi Sinha", url: "https://github.com/maharshi-sinha" }],
  openGraph: {
    title: "Maharshi Sinha — Software Development Engineer",
    description: "Curated engineering logbook & portfolio. Flutter, Next.js, and distributed software systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharshi Sinha — Software Development Engineer",
    description: "Personal engineering notebook & portfolio.",
    creator: "@sinha_maharshi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen bg-paper-ivory dark:bg-paper-dark transition-colors duration-300 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
