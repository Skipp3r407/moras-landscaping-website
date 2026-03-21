import type { Metadata } from "next";

import { VariantHomePage } from "@/components/variations/variant-pages";

export const metadata: Metadata = {
  title: "Fresh Light Version",
  description: "Fresh light design variation for Mora's Landscaping LLC website."
};

export default function FreshLightHomePage() {
  return <VariantHomePage mode="light" basePath="/fresh-light" />;
}
