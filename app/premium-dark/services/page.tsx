import type { Metadata } from "next";

import { VariantServicesPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark Services",
  description: "Services page in premium dark variation."
};

export default function PremiumDarkServicesPage() {
  return <VariantServicesPage mode="dark" basePath="/premium-dark" />;
}
