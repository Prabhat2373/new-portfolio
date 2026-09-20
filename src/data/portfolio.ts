import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: "Prabhat Tambe",
  title: "Senior Full-Stack & Distributed Systems Engineer",
  tagline: "Building high-throughput backends, resilient distributed architectures, and polished modern frontends.",
  location: "San Francisco, CA / Remote",
  status: "Open to Staff & Senior Engineering Roles at Big Tech & High-Growth Startups",
  about: "Software Engineer with deep expertise across modern TypeScript, Go, distributed consensus systems, and high-performance web applications. Passionate about system latency optimization, resilient cloud infrastructure, and creating zero-friction user experiences.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "prabhattambe10@gmail.com",
    twitter: "https://twitter.com",
  },
  metrics: [
    {
      label: "Requests / Sec Handled",
      value: "150K+",
      description: "Peak throughput sustained in production microservices",
    },
    {
      label: "p99 Latency Reduction",
      value: "42%",
      description: "Achieved through smart caching & zero-copy serialization",
    },
    {
      label: "Active Users Impacted",
      value: "3.5M+",
      description: "Across enterprise-grade products & developer tools",
    },
    {
      label: "Production Uptime",
      value: "99.99%",
      description: "Architected fault-tolerant systems with automated failover",
    }
  ],
  projects: [
    {
      id: "hyperion-distributed-cache",
      title: "Hyperion: Distributed Tiered In-Memory Cache",
      tagline: "Consistent hashing, multi-raft replication, sub-millisecond p99 latency",
      category: "Distributed Systems",
      featured: true,
      metrics: [
        { label: "p99 Latency", value: "< 1.2ms" },
        { label: "Peak QPS", value: "240k/s" },
        { label: "Memory Footprint", value: "-35%" }
      ],
      summary: "A fault-tolerant distributed in-memory cache engine engineered to handle massive burst traffic across multi-region clusters with zero data drift.",
      challenge: "Legacy Redis clusters faced severe tail-latency spikes during thundering herd events and heavy rebalancing overhead during cluster auto-scaling.",
      solution: "Engineered an asynchronous tiered caching layer with bounded ring-buffer consistent hashing, LRU-K eviction, and gRPC streaming with protobuf payload compression.",
      architecture: [
        { title: "Edge Routing & Envoy Proxy", description: "L7 routing with consistent hash hashing rings for hot-key distribution." },
        { title: "Consensus Engine (Multi-Raft)", description: "Decentralized partition consensus ensuring write consistency across availability zones." },
        { title: "Storage Engine with Zero-Copy IO", description: "Custom memory allocator written with arena allocation to eliminate GC pauses." }
      ],
      techStack: ["Go", "gRPC", "Protobuf", "Raft", "Docker", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/example/hyperion-cache",
      liveUrl: "https://hyperion-demo.example.com",
      readTime: "4 min read",
      stars: 380
    },
    {
      id: "omni-ai-workflow-canvas",
      title: "OmniCanvas: Real-time Multi-Agent Orchestration Engine",
      tagline: "Interactive node canvas with streaming LLM agents, DAG execution, and state rollback",
      category: "AI & ML",
      featured: true,
      metrics: [
        { label: "Render Frame Rate", value: "60 FPS" },
        { label: "Sync Latency", value: "< 15ms" },
        { label: "Agent Actions/min", value: "10,000+" }
      ],
      summary: "A collaborative visual workspace for designing, testing, and deploying autonomous multi-agent pipelines with bidirectional CRDT synchronization.",
      challenge: "Coordinating multi-step agent reasoning DAGs while streaming tokens to dozens of concurrent collaborators caused severe UI stutter and desynchronization.",
      solution: "Implemented WebGL-accelerated canvas rendering with Yjs CRDTs over WebSockets and asynchronous step streaming with automatic backpressure management.",
      architecture: [
        { title: "Real-time CRDT WebSocket Server", description: "Node.js clustering with Redis pub/sub broadcasting state deltas to connected clients." },
        { title: "DAG Execution Graph Engine", description: "Topological sort runner with dependency resolution and fallback error handling." },
        { title: "Canvas UI Engine", description: "Virtual DOM bypass utilizing WebGL shaders and OffscreenCanvas for 10k+ concurrent nodes." }
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Yjs / CRDT", "Python", "FastAPI"],
      githubUrl: "https://github.com/example/omnicanvas",
      liveUrl: "https://omnicanvas.example.com",
      readTime: "5 min read",
      stars: 520
    },
    {
      id: "pulsar-telemetry-engine",
      title: "Pulsar: Real-time Clickstream & Performance Analytics Platform",
      tagline: "Columnar ingest, sub-second queries over billions of rows, privacy-first beaconing",
      category: "Fullstack",
      featured: true,
      metrics: [
        { label: "Data Processed", value: "1.2B/day" },
        { label: "Query Speedup", value: "18x" },
        { label: "Client SDK Size", value: "1.8 KB" }
      ],
      summary: "End-to-end telemetry and observability platform processing millions of browser events per minute with custom funnel and retention analytics.",
      challenge: "High ingest volume overwhelmed relational stores, and existing commercial SaaS analytics incurred exorbitant costs with slow dashboard query times.",
      solution: "Built a streaming ingestion pipeline using Apache Kafka into ClickHouse with a lightweight WebAssembly event beacon and instant aggregations.",
      architecture: [
        { title: "Edge Ingest Beacon", description: "Ultra-low overhead navigator.sendBeacon client with local compression." },
        { title: "Kafka Event Pipeline", description: "Partitioned topic streaming with schema registry validation and dead-letter queues." },
        { title: "ClickHouse OLAP Storage", description: "Replacing row queries with vectorized columnar aggregations." }
      ],
      techStack: ["Next.js", "TypeScript", "ClickHouse", "Kafka", "Rust", "Tailwind CSS"],
      githubUrl: "https://github.com/example/pulsar-analytics",
      liveUrl: "https://pulsar.example.com",
      readTime: "3 min read",
      stars: 290
    },
    {
      id: "apex-design-system",
      title: "Apex: Accessible Enterprise Design System & UI Kit",
      tagline: "WCAG 2.2 AAA compliant, headless primitives, micro-animations, theme tokens",
      category: "Frontend / UI",
      featured: false,
      metrics: [
        { label: "Accessibility", value: "100/100" },
        { label: "Bundle Size", value: "< 12KB" },
        { label: "Adoption", value: "14 teams" }
      ],
      summary: "A battle-tested React component system built with strict accessibility standards, polymorphic typing, and zero runtime CSS bloat.",
      challenge: "Inconsistent component behaviors across 6 disparate engineering repositories leading to a11y violations and slow release velocity.",
      solution: "Designed and distributed a unified headless design system powered by Radix UI primitives, CSS container queries, and automated axe-core CI testing.",
      architecture: [
        { title: "Headless Primitives", description: "Keyboard navigation, ARIA live regions, and focus trap primitives." },
        { title: "Token Pipeline", description: "Style dictionary compiling design tokens to CSS custom properties." }
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Playwright"],
      githubUrl: "https://github.com/example/apex-ui",
      liveUrl: "https://apex-ui.example.com",
      readTime: "3 min read",
      stars: 180
    },
    {
      id: "sentinel-edge-waf",
      title: "Sentinel: High-Throughput Edge API Gateway & WAF",
      tagline: "Rust & eBPF powered token-bucket rate limiting, TLS termination, and bot mitigation",
      category: "Distributed Systems",
      featured: false,
      metrics: [
        { label: "Overhead", value: "< 0.4ms" },
        { label: "Attacks Blocked", value: "99.98%" },
        { label: "Throughput", value: "320k QPS" }
      ],
      summary: "Low-overhead edge security gateway running on bare-metal Kubernetes nodes filtering hostile traffic before hitting upstream application clusters.",
      challenge: "High-volume Layer 7 DDoS attacks caused CPU saturation and elevated latency on application microservices.",
      solution: "Deployed eBPF kernel packet inspection combined with token-bucket sliding window rate limiters in Rust and Redis cluster syncing.",
      architecture: [
        { title: "eBPF Packet Filter", description: "Kernel-level SYN and invalid TCP packet dropping." },
        { title: "Distributed Limiter", description: "Asynchronous atomic Redis token bucket counter synchronization." }
      ],
      techStack: ["Rust", "eBPF", "Kubernetes", "Redis", "Prometheus", "Envoy"],
      githubUrl: "https://github.com/example/sentinel-waf",
      liveUrl: "https://sentinel-gateway.example.com",
      readTime: "4 min read",
      stars: 410
    },
    {
      id: "aegis-vector-search",
      title: "Aegis: Distributed HNSW Vector Search Engine",
      tagline: "SIMD-accelerated cosine distance, memory-mapped indexes, scalable billion-scale search",
      category: "AI & ML",
      featured: false,
      metrics: [
        { label: "Search Recall", value: "98.7%" },
        { label: "p95 Latency", value: "4.1ms" },
        { label: "Index Scale", value: "50M vectors" }
      ],
      summary: "Custom vector search index optimized for semantic retrieval and dense retrieval pipelines with streaming updates and zero query locking.",
      challenge: "Commercial vector databases suffered from unpredictable latency spikes during high-concurrency document index re-indexing.",
      solution: "Engineered an immutable tiered HNSW graph index with SIMD AVX-512 distance calculation and lock-free concurrent queries.",
      architecture: [
        { title: "SIMD Vector Quantizer", description: "Scalar quantization cutting memory by 75% without recall degradation." },
        { title: "Lock-Free Graph Index", description: "Hierarchical Navigable Small World algorithm with asynchronous compaction." }
      ],
      techStack: ["C++", "Python", "gRPC", "PyTorch", "Docker"],
      githubUrl: "https://github.com/example/aegis-search",
      liveUrl: "https://aegis-search.example.com",
      readTime: "5 min read",
      stars: 640
    }
  ],
  experience: [
    {
      company: "CloudScale Systems",
      role: "Lead Systems & Full-Stack Engineer",
      period: "2023 — Present",
      location: "San Francisco, CA",
      description: [
        "Architected core distributed ingestion pipeline scaling from 20M to 150M+ daily events while slashing infrastructure spend by 32%.",
        "Mentored a team of 8 engineers across frontend performance, Go microservices, and system resilience practices.",
        "Authored internal RFCs on zero-downtime database migrations and automated canary deployments using Kubernetes and ArgoCD."
      ],
      skills: ["Go", "Next.js", "Kubernetes", "PostgreSQL", "Kafka", "AWS"]
    },
    {
      company: "NextGen Software",
      role: "Senior Software Engineer",
      period: "2021 — 2023",
      location: "New York, NY (Remote)",
      description: [
        "Rebuilt customer-facing dashboard in React/Next.js, reducing Largest Contentful Paint (LCP) from 3.8s to 0.9s.",
        "Engineered real-time collaboration features using WebSockets and conflict-free replicated data types (CRDTs).",
        "Established CI/CD end-to-end testing pipeline with Playwright, catching 40+ regressions prior to production releases."
      ],
      skills: ["TypeScript", "React", "Node.js", "Redis", "Docker", "GraphQL"]
    },
    {
      company: "Vanguard Tech Labs",
      role: "Software Engineer",
      period: "2019 — 2021",
      location: "Austin, TX",
      description: [
        "Developed scalable REST & GraphQL APIs backing mobile and web platforms serving 1M+ active users.",
        "Refactored relational database indexing strategies, reducing high-frequency query latency by 55%."
      ],
      skills: ["JavaScript", "Python", "PostgreSQL", "Docker", "Redis"]
    }
  ],
  skills: [
    {
      category: "Languages & Core",
      skills: [
        { name: "TypeScript / JavaScript", level: "Production Expert", highlight: true },
        { name: "Go (Golang)", level: "Production Expert", highlight: true },
        { name: "Python", level: "Proficient" },
        { name: "SQL (PostgreSQL / ClickHouse)", level: "Advanced", highlight: true },
        { name: "Rust", level: "Working Knowledge" }
      ]
    },
    {
      category: "Frontend & Web Architecture",
      skills: [
        { name: "React 19 / Next.js (App Router)", level: "Production Expert", highlight: true },
        { name: "Tailwind CSS v4", level: "Production Expert", highlight: true },
        { name: "WebSockets & WebRTC", level: "Advanced" },
        { name: "Core Web Vitals & Web Performance", level: "Specialist", highlight: true },
        { name: "WCAG 2.2 / Accessibility (a11y)", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Distributed Systems",
      skills: [
        { name: "Distributed Caching & Raft Consensus", level: "Advanced", highlight: true },
        { name: "gRPC / Protocol Buffers", level: "Production Grade", highlight: true },
        { name: "Apache Kafka & Event Streaming", level: "Production Grade" },
        { name: "Microservices Architecture & REST", level: "Production Expert" },
        { name: "Redis & In-Memory Stores", level: "Advanced" }
      ]
    },
    {
      category: "Cloud, DevOps & Tooling",
      skills: [
        { name: "Docker & Containerization", level: "Production Expert" },
        { name: "Kubernetes & ArgoCD", level: "Advanced" },
        { name: "AWS (ECS, S3, RDS, Lambda)", level: "Production Grade" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced" },
        { name: "Monitoring (Prometheus & Grafana)", level: "Advanced" }
      ]
    }
  ]
};
