import type { Metadata } from "next";

import { VariantServicesPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light Services",
  description: "Services page in fresh light variation."
};

export default function FreshLightServicesPage() {
  return <VariantServicesPage mode="light" basePath="/fresh-light" />;
}
