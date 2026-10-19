"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppCTAButton } from "@/components/site/WhatsAppCTAButton";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function ObrigadoPage() {
  useEffect(() => {
    window.fbq?.("track", "Lead");

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: "generate_lead" });
  }, []);

  return 
<head><!-- Event snippet for Visualização de página conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-18487072475/ga_zCJz-_pYdENutqe9E'});
</script>
</head>
