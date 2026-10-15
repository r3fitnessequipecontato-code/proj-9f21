import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedido recebido",
  robots: { index: false, follow: true },
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        <Script
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=G-XZ613V97WK"
          strategy="afterInteractive"
        />

        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            gtag('js', new Date());

            gtag('config', 'G-XZ613V97WK');
            gtag('config', 'AW-18487072475');
          `}
        </Script>
      </body>
    </html>
  );
}
