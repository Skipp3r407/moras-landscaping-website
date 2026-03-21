import type { Metadata } from "next";

import { VariantTestimonialsPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light Testimonials",
  description: "Testimonials page in fresh light variation."
};

export default function FreshLightTestimonialsPage() {
  return <VariantTestimonialsPage mode="light" />;
}
