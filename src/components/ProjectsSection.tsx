"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  Globe,
  ExternalLink,
  Code2,
  FolderGit2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon, NetlifyIcon } from "@/components/Icons";

export default function ProjectsSection() {
  const [filterTech, setFilterTech] = useState<string>("All");

  const allTechnologies = [
    "All",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Netlify",
  ];

  const filteredProjects =
    filterTech === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) =>
          p.technologies.some((t) => t.toLowerCase().includes(filterTech.toLowerCase()))
        );

  return (
    <section
      id="projects"
      className="py-24 border-b border-[#e2e8e3] bg-[#ffffff] relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5b6a5f] border-b border-[#edf2ee] pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2d4633] rounded-none"></span>
            <span>SECTION 03 // PART I: PROJECTS & REPOSITORIES</span>
          </div>
          <div className="text-[#78887c]">CODE & DEPLOYMENTS</div>
        </div>

        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
              // Selected Implementations
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111712] tracking-tight mt-1">
              Production Projects & Architecture
            </h2>
            <p className="text-sm text-[#546458] mt-2 max-w-2xl font-sans">
              Each project is linked directly to its verified Git source repository and active Netlify deployment environment.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f4f7f5] border border-[#d6ded8]">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilterTech(tech)}
                className={`text-xs font-mono px-3 py-1.5 transition-all cursor-pointer ${
                  filterTech === tech
                    ? "bg-[#1a2b1f] text-white"
                    : "text-[#495b4e] hover:text-[#111712] hover:bg-[#e7eee8]"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group border border-[#dbe3dc] bg-[#fafcfa] hover:border-[#1a2b1f] transition-all duration-300 p-7 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(26,43,31,0.06)]"
            >
              <div>
                {/* Top card metadata */}
                <div className="flex items-center justify-between border-b border-[#edf2ee] pb-3 mb-4">
                  <span className="text-xs font-mono text-[#5b6e60] tracking-wider">
                    SYS_{String(idx + 1).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#edf4ee] border border-[#cedbd1] text-[#2c4533] uppercase tracking-wider font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#131d16] group-hover:text-[#223927] transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#576b5d] mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#3e4d41] leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>

                {/* Architecture details */}
                <div className="p-3 bg-white border border-[#e4eae5] mb-5 text-xs font-mono text-[#334637]">
                  <span className="text-[#7c8d80] block text-[10px] uppercase tracking-wider">
                    Architecture & Stack:
                  </span>
                  <span className="mt-0.5 block">{project.architecture}</span>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#f0f4f1] text-[#263c2c] border border-[#d8e2da]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links: Git Repository & Netlify Repository */}
              <div className="pt-4 border-t border-[#e8eee9] grid grid-cols-2 gap-3">
                {/* Git Repository Link */}
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-[#cedad0] bg-white text-xs font-mono text-[#1f3023] hover:bg-[#1a2b1f] hover:text-white hover:border-[#1a2b1f] transition-all group/btn"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Git Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#7b8d80] group-hover/btn:text-white" />
                </a>

                {/* Netlify Repository / Live Link */}
                <a
                  href={project.netlifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 border border-[#1a2b1f] bg-[#1a2b1f] text-xs font-mono text-white hover:bg-[#273d2d] transition-all"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span>Netlify Live</span>
                  <ExternalLink className="w-3 h-3 text-[#b2c4b7]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Curated Repositories Sub-section */}
        <div className="border-t border-[#e2e8e3] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
                // Open Source & Modules
              </span>
              <h3 className="text-2xl font-light text-[#111712] tracking-tight mt-1">
                Additional Git Repositories & Packages
              </h3>
            </div>
            <a
              href={portfolioData.personal.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#2c4132] hover:underline"
            >
              <span>View all on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.repositories.map((repo) => (
              <div
                key={repo.name}
                className="border border-[#e1e7e2] bg-[#fafcfa] p-5 flex flex-col justify-between hover:border-[#1a2b1f] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#5f7164] mb-2">
                    <span className="flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#304836]" />
                      {repo.language}
                    </span>
                    <span className="text-[10px] text-[#86968a]">
                      {repo.updatedAt}
                    </span>
                  </div>

                  <h4 className="font-mono text-sm font-semibold text-[#152017] hover:text-[#2c4432] transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-[#4c5c50] mt-2 leading-relaxed font-sans">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#edf2ee] flex items-center justify-between text-xs font-mono">
                  <a
                    href={repo.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#243729] hover:underline"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Git Repo</span>
                  </a>
                  {repo.netlifyUrl && (
                    <a
                      href={repo.netlifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#344d3b] hover:underline"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Netlify</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
