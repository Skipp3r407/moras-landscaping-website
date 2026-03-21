import type { Metadata } from "next";

import { VariantContactPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light Contact",
  description: "Contact page in fresh light variation."
};

export default function FreshLightContactPage() {
  return <VariantContactPage mode="light" />;
}
