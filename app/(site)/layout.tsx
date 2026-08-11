import { Suspense } from "react";
import { Topbar } from "@/components/site/Topbar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { IntegracoesScripts } from "@/components/site/IntegracoesScripts";
import { PixelRouteTracker } from "@/components/site/PixelRouteTracker";
import { CartProvider } from "@/components/site/CartContext";
import { SiteConfigProvider } from "@/components/site/SiteConfigContext";
import type { Metadata } from "next";
import { getIntegracoes } from "@/lib/data/integracoes";
import { getConteudoSiteMap } from "@/lib/data/conteudo";
import { getLinhas } from "@/lib/data/linhas";

// ISR: as leituras públicas (lib/data/*) não usam mais cookies(), então as
// páginas do site podem ser cacheadas em vez de renderizar 100% dinâmico a
// cada visita. As actions de admin chamam revalidatePath("/", "layout")
// depois de qualquer escrita, então esse teto de 1h é só um limite de
// segurança — na prática a atualização é imediata.
export const revalidate = 3600;

// Imagem exibida ao compartilhar qualquer página do site (WhatsApp, redes
// sociais). Cadastrada em Conteúdo do Site.
export async function generateMetadata(): Promise<Metadata> {
  const conteudo = await getConteudoSiteMap();
  const imagem = conteudo.og_imagem;
  if (!imagem) return {};

  return {
    openGraph: { images: [imagem] },
    twitter: { card: "summary_large_image", images: [imagem] },
  };
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [integracoes, conteudo, linhas] = await Promise.all([
    getIntegracoes(),
    getConteudoSiteMap(),
    getLinhas(),
  ]);

  return (
    <SiteConfigProvider value={conteudo}>
      <CartProvider>
        <IntegracoesScripts data={integracoes} />
        <Suspense fallback={null}>
          <PixelRouteTracker />
        </Suspense>
        <Topbar />
        <Header
          linhas={linhas.map((l) => ({ id: l.id, nome: l.nome, slug: l.slug }))}
        />
        <main>{children}</main>
        <Footer
          instagramUrl={conteudo.instagram_url}
          youtubeUrl={conteudo.youtube_url}
        />
        {conteudo.whatsapp_fab_ativo !== "false" && <WhatsAppFAB />}
      </CartProvider>
    </SiteConfigProvider>
  );
}
