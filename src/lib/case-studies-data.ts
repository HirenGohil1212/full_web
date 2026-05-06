import { BarChart3, Globe, Smartphone, Users, Zap, Recycle, Utensils, Activity } from "lucide-react";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  hint: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  icon: any;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dune-shisha-smm",
    title: "Dune Shisha SMM Strategy",
    category: "Marketing",
    description: "Transforming a luxury lounge's digital presence through AI-powered analytics and high-end visual storytelling.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4",
    hint: "luxury marketing",
    icon: BarChart3,
    challenge: "Dune Shisha had a strong physical presence but struggled to attract the right demographic online. Their engagement rates were stagnant, and their digital aesthetic didn't match the premium nature of their service.",
    solution: "We implemented a 360-degree Social Media Marketing strategy. This included high-production video content, influencer partnerships, and a custom-built analytics dashboard that tracked customer sentiment using AI.",
    results: [
      "300% increase in monthly social engagement",
      "45% growth in high-intent reservation inquiries",
      "Reached 1M+ unique impressions in 90 days",
      "Ranked #1 locally for luxury lounge keywords"
    ],
    tech: ["AI Analytics", "Meta Ads Manager", "Adobe Creative Suite"]
  },
  {
    slug: "the-match-live",
    title: "The Match Live Streaming",
    category: "Web App",
    description: "Building a resilient, ultra-low latency streaming architecture for real-time sports broadcasting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0",
    hint: "streaming platform",
    icon: Globe,
    challenge: "The client needed a platform that could stream high-definition sports content with less than 2 seconds of latency to prevent spoilers via social media.",
    solution: "We built a custom WebRTC and HLS-based streaming engine. Using AWS Media Services and a global Content Delivery Network (CDN), we ensured stream stability regardless of location.",
    results: [
      "Sub-1.5 second global latency achieved",
      "Handled 55,000 concurrent viewers flawlessly",
      "99.99% uptime during high-traffic windows",
      "30% reduction in CDN costs via edge caching"
    ],
    tech: ["Next.js", "AWS MediaLive", "CloudFront", "WebRTC"]
  },
  {
    slug: "pinakin-prayaan",
    title: "Pinakin Prayaan Logistics",
    category: "Travel",
    description: "Streamlining end-to-end travel logistics with a robust mobile ecosystem and automated dispatch.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8",
    hint: "mobile logistics",
    icon: Smartphone,
    challenge: "The travel agency relied on manual coordination, leading to double bookings, route inefficiencies, and customer frustration.",
    solution: "We developed a dual-app ecosystem (Driver & Customer) built with Flutter. The backend features an intelligent dispatch algorithm based on real-time traffic data.",
    results: [
      "60% reduction in manual dispatch overhead",
      "4.8/5 average customer rating",
      "Fuel costs reduced by 15% via optimization",
      "Zero double-booking incidents since launch"
    ],
    tech: ["Flutter", "Node.js", "Google Maps API", "Firebase"]
  },
  {
    slug: "balance-astro-vastu",
    title: "Balance Astro Vastu",
    category: "Consultancy",
    description: "A high-performance web platform connecting users with premium astrology and Vastu consultants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjcV_ly2-6rP_MJdPdfrDbYjrEVV5F-EKIjyWkI5djpu8LI6a7OklIobyGQKF3R_zFW8KIg5Zkb7VRqjtzIIig2xGkMs2ifJV2hyv7XGTN78OdHgz_Podmsc2aeWzT9AoKDBPXzAFIZ6IzxRqK9FBYpU9xuhNYSK_h0j24_pWrTcpydlqK53HGR-mv3-P_1VYisDsxjPq6bLU4d3DMcx-bkztQc9_UIlZfVWQoocTUWbFPcBNEM_77dK2fskLZvk3lTWQIObCFbuk",
    hint: "consultancy platform",
    icon: Zap,
    challenge: "Consultants struggled with fragmented scheduling and insecure payment methods, leading to lost revenue and poor user trust.",
    solution: "We implemented an integrated video-consultation suite with automated booking slots and a multi-currency payment gateway. AI-based matching suggests the best consultant for a user's specific query.",
    results: [
      "250% increase in weekly booking volume",
      "85% improvement in consultant retention",
      "Zero payment fraud incidents reported",
      "Reduced scheduling administrative time by 70%"
    ],
    tech: ["React", "WebRTC", "Stripe API", "Node.js"]
  },
  {
    slug: "pure-planet-recycling",
    title: "Pure Planet Recycling",
    category: "Sustainability",
    description: "Digitalizing industrial waste management for enhanced transparency and sustainability reporting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvza2w5Bbju5MQwyFocU-7uhYsGsOMhHC1Oo6HkDHV-cBNOqUV7eS4s6k1GvqYb0q-1eT7ehPIFZ_wZRlHQ7XKYOQim-LCDUTzFMFB5BcZ8bPXowshFpUv2lz2pGvYp7_VTkBUGYbIe7QO_keK1dFSCjtiOhyT46URdirr3xMWHP-1PQGP-d3SyDCqYgnUQgHLqr2OwPaIq2T1nG__Lf_sAiw-CmZdiJjbGEfu0xbvqxHUnbUh7JsDVEmTZzr3TX0h6gTx083UyPc",
    hint: "recycling tech",
    icon: Recycle,
    challenge: "Industrial clients lacked clear data on their recycling impact, making corporate sustainability reporting manual and error-prone.",
    solution: "We built a data-driven platform that tracks waste from source to processing. It features automated PDF generation for compliance and an interactive dashboard for impact visualization.",
    results: [
      "100% accurate compliance reporting achieved",
      "Reduced operational reporting time from days to minutes",
      "50% increase in client engagement with recycling metrics",
      "Successfully tracked over 500 tons of waste in year one"
    ],
    tech: ["Next.js", "PostgreSQL", "Recharts", "Cloud Functions"]
  },
  {
    slug: "atown",
    title: "aTown Hyper-Local",
    category: "Community",
    description: "Fostering neighborhood growth through a centralized hyper-local social and commerce ecosystem.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDARGUzmFzvctw7wq1uSopvHN40G-MYi44RNkmlhYg3M5XIq8eK5kuhUrzR6lenI1O6BOqjF1zKvV38ulB93zhljL_dC0wYGNimxG8HKnd-m4X1qvKaildM57_bN8KQxnXR53RjFgVY5aBdD1cxWrma_D-UdcIUhnrjz8jXAsswhuRn4pOR4fcZN40w2qGV0G9T1OgTB-vW2CbFt8BRMq-w_RLnuUpG5NJ-4s-0NjpwxYJZQONwCa0llt3aRqGIW0bVt5O_lYJS4y4",
    hint: "neighborhood app",
    icon: Users,
    challenge: "Local businesses had no effective way to reach nearby customers, and residents were unaware of local community events.",
    solution: "We developed a mobile-first platform featuring a community wall, event discovery, and a directory for verified local businesses with integrated promotion tools.",
    results: [
      "10,000+ active residents in the first 6 months",
      "40% increase in attendance for local community events",
      "Onboarded 200+ local small businesses",
      "Enabled direct merchant-to-customer chat"
    ],
    tech: ["Flutter", "Firebase", "Algolia Search", "Push Notifications"]
  },
  {
    slug: "catering-idea",
    title: "Catering Idea Management",
    category: "Food Tech",
    description: "Optimizing large-scale catering operations through automated inventory and staff management.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPF3Cv9AhUpeuUlnBpfYRO9kcQG078lX3aLxqN1zPAFi-q1652QKISa2AJiVXZgquzhi2tzI00q_S80s6x-ZzVM-keHFRVa4BFzjKk1eDBpIDUf7PWi_ktqi0bo-M8fOlLEk5E-RHG2INAGf2kWcTm-dU85oKt6DRmmZ96KEkxTa_o-7apjfkZj3afKVOVP3ssLzAsTfNKnFtq5Ldsw4dLG4j0A0gpfW9E73cDdoeyf11BGPMA64LMRGYZ1-iL2tyhoWXEdNSo_qA",
    hint: "catering software",
    icon: Utensils,
    challenge: "Manual inventory tracking during busy wedding seasons led to food waste, stockouts, and staffing confusion.",
    solution: "We built a centralized ERP for caterers that predicts food quantities based on guest counts and automates staff rosters and vendor purchase orders.",
    results: [
      "35% reduction in overall food waste",
      "100% accurate inventory forecasting",
      "Reduced labor costs by 20% via efficient scheduling",
      "Average order turnaround time improved by 40%"
    ],
    tech: ["React Native", "Express.js", "Redis", "AWS"]
  },
  {
    slug: "mediclock-healthcare",
    title: "Mediclock Healthcare",
    category: "HealthTech",
    description: "Empowering patients and clinics through AI-driven reminders and streamlined appointment flows.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsaxn3tpfO7j_zTE4Y1vgSR1KZhnwHHu8fBI-unrj8FHUbR5jY0onbhjqXepNy86FV-VfV7zwsw-1Umq_JtqQbN5Yr69zjpPFBv-WjKanPJ4ixg2UMTA3DqTmd_JgTAlaMl5tCdRIIsd4vp0Sos627ShqLjvHMiAxi66OWAfZjetTRP5TID_WG6cwu_DE0e-69oKYDkYCcSu8siFRI9LcHRUrWJwCFBM8pzfI0auV8AeFTt0XmL7A1K43yGU9ZoecUpIcHUADc8mU",
    hint: "healthcare app",
    icon: Activity,
    challenge: "Clinic staff were overwhelmed by appointment phone calls, and patient medication adherence was consistently low.",
    solution: "We developed a mobile application that features a self-service booking engine, automated medication reminders, and a secure HIPAA-compliant doctor-patient chat.",
    results: [
      "50% reduction in clinic front-desk call volume",
      "30% improvement in patient medication adherence",
      "Reduced appointment 'no-show' rate by 45%",
      "Achieved 100% secure record storage compliance"
    ],
    tech: ["Flutter", "Python AI", "Firebase Auth", "Twilio"]
  }
];
