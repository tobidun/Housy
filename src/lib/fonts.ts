// lib/fonts.ts
import { DM_Sans, Playfair_Display } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});
