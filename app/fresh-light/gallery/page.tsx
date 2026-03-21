import type { Metadata } from "next";

import { VariantGalleryPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light Gallery",
  description: "Gallery page in fresh light variation."
};

export default function FreshLightGalleryPage() {
  return <VariantGalleryPage mode="light" />;
}
