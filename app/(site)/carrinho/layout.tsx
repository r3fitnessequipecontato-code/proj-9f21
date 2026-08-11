import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Carrinho",
  robots: { index: false, follow: true },
};

export default function CarrinhoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
