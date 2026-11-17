import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION_RECORDS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
            Education &amp; Certifications
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
            Academic Qualifications &amp; VLSI Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Verified academic credentials and hands-on semiconductor engineering training.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Academic Record
            </h3>

            {EDUCATION_RECORDS.map((edu) => (
              <article
                key={edu.id}
                className="rounded-xl border border-slate-800 bg-[#0F1624] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5 shrink-0">
                    <GraduationCap className="h-5 w-5 text-sky-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">{edu.institution}</p>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 pl-12 sm:pl-0">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">
                    {edu.scoreLabel}
                  </p>
                  <p className="mt-0.5 font-mono text-base sm:text-lg font-semibold text-sky-400 tabular-nums">
                    {edu.scoreValue}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Training & Certifications Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Training &amp; Certifications
            </h3>

            {CERTIFICATIONS.map((cert) => (
              <article
                key={cert.id}
                className="rounded-xl border border-slate-800 bg-[#0F1624] p-5 sm:p-6"
              >
                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5 shrink-0">
                    {cert.type === 'Training' ? (
                      <BookOpen className="h-5 w-5 text-sky-400" aria-hidden="true" />
                    ) : (
                      <Award className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sky-400">
                      {cert.type} · {cert.provider}
                    </p>
                    <h4 className="mt-1 text-base font-semibold text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
