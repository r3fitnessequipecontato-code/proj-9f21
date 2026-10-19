"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppCTAButton } from "@/components/site/WhatsAppCTAButton";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;

    dataLayer?: unknown[];

    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function ObrigadoPage() {
  useEffect(() => {
    /* ==========================================
       META PIXEL
       ========================================== */

    window.fbq?.("track", "Lead");


    /* ==========================================
       GOOGLE ANALYTICS 4
       G-XZ613V97WK
       ========================================== */

    window.gtag?.("event", "generate_lead", {
      send_to: "G-XZ613V97WK",
    });


    /* ==========================================
       GOOGLE ADS
       Conversão da página /obrigado

       Snippet fornecido pelo Google:
       AW-18487072475/ga_zCJz-_pYdENutqe9E
       ========================================== */

    window.gtag?.("event", "conversion", {
      send_to: "AW-18487072475/ga_zCJz-_pYdENutqe9E",
    });
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-[560px] mx-auto px-6 py-24 text-center">
        <CheckCircle2
          size={48}
          strokeWidth={1.4}
          className="mx-auto text-accent"
        />

        <h1 className="mt-6 font-oswald font-bold uppercase text-[clamp(28px,4vw,40px)] text-r3-heading">
          Recebemos sua solicitação!
        </h1>

        <p className="mt-4 text-[16px] text-r3-body leading-relaxed">
          Nossa equipe já foi avisada e vai entrar em contato em breve com o
          seu orçamento. Se preferir, você também pode falar com a gente agora
          mesmo pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <WhatsAppCTAButton
            variant="whatsapp"
            className="px-10 py-4 text-[14px]"
            mensagem="Olá! Acabei de solicitar um orçamento pelo site da R3 Fitness."
          >
            Falar no WhatsApp agora
          </WhatsAppCTAButton>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-r3-borderMuted text-r3-heading font-barlow font-semibold text-[14px] uppercase tracking-[.1em] hover:border-r3-heading transition-colors"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </section>
  );
}
