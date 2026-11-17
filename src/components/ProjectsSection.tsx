import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, CheckCircle2, Images } from 'lucide-react';
import {
  GALLERY_VISUALS,
  type ProjectItem,
  type ProjectVisual,
} from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematics';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenLightbox: (visuals: ProjectVisual[], visualIndex: number, title: string) => void;
}

type FilterOption = 'All' | 'Post-Route Completed' | 'Completed Stages';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  onOpenLightbox,
}) => {
  const [filter, setFilter] = useState<FilterOption>('All');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="projects"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Project Experience
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
              RTL-to-Physical-Design Implementations &amp; Timing Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Verified project specifications backed by real Cadence Genus and Innovus routing, post-route timing, and DRC evidence screenshots.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by status"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0F1624] p-1 self-start"
          >
            {(['All', 'Post-Route Completed', 'Completed Stages'] as FilterOption[]).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab === 'All' ? 'All Projects' : tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {filteredProjects.map((project) => {
            const projectVisuals = GALLERY_VISUALS.filter(
              (v) => v.projectId === project.id
            );
            // Curate 4 latest Routing & Post-Route screenshots on the CVA6 card
            const cardVisuals =
              project.id === 'cva6-processor'
                ? [
                    projectVisuals.find((v) => v.id === 'cva6-routed-die-layout'),
                    projectVisuals.find((v) => v.id === 'cva6-postroute-setup'),
                    projectVisuals.find((v) => v.id === 'cva6-postroute-hold'),
                    projectVisuals.find((v) => v.id === 'cva6-postroute-drc-summary'),
                  ].filter((v): v is ProjectVisual => Boolean(v))
                : projectVisuals.slice(0, 2);

            return (
              <article
                key={project.id}
                className="rounded-xl border border-slate-800 bg-[#0F1624] overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-7 border-b border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-sky-400 font-semibold">{project.code}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span
                        className={
                          project.status === 'Post-Route Completed'
                            ? 'text-emerald-400 font-semibold'
                            : 'text-emerald-400'
                        }
                      >
                        {project.statusDetail}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{project.tools.join(' / ')}</span>
                    </div>

                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {project.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 self-start lg:self-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-sky-400/60 hover:text-sky-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>
                      Full Specifications ({projectVisuals.length} Visuals)
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-7">
                  {/* Left: Metrics, Stages & Implementation */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Design &amp; Post-Route Metrics
                      </h4>
                      <dl className="mt-3 grid grid-cols-2 gap-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-lg border border-slate-800/90 bg-[#090D16] p-3"
                          >
                            <dt className="text-[11px] text-slate-400">{metric.label}</dt>
                            <dd className="mt-1 font-mono text-sm font-semibold text-white tabular-nums">
                              {metric.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Completed Flow Stages */}
                    <div className="pt-4 border-t border-slate-800/80 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Completed Flow Progression</span>
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.completedStages.join(' → ')}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Implementation Notes
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {project.implementation}
                      </p>
                    </div>
                  </div>

                  {/* Right: Evidence Screenshots / Architectural Schematics */}
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cardVisuals.map((visual) => {
                        const fullIdx = projectVisuals.findIndex(
                          (item) => item.id === visual.id
                        );
                        return (
                          <div
                            key={visual.id}
                            className="rounded-lg border border-slate-800 bg-[#090D16] overflow-hidden flex flex-col"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                onOpenLightbox(
                                  projectVisuals,
                                  fullIdx >= 0 ? fullIdx : 0,
                                  project.title
                                )
                              }
                              aria-label={`Open ${visual.title} in fullscreen lightbox`}
                              className="group relative aspect-[16/10] w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
                            >
                              <ProjectSchematic visual={visual} lazy />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-lg bg-[#090D16]/95 border border-slate-700 px-3 py-1.5 text-xs font-medium text-white">
                                  <Maximize2 className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                                  <span>Zoom View</span>
                                </span>
                              </div>
                            </button>

                            <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
                              <div>
                                <p className="font-mono text-[11px] text-sky-400">
                                  {visual.stage}
                                </p>
                                <h5 className="mt-0.5 text-sm font-semibold text-white leading-snug">
                                  {visual.title}
                                </h5>
                                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                  {visual.caption}
                                </p>
                              </div>

                              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                                <button
                                  type="button"
                                  onClick={() =>
                                    onOpenLightbox(
                                      projectVisuals,
                                      fullIdx >= 0 ? fullIdx : 0,
                                      project.title
                                    )
                                  }
                                  className="font-medium text-sky-400 hover:text-sky-300 cursor-pointer"
                                >
                                  Fullscreen Lightbox
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {projectVisuals.length > cardVisuals.length && (
                      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-800/80 bg-[#090D16] px-4 py-3 text-xs">
                        <span className="text-slate-300">
                          Showing {cardVisuals.length} latest post-route visuals out of {projectVisuals.length} captured reports for {project.code}.
                        </span>
                        <div className="flex items-center gap-4 shrink-0">
                          <button
                            type="button"
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 cursor-pointer"
                          >
                            <Images className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>View All {projectVisuals.length}</span>
                          </button>
                          <button
                            type="button"
                            onClick={scrollToGallery}
                            className="font-medium text-slate-300 hover:text-white cursor-pointer"
                          >
                            Browse Gallery
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
