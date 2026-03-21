import type { Metadata } from "next";

import { VariantHomePage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark Version",
  description: "Premium dark design variation for Mora's Landscaping LLC website."
};

export default function PremiumDarkHomePage() {
  return <VariantHomePage mode="dark" basePath="/premium-dark" />;
}
