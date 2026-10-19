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
