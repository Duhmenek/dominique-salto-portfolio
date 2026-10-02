"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  ExternalLink,
  Smartphone,
  Terminal,
  Shield,
  Server,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Code2,
  Copy,
  Check,
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

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Mobile & App Development":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "Developer Tools & Version Control":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "Systems & Infrastructure":
        return <Server className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative font-sans antialiased overflow-x-hidden">
      {/* Background Grid & Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0a0a0c]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b40_1px,transparent_1px),linear-gradient(to_bottom,#18181b40_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-zinc-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="h-8 px-2.5 rounded-md bg-zinc-900 border border-zinc-700/60 flex items-center justify-center font-mono font-bold text-sm tracking-wider text-cyan-400 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              &lt;DARS /&gt;
            </div>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </motion.a>

          <nav className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors hidden sm:inline-block"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="hover:text-cyan-400 transition-colors hidden sm:inline-block"
            >
              Stack
            </a>
            <a
              href="#academics"
              className="hover:text-emerald-400 transition-colors hidden sm:inline-block"
            >
              Academics
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/70 text-zinc-200 hover:text-white hover:border-cyan-500/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all text-xs font-mono uppercase tracking-wider"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28">
        {/* Hero Section */}
        <section className="relative pt-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/50 border border-cyan-800/60 text-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Available for Systems & Mobile Engineering</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/40 border border-emerald-800/50 text-emerald-300">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {PORTFOLIO_DATA.academicBackground.gwa} •{" "}
                  {PORTFOLIO_DATA.academicBackground.distinction}
                </span>
              </div>
            </div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  {PORTFOLIO_DATA.personalInfo.fullName}
                </h1>
                <span className="text-lg md:text-xl font-mono text-zinc-400 font-medium">
                  ({PORTFOLIO_DATA.personalInfo.preferredName})
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {PORTFOLIO_DATA.personalInfo.headline}
              </h2>
            </div>

            {/* Location & Summary Bio */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 font-mono">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PORTFOLIO_DATA.personalInfo.location}</span>
            </div>

            <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
              {PORTFOLIO_DATA.personalInfo.bio}
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_24px_rgba(6,182,212,0.25)] transition-all flex items-center gap-2 group"
              >
                <span>Explore Featured Works</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/Duhmenek"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/70 text-zinc-200 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/70 text-zinc-200 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/70 text-zinc-200 hover:text-white hover:border-cyan-500/60 transition-all flex items-center gap-2 text-sm font-medium"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </section>

        {/* Featured Engineering Works */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                Featured Engineering Works
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
                Production-Ready Systems
              </h2>
            </div>
            <Layers className="w-6 h-6 text-zinc-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative rounded-2xl p-6 md:p-8 flex flex-col justify-between",
                  "bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl",
                  "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300"
                )}
              >
                <div className="space-y-4">
                  {/* Top Category Badge & Github Link */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                      {project.type}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {project.keyHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & Action */}
                <div className="mt-6 pt-4 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Stack & Infrastructure */}
        <section id="stack" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-4">
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Technical Stack & Infrastructure
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
              Core Engineering Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.techStack.categorized.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl p-6 bg-zinc-900/40 border border-zinc-800/90 backdrop-blur-xl hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="font-semibold text-base text-zinc-100">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-800/60 border border-zinc-700/60 text-zinc-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
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

        {/* Academic Excellence Spotlight */}
        <section id="academics" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-4">
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Academic Background
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
              Academic Excellence Spotlight
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "relative rounded-2xl p-8 md:p-10 overflow-hidden",
              "bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950/90",
              "border border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.08)]"
            )}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-950/60 border border-emerald-700/60 text-emerald-300">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <span>{PORTFOLIO_DATA.academicBackground.degreeStatus}</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                    {PORTFOLIO_DATA.academicBackground.track}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Graduated with {PORTFOLIO_DATA.academicBackground.distinction}
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  {PORTFOLIO_DATA.academicBackground.description}
                </p>
              </div>

              {/* Distinction Stat Box */}
              <div className="rounded-xl p-6 bg-zinc-950/80 border border-emerald-500/40 text-center space-y-2 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                  Grade Weighted Average
                </div>
                <div className="text-5xl font-black tracking-tight text-white font-mono">
                  {PORTFOLIO_DATA.academicBackground.gwa}
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {PORTFOLIO_DATA.academicBackground.distinction}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact / CTA Footer */}
        <section id="contact" className="pt-8 scroll-mt-24">
          <div className="rounded-2xl p-8 md:p-12 bg-zinc-900/30 border border-zinc-800 text-center space-y-6 backdrop-blur-xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Resilient Systems Together
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-base text-zinc-400">
              Feel free to reach out for mobile engineering collaborations, system architecture discussions, or professional inquiries.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${emailAddress}`}
                className="px-6 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-sm tracking-wide hover:bg-cyan-400 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:border-zinc-500 transition-all flex items-center gap-2 text-sm font-medium"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied ({emailAddress})</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80 mt-20 py-8 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Designed with Next.js 14 & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
