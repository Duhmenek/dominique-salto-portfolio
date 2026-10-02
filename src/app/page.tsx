"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  ArrowUpRight,
  Copy,
  Check,
  Smartphone,
  Terminal,
  ShieldCheck,
  Server,
  Network,
  Cpu,
  Sparkles,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "saltodominique905@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getDomainIcon = (domainName: string) => {
    if (domainName.includes("Mobile")) {
      return <Smartphone className="w-4 h-4 text-zinc-300" />;
    }
    if (domainName.includes("Tools") || domainName.includes("Tooling")) {
      return <Terminal className="w-4 h-4 text-zinc-300" />;
    }
    return <Server className="w-4 h-4 text-zinc-300" />;
  };

  const getCertIcon = (cert: string) => {
    const lower = cert.toLowerCase();
    if (lower.includes("security") || lower.includes("cybersecurity")) {
      return <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />;
    }
    if (lower.includes("network")) {
      return <Network className="w-4 h-4 text-cyan-400 shrink-0" />;
    }
    if (
      lower.includes("hardware") ||
      lower.includes("operating system") ||
      lower.includes("iot")
    ) {
      return <Cpu className="w-4 h-4 text-zinc-300 shrink-0" />;
    }
    if (lower.includes("ai") || lower.includes("code")) {
      return <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />;
    }
    return <Award className="w-4 h-4 text-zinc-400 shrink-0" />;
  };

  const getCertTag = (cert: string) => {
    const lower = cert.toLowerCase();
    if (lower.includes("security") || lower.includes("cybersecurity")) {
      return "Security";
    }
    if (lower.includes("network")) {
      return "Networking";
    }
    if (
      lower.includes("hardware") ||
      lower.includes("operating system") ||
      lower.includes("iot")
    ) {
      return "Systems";
    }
    if (lower.includes("ai") || lower.includes("code")) {
      return "AI & Code";
    }
    return "Training";
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-200 selection:bg-zinc-800 selection:text-white font-sans antialiased relative">
      {/* Subtle Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a12_1px,transparent_1px),linear-gradient(to_bottom,#27272a12_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-zinc-800/10 to-transparent blur-3xl" />
      </div>

      {/* Top Bar / Minimalist Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08080a]/80 border-b border-zinc-900/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 group"
          >
            <span className="font-mono font-bold text-sm tracking-widest text-zinc-100 group-hover:text-white transition-colors">
              &lt;DARS /&gt;
            </span>
          </motion.a>

          {/* Section Navigation Links */}
          <nav className="flex items-center gap-5 md:gap-6 text-xs font-mono text-zinc-400">
            <a
              href="#about"
              className="hover:text-zinc-100 transition-colors hidden sm:inline-block"
            >
              01 about
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-100 transition-colors hidden sm:inline-block"
            >
              02 projects
            </a>
            <a
              href="#stack"
              className="hover:text-zinc-100 transition-colors hidden sm:inline-block"
            >
              03 stack
            </a>
            <a
              href="#certifications"
              className="hover:text-zinc-100 transition-colors hidden sm:inline-block"
            >
              04 certs
            </a>
            <a
              href="#education"
              className="hover:text-zinc-100 transition-colors hidden sm:inline-block"
            >
              05 education
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-md bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Contact</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
        {/* 01 — Hero / About Section */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Live Pulsing Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Mobile & Systems Development roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/60 border border-zinc-800/80 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PORTFOLIO_DATA.personalInfo.location}</span>
              </div>
            </div>

            {/* Concise Personal Intro */}
            <div className="space-y-3 pt-2">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
                I&apos;m Dominique Andrie R. Salto
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-medium">
                Mobile & Systems Developer based in Taguig City.
              </p>
            </div>

            {/* Editorial Bio */}
            <div className="max-w-2xl space-y-3 text-sm md:text-base text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a mobile &amp; systems developer crafting clean, cross-platform apps and robust backend workflows. Currently focused on building intuitive Flutter applications and exploring modern tech stacks.
              </p>
              <p>
                Right now, I turn rough concepts into functional, high-performance software that solves real-world problems.
              </p>
            </div>

            {/* Quick External Links & Clipboard Action */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-sm font-mono">
              <a
                href="https://github.com/Duhmenek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1 group"
              >
                <span>github</span>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1 group"
              >
                <span>linkedin</span>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1 group"
              >
                <span>email</span>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>copy email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </section>

        {/* 02 — Projects Section */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              02 — projects
            </span>
            <span className="font-mono text-xs text-zinc-600">Featured Projects & Apps</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={cn(
                  "p-6 md:p-7 rounded-xl border border-zinc-900 bg-zinc-950/40",
                  "hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-200 group"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-zinc-400">
                      Role: {project.role}
                    </p>

                    <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-zinc-100 transition-colors shrink-0 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>github</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>

                {/* Key Bullet Highlights */}
                <div className="mt-4 pt-4 border-t border-zinc-900/90 space-y-1.5">
                  {project.keyHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="text-xs text-zinc-400 flex items-start gap-2"
                    >
                      <span className="text-zinc-600 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/90 text-zinc-400 border border-zinc-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 03 — Tech Stack Section */}
        <section id="stack" className="space-y-6 scroll-mt-24">
          <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              03 — stack
            </span>
            <span className="font-mono text-xs text-zinc-600">Core Development Arsenal</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.techStack.categorized.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                      {getDomainIcon(category.name)}
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-200">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900/90 border border-zinc-800/90 text-zinc-300 hover:border-zinc-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 04 — Certifications Section */}
        <section id="certifications" className="space-y-6 scroll-mt-24">
          <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              04 — certifications
            </span>
            <span className="font-mono text-xs text-zinc-600">
              {PORTFOLIO_DATA.certifications.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3.5">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className={cn(
                  "p-4 rounded-xl border border-zinc-900 bg-zinc-950/40",
                  "hover:border-zinc-800 hover:bg-zinc-900/30 transition-all flex flex-col justify-between group"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors">
                    {getCertIcon(cert)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-800/60">
                    {getCertTag(cert)}
                  </span>
                </div>

                <div className="mt-3.5">
                  <h4 className="text-xs md:text-sm font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors leading-snug">
                    {cert}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 05 — Education & Recognition Section */}
        <section id="education" className="space-y-6 scroll-mt-24">
          <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              05 — education
            </span>
            <span className="font-mono text-zinc-600 font-mono text-xs">
              Academic Background
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 md:p-8 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-100">
                  {PORTFOLIO_DATA.academicBackground.track}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Status: {PORTFOLIO_DATA.academicBackground.degreeStatus}
                </p>
              </div>

              <div className="inline-flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-black font-mono text-zinc-100">
                  {PORTFOLIO_DATA.academicBackground.gwa}
                </span>
                <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/50">
                  {PORTFOLIO_DATA.academicBackground.distinction}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.academicBackground.description}
            </p>

            {PORTFOLIO_DATA.academicBackground.highlights && (
              <div className="pt-2 border-t border-zinc-900 space-y-1.5">
                {PORTFOLIO_DATA.academicBackground.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="text-xs font-mono text-zinc-400 flex items-center gap-2"
                  >
                    <span className="text-emerald-500">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Minimalist Contact CTA */}
        <section className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-zinc-200 font-mono">
                Initiate Contact
              </h4>
              <p className="text-xs text-zinc-500">
                saltodominique905@gmail.com • Taguig City, Philippines
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-bold text-xs font-mono hover:bg-white transition-colors"
              >
                Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs font-mono"
              >
                {copiedEmail ? "Copied" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-10 border-t border-zinc-900 mt-20 py-8 text-center text-xs font-mono text-zinc-600">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personalInfo.fullName}
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <span>Taguig City, PH</span>
            <span>•</span>
            <span>Next.js 14 & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
