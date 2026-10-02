import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Layers, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projectsData } from '../../data/projects';

const CATEGORIES = ["All", "Enterprise", "Data Analytics", "Web Apps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Projects & Research"
          subtitle="Explore flagship projects including my published university ERP research framework, live weather ML pipelines, and data analytics applications."
        />

        {/* Category Filter Tabs with Segmented Pill Design */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#0F0C1B]/90 border border-purple-500/25 backdrop-blur-xl gap-1.5 shadow-lg shadow-black/30">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/35'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Projects Grid: 1 col on mobile, 2 col on md/lg */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden bg-gradient-to-b from-[#0F0C1B] to-[#0A0814] border-purple-500/20 hover:border-purple-400/50 group shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Card Visual Header Banner */}
                  <div className={`h-40 sm:h-48 w-full bg-gradient-to-br ${project.gradient} relative p-4 sm:p-5 flex flex-col justify-between border-b border-purple-500/20 overflow-hidden`}>
                    {/* Background abstract grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-500/[0.05] rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <Badge variant="purple" size="sm" icon={Layers} className="text-xs px-2.5 py-0.5 font-semibold">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <span className="font-mono text-xs bg-purple-950/80 text-purple-200 border border-purple-400/40 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {project.title.split(' - ')[0]}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-200/90 line-clamp-1 mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5 font-normal">
                        {project.description}
                      </p>

                      {/* Problem & Solution Callout */}
                      <div className="p-3 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5">
                        <strong className="text-purple-300 font-mono font-semibold">Impact: </strong>
                        <span>{project.problemSolution}</span>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="neutral" size="sm" className="text-[11px] sm:text-xs px-2 py-0.5 border-purple-500/20 text-purple-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-purple-500/15 flex items-center gap-2.5">
                      <Button
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        icon={project.id === 'erp-management-system' ? BookOpen : ExternalLink}
                        iconPosition="right"
                        className="flex-1 text-xs sm:text-sm font-semibold py-2"
                      >
                        {project.id === 'erp-management-system' ? 'Read Paper' : 'View Project'}
                      </Button>
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={Github}
                        iconPosition="left"
                        className="flex-1 text-xs sm:text-sm font-semibold py-2"
                      >
                        GitHub Repo
                      </Button>
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
