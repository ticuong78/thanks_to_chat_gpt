export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author_id: string;
  category_id: number;
  date: string;
  readTime: string;
  image: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
  tags_id?: number[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of AI-Powered Cybersecurity in 2025",
    excerpt:
      "Explore how artificial intelligence is reshaping the landscape of cyber defense and threat detection.",
    content: `
      <p>As cyber threats evolve, so too must our defense mechanisms. In 2025, artificial intelligence stands at the forefront of cybersecurity innovation, enabling organizations to detect, prevent, and respond to attacks with unprecedented speed and precision.</p>

      <h2>From Reactive to Proactive Defense</h2>
      <p>AI-driven systems have shifted the paradigm from reactive security to proactive protection. Machine learning algorithms can now identify anomalous behaviors long before a human analyst would notice them, predicting potential breaches based on subtle data patterns.</p>

      <h2>Threat Intelligence and Automation</h2>
      <p>Modern Security Operations Centers (SOCs) are adopting AI-powered threat intelligence platforms that correlate billions of data points across the globe. These systems automatically prioritize alerts, reducing noise and allowing analysts to focus on high-impact incidents.</p>

      <blockquote>
        "AI isn’t replacing security professionals — it’s empowering them to focus on strategy over firefighting." - Dr. Emily Carter
      </blockquote>

      <h2>The Ethical Challenge</h2>
      <p>While AI enhances defense, it also introduces new ethical questions. Malicious actors are leveraging AI to automate phishing, create deepfake scams, and craft adaptive malware. Balancing innovation with accountability has become a defining challenge of modern cybersecurity.</p>

      <h2>Looking Ahead</h2>
      <p>AI’s role in cybersecurity will continue to expand. The most secure organizations in 2025 will be those that embrace machine learning, automation, and human expertise in harmony — forming a true “human-in-the-loop” defense model.</p>
    `,
    author_id: "63200299-e2d7-46a9-a167-207eefe98641",
    category_id: 1, // AI Security
    date: "Oct 15, 2025",
    readTime: "6 min read",
    image:
      "https://i.insider.com/64b84697a46ce30019a1f97e?width=1000&format=jpeg&auto=webp",
    likes: 245,
    comments: 32,
    featured: true,
    tags_id: [1, 5, 2, 4], // AI Security, Threat Detection, Machine Learning, Automation
  },
  {
    id: 2,
    title: "Ransomware Evolution: Why 2025 Is the Year of Double Extortion",
    excerpt:
      "Ransomware groups are evolving, combining data theft with encryption to maximize pressure on victims.",
    content: `
      <p>Ransomware has become more than a nuisance — it’s a business model. In 2025, cybercriminals have moved beyond simple encryption attacks to a new phase: double and even triple extortion, where stolen data becomes leverage.</p>

      <h2>The New Business of Cybercrime</h2>
      <p>Ransomware-as-a-Service (RaaS) has lowered the barrier to entry for attackers. Even low-skilled hackers can launch sophisticated attacks by purchasing pre-built kits on the dark web.</p>

      <h2>Double Extortion Explained</h2>
      <p>Attackers now steal sensitive data before encrypting systems. Victims who refuse to pay face public exposure, regulatory fines, and reputational damage. Some gangs even target customers of their victims to increase pressure.</p>

      <blockquote>
        "Ransomware isn't just about encryption anymore — it's about control, data leverage, and manipulation." - Michael Torres
      </blockquote>

      <h2>Prevention Through Preparedness</h2>
      <p>Zero-trust architectures, robust backups, and employee awareness training remain the most effective defense. Incident response plans should include legal, PR, and technical teams working together to mitigate both encryption and extortion threats.</p>
    `,
    author_id: "f2f4c03f-9fdd-4096-acb9-83d40fe5289d",
    category_id: 2, // Cyber Threats
    date: "Oct 14, 2025",
    readTime: "7 min read",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGp3FazItlKDQ/article-cover_image-shrink_720_1280/B56ZeXUAfrHQAQ-/0/1750590304716?e=2147483647&v=beta&t=s0cm7TsxSv0g4YwFPyOGyh6ZB5sgpkibUmASfdxO-3k",
    likes: 188,
    comments: 27,
    tags_id: [6, 9, 10, 7], // Ransomware, Threat Intelligence, Zero Trust, Incident Response
  },
  {
    id: 3,
    title: "Securing the Cloud: Best Practices for 2025",
    excerpt:
      "As cloud adoption grows, misconfigurations remain one of the biggest security risks. Here’s how to stay protected.",
    content: `
      <p>Cloud services have transformed business agility — but they’ve also expanded the attack surface. In 2025, 85% of organizations report at least one cloud security incident due to misconfigurations or poor identity management.</p>

      <h2>Identity and Access Control</h2>
      <p>Strong IAM (Identity and Access Management) practices are non-negotiable. Implement least privilege, enforce MFA, and continuously monitor permissions creep across accounts and services.</p>

      <h2>Configuration and Visibility</h2>
      <p>Use Cloud Security Posture Management (CSPM) tools to detect misconfigurations in real time. Visibility is key — you can’t secure what you can’t see.</p>

      <blockquote>
        "Cloud security is a shared responsibility — between provider, developer, and user." - Priya Deshmukh
      </blockquote>

      <h2>Emerging Trends</h2>
      <p>Infrastructure-as-Code (IaC) scanning, AI-driven compliance checks, and automated remediation are rapidly becoming the standard for secure cloud operations.</p>
    `,
    author_id: "68c5986e-f99d-481c-9acf-b0f3258b1975",
    category_id: 3, // Cloud Security
    date: "Oct 13, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    likes: 173,
    comments: 22,
    tags_id: [13, 14, 62, 15], // CSPM, IAM, CI/CD, DevSecOps
  },
  {
    id: 4,
    title: "Ethical Hacking: The White Hat Revolution",
    excerpt:
      "How bug bounty hunters and ethical hackers are transforming cybersecurity defense from the inside out.",
    content: `
      <p>Ethical hacking has evolved into a global movement where white-hat hackers collaborate with organizations to find and fix vulnerabilities before criminals exploit them. Platforms like HackerOne and Bugcrowd have turned security testing into a thriving ecosystem.</p>

      <h2>The Rise of Bug Bounties</h2>
      <p>Companies from startups to governments now offer financial rewards for discovering and responsibly disclosing vulnerabilities. This model democratizes security, leveraging global expertise while reducing risk.</p>

      <blockquote>
        "The best way to defend your system is to invite the world’s smartest people to try to break it — ethically." - Jason Miller
      </blockquote>

      <h2>Ethics and Responsibility</h2>
      <p>Responsible disclosure remains a cornerstone of trust between hackers and organizations. It ensures vulnerabilities are fixed before being publicized, protecting users and infrastructure alike.</p>
    `,
    author_id: "002157d1-995e-4d06-9806-5ed6d8ab0558",
    category_id: 4, // Ethical Hacking
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    likes: 204,
    comments: 40,
    tags_id: [18, 19, 20], // Penetration Testing, Bug Bounty, Cyber Ethics
  },
  {
    id: 5,
    title: "Zero Trust Architecture: Beyond the Buzzword",
    excerpt:
      "Zero Trust has become the gold standard in modern security — but what does it really mean, and how do you implement it?",
    content: `
      <p>Zero Trust is more than a marketing term; it’s a philosophy that assumes no user, device, or application should be inherently trusted. Every request must be verified, every action monitored, and every breach contained.</p>

      <h2>Core Principles</h2>
      <p>Zero Trust is built on the pillars of continuous verification, least privilege, and micro-segmentation. It emphasizes identity-centric access control and real-time risk assessment.</p>

      <blockquote>
        "Never trust, always verify — but always enable productivity." - Rachel Nguyen
      </blockquote>

      <h2>Implementation Strategy</h2>
      <p>Adopting Zero Trust is a journey, not a destination. Start by mapping data flows, segmenting networks, and integrating identity-based access policies. Combine with EDR, CASB, and SIEM for full visibility.</p>
    `,
    author_id: "d39d95f3-2019-4f8a-a90f-6c9571bcf4ee",
    category_id: 5, // Network Security
    date: "Oct 11, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    likes: 156,
    comments: 19,
    tags_id: [10, 11, 12, 35], // Zero Trust, Access Control, Network Architecture, Software Architecture
  },
];
