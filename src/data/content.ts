export type ProjectCategory = 'web' | 'mobile' | 'ai';

export interface Project {
  name: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  image: string;
  mobileImage?: string; // Optional mobile-specific preview image
  link: string;
}

export const projects: Project[] = [
  {
    name: "Jktroutfeed.com",
    description: "Multi-vendor fishery marketplace with advanced logistics tracking.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "web",
    image: "/jktroutfeed-preview.png",
    mobileImage: "/jktroutfeed-mobile.png",
    link: "https://jktroutfeed.com",
  },
  {
    name: "Boost+",
    description: "AI-driven educational platform (Neural Tutor) designed for modern syllabus solving.",
    tech: ["Next.js", "AI Engine", "Tailwind"],
    category: "ai",
    image: "/boostplus-preview.png",
    mobileImage: "/boostplus-mobile.png",
    link: "https://boostplus.ai/",
  },
  {
    name: "Q-ID",
    description: "Spatiotemporal Biometric Intelligence System that understands humans, not just faces.",
    tech: ["Biometrics", "AI Intelligence", "Edge Computing"],
    category: "ai",
    image: "/qid-preview.png",
    mobileImage: "/qid-mobile.png",
    link: "https://www.q-id.live/",
  },
  {
    name: "Abaliqa",
    description: "Principal IT advisory and sovereign engineering firm providing scalable technology ecosystems.",
    tech: ["Sovereign Eng", "IT Advisory", "Cloud Infrastructure"],
    category: "web",
    image: "/abaliqa-preview.png",
    mobileImage: "/abaliqa-mobile.png",
    link: "https://abaliqa.com/",
  },
  {
    name: "EcothermAgrotech",
    description: "Sustainability-focused energy solution producing bio-fuel pellets for a Net-Zero future.",
    tech: ["Bio-Fuel", "Sustainability", "Green Tech"],
    category: "web",
    image: "/ecotherm-preview.png",
    mobileImage: "/ecotherm-mobile.png",
    link: "https://www.ecothermagrotech.com/",
  },
  {
    name: "Clinical Pearl",
    description: "Points-of-care clinical decision support (CDS) tool for healthcare professionals and students.",
    tech: ["iOS", "Healthcare", "Reference"],
    category: "mobile",
    image: "/clinicalpearl-preview.png",
    mobileImage: "/clinicalpearl-mobile.png",
    link: "https://apps.apple.com/us/app/clinical-pearl/id1614000903",
  },
  {
    name: "Doc Watch",
    description: "Advanced remote patient monitoring (RPM) system designed to enhance healthcare outcomes.",
    tech: ["Android", "Healthcare", "RPM"],
    category: "mobile",
    image: "/docwatch-preview.png",
    mobileImage: "/docwatch-mobile.png",
    link: "https://play.google.com/store/apps/details?id=com.docwatch",
  },
  {
    name: "Travel Victor",
    description: "Premium destination management platform for Himalayan escapes, featuring AI-powered search and trip planning.",
    tech: ["Kashmir Travel", "AI Search", "Hospitality"],
    category: "web",
    image: "/travelvictor-preview.png",
    mobileImage: "/travelvictor-mobile.png",
    link: "https://www.travelvictor.com/",
  },
  {
    name: "ABC Bookstore",
    description: "An online bookstore for ABC Publishing House, featuring a 54-year legacy of literary excellence.",
    tech: ["E-commerce", "Legacy", "Bookstore"],
    category: "web",
    image: "/abcbooks-preview.png",
    mobileImage: "/abcbooks-mobile.png",
    link: "https://www.abcbooks.store/",
  },
  {
    name: "Indo-Persian Arts",
    description: "Curated collection where Mughal grandeur meets Persian elegance, featuring exquisite artistry and textiles.",
    tech: ["Art Portfolio", "E-commerce", "Cultural Heritage"],
    category: "web",
    image: "/indopersian-preview.png",
    mobileImage: "/indopersian-mobile.png",
    link: "https://indopersianarts.com/",
  },
  {
    name: "Codefons.com",
    description: "The official studio face of CodeFONS, transforming complex science into scalable systems with frontier technology.",
    tech: ["React", "Frontier Tech", "High Performance"],
    category: "web",
    image: "/codefons-preview.png",
    link: "https://www.codefons.com",
  },
  {
    name: "Journal Club",
    description: "Collaborative platform for reading and making sense of research papers together.",
    tech: ["Research Hub", "Collaboration", "Academic"],
    category: "web",
    image: "/journalclub-preview.png",
    mobileImage: "/journalclub-mobile.png",
    link: "https://journalclub.net/",
  },
  {
    name: "Kashmir Green Fuel",
    description: "Sustainable bio-energy initiative transforming local wood waste into high-efficiency clean fuel.",
    tech: ["Clean Energy", "Bio-Energy", "Circular Economy"],
    category: "web",
    image: "/kgf-preview.png",
    mobileImage: "/kgf-mobile.png",
    link: "https://www.kashmirgreenfuel.com/",
  },
  {
    name: "KVPDA",
    description: "The official portal for the Kashmir Valley Petroleum Dealers association, unified digital ecosystem for petroleum trade.",
    tech: ["React", "PostgreSQL", "Tailwind"],
    category: "web",
    image: "/kvpda-preview.png",
    mobileImage: "/kvpda-mobile.png",
    link: "https://kvpda.vercel.app/",
  },
];

export const services = [
  {
    id: "android",
    title: "Android App Development",
    description: "High-performance, scalable Android applications built with modern frameworks and native performance.",
    icon: "Smartphone",
  },
  {
    id: "ios",
    title: "iOS App Development",
    description: "Premium iOS experiences leveraging the latest Apple technologies and design guidelines.",
    icon: "AppWindow",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Responsive, lightning-fast web applications integrated with cutting-edge technology stacks.",
    icon: "Globe",
  },
  {
    id: "ai",
    title: "Generative AI Solutions",
    description: "Custom AI integrations and LLM-powered features engineered to transform your business.",
    icon: "Cpu",
  },
];

export const testimonials = [
  {
    name: "Tanvir Chisti",
    role: "CEO, JKTROUT FEED",
    content: "CodeFONS transformed our vision into reality. Their AI solutions are game-changing and their attention to detail is world-class.",
  },
  {
    name: "Amir Lateef wani",
    role: "Founder, GreenAgro",
    content: "The EcothermAgrotech platform they built exceeded our expectations. Truly a premium delivery, on-time and on-budget.",
  },
  {
    name: "Yasir illahi",
    role: "CEO, Travel Victor",
    content: "CodeFONS didn't just build a booking engine; they captured the soul of Kashmir. Our platform now helps travelers discover the magic of our houseboats and valleys with the same warmth and hospitality we offer in person.",
  },
  {
    name: "Suhail Qari",
    role: "CEO, ABC PUBLISHING BOOK STORE",
    content: "CodeFONS engineered a world-class digital marketplace for our legacy bookstore, rivaling global giants in speed and user experience. They've perfectly redefined how our readers discover and order literature.",
  },
];
