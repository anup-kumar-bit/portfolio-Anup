"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/** Scroll-reveal for sections. No cursor effects or background glows. */
export default function ClientSide() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
      // Reduced motion: AOS strips its attributes, so content is simply visible (no fade/slide).
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return null;
}
