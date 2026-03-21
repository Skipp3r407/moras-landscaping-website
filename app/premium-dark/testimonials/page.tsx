import type { Metadata } from "next";

import { VariantTestimonialsPage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Premium Dark Testimonials",
  description: "Testimonials page in premium dark variation."
};

export default function PremiumDarkTestimonialsPage() {
  return <VariantTestimonialsPage mode="dark" />;
}
