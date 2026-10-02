import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Table, BarChart3, PieChart, Layout, Search,
  Cpu, Binary, TrendingUp, Brain, Eye, Sparkles, Bot,
  Database, Cloud, Layers, CloudRain, Globe,
  Terminal, GitBranch, FileCode, TerminalSquare, Boxes, Zap,
  CheckCircle, Target, LineChart, BookOpen, ShieldCheck, FileSpreadsheet
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { skillsData } from '../../data/skills';

const iconMap = {
  Code, Table, BarChart3, PieChart, Layout, Search,
  Cpu, Binary, TrendingUp, Brain, Eye, Sparkles, Bot,
  Database, Cloud, Layers, CloudRain, Globe,
  Terminal, GitBranch, FileCode, TerminalSquare, Boxes, Zap,
  CheckCircle, Target, LineChart, BookOpen, ShieldCheck,
  Sheet: FileSpreadsheet
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#090712]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Skills & Analytical Competencies"
          subtitle="A comprehensive breakdown of data analytics libraries, machine learning frameworks, databases, and business intelligence tools I use daily."
        />

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, catIdx) => {
            const isFullWidth = catIdx === skillsData.length - 1; // Last category spans full width
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={isFullWidth ? "col-span-1 md:col-span-2" : "col-span-1"}
              >
                <Card className="h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-[#0F0C1B]/90 to-[#0A0814]/85 border-purple-500/15 hover:border-purple-400/50 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5">
                  <div>
                    {/* Category Title & Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-purple-500/15">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {category.category}
                      </h3>
                      <span className="font-mono text-xs text-purple-200 font-semibold bg-purple-950/70 px-2.5 py-0.5 rounded-full border border-purple-500/40 shadow-purple-glow-sm">
                        {category.skills.length} Tools & Methods
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2.5 mb-4 font-normal">
                      {category.description}
                    </p>

                    {/* Skills Grid inside Category */}
                    <div className={`grid gap-2.5 ${
                      isFullWidth
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}>
                      {category.skills.map((skill) => {
                        const Icon = iconMap[skill.icon] || Code;
                        const levelStyles = {
                          Expert: "text-purple-300 bg-purple-950/70 border-purple-400/50",
                          Advanced: "text-fuchsia-300 bg-fuchsia-950/60 border-fuchsia-400/40",
                          Intermediate: "text-indigo-300 bg-indigo-950/60 border-indigo-400/40",
                          Strong: "text-emerald-300 bg-emerald-950/60 border-emerald-400/40"
                        }[skill.level] || "text-gray-300 bg-white/[0.04] border-white/[0.08]";

                        return (
                          <div
                            key={skill.name}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/15 hover:border-purple-400/60 hover:bg-[#140F26] transition-all duration-200 group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-105 transition-all flex-shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-gray-200 truncate group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md border font-semibold flex-shrink-0 ml-2 ${levelStyles}`}>
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
