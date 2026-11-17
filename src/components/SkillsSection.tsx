import React, { useState } from 'react';
import { Cpu, Layers, Activity, LayoutGrid, Terminal } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  'eda-tools': <Cpu className="h-5 w-5 text-sky-400" aria-hidden="true" />,
  'physical-design': <Layers className="h-5 w-5 text-sky-400" aria-hidden="true" />,
  'timing-analysis': <Activity className="h-5 w-5 text-sky-400" aria-hidden="true" />,
  'design-analysis': <LayoutGrid className="h-5 w-5 text-sky-400" aria-hidden="true" />,
  'programming-scripting': <Terminal className="h-5 w-5 text-sky-400" aria-hidden="true" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleGroups =
    selectedCategory === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedCategory);

  return (
    <section
      id="skills"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Technical Skills
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
              EDA Toolchain, Physical Implementation &amp; Design Analysis
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Verified tools, physical design stages, timing verification metrics, layout diagnostics, and scripting languages from resume.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter skill categories"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0F1624] p-1 self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-sky-500 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All ({SKILL_GROUPS.length})
            </button>
            {SKILL_GROUPS.map((group) => {
              const active = selectedCategory === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(group.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {group.category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGroups.map((group) => (
            <article
              key={group.id}
              onClick={() =>
                setSelectedCategory((prev) => (prev === group.id ? 'all' : group.id))
              }
              className={`rounded-xl border bg-[#0F1624] p-6 flex flex-col justify-between transition-colors duration-150 cursor-pointer ${
                selectedCategory === group.id
                  ? 'border-sky-400/70'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="rounded-lg border border-slate-800 bg-[#090D16] p-2 shrink-0">
                      {SKILL_ICON_MAP[group.id]}
                    </div>
                    <h3 className="text-base font-semibold text-white truncate">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                    {group.items.length}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {group.description}
                </p>

                <ul className="mt-4 divide-y divide-slate-800/60">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="py-2 text-sm font-medium text-slate-200 flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[11px] text-slate-500"
                      >
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
