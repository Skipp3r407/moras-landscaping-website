import type { Metadata } from "next";

import { VariantAboutPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark About",
  description: "About page in premium dark variation."
};

export default function PremiumDarkAboutPage() {
  return <VariantAboutPage mode="dark" basePath="/premium-dark" />;
}
