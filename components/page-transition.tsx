"use client";

import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <>
      <div key={`progress-${pathname}`} className="route-progress" aria-hidden="true" />
      <div key={pathname} className="route-enter">
        {children}
      </div>
    </>
  );
}
