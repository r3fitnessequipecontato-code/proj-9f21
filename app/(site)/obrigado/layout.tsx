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
   

      
import Script from "next/script";

// mantenha aqui os outros imports que seu layout já tiver

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* =====================================================
            GOOGLE TAG GLOBAL
            O Next.js colocará beforeInteractive no <head>
            ===================================================== */}

        <Script
          id="google-tag-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-XZ613V97WK"
          strategy="beforeInteractive"
        />

        <Script
          id="google-tag-config"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            /* Google Analytics 4 */
            gtag('config', 'G-XZ613V97WK');

            /* Google Ads */
            gtag('config', 'AW-18487072475');
          `}
        </Script>
      </body>
    </html>
  );
}
