export const business = {
  name: "Mora's Landscaping LLC",
  shortName: "Mora's Landscaping",
  phoneDisplay: "(407) 247-4786",
  phoneHref: "tel:+14072474786",
  email: "moraslawns@gmail.com",
  city: "Orlando",
  state: "Florida",
  serviceSince: "2015",
  ownerName: "Michael (Myke) Mora",
  experienceYears: "25+ years",
  serviceAreaLine: "Proudly serving Orlando and surrounding Central Florida communities."
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    id: "lawn-maintenance",
    title: "Lawn Maintenance",
    icon: "🌿",
    short:
      "Dependable mowing, edging, and detail work that keeps your lawn consistently neat and healthy.",
    benefits: ["Improves curb appeal", "Maintains a healthy yard", "Saves time every week"],
    useCases: ["Busy homeowners", "Routine property upkeep", "HOA-ready appearance"]
  },
  {
    id: "landscape-installation",
    title: "Landscape Installation",
    icon: "🪴",
    short:
      "Professional installation of plants, sod, mulch, and decorative elements for polished outdoor spaces.",
    benefits: ["Increases property value", "Creates a finished landscape look", "Built for Florida conditions"],
    useCases: ["Front yard upgrades", "New home landscapes", "Backyard makeovers"]
  },
  {
    id: "landscape-design",
    title: "Landscape Design",
    icon: "🧭",
    short:
      "Custom landscape design plans tailored to your property, style, and maintenance preferences.",
    benefits: ["Improves layout and flow", "Supports low-maintenance options", "Delivers a cohesive look"],
    useCases: ["Full redesign projects", "Problem area planning", "Outdoor lifestyle upgrades"]
  },
  {
    id: "irrigation-services",
    title: "Irrigation Services",
    icon: "💧",
    short:
      "Irrigation system installs and repairs to keep lawns and landscapes watered efficiently.",
    benefits: ["Protects plant health", "Reduces water waste", "Prevents dry spots"],
    useCases: ["Sprinkler repairs", "New irrigation zones", "System upgrades"]
  },
  {
    id: "artificial-turf",
    title: "Artificial Turf",
    icon: "🟩",
    short:
      "Low-maintenance synthetic turf installations that stay green and clean year-round.",
    benefits: ["Minimal maintenance", "Clean look in all seasons", "Great for pets and play"],
    useCases: ["Pet areas", "Backyard entertainment zones", "Low-water landscapes"]
  },
  {
    id: "landscape-cleanup",
    title: "Landscape Cleanup",
    icon: "🍂",
    short:
      "Comprehensive cleanup for overgrown or neglected yards, including debris and bed cleanup.",
    benefits: ["Instant visual improvement", "Prepares yard for regular care", "Safer outdoor spaces"],
    useCases: ["Seasonal cleanups", "Pre-sale prep", "Property resets"]
  },
  {
    id: "storm-cleanup",
    title: "Storm Cleanup",
    icon: "🌪️",
    short:
      "Rapid response storm cleanup to remove debris and restore outdoor areas after severe weather.",
    benefits: ["Quick recovery after storms", "Safer walkways and yards", "Restores curb appeal fast"],
    useCases: ["Post-storm debris removal", "Emergency cleanup", "Tree and branch clearing"]
  }
] as const;

export const whyChooseUs = [
  "Fully licensed and insured for peace of mind",
  "25+ years of landscaping experience",
  "Local Orlando business with Central Florida roots",
  "High-quality craftsmanship focused on long-term results",
  "Reliable, professional communication from quote to completion"
];

export const projectCategories = [
  "Lawn Maintenance",
  "Landscape Installation",
  "Landscape Design",
  "Irrigation Services",
  "Artificial Turf",
  "Storm Cleanup"
];

export const galleryProjects = [
  {
    title: "Luxury Front Yard Upgrade",
    category: "Landscape Installation",
    image: "/images/projects/fb-2.jpg",
    caption: "New plants, fresh bed lines, and clean finishing details for a standout curb appeal transformation."
  },
  {
    title: "Backyard Landscape Design",
    category: "Landscape Design",
    image: "/images/projects/fb-3.jpg",
    caption: "A custom layout that improved flow, functionality, and long-term maintenance ease."
  },
  {
    title: "Irrigation System Refresh",
    category: "Irrigation Services",
    image: "/images/projects/fb-4.jpg",
    caption: "Targeted irrigation improvements to support healthier turf and reduce dry zones."
  },
  {
    title: "Artificial Turf Installation",
    category: "Artificial Turf",
    image: "/images/projects/fb-5.jpg",
    caption: "Low-maintenance turf zone installed for year-round greenery and cleaner outdoor living."
  },
  {
    title: "Landscape Cleanup Before/After",
    category: "Landscape Cleanup",
    image: "/images/projects/fb-6.jpg",
    caption: "Overgrown beds and debris removed to restore a clean, polished property presentation."
  },
  {
    title: "Storm Cleanup Recovery",
    category: "Storm Cleanup",
    image: "/images/projects/fb-7.jpg",
    caption: "Fast post-storm cleanup restoring outdoor spaces and improving safety."
  }
];

export const testimonialSamples = [
  {
    name: "S. Alvarez",
    location: "Orlando Homeowner",
    rating: 5,
    quote:
      "Mora's Landscaping transformed our yard and made the whole process simple. They were professional, reliable, and the results are beautiful."
  },
  {
    name: "R. Thompson",
    location: "Winter Park Homeowner",
    rating: 5,
    quote:
      "We hired them for lawn maintenance and irrigation work. Great communication, on-time service, and quality workmanship every visit."
  },
  {
    name: "L. Carter",
    location: "Kissimmee Homeowner",
    rating: 5,
    quote:
      "Our landscape cleanup and redesign came out better than expected. The crew was respectful, efficient, and detail-focused."
  },
  {
    name: "M. Rivera",
    location: "Altamonte Springs Homeowner",
    rating: 5,
    quote:
      "From quote to completion, Mora's Landscaping felt like a true professional company. We love the curb appeal upgrade."
  }
];

export const faqItems = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free estimates for all landscaping services, including design, maintenance, irrigation, and cleanup."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Mora's Landscaping LLC is fully licensed and insured for your peace of mind."
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Orlando, Kissimmee, Winter Park, Altamonte Springs, Sanford, Davenport, and nearby Central Florida communities."
  },
  {
    question: "How often should I maintain my lawn?",
    answer:
      "Most Florida lawns benefit from regular weekly or bi-weekly maintenance, depending on season and growth rate."
  },
  {
    question: "Can you help with landscape design and installation?",
    answer:
      "Absolutely. We provide both custom landscape design and full installation services tailored to your property."
  },
  {
    question: "Do you offer irrigation repairs and installations?",
    answer:
      "Yes. We handle irrigation troubleshooting, repairs, and new installations to keep your landscape healthy."
  },
  {
    question: "Do you provide storm cleanup?",
    answer:
      "Yes. We provide fast storm debris cleanup and recovery services to restore safety and curb appeal."
  }
];

export const serviceAreas = [
  "Orlando",
  "Kissimmee",
  "Winter Park",
  "Altamonte Springs",
  "Sanford",
  "Davenport",
  "Surrounding Central Florida communities"
];

export const featuredReels = [
  {
    title: "Landscape Transformation Reel",
    url: "https://www.facebook.com/reel/1405719430760957/",
    thumbnail: "/images/projects/reel-1.jpg"
  }
];
