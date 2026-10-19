import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pedido recebido",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Ads - conversão da página /obrigado */}
      <Script
        id="google-ads-conversion-obrigado"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('event', 'conversion', {
            'send_to': 'AW-18487072475/ga_zCJz-_pYdENutqe9E'
          });
        `}
      </Script>

      {children}
    </>
  );
}
