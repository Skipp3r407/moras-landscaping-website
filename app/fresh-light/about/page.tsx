import type { Metadata } from "next";

import { VariantAboutPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light About",
  description: "About page in fresh light variation."
};

export default function FreshLightAboutPage() {
  return <VariantAboutPage mode="light" basePath="/fresh-light" />;
}
