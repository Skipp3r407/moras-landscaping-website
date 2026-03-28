import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqItems, innerPageHeroImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about landscaping services, estimates, and service areas with Mora's Landscaping LLC in Orlando."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        heroImage={innerPageHeroImages.faq}
        title="Frequently Asked Questions"
        description="Answers to common questions about our Orlando landscaping services, estimates, and scheduling."
        keywordLine="Lawn maintenance Orlando | Landscape design | Irrigation and cleanup FAQ"
      />

      <section className="section bg-earth/40">
        <div className="container-shell">
          <FaqList items={[...faqItems]} />
        </div>
      </section>

      <CtaBand
        title="Still Have Questions About Your Landscaping Project?"
        text="Reach out today and we can help you choose the right service plan and timeline for your property."
      />
    </>
  );
}
