/**
 * EDITABLE WORKSHOPS & EVENTS DATA
 * ==========================================
 * Hey Sharanya! Add your workshop attendances, hackathons, and ideathons here.
 * 
 * Fields:
 * - id: unique identifier
 * - title: Workshop / Event Name
 * - organizer: Organization (AWS, GDG, BIT, etc.)
 * - type: "Workshop" | "Hackathon" | "Ideathon" | "Bootcamp"
 * - date: Month / Year or Date string
 * - whatILearned: Key takeaways, tools mastered, or projects built
 * - certificateUrl: Link to certificate or credential (or # if pending)
 * - icon: "cloud" | "code" | "shield" | "lightbulb"
 */

export interface WorkshopEvent {
  id: string;
  title: string;
  organizer: string;
  type: "Workshop" | "Hackathon" | "Ideathon" | "Bootcamp";
  date: string;
  location?: string;
  whatILearned: string[];
  skillsGained: string[];
  certificateUrl?: string;
  status: "Completed" | "Award Winner" | "Finalist" | "Participant";
}

export const workshopsData: WorkshopEvent[] = [
  {
    id: "aws-cloud-workshop",
    title: "AWS Cloud Architecture & Security Immersion",
    organizer: "AWS Student Community / Cloud Club",
    type: "Workshop",
    date: "October 2026",
    location: "Bangalore, India",
    whatILearned: [
      "Configured secure VPC subnets, route tables, and Internet Gateways",
      "IAM least-privilege security policies, role assumption, and MFA enforcement",
      "Hands-on lab deploying scalable EC2 microservices behind Application Load Balancers",
      "Monitoring cloud infrastructure anomalies with Amazon CloudWatch & GuardDuty",
    ],
    skillsGained: ["AWS IAM", "VPC Security", "EC2", "S3", "Cloud Architecture"],
    certificateUrl: "https://aws.amazon.com/verify-cert/placeholder", // TODO: Replace with your actual certificate link
    status: "Completed",
  },
  {
    id: "gdg-devfest-workshop",
    title: "Google Developer Groups (GDG) Modern Web & Security",
    organizer: "Google Developer Group (GDG) Bangalore",
    type: "Workshop",
    date: "September 2026",
    location: "BIT Campus & Tech Hub",
    whatILearned: [
      "Modern Web security fundamentals: CSP, CORS policies, XSS mitigation",
      "Next.js App Router patterns, edge computing, and client-side encryption primitives",
      "Building resilient web apps and protecting against automated scrapers & bot attacks",
      "Networking with senior industry engineers and active red-team penetration testers",
    ],
    skillsGained: ["Web Security", "Next.js", "Chrome DevTools", "DevSecOps"],
    certificateUrl: "https://gdg.community.dev/certificates/placeholder", // TODO: Replace with your actual certificate link
    status: "Completed",
  },
  {
    id: "bit-ideathon-2026",
    title: "InnovateX Cyber & FinTech Ideathon",
    organizer: "Bangalore Institute of Technology (BIT)",
    type: "Ideathon",
    date: "August 2026",
    location: "BIT Auditorium",
    whatILearned: [
      "Pitched an automated anti-phishing threat intelligence browser extension",
      "Conducted feasibility analysis, threat modeling (STRIDE), and user persona mapping",
      "Collaborated across a multidisciplinary team of 4 under intense 24-hour time pressure",
      "Refined rapid pitching, objection handling, and executive presentation skills",
    ],
    skillsGained: ["Threat Modeling", "Product Ideation", "Pitching", "Rapid Prototyping"],
    certificateUrl: "https://bit-bangalore.edu.in/certificates/placeholder", // TODO: Replace with your actual certificate link
    status: "Finalist",
  },
  {
    id: "redteam-ctf-bootcamp",
    title: "Offensive Security & Red-Teaming Primer",
    organizer: "Cyber Security Club BIT",
    type: "Bootcamp",
    date: "July 2026",
    location: "Cyber Defense Lab",
    whatILearned: [
      "Reconnaissance techniques with Nmap, Wireshark packet capture analysis",
      "Linux privilege escalation vectors and binary exploitation basics",
      "Red Team vs Black Team methodologies, ethical disclosure, and reporting standards",
      "Solved 15+ CTF challenges spanning Cryptography, Web Exploits, and Reverse Engineering",
    ],
    skillsGained: ["Kali Linux", "Wireshark", "Burp Suite", "CTF Solving", "Red Teaming"],
    certificateUrl: "https://cybersecurity.bit.edu/certs/placeholder", // TODO: Replace with your actual certificate link
    status: "Completed",
  },
];
