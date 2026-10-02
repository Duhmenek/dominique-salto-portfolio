export interface AcademicBackground {
  track: string;
  degreeStatus: string;
  gwa: string;
  distinction: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  summary: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface PortfolioData {
  personalInfo: {
    fullName: string;
    preferredName: string;
    headline: string;
    location: string;
    bio: string;
  };
  academicBackground: AcademicBackground;
  techStack: {
    all: string[];
    categorized: SkillCategory[];
  };
  projects: Project[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    fullName: "Dominique Andrie R. Salto",
    preferredName: "Dom",
    headline: "Mobile & Systems Engineer",
    location: "Taguig City, Philippines",
    bio: "Passionate Mobile and Systems Engineer specializing in cross-platform mobile development with Flutter & Dart, coupled with foundational expertise in network security, system administration, and modern software workflows.",
  },
  academicBackground: {
    track: "STEM Track (Science, Technology, Engineering, and Mathematics)",
    degreeStatus: "College Graduate",
    gwa: "1.50 GWA",
    distinction: "Academic Excellence",
    description: "Solid foundation in STEM and computer science fundamentals, graduating with high academic distinction (1.50 GWA).",
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
        name: "Mobile & App Development",
        items: ["Flutter", "Dart", "Android Studio"],
      },
      {
        name: "Developer Tools & Version Control",
        items: ["VS Code", "Git", "GitHub"],
      },
      {
        name: "Systems & Infrastructure",
        items: ["Networking Basics", "Network Security", "OS Administration"],
      },
    ],
  },
  projects: [
    {
      id: "ojt-portal",
      title: "OJT-portal",
      type: "Mobile Application",
      summary:
        "Mobile Application built with Flutter/Dart to track and manage student internship metrics, attendance, and evaluation.",
      technologies: ["Flutter", "Dart", "Android Studio", "Git"],
      keyHighlights: [
        "Digital attendance and daily time record (DTR) logging",
        "Internship metrics and task completion tracking",
        "Streamlined evaluation scoring between mentors and interns",
      ],
      githubUrl: "https://github.com/Duhmenek/ojt-portal",
    },
    {
      id: "ptc-careerlink",
      title: "PTC CareerLink",
      type: "Mobile & Platform Application",
      summary:
        "Mobile & Platform application for enterprise partner matching and resume/application submission.",
      technologies: ["Flutter", "Dart", "Cross-Platform", "Git", "GitHub"],
      keyHighlights: [
        "Candidate-to-enterprise partner opportunity matching",
        "Direct digital resume upload and application tracking pipeline",
        "Multi-platform accessibility for job seekers and industry recruiters",
      ],
      githubUrl: "https://github.com/Duhmenek/PTC-CareerLink",
    },
  ],
};
