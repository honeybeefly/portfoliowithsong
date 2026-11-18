export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  technologies: string[];
  gitUrl: string;
  netlifyUrl: string;
  featured?: boolean;
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  gitUrl: string;
  netlifyUrl?: string;
  updatedAt: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  summary: string;
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    preferredName: string;
    roleTitle: string;
    status: string;
    location: string;
    heroHeadline: string;
    straightforwardIntro: string;
    personalEmail: string;
    workEmail: string;
    phone: string;
    gitHubUsername: string;
    gitHubUrl: string;
    gitUrl: string;
    netlifyProfileUrl: string;
    linkedInUrl: string;
  };
  about: {
    photoUrl: string;
    bioParagraphs: string[];
    guidingPhilosophy: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  repositories: Repository[];
  education: Education[];
  workEthics: {
    title: string;
    leadStatement: string;
    principles: {
      headline: string;
      body: string;
    }[];
    closingQuote: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "SHARANYA HP",
    preferredName: "Sharanya",
    roleTitle: "Computer Science & Engineering (ICB) // Security & Systems",
    status: "Open to research collaborations, technical roles & software engineering internships",
    location: "Bengaluru, Karnataka, India",
    heroHeadline: "Building dependable software through quiet discipline, rigorous security, and structural restraint.",
    straightforwardIntro: "I am a Computer Science & Engineering student at Bangalore Institute of Technology specializing in IoT, Cybersecurity, and Blockchain. I focus on offensive security testing, systems hardening, and building clean, performant web applications with minimalist architecture and type-safe reliability.",
    personalEmail: "sharanyahp008@gmail.com",
    workEmail: "sharanya.work@gmail.com",
    phone: "+91 98765 43210",
    gitHubUsername: "sharanyahp",
    gitHubUrl: "https://github.com/sharanyahp",
    gitUrl: "https://github.com/sharanyahp",
    netlifyProfileUrl: "https://app.netlify.com/teams/sharanyahp",
    linkedInUrl: "https://linkedin.com/in/sharanyahp",
  },
  about: {
    // Replace with your local photo '/images/profile.jpg' or any image URL
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bioParagraphs: [
      "I am an engineer and security researcher based in Bengaluru, currently pursuing my B.Tech in Computer Science & Engineering (IoT, Cybersecurity & Blockchain) at Bangalore Institute of Technology.",
      "My work is grounded in a somber, methodical ethos. Rather than chasing superficial aesthetics, I dissect technical mechanisms from first principles—evaluating how packets traverse sockets, how authentication tokens are validated, and how frontend interfaces can deliver instant utility with zero unnecessary overhead.",
      "Beyond academic coursework, I actively engage in offensive security research (Red Team & Black Team depth), develop automated vulnerability scanners, and engineer clean web architectures using Next.js and TypeScript. I treat code as a direct reflection of personal discipline."
    ],
    guidingPhilosophy: "Security is not an add-on; it is an intrinsic consequence of simplicity and disciplined architecture. True mastery is understated, verified by tests, and built to withstand adversarial conditions."
  },
  skills: [
    {
      category: "Security & Systems",
      skills: [
        { name: "Vulnerability Reconnaissance", level: "Active" },
        { name: "Red Team & Threat Modeling", level: "Methodology" },
        { name: "Kali Linux & Toolchains", level: "Daily Driver" },
        { name: "Network Packet Analysis (Wireshark)", level: "Proficient" },
        { name: "Burp Suite & Nmap", level: "Hands-on" },
        { name: "Web Application Security (OWASP Top 10)", level: "Standard" },
        { name: "Cryptography & Hashing (AES/PBKDF2)", level: "Applied" }
      ]
    },
    {
      category: "Core Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript (ESNext)", level: "Advanced" },
        { name: "C / Foundational Systems", level: "Academic" },
        { name: "SQL & Query Design", level: "Intermediate" },
        { name: "Bash & Shell Scripting", level: "Proficient" }
      ]
    },
    {
      category: "Frontend & Architecture",
      skills: [
        { name: "Next.js 16 (App Router)", level: "Production" },
        { name: "React 19", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Responsive Systems & CSS", level: "Expert" },
        { name: "State Architecture", level: "Intermediate" },
        { name: "Client-Side Cryptography APIs", level: "Applied" }
      ]
    },
    {
      category: "Tooling & Deployment",
      skills: [
        { name: "Git & Version Control", level: "Advanced" },
        { name: "Netlify (Functions, CI/CD, Edge)", level: "Production" },
        { name: "GitHub Actions", level: "Intermediate" },
        { name: "Linux Administration", level: "Daily Driver" },
        { name: "VS Code & Remote SSH", level: "Workflow" },
        { name: "API Testing & Postman", level: "Intermediate" }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Sentinel // Network Recon & Port Auditor",
      tagline: "Automated network reconnaissance & service perimeter auditor",
      description: "A fast, modular network auditor written in Python. Analyzes open port surfaces, probes service banners, correlates known CVE advisories, and generates deterministic security audit reports for network hardening.",
      architecture: "Python 3, Raw Sockets, Kali Linux Tooling, Netlify Audit Dashboard.",
      technologies: ["Python", "Socket API", "Kali Linux", "Netlify", "Bash"],
      gitUrl: "https://github.com/sharanyahp/sentinel-port-scanner",
      netlifyUrl: "https://sentinel-recon-demo.netlify.app",
      featured: true
    },
    {
      id: "project-2",
      title: "ShadowKey // Zero-Knowledge PassVault",
      tagline: "Client-side encrypted credentials manager & entropy analyzer",
      description: "An end-to-end encrypted credentials repository utilizing PBKDF2 key derivation and AES-256-GCM. Employs zero-knowledge local decryption so master secrets never traverse network boundaries.",
      architecture: "Next.js App Router, TypeScript, Web Crypto API, Tailwind CSS, Netlify Edge.",
      technologies: ["Next.js", "TypeScript", "Web Crypto API", "Tailwind CSS", "Netlify"],
      gitUrl: "https://github.com/sharanyahp/shadowkey-vault",
      netlifyUrl: "https://shadowkey-vault.netlify.app",
      featured: true
    },
    {
      id: "project-3",
      title: "PayloadForge // CTF Attack-Defense Suite",
      tagline: "Security payload encoder and offensive cheat-sheet utility",
      description: "A dedicated red-team companion for CTF competitions and ethical security audits. Features one-click multi-format encoding (Base64, URL, Hex, HTML entities) and verified command line generators.",
      architecture: "React 19, TypeScript, Linux Shell Encoders, Netlify Serverless Functions.",
      technologies: ["React", "TypeScript", "Linux Shell", "Netlify Functions", "Tailwind CSS"],
      gitUrl: "https://github.com/sharanyahp/payloadforge",
      netlifyUrl: "https://payloadforge.netlify.app",
      featured: true
    },
    {
      id: "project-4",
      title: "CloudFence // Serverless IAM & S3 Auditor",
      tagline: "Automated cloud perimeter policy auditor and alerting pipeline",
      description: "A security scanner evaluating cloud storage buckets for public read/write exposure, missing ACL configurations, and overly permissive IAM roles, dispatching audit alerts via webhooks.",
      architecture: "Python Boto3, AWS Lambda, REST Webhooks, Netlify Interface.",
      technologies: ["Python", "Cloud Security", "IAM", "REST API", "Netlify"],
      gitUrl: "https://github.com/sharanyahp/cloudfence-auditor",
      netlifyUrl: "https://cloudfence-auditor.netlify.app",
      featured: false
    }
  ],
  repositories: [
    {
      name: "offensive-sec-lab",
      description: "Curated scripts, methodology playbooks, and proof-of-concept tests developed during CTF operations and security challenges.",
      language: "Python / Shell",
      gitUrl: "https://github.com/sharanyahp/offensive-sec-lab",
      netlifyUrl: "https://offensive-lab-docs.netlify.app",
      updatedAt: "Active"
    },
    {
      name: "minimal-portfolio-next",
      description: "Somber, ultra-clean Next.js portfolio template configured with Tailwind CSS, dark olive palette, and strict accessibility standards.",
      language: "TypeScript",
      gitUrl: "https://github.com/sharanyahp/minimal-portfolio-next",
      netlifyUrl: "https://sharanya-portfolio.netlify.app",
      updatedAt: "Current"
    },
    {
      name: "crypto-primitives-ts",
      description: "Lightweight, zero-dependency TypeScript implementation of classical ciphers, hashing wrappers, and entropy verification tools.",
      language: "TypeScript",
      gitUrl: "https://github.com/sharanyahp/crypto-primitives-ts",
      netlifyUrl: "https://crypto-primitives.netlify.app",
      updatedAt: "Maintained"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.Tech) in Computer Science & Engineering",
      field: "IoT, Cybersecurity & Blockchain (ICB)",
      institution: "Bangalore Institute of Technology (BIT)",
      location: "Bengaluru, Karnataka, India",
      period: "2026 — 2030 (Expected)",
      grade: "1st Year B.Tech",
      summary: "Comprehensive academic training in computer science fundamentals, discrete mathematics, object-oriented paradigms, network security architectures, and cryptographic foundations.",
      coursework: [
        "Computer Science Principles & Algorithms",
        "Cybersecurity Fundamentals & Perimeter Defense",
        "Data Structures & Object-Oriented Design (C / Python)",
        "Internet of Things (IoT) Architectures",
        "Blockchain Technology & Distributed Ledgers",
        "Digital Logic & Computer Organization"
      ]
    },
    {
      degree: "Pre-University Examination / Higher Secondary Education",
      field: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
      institution: "State Pre-University Board",
      location: "Karnataka, India",
      period: "Completed with Distinction",
      grade: "Distinction Honors",
      summary: "Intensive training in analytical mathematics, physical systems, and algorithmic logic that formed the launchpad for collegiate engineering.",
      coursework: [
        "Higher Mathematics & Calculus",
        "Foundational Computing & Logic",
        "Analytical Problem Solving"
      ]
    }
  ],
  workEthics: {
    title: "On Craft, Accountability, and Work Ethics",
    leadStatement: "I treat engineering as a discipline of unyielding accountability. Great systems are not forged through hurried shortcuts; they compound through quiet focus, steady habit, and uncompromising respect for those who rely on our work.",
    principles: [
      {
        headline: "Discipline Over Mood",
        body: "I do not wait for inspiration to write clean code or audit systems. Routine and deliberate focus beat intermittent motivation every time. Showing up with locked-in commitment every single day is non-negotiable."
      },
      {
        headline: "Consistency & Compounding Gains",
        body: "Complex security problems and intricate codebases yield to steady, incremental progress. Daily hands-on practice in Linux labs and continuous refactoring turn theoretical knowledge into second-nature intuition."
      },
      {
        headline: "Continuous White-Belt Learning",
        body: "The technology and security landscape transforms unceasingly. Keeping an egoless curiosity enables me to rapidly absorb new attack surfaces, learn from senior peers, and evaluate new paradigms with objective rigor."
      },
      {
        headline: "Extreme Ownership of Outcomes",
        body: "When an anomaly occurs in a repository or deployed environment, I accept full responsibility. I do not deflect blame—I isolate root causes, document findings with clarity, and implement permanent structural safeguards."
      }
    ],
    closingQuote: "Simplicity and discipline are prerequisites for reliability. We do not write software to display complexity; we build to deliver absolute dependability."
  }
};
