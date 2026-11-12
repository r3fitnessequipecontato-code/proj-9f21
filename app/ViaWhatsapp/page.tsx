/* eslint-disable @next/next/no-img-element -- imagens estáticas já otimizadas em /public/linktree */
import type { Metadata } from "next";
import s from "./links.module.css";

// Página de links da bio do Instagram (r3fitness.com.br/ViaWhatsapp).

export const metadata: Metadata = {
  title: "Links",
  description:
    "Equipamentos para academia com fabricação própria. Fale com um consultor e conheça as linhas da R3 Fitness.",
  robots: { index: false, follow: true },
};

// Mesmo link do botão da bio: os cliques continuam contando no bit.ly.
const WHATSAPP = "https://bit.ly/EquipamentosViaWPP";

const utm = (content: string) =>
  `utm_source=instagram&utm_medium=linktree&utm_campaign=bio&utm_content=${content}`;

const LINHAS = [
  { slug: "overal", nome: "Overall", img: "overall.png", alt: "Supino articulado da linha Overall", tipo: "big", num: "01" },
  { slug: "excellence", nome: "Excellence", img: "excellence.png", alt: "Estação multifuncional da linha Excellence", tipo: "half", num: "02" },
  { slug: "body-line", nome: "Body Line", img: "bodyline.png", alt: "Peck deck da linha Body Line", tipo: "half", num: "03" },
  { slug: "new-shape", nome: "New Shape", img: "newshape.png", alt: "Puxador da linha New Shape", tipo: "wide", num: "04" },
] as const;

export default function LinksPage() {
  return (
    <div className={s.root}>
      <main className={s.page}>
        <header className={s.hero}>
          <img className={s.heroBg} src="/linktree/hero-academia.jpg" alt="" />
          <div className={s.heroIn}>
            <img className={s.logo} src="/linktree/logo-branca.png" alt="R3 Fitness, equipamentos para academias" width={250} height={110} />
            <div className={s.pill}>Bem-vindo(a)!</div>
            <p className={s.tag}>Equipamentos para academia · Fabricação própria</p>
            <p className={s.anos}>9 anos no mercado</p>
          </div>
        </header>

        <a className={s.wa} href={WHATSAPP} target="_blank" rel="noopener" data-gtm="linktree-whatsapp">
          <svg className={s.waIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 6.67 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43M20.08 3.9A11.3 11.3 0 0 0 12.05.58C5.8.58.7 5.66.7 11.92c0 2 .52 3.95 1.52 5.67L.6 23.42l5.96-1.56a11.3 11.3 0 0 0 5.48 1.4h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
          </svg>
          <span className={s.sep} aria-hidden="true" />
          <div>
            <strong>Fale com um consultor</strong>
            <span>Orçamento rápido pelo WhatsApp</span>
          </div>
        </a>

        <h1 className={s.label}>Nossas linhas</h1>

        <section className={s.grid}>
          {LINHAS.map((l) => (
            <a
              key={l.slug}
              className={`${s.card} ${s[l.tipo]}`}
              href={`/produtos?linha=${l.slug}&${utm(l.slug)}`}
              data-gtm={`linktree-linha-${l.slug}`}
            >
              <img className={s.ph} src={`/linktree/${l.img}`} alt={l.alt} loading="lazy" />
              {l.tipo === "half" && <span className={s.num}>{l.num}</span>}
              <div className={s.txt}>
                {l.tipo !== "half" && <span className={s.num}>{l.num}</span>}
                <h2 className={s.ttl}>
                  <small>Conheça a linha</small>
                  <b>{l.nome}</b>
                </h2>
                <span className={s.cta}>Ver equipamentos →</span>
              </div>
            </a>
          ))}
        </section>

        <a className={s.site} href={`/?${utm("site")}`} data-gtm="linktree-site">
          <svg className={s.siteIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
          </svg>
          <span className={s.sep} aria-hidden="true" />
          <div>
            <strong>Visite nosso site</strong>
            <span>r3fitness.com.br</span>
          </div>
          <span className={s.go} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>

        <footer className={s.footer}>
          <a href="https://www.instagram.com/r3fitnessequipamentos/" target="_blank" rel="noopener" data-gtm="linktree-instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @r3fitnessequipamentos
          </a>
          <span>© R3 Fitness</span>
        </footer>
      </main>
    </div>
  );
}
