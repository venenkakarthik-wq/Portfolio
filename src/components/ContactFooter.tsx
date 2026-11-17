import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Copy, Check, ArrowUpRight, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyValue = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="contact" className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Contact
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
              Connect for VLSI Physical Design Opportunities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Email Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5">
                    <Mail className="h-5 w-5 text-sky-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Email</h3>
                </div>
                <p className="mt-3 font-mono text-sm text-slate-200 break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-3.5 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => copyValue(PERSONAL_INFO.email, 'email')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5">
                    <Phone className="h-5 w-5 text-sky-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Phone</h3>
                </div>
                <p className="mt-3 font-mono text-sm text-slate-200 tabular-nums">
                  {PERSONAL_INFO.phone}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={`tel:+91${PERSONAL_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <span>Call Number</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => copyValue(PERSONAL_INFO.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0F1624] p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2.5">
                    <Linkedin className="h-5 w-5 text-sky-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">LinkedIn</h3>
                </div>
                <p className="mt-3 text-xs font-mono text-slate-300 break-all">
                  linkedin.com/in/venenka-karthik-1a9617357
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/80 bg-[#070B12] py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-200">{PERSONAL_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>{PERSONAL_INFO.title}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#about" className="hover:text-slate-200 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">
              Projects
            </a>
            <a href="#gallery" className="hover:text-slate-200 transition-colors">
              Gallery
            </a>
            <a href="#education" className="hover:text-slate-200 transition-colors">
              Education
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFileName}
              className="hover:text-slate-200 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Back to Top</span>
            </button>
            <p className="text-slate-500">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}
            </p>
          </div>
        </div>
      </footer>

      {/* Subtle Floating Back-to-Top Control */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700 bg-[#0F1624]/95 text-slate-200 shadow-lg hover:border-sky-400 hover:text-sky-400 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </>
  );
};
