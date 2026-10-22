import type { Metadata } from "next";
import { Oswald, Barlow, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.r3fitness.com.br"),
  title: {
    default: "R3 Fitness — Equipamentos que constroem academias fortes",
    template: "%s | R3 Fitness",
  },
  description:
    "Fabricação própria de equipamentos para academias: linhas Excellence, Overall, Body Line e New Shape. Entrega e montagem para todo o Brasil.",
  verification: {
    other: {
      "facebook-domain-verification": "6tjvtnwgpiqeaev3s1yj2ktltsbr5t",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${barlow.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18487072475"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18487072475');
`,
          }}
        />
      </head>

      <body className="font-barlow bg-white text-r3-heading antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFZ5N9K6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
