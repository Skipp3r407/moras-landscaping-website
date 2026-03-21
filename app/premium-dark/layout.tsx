import { VariantShell } from "@/components/variations/variant-shell";

export default function PremiumDarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <VariantShell mode="dark" basePath="/premium-dark">
      {children}
    </VariantShell>
  );
}
