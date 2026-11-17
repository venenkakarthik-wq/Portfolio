import React from 'react';
import { GraduationCap, BookOpen, Compass, Languages, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
            About Me
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
            Electronics Engineering &amp; RTL-to-GDS Training
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Summary & Strengths Card */}
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0F1624] p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-base font-semibold text-white">
                Professional Summary
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {PERSONAL_INFO.intro}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                    <span>Core Strengths</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                    {PERSONAL_INFO.strengths.join(' · ')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Languages className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                    <span>Languages</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                    {PERSONAL_INFO.languages.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-slate-400">Primary EDA Toolchain</p>
                <p className="mt-1 font-medium text-slate-100">
                  Cadence Genus &amp; Cadence Innovus
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Technical Focus</p>
                <p className="mt-1 font-medium text-slate-100">
                  Synthesis, Floorplan, Placement, CTS &amp; STA
                </p>
              </div>
            </div>
          </div>

          {/* Education, Training & Career Objective Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-5 flex items-start gap-4">
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5 shrink-0">
                <GraduationCap className="h-5 w-5 text-sky-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">ECE Background</p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  B.Tech – Electronics and Communication Engineering
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Sree Chaitanya Institute of Technological Sciences · CGPA: 7.72
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-5 flex items-start gap-4">
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5 shrink-0">
                <BookOpen className="h-5 w-5 text-sky-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">
                  VLSI Training
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {PERSONAL_INFO.training}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Practical execution of RTL-to-GDS physical implementation using Cadence Genus and Innovus with report-driven debugging.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-5 flex items-start gap-4">
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5 shrink-0">
                <Compass className="h-5 w-5 text-sky-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Career Objective
                </p>
                <p className="mt-1 text-sm text-slate-200 leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
