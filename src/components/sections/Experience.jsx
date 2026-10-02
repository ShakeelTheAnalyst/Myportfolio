import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Award, BookOpen, Calendar,
  ExternalLink, CheckCircle2, Building, Sparkles, TrendingUp
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import {
  workExperienceData,
  publicationData,
  educationData,
  certificationsData
} from '../../data/experience';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education' | 'certifications'

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#090712]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials & Track Record"
          title="Experience, Research & Education"
          subtitle="A structured overview of my data science internship at NetworkGeek, published university ERP research, academic degrees, and professional certifications."
        />

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#0F0C1B]/90 border border-purple-500/25 backdrop-blur-xl gap-1.5 shadow-lg shadow-black/30">
            {[
              { id: 'experience', label: 'Work & Research', icon: Briefcase },
              { id: 'education', label: 'Education Timeline', icon: GraduationCap },
              { id: 'certifications', label: 'Certifications (8)', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/35'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: WORK & RESEARCH */}
        {activeTab === 'experience' && (
          <div className="space-y-10">
            {/* Published Research Highlight Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 md:p-8 bg-gradient-to-r from-[#170E2E] via-[#120B24] to-[#0A0714] border-purple-500/30 shadow-purple-glow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/40 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-fuchsia-400" />
                        Co-Authored International Publication
                      </span>
                      <span className="font-mono text-xs text-purple-300/80">
                        Vol. 36 Issue 2, 2026
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {publicationData.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-purple-200/90 font-mono">
                      Published in {publicationData.journal} • {publicationData.details}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {publicationData.summary}
                    </p>

                    {/* Key metrics grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {publicationData.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-center">
                          <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 font-mono">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-3">
                    <Button
                      href={publicationData.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="glow"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                      className="whitespace-nowrap"
                    >
                      Read Paper
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Internships Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <span>Internships & Professional Training</span>
              </h3>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-8">
                {workExperienceData.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Purple Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#07070D] border-2 border-purple-400 group-hover:border-purple-300 group-hover:scale-125 transition-all shadow-purple-glow-sm" />

                    <Card className="p-5 sm:p-6 bg-gradient-to-b from-[#0F0C1B]/95 to-[#0A0814]/90 border-purple-500/20 hover:border-purple-400/50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="font-mono text-xs text-purple-300 flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          {exp.duration}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs bg-purple-950/70 text-purple-300 border border-purple-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                            {exp.type}
                          </span>
                          {exp.credentialId && (
                            <span className="font-mono text-[11px] text-gray-400">
                              ID: {exp.credentialId}
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-purple-300/90 mb-2 mt-0.5 flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-purple-400" />
                        {exp.company}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/15">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="purple" size="xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EDUCATION TIMELINE */}
        {activeTab === 'education' && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-8 max-w-4xl mx-auto">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#07070D] border-2 border-purple-400 group-hover:scale-125 transition-all shadow-purple-glow-sm" />

                <Card className="p-5 sm:p-6 bg-gradient-to-b from-[#0F0C1B]/95 to-[#0A0814]/90 border-purple-500/20 hover:border-purple-400/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-mono text-xs text-purple-300 flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {edu.duration}
                    </span>
                    <span className="font-mono text-xs bg-purple-950/70 text-purple-200 border border-purple-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-purple-300/90 mb-2 mt-0.5">
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div>
                    <h5 className="font-mono text-xs text-purple-400 uppercase tracking-wider mb-2 font-medium">
                      Core Subjects & Focus Areas
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="mt-4 pt-3 border-t border-purple-500/15 space-y-1">
                      {edu.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 3: CERTIFICATIONS */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="h-full flex flex-col justify-between p-5 bg-gradient-to-b from-[#0F0C1B]/95 to-[#0A0814]/90 border-purple-500/20 hover:border-purple-400/50">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-500/15">
                      <span className="font-mono text-[11px] text-purple-300 font-semibold">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[11px] text-gray-400">
                        {cert.issueDate}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight mb-2">
                      {cert.title}
                    </h4>

                    {cert.credentialId && (
                      <p className="font-mono text-xs text-purple-400/90 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-purple-500/15">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-300 hover:text-white flex items-center gap-1 font-mono font-medium transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 text-purple-400" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
