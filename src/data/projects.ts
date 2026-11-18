/**
 * EDITABLE PROJECTS DATA
 * ==========================================
 * Hey Sharanya! You can easily add, edit, or remove your projects right here.
 * Each project will automatically appear on the website and work with the filter tabs.
 * 
 * Instructions:
 * 1. To add a new project, copy an existing block and fill in your details.
 * 2. Put preview images in `/public/images/projects/` or use an online URL.
 * 3. Categories allowed: "Cybersecurity" | "Web" | "Cloud"
 */

export interface Project {
  id: string;
  title: string;
  category: "Cybersecurity" | "Web" | "Cloud";
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  status?: "Deployed" | "In Development" | "Prototype";
}

export const projectsData: Project[] = [
  {
    id: "sentinel-red-scanner",
    title: "Vulnerability Recon & Port Auditor",
    category: "Cybersecurity",
    tagline: "Automated network reconnaissance & security posture scanner",
    description:
      "A fast, modular network scanner developed in Python. Discovers open ports, banners, detects misconfigured services, and maps attack surfaces with CVE correlation for red-team assessments.",
    tags: ["Python", "Socket", "Kali Linux", "Nmap Engine", "Bash"],
    image: "/images/projects/scanner.svg",
    githubUrl: "https://github.com/sharanyahp/sentinel-port-scanner", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://sentinel-recon-demo.netlify.app", // TODO: Replace with your Netlify demo link
    featured: true,
    status: "Deployed",
  },
  {
    id: "cyber-vault-sec",
    title: "ShadowKey - Zero-Knowledge PassVault",
    category: "Cybersecurity",
    tagline: "Client-side encrypted password manager & leak checker",
    description:
      "An end-to-end encrypted credentials vault leveraging PBKDF2 and AES-256-GCM. Features master password zero-knowledge architecture, breach database API lookup, and entropy analyzer.",
    tags: ["TypeScript", "Web Crypto API", "Next.js", "Tailwind CSS", "Security"],
    image: "/images/projects/vault.svg",
    githubUrl: "https://github.com/sharanyahp/shadowkey-vault", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://shadowkey-vault.netlify.app", // TODO: Replace with your Netlify demo link
    featured: true,
    status: "Deployed",
  },
  {
    id: "city-evening-portfolio",
    title: "Evening Skyline Portfolio",
    category: "Web",
    tagline: "High-performance futuristic portfolio with interactive HUD",
    description:
      "A polished Next.js portfolio featuring a vibrant city skyline, warm golden accents, and a refined responsive layout.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/images/shanghai-city-night.jpg",
    githubUrl: "https://github.com/sharanyahp/shanghai-cyber-portfolio", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://sharanya-portfolio.netlify.app", // TODO: Replace with your Netlify demo link
    featured: true,
    status: "Deployed",
  },
  {
    id: "ctf-flag-tracker",
    title: "PayloadForge - CTF Payload Generator",
    category: "Cybersecurity",
    tagline: "Offensive security cheatsheet & reverse shell encoder",
    description:
      "A slick red-team companion tool for CTF players. Generates encoded reverse shells, XSS test vectors, and SQLi fuzzing payloads with one-click copy and terminal syntax highlighting.",
    tags: ["Python", "React", "Linux Shell", "Ethical Hacking", "Payloads"],
    image: "/images/projects/ctf.svg",
    githubUrl: "https://github.com/sharanyahp/payloadforge", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://payloadforge.netlify.app", // TODO: Replace with your Netlify demo link
    featured: false,
    status: "Prototype",
  },
  {
    id: "cloud-guard-aws",
    title: "CloudFence - AWS S3 Bucket Sentinel",
    category: "Cloud",
    tagline: "Cloud security policy checker & IAM auditor",
    description:
      "Automated serverless auditor evaluating AWS S3 buckets for public exposure, improper ACLs, and wildcard IAM role permissions. Emits real-time Discord & webhook security alerts.",
    tags: ["AWS Lambda", "Python Boto3", "Cloud Security", "S3", "IAM"],
    image: "/images/projects/cloud.svg",
    githubUrl: "https://github.com/sharanyahp/cloudfence-auditor", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://cloudfence-auditor.netlify.app", // TODO: Replace with your Netlify demo link
    featured: false,
    status: "In Development",
  },
  {
    id: "secure-chat-node",
    title: "GhostWire - Ephemeral P2P Chat",
    category: "Web",
    tagline: "Self-destructing end-to-end encrypted browser messenger",
    description:
      "Peer-to-peer real-time messaging using WebRTC data channels with zero server storage. Messages are ephemeral and automatically wiped upon closing the connection session.",
    tags: ["WebRTC", "Next.js", "Socket.io", "Cryptography", "Tailwind"],
    image: "/images/projects/chat.svg",
    githubUrl: "https://github.com/sharanyahp/ghostwire-chat", // TODO: Replace with your actual GitHub repo link
    demoUrl: "https://ghostwire-chat.netlify.app", // TODO: Replace with your Netlify demo link
    featured: false,
    status: "Prototype",
  },
];
