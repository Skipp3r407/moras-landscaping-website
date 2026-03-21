import type { Metadata } from "next";

import { VariantGalleryPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark Gallery",
  description: "Gallery page in premium dark variation."
};

export default function PremiumDarkGalleryPage() {
  return <VariantGalleryPage mode="dark" />;
}
