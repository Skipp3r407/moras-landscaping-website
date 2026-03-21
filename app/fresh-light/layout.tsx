import { VariantShell } from "@/components/variations/variant-shell";

export default function FreshLightLayout({ children }: { children: React.ReactNode }) {
  return (
    <VariantShell mode="light" basePath="/fresh-light">
      {children}
    </VariantShell>
  );
}
