import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: "Prabhat Tambe",
  title: "Frontend Engineer • Cloud Interfaces, System Design & Architecture",
  tagline: "Profoundly responsive. Intelligently engineered.",
  location: "Pune, India",
  status: "Available for Senior Frontend & Cloud Systems Engineering",
  about: "I build cloud applications designed with the precision, grace, and fluidity you expect from the world’s most refined software. Every interface is backed by deep architectural mastery: edge networking, virtual machines, micro-caching, and multi-tenant reseller systems. When hardware meets code, I integrate physical IoT devices and embedded controllers with effortless simplicity.",
  socials: {
    github: "https://github.com/Prabhat2373",
    linkedin: "https://www.linkedin.com/in/prabhat-tambe/",
    email: "prabhattambe10@gmail.com",
    twitter: "https://github.com/Prabhat2373",
  },
  metrics: [
    {
      label: "Core Web Vitals",
      value: "100 / 100",
      description: "Sub-50ms Interaction to Next Paint (INP) and perfect performance audits",
    },
    {
      label: "Instant Edge TTFB",
      value: "< 15ms",
      description: "Sub-millisecond edge routing and streaming Server Components",
    },
    {
      label: "Zero Maintenance",
      value: "99.99%",
      description: "Durable design systems engineered to run reliably without ongoing upkeep",
    },
    {
      label: "Payload Efficiency",
      value: "-40%",
      description: "Radically reduced client-side overhead with intelligent caching layers",
    }
  ],
  projects: [
    {
      id: "stack-console-cloud-platform",
      title: "Stack Console: The Cloud, Beautifully Orchestrated",
      tagline: "Virtual machines, edge networking, and multi-tenant hierarchies. Fluid down to the pixel.",
      category: "Design Systems & UI",
      featured: true,
      metrics: [
        { label: "Hierarchy", value: "3-Tier RBAC" },
        { label: "Edge Routing", value: "< 15ms" },
        { label: "Architecture", value: "Hybrid RSC" }
      ],
      summary: "An enterprise cloud management platform engineered with the elegance of a native operating system. Coordinates compute instances, VPC networking rules, and affiliate reseller organizations with instant response times.",
      challenge: "Cloud consoles are notoriously slow and complex. Handling multi-tenant hierarchies (Resellers → Admins → Sub-Users) across low-bandwidth connections required an entirely fresh architectural approach.",
      solution: "Engineered a composable design system powered by Next.js Server Components. Layout shells stream instantly from the edge, while dynamic CSS custom properties deliver white-label reseller branding with zero JavaScript bloat.",
      architecture: [
        { title: "Edge Network & Tenant Router", description: "Resolves reseller domains and isolates VPC boundaries before the first byte leaves the server." },
        { title: "Zero-Latency Server Shells", description: "Complex cloud topology trees pre-rendered on the server for immediate visual readiness." },
        { title: "Reactive Telemetry Islands", description: "Selective client hydration streams live VM metrics with zero layout shifts or thread blocking." }
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Server Components", "Azure IaaS", "Cloud Networking"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "4 min read",
      stars: 140
    },
    {
      id: "logibricks-design-token-migration",
      title: "Logibricks: Radical Clarity. Uncompromising Speed.",
      tagline: "Migrating enterprise SaaS to a zero-maintenance, atomic design system.",
      category: "Design Systems & UI",
      featured: true,
      metrics: [
        { label: "Bundle Weight", value: "-35%" },
        { label: "Dev Velocity", value: "+35%" },
        { label: "Maintenance", value: "Near Zero" }
      ],
      summary: "A complete reimagining of enterprise software ergonomics. Replaced heavy legacy runtime styling with a featherlight design system built on headless primitives, strict tokens, and immutable TypeScript contracts.",
      challenge: "Bloated CSS-in-JS dependencies caused noticeable frame drops and frequent visual regressions whenever teams added features.",
      solution: "Designed a clean, utility-first token architecture using Radix UI primitives and Tailwind CSS, paired with an RTK Query caching engine that wiped out 40% of duplicate API traffic.",
      architecture: [
        { title: "Headless Component Primitives", description: "Accessible by default (WCAG AAA), decoupled from styling for total visual adaptability." },
        { title: "Polymorphic Type Engine", description: "Guarantees compile-time correctness across hundreds of reusable UI elements." },
        { title: "Micro-Caching Network Layer", description: "Deduplicates API requests, caching data intelligently so the UI always feels instantaneous." }
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "ShadCN", "RTK Query"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "3 min read",
      stars: 110
    },
    {
      id: "hybrid-pos-thermal-app",
      title: "Pulse POS: Hardware & Web in Perfect Harmony",
      tagline: "Direct browser-to-thermal printer socket bridge with embedded SQLite resilience.",
      category: "IoT & Hardware",
      featured: true,
      metrics: [
        { label: "Print Latency", value: "< 50ms" },
        { label: "Local Database", value: "SQLite" },
        { label: "Hardware Protocol", value: "ESC/POS" }
      ],
      summary: "Bridging the physical and digital worlds. A high-speed point-of-sale system that speaks directly to hardware peripherals—thermal receipt printers, cash drawers, and barcode scanners—with zero cloud delay.",
      challenge: "Hospitality environments cannot tolerate dropped internet connections or laggy print queues during busy dinner rushes.",
      solution: "Built a native local hardware bridge socket and an embedded SQLite/IndexedDB offline buffer that queues receipts locally and prints at hardware speed under any network conditions.",
      architecture: [
        { title: "Direct Socket Peripheral Bridge", description: "Translates browser billing events into raw ESC/POS binary instructions in under 50ms." },
        { title: "Embedded SQLite Offline Core", description: "Orders are stored locally first; if the network disappears, operations continue uninterrupted." },
        { title: "High-Contrast Operator UI", description: "Built for rapid muscle memory with tactile feedback and zero unnecessary chrome." }
      ],
      techStack: ["Next.js", "Node.js", "SQLite", "ESC/POS", "WebSockets", "Hardware I/O"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "4 min read",
      stars: 95
    },
    {
      id: "ai-augmented-universal-studio",
      title: "Universal Studio: Crafted Once. Seamless Everywhere.",
      tagline: "Engineering across Web, Mobile, and Desktop accelerated by modern AI workflows.",
      category: "AI & Cross-Platform",
      featured: false,
      metrics: [
        { label: "Ecosystem", value: "Web, iOS, Desktop" },
        { label: "Code Sharing", value: "85%" },
        { label: "Velocity", value: "3x Faster" }
      ],
      summary: "Harnessing the creative leverage of generative AI to ship flawless cross-platform applications. A single unified design system seamlessly powering Next.js on the web, React Native on iOS & Android, and Tauri on desktop.",
      challenge: "Maintaining parity across multiple platforms typically requires disparate codebases and multiplied maintenance debt.",
      solution: "Structured a universal component token bridge and harnessed AI code generation to rapidly scaffold robust typed adapters for native platforms in record time.",
      architecture: [
        { title: "Unified Design Token Pipeline", description: "A single design truth defining geometry, typography, and color across platforms." },
        { title: "AI-Accelerated Engineering", description: "Using state-of-the-art AI tooling to rapidly prototype and verify production-ready code." }
      ],
      techStack: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Tauri", "AI Workflows"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "3 min read",
      stars: 80
    },
    {
      id: "arduino-iot-smart-sensor-telemetry",
      title: "Atmosphere IoT: Physical Sensors. Living Telemetry.",
      tagline: "Microcontroller firmware meets edge computing. Live environmental streams in real time.",
      category: "IoT & Hardware",
      featured: false,
      metrics: [
        { label: "Microcontroller", value: "ESP32 / C++" },
        { label: "Protocol", value: "MQTT" },
        { label: "Telemetry", value: "Real-time" }
      ],
      summary: "My exploration into physical computing. Custom Arduino and ESP32 nodes sampling environmental sensor inputs, publishing over ultra-lightweight MQTT brokers, and animating live SVG instruments in a Next.js interface.",
      challenge: "Streaming high-frequency analog signals into modern reactive web frontends without causing rendering churn or memory bloat.",
      solution: "Engineered non-blocking C++ event loops on the ESP32 paired with lightweight WebSocket channels streaming real-time hardware telemetry at 10Hz without dropped packets.",
      architecture: [
        { title: "Embedded C++ Non-Blocking Loop", description: "Precision hardware interrupts reading I2C environmental and analog sensor telemetry." },
        { title: "Real-Time Gauge Instruments", description: "Fluid SVG dials updating with GPU-accelerated transforms for zero layout recalculation." }
      ],
      techStack: ["ESP32", "Arduino C++", "MQTT", "WebSockets", "Next.js", "Hardware Telemetry"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "3 min read",
      stars: 70
    },
    {
      id: "ovaa-cross-platform-ui",
      title: "Ovaa: Native Intuition. Cross-Platform Grace.",
      tagline: "Native performance on iOS and Android with shared TypeScript business logic.",
      category: "AI & Cross-Platform",
      featured: false,
      metrics: [
        { label: "Interaction", value: "Native Feel" },
        { label: "Platforms", value: "iOS & Android" },
        { label: "Code Shared", value: "70%+" }
      ],
      summary: "Cross-platform mobile engineering with zero compromise on tactile feel. Native gestures, instant navigation transitions, and shared state stores across mobile and web targets.",
      challenge: "Cross-platform mobile apps often feel unnatural or lag behind native platform conventions.",
      solution: "Leveraged React Native gesture engines and platform-specific haptics while sharing 70%+ of underlying data models and state management.",
      architecture: [
        { title: "Platform-Aware UI Bridges", description: "Adapts typography, springs, and haptic cues to match iOS and Android guidelines naturally." },
        { title: "Shared Core Architecture", description: "Encapsulates networking, caching, and state in platform-agnostic TypeScript packages." }
      ],
      techStack: ["React Native", "TypeScript", "Tailwind CSS", "Redux Toolkit", "iOS", "Android"],
      githubUrl: "https://github.com/Prabhat2373",
      liveUrl: "https://www.linkedin.com/in/prabhat-tambe/",
      readTime: "3 min read",
      stars: 65
    }
  ],
  experience: [
    {
      company: "Stack Console Cloud Solutions Pvt. Ltd.",
      role: "Frontend Engineer & Cloud Systems Architect",
      period: "05/2023 — Present",
      location: "Pune, India",
      description: [
        "Architected the design system and cloud console interface powering virtual machines, networking VPCs, and storage services with sub-50ms interaction fidelity and zero regressions.",
        "Engineered multi-tenant architecture supporting hierarchical RBAC (Resellers → Admins → Sub-Users) with dynamic white-label theme injection.",
        "Pioneered hybrid Server Components (RSC) cutting initial load time by ~40% for bandwidth-constrained users.",
        "Authored bulletproof, zero-maintenance component contracts running in production with zero regressions."
      ],
      skills: ["Next.js", "Server Components", "Cloud Architecture", "System Design", "Networking", "Tailwind CSS", "TypeScript"]
    },
    {
      company: "Ovaa Technologies",
      role: "React & Native Mobile Engineer",
      period: "02/2023 — 05/2023",
      location: "Pune, India",
      description: [
        "Crafted tactile cross-platform native applications for iOS and Android with React Native.",
        "Collaborated with design and engineering teams to institute reusable design patterns and micro-interactions.",
        "Unified mobile and web data pipelines under clean TypeScript interfaces."
      ],
      skills: ["React Native", "React", "TypeScript", "Mobile UI", "Redux", "iOS", "Android"]
    },
    {
      company: "Logibricks",
      role: "React Developer & Design System Contributor",
      period: "08/2022 — 02/2023",
      location: "Pune, India",
      description: [
        "Led full migration from Material UI to an atomic Tailwind CSS token system, cutting bundle size by 35% and improving initial load speed by 25%.",
        "Accelerated engineering velocity by ~35% through composable, reusable UI primitives.",
        "Architected an intelligent API caching layer that reduced redundant network requests by 40%."
      ],
      skills: ["React", "TypeScript", "Design Systems", "Tailwind CSS", "Performance Optimization", "Azure"]
    },
    {
      company: "Bhaktivedanta Hospital & Research Institute",
      role: "Web Developer",
      period: "05/2022 — 07/2022",
      location: "India",
      description: [
        "Optimized clinical user workflows and virtualized medical records, improving application efficiency by 67% and cutting page load times in half."
      ],
      skills: ["React", "JavaScript", "Performance Optimization", "Accessibility (a11y)"]
    },
    {
      company: "MDU SANTI SOLUTION",
      role: "Web Developer & Frontend Lead",
      period: "02/2022 — 05/2022",
      location: "India",
      description: [
        "Directed a team of 4 engineers to build a high-performance e-commerce storefront, reducing loading time by 54% and boosting visitor engagement by 36%."
      ],
      skills: ["React", "JavaScript", "Team Leadership", "Frontend Architecture"]
    }
  ],
  skills: [
    {
      category: "Cloud Interfaces & System Design",
      skills: [
        { name: "Cloud Consoles (Virtual Machines & Compute)", level: "Mastery", highlight: true },
        { name: "Edge Networking, DNS & Multi-Tenant Routing", level: "Mastery", highlight: true },
        { name: "Multi-Tier RBAC (Reseller & Affiliate Systems)", level: "Mastery", highlight: true },
        { name: "Zero-Maintenance Defensive Architecture", level: "Mastery", highlight: true },
        { name: "Performance Optimization & Cache Invalidation", level: "Mastery", highlight: true },
        { name: "Engineering Leadership & Team Mentorship", level: "Proven Track Record", highlight: true }
      ]
    },
    {
      category: "Design Systems & Frontend Craft",
      skills: [
        { name: "Design Tokens & Headless Systems", level: "Mastery", highlight: true },
        { name: "Tailwind CSS & CSS Custom Properties", level: "Mastery", highlight: true },
        { name: "Radix UI Primitives & ShadCN", level: "Mastery", highlight: true },
        { name: "React Server Components (RSC) & Streaming", level: "Mastery", highlight: true },
        { name: "Component Ergonomics & Polymorphism", level: "Mastery", highlight: true },
        { name: "Accessibility (WCAG AAA Standards)", level: "Advanced" }
      ]
    },
    {
      category: "Universal Software & AI Velocity",
      skills: [
        { name: "AI-Augmented Full-Stack Engineering", level: "Mastery", highlight: true },
        { name: "React Native (Tactile iOS & Android Apps)", level: "Advanced", highlight: true },
        { name: "Desktop Software (Electron & Tauri)", level: "Advanced" },
        { name: "Node.js, SQLite & Embedded Databases", level: "Mastery", highlight: true },
        { name: "TypeScript / Full-Stack Data Contracts", level: "Mastery", highlight: true }
      ]
    },
    {
      category: "Hardware Prototyping & IoT (Maker Hobby)",
      skills: [
        { name: "Arduino & Microcontroller C++", level: "Maker & Hobbyist", highlight: true },
        { name: "ESP32, MQTT & Live Telemetry Streams", level: "Maker & Hobbyist", highlight: true },
        { name: "Physical Hardware Peripheral Interfacing (ESC/POS)", level: "Specialist", highlight: true },
        { name: "Sensor Signal Processing & Relays", level: "Maker & Hobbyist" }
      ]
    }
  ]
};
