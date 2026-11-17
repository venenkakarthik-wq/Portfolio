import React from 'react';
import { Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section
      id="resume"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>Resume</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
              Resume &amp; Technical Dossier
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Download the complete latest PDF resume covering {PERSONAL_INFO.educationShort}, {PERSONAL_INFO.training}, Cadence Genus &amp; Innovus skills, project metrics, and academic history.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors whitespace-nowrap min-h-[42px]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
