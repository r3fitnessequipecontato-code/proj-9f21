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
   
<head><!-- Event snippet for Visualização de página conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-18487072475/ga_zCJz-_pYdENutqe9E'});
</script>
</head>
