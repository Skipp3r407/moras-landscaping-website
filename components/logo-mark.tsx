import Image from "next/image";
import Link from "next/link";

import { business } from "@/data/site-content";

export function LogoMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={business.name}>
      <Image
        src="/logo-moras-landscaping.svg"
        alt="Mora's Landscaping LLC logo"
        width={200}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
}
