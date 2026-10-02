import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, FileSpreadsheet, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { personalData } from '../../data/personal';

const iconMap = {
  BarChart3,
  Brain,
  Database,
  FileSpreadsheet,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Data-Driven Innovation & Intelligent Modeling"
          subtitle="A deeper look into my analytical methodology, machine learning journey, and commitment to transforming numbers into impact."
        />

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Narrative Column with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0F0C1B]/90 to-[#0A0814]/85 border border-purple-500/20 backdrop-blur-xl space-y-4 text-gray-300 leading-relaxed shadow-lg shadow-black/30"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Bridging Rigorous Statistics with Applied Machine Learning.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              I am an enthusiastic Computer Science (AI & ML) graduate from AMET University with an academic CGPA of <strong>8.73/10</strong>, passionate about solving real-world analytical problems through structured data science workflows.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              My hands-on experience includes an intensive <strong>Data Scientist Internship at NetworkGeek</strong> (handling data transformations, neural networks, transformers, and generative AI) and co-authoring a <strong>published research paper on Enterprise Resource Planning (ERP) systems</strong> in the MSW Management Journal.
            </p>
            <div className="pt-4 border-t border-purple-500/15">
              <ul className="space-y-2.5 font-medium text-xs sm:text-sm text-purple-200">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span>Proficient in Python, SQL, R, and Power BI</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span>End-to-end ML model development & Random Forest forecasting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span>Co-authored published international journal research</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Highlights 4 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {personalData.aboutCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || BarChart3;
              const accentStyles = [
                { bg: 'bg-purple-950/60', border: 'border-purple-500/40', text: 'text-purple-300', hover: 'group-hover:border-purple-400/70' },
                { bg: 'bg-fuchsia-950/60', border: 'border-fuchsia-500/40', text: 'text-fuchsia-300', hover: 'group-hover:border-fuchsia-400/70' },
                { bg: 'bg-indigo-950/60', border: 'border-indigo-500/40', text: 'text-indigo-300', hover: 'group-hover:border-indigo-400/70' },
                { bg: 'bg-emerald-950/60', border: 'border-emerald-500/40', text: 'text-emerald-300', hover: 'group-hover:border-emerald-400/70' },
              ][idx % 4];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="h-full flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-b from-[#0F0C1B]/90 to-[#0A0814]/85 border-purple-500/15 hover:border-purple-400/60 group transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-black/30">
                    <div>
                      <div className={`w-10 h-10 rounded-xl ${accentStyles.bg} border ${accentStyles.border} flex items-center justify-center ${accentStyles.text} mb-3 transition-transform group-hover:scale-105 shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
