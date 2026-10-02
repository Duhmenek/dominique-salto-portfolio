export interface SectionMeta {
  number: string;
  id: string;
  label: string;
  title: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

export interface AcademicBackground {
  track: string;
  degreeStatus: string;
  gwa: string;
  distinction: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
  items: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  summary: string;
  description?: string;
  technologies: string[];
  tags: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PortfolioData {
  sections: SectionMeta[];
  personalInfo: {
    fullName: string;
    preferredName: string;
    headline: string;
    location: string;
    status: string;
    bio: string;
    socialLinks: SocialLink[];
  };
  academicBackground: AcademicBackground;
  techStack: {
    all: string[];
    categorized: SkillGroup[];
  };
  projects: Project[];
  certifications: string[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  sections: [
    {
      number: "01",
      id: "intro",
      label: "01 — intro",
      title: "Engineering Profile & Focus",
    },
    {
      number: "02",
      id: "projects",
      label: "02 — projects",
      title: "Featured Engineering Works",
    },
    {
      number: "03",
      id: "stack",
      label: "03 — stack",
      title: "Technical Stack & Infrastructure",
    },
    {
      number: "04",
      id: "academics",
      label: "04 — education & achievements",
      title: "Education & Academic Distinctions",
    },
  ],

  personalInfo: {
    fullName: "Dominique Andrie R. Salto",
    preferredName: "Dom",
    headline: "Mobile & Systems Engineer",
    location: "Taguig City, Philippines",
    status: "Available for Mobile & Systems Engineering Opportunities",
    bio: "Mobile & Systems Engineer dedicated to crafting robust, high-performance cross-platform applications with Flutter and Dart, engineered alongside resilient backend systems, secure network infrastructure, and automated development workflows.",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Duhmenek",
        username: "Duhmenek",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        username: "Dominique Salto",
      },
      {
        platform: "Email",
        url: "mailto:saltodominique905@gmail.com",
        username: "saltodominique905@gmail.com",
      },
    ],
  },

  academicBackground: {
    track: "STEM Track (Science, Technology, Engineering, and Mathematics)",
    degreeStatus: "College Graduate",
    gwa: "1.50 GWA",
    distinction: "Academic Excellence",
    description:
      "Graduated with top-tier academic honors (1.50 GWA) backed by an intensive STEM track foundation, focusing on data structures, operating systems, network topologies, and computational problem-solving.",
    highlights: [
      "1.50 Grade Weighted Average (Academic Excellence)",
      "Strong foundation in Operating Systems & Network Protocols",
      "Hands-on architectural execution across mobile & system projects",
    ],
  },

  techStack: {
    all: [
      "Flutter",
      "Dart",
      "Android Studio",
      "VS Code",
      "Git",
      "GitHub",
      "Networking Basics",
      "Network Security",
      "OS Administration",
    ],
    categorized: [
      {
        name: "Mobile Architecture",
        description:
          "Cross-platform client applications, reactive state management, and native Android integrations.",
        skills: ["Flutter", "Dart", "Android Studio", "State Management", "Cross-Platform Architecture"],
        items: ["Flutter", "Dart", "Android Studio", "State Management", "Cross-Platform Architecture"],
      },
      {
        name: "Developer Tools",
        description:
          "Modern source control workflows, environment debugging, and collaboration tooling.",
        skills: ["VS Code", "Git", "GitHub", "Terminal / Bash", "CI/CD Workflows"],
        items: ["VS Code", "Git", "GitHub", "Terminal / Bash", "CI/CD Workflows"],
      },
      {
        name: "Systems & Security",
        description:
          "Foundational network defense, protocol routing, and operating system governance.",
        skills: [
          "Networking Basics",
          "Network Security",
          "OS Administration",
          "Packet & Protocol Analysis",
          "Linux Environments",
        ],
        items: [
          "Networking Basics",
          "Network Security",
          "OS Administration",
          "Packet & Protocol Analysis",
          "Linux Environments",
        ],
      },
    ],
  },

  projects: [
    {
      id: "ojt-portal",
      title: "OJT-portal",
      type: "Mobile Application",
      role: "Lead Mobile Developer",
      summary:
        "Mobile Application built with Flutter/Dart to track and manage student internship metrics, attendance, and evaluation.",
      technologies: ["Flutter", "Dart", "Android Studio", "Git"],
      tags: ["Mobile App", "Internship Management", "Flutter/Dart", "Metrics"],
      keyHighlights: [
        "Automated daily time record (DTR) and digital attendance tracking",
        "Student evaluation engine with real-time performance analytics",
        "Streamlined coordination pipeline between students and faculty mentors",
      ],
      githubUrl: "https://github.com/Duhmenek/ojt-portal",
      featured: true,
    },
    {
      id: "ptc-careerlink",
      title: "PTC CareerLink",
      type: "Mobile & Platform Application",
      role: "Systems & Mobile Engineer",
      summary:
        "Mobile & Platform application for enterprise partner matching and resume/application submission.",
      technologies: ["Flutter", "Dart", "Cross-Platform", "Git", "GitHub"],
      tags: ["Enterprise Matching", "Career Platform", "Resume Pipeline", "Cross-Platform"],
      keyHighlights: [
        "Automated enterprise talent matching based on skill alignment",
        "Digital resume upload pipeline with structured application stages",
        "Multi-platform responsive client built with cross-platform Dart/Flutter",
      ],
      githubUrl: "https://github.com/Duhmenek/PTC-CareerLink",
      featured: true,
    },
  ],

  certifications: [
    "Networking Basics",
    "Networking Devices and Initial Configuration",
    "Network Addressing and Basic Troubleshooting",
    "Network Support Security",
    "Network Technician Career Path",
    "Computer Hardware Basics",
    "Operating System Basics",
    "Introduction to Cybersecurity",
    "Introduction to IoT and Digital Transformation",
    "AI Ready ASEAN Hour of Code Training",
    "AI Codes for Ocean Hour of Code",
    "Allergen Management Training (7-Star Educational Academy)",
  ],
};

export const CERTIFICATIONS: string[] = PORTFOLIO_DATA.certifications;
