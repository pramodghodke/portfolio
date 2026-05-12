import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import { Rubik } from "next/font/google";
import SoundButton from "@/components/SoundButton";
import AudioProvider from "@/components/AudioProvider";

const spaceGrotesk = Rubik({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-black text-white">
        <AudioProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <SoundButton />
          </LenisProvider>
        </AudioProvider>

        <Analytics />
        <SpeedInsights />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pramod Ghodke",
              url: "https://pramodghodke.vercel.app",
              jobTitle: "Full Stack Developer (React.js, TypeScript, Node.js)",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/pramodghodke",
                "https://www.linkedin.com/in/pramodghodke/",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://pramodghodke.vercel.app",
              },

              hasPart: [
                {
                  "@type": "Article",
                  headline: "Stop Redefining Your Interfaces: 6 TypeScript Utility Types You Actually Need",
                  url: "https://www.linkedin.com/pulse/stop-redefining-your-interfaces-6-typescript-utility-types-madgulkar-jj2af/",
                  author: {
                    "@type": "Person",
                    name: "Pramod Ghodke",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "LinkedIn",
                  },
                  datePublished: "2026-02-13",
                  description:
                    "A practical guide to essential TypeScript utility types that improve code reusability and reduce redundancy in large-scale applications.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

// SEO Metadata
export const metadata = {
  title: {
    default: "Pramod Ghodke | Senior Reactjs Developer",
    template: "%s | Pramod Ghodke",
  },
  description: "Pramod Ghodke is a Pune-based MERN Stack Developer with 3.5+ years of experience building scalable, high-performance full-stack web applications using React.js, TypeScript, Node.js, Express.js & MongoDB. Delivered large-scale municipal projects for Pimpri Chinchwad Municipal Corporation.",

  openGraph: {
    title: "Pramod Ghodke | MERN Stack Developer",
    description: "Pramod Ghodke is a Pune-based MERN Stack Developer with 2+ years of experience building scalable, high-performance full-stack web applications using React.js, TypeScript, Node.js, Express.js & MongoDB. Delivered large-scale municipal projects for Pimpri Chinchwad Municipal Corporation.",
    url: "https://pramodghodke.vercel.app",
    siteName: "Pramod Ghodke Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "pramod Ghodke | MERN Stack Developer",
    description: "pramod Ghodke is a Pune-based MERN Stack Developer with 3.5+ years of experience building scalable, high-performance full-stack web applications using React.js, TypeScript, Node.js, Express.js & MongoDB. Delivered large-scale municipal projects for Pimpri Chinchwad Municipal Corporation.",
    images: ["/og-image.png"],
  },
};