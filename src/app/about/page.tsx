"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/sonner";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Mail,
  Github,
  Linkedin,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Download,
  ExternalLink,
  Calendar,
  Award,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const p = portfolioData;
  const emailLink = p.email ? `mailto:${p.email}` : undefined;
  const cvLink = p.cvViPath || p.cvEnPath || undefined;

  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vue.js",
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "REST API",
      "Supabase",
      "NextJS",
      "PostgreSQL",
    ],
    tools: ["Git", "Figma", "VS Code", "Webpack", "Redis", "CI/CD"],
    other: [
      "UI/UX Design",
      "Responsive Design",
      "Performance Optimization",
      "Team Leadership",
    ],
  } as const;

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
    ...skills.other,
  ];

  const displayedSkills =
    activeSkillCategory === "all"
      ? allSkills
      : skills[activeSkillCategory as keyof typeof skills];

  const experiences = [
    {
      title: "Junior Researcher",
      company: "HUTECH",
      location: "Tp. Thủ Đức",
      period: "2024 - 2025",
      description:
        "Conducted research on malware detection using FFT-based preprocessing and machine learning. Developed and optimized datasets, tuned model hyperparameters, and evaluated multiple algorithms. Contributed to project documentation and a successful thesis defense.",
      achievements: ["Recognized as a promising research project."],
    },
    {
      title: "Full-Stack Developer",
      company: "CFP Project",
      location: "Biên Hòa, Đồng Nai",
      period: "Early 2025 - Near the End of 2025",
      description:
        "Developed an automated trading application that listens to market signals. Collaborated with a team of five developers.",
      achievements: [
        "Achieved up to 40% profit increase compared to the initial stage.",
        "Reduced bug reports by 10%.",
      ],
    },
    {
      title: "Junior FullStack Developer",
      company: "PMEDIA",
      location: "Biên Hòa, Đồng Nai",
      period: "1 month to Now",
      description:
        "Maintained the company’s product based on feedback and requirements from clients and supervisors.",
      achievements: [
        "Completed 3+ projects",
        "Mastered React and Node.js ecosystems",
        "Contributed to open-source projects",
      ],
    },
    {
      title: "IT Lecturer",
      company: "FullHouse Dev",
      location: "Remote at Biên Hòa, Đồng Nai",
      period: "2 months to Now",
      description:
        "Worked as an Information Technology lecturer, delivering courses on programming, software development, and computer systems. Guided students through practical projects and provided mentorship on academic and technical topics.",
      achievements: [
        "Recognized as one of the top-performing lecturers.",
        "Honored as a lecturer with outstanding professional growth and development.",
      ],
    },
  ];

  const projects = [
    {
      title: "CFP Project",
      description: "Automatically trades base on market market behavior.",
      technologies: [
        "ReactJS",
        "BunJS",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Flask",
        "VPS",
        "Redis",
        "Clerk",
      ],
      image:
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODU2MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://cfp.io.vn",
      github: "https://github.com/CFP-TRADING-TEAM/web_app",
    },
    {
      title: "BlogSpace",
      description: "Automated and LLM integrated Blog project.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "PostGreSQL",
        "LLM Integrated",
      ],
      image:
        "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYxODQ0Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://thanks-to-chat-gpt.vercel.app/",
      github: "https://github.com/ticuong78/thanks_to_chat_gpt",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information and Technology",
      school: "HUTECH",
      period: "2022 - 2026",
      description:
        "Ungraduated Student of Third Year ITer at Ho Chi Minh University of Technology",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 border-white/30">
                Full-Stack Developer
              </Badge>
              <h1 className="text-5xl mb-4">Hi, I'm Harry Le</h1>
              <p className="text-xl mb-6 text-white/90">
                Passionate developer with 1 year of hands-on experience in
                building beautiful, functional, and user-friendly web
                applications. Dedicated to learning new technologies, improving
                code quality, and turning creative ideas into impactful digital
                solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {emailLink ? (
                  <Button asChild variant="secondary" size="lg">
                    <a href={emailLink}>
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                ) : (
                  <Button variant="secondary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Button>
                )}
                {cvLink ? (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                  >
                    <a href={cvLink} target="_blank" rel="noreferrer" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                )}
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/20 text-white"
                >
                  <a
                    href="https://github.com/ticuong78"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/20 text-white"
                >
                  <a
                    href="https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-%C4%91%C3%A2y-ba0aa424b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/20 text-white"
                >
                  <a href="/portfolio">
                    <Globe className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Avatar className="w-64 h-64 border-8 border-white/20 shadow-2xl">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="text-6xl">AC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-3xl mb-1">~1</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-3xl mb-1">~5</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-3xl mb-1">10+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-3xl mb-1">15+</div>
              <div className="text-sm text-gray-600">Awards Won</div>
            </CardContent>
          </Card>
        </div>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">About Me</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Code className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 mb-4">
                    I'm a passionate full-stack developer with over 1 year of
                    hands-on experience in building intelligent, user-focused
                    web applications.
                  </p>
                  <p className="text-gray-700 mb-4">
                    My journey combines both academic research and real-world
                    development — from conducting machine learning research on
                    malware detection at HUTECH University to creating automated
                    trading systems that respond to real-time market behavior.
                  </p>
                  <p className="text-gray-700 mb-4">
                    I specialize in modern JavaScript frameworks like React,
                    Bun, and Node.js, and have professional experience across
                    Python, PostgreSQL, Flask, and Redis.
                  </p>
                  <p className="text-gray-700">
                    As part of my growth, I’ve also served as an IT Lecturer at
                    FullHouse Dev, mentoring students and being recognized as
                    one of the top-performing lecturers. I’m driven by
                    curiosity, teamwork, and a constant desire to turn complex
                    technical ideas into elegant, impactful digital products.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Biên Hòa, Đồng Nai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>lephamhungcuong219@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>https://github.com/ticuong78</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Skills & Technologies</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activeSkillCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveSkillCategory("all")}
            >
              All Skills
            </Button>
            <Button
              variant={
                activeSkillCategory === "frontend" ? "default" : "outline"
              }
              onClick={() => setActiveSkillCategory("frontend")}
            >
              Frontend
            </Button>
            <Button
              variant={
                activeSkillCategory === "backend" ? "default" : "outline"
              }
              onClick={() => setActiveSkillCategory("backend")}
            >
              Backend
            </Button>
            <Button
              variant={activeSkillCategory === "tools" ? "default" : "outline"}
              onClick={() => setActiveSkillCategory("tools")}
            >
              Tools
            </Button>
            <Button
              variant={activeSkillCategory === "other" ? "default" : "outline"}
              onClick={() => setActiveSkillCategory("other")}
            >
              Other
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                {displayedSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Key Achievements:
                    </p>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-xl mb-1">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.school}</p>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl mb-4">Let's Work Together</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}
