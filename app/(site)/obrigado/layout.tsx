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
  return 

