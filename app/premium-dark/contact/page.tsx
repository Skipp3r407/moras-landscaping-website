import type { Metadata } from "next";

import { VariantContactPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark Contact",
  description: "Contact page in premium dark variation."
};

export default function PremiumDarkContactPage() {
  return <VariantContactPage mode="dark" />;
}
