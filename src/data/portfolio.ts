export type SocialLink = {
  label: string;
  url: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  tech?: string[];
};

export type Project = {
  name: string;
  description: string;
  link?: string;
  repo?: string;
  tech?: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export type Portfolio = {
  name: string;
  title: string;
  summary: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  socials?: SocialLink[];
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  languages?: string[];
  certifications?: string[];
  cvViPath?: string;
  cvEnPath?: string;
};

export const portfolioData: Portfolio = {
  name: "Lê Phạm Hùng Cường",
  title: "Software Engineer",
  summary:
    "Tôi là lập trình viên đam mê xây dựng sản phẩm sạch, dễ mở rộng, tập trung vào trải nghiệm người dùng và chất lượng mã.",
  location: "",
  email: "lephamhungcuong219@gmail.com",
  phone: "0355639493",
  website: "https://github.com/ticuong78",
  socials: [
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    // { label: "GitHub", url: "https://github.com/..." },
  ],
  skills: [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "REST / GraphQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Testing",
    "CI/CD",
  ],
  experiences: [
    {
      company: "",
      role: "",
      period: "",
      location: "",
      highlights: [
        // "Mô tả ngắn 1",
      ],
      tech: [],
    },
  ],
  projects: [
    {
      name: "",
      description: "",
      link: "",
      repo: "",
      tech: [],
    },
  ],
  education: [
    {
      school: "",
      degree: "",
      period: "",
      location: "",
    },
  ],
  languages: [],
  certifications: [],
  cvViPath: "/cv/le-pham-hung-cuong-vi.pdf",
  cvEnPath: "/cv/le-pham-hung-cuong-en.pdf",
};
