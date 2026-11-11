import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-unbounded", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — The Future Is Green | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["GREENO", "GREENO COIN", "green rabbit", "crypto", "Web3", "community token", "Stronger Together"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — The Future Is Green`,
    description: site.description,
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The golden GREENO coin with the green rabbit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — The Future Is Green`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030604",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  slogan: site.slogan,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${unbounded.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh">
        {/* Brief CSS-only intro; removed from the flow after it fades */}
        <div aria-hidden="true" className="intro-loader pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-ink">
          <div className="relative h-20 w-20">
            <div className="intro-ring absolute inset-0 rounded-full border-2 border-neon/15 border-t-neon" />
            <div className="intro-mark absolute inset-3 grid place-items-center rounded-full bg-emerald/60 font-display text-xl font-bold text-neon">
              G
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="bg-noise pointer-events-none fixed inset-0 z-[1]" />
        <Navbar />
        <main id="main" className="relative z-[2]">
          {children}
        </main>
        <div className="relative z-[2]">
          <Footer />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
