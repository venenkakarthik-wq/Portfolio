import React, { useEffect } from 'react';
import { X, Maximize2, CheckCircle2, Sparkles } from 'lucide-react';
import {
  GALLERY_VISUALS,
  type ProjectItem,
  type ProjectVisual,
} from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematics';

interface ProjectDetailModalProps {
  project: ProjectItem;
  onClose: () => void;
  onOpenLightbox: (visuals: ProjectVisual[], visualIndex: number, title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenLightbox,
}) => {
  const projectVisuals = GALLERY_VISUALS.filter((v) => v.projectId === project.id);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} detailed specifications`}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-800 bg-[#0F1624] shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-800 bg-[#0F1624]/95 backdrop-blur-md px-6 py-4">
          <div>
            <p className="font-mono text-xs text-emerald-400">
              {project.code} · {project.statusDetail}
            </p>
            <h3 className="mt-0.5 text-xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary & Implementation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Design Overview
              </h4>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {project.summary}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Implementation &amp; Reports
              </h4>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {project.implementation}
              </p>
            </div>
          </div>

          {/* Stage Status Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-slate-800 bg-[#090D16] p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Completed Stages</span>
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                {project.completedStages.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Current Milestone</span>
              </p>
              <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                {project.status === 'Post-Route Completed'
                  ? 'Progressed through detailed Routing into Post-Route Analysis (multi-corner setup/hold STA, connectivity checks, and verify_drc violation cleanup).'
                  : 'All scoped synthesis and placement deliverables completed.'}
              </p>
            </div>
          </div>

          {/* Quantitative Metrics Table */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Design &amp; Timing Parameters
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-slate-800 bg-[#090D16] p-3.5"
                >
                  <p className="text-xs text-slate-400">{metric.label}</p>
                  <p className="mt-1 font-mono text-sm sm:text-base font-semibold text-white tabular-nums">
                    {metric.value}
                  </p>
                  {metric.detail && (
                    <p className="mt-0.5 text-[11px] text-slate-500">{metric.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Bullet Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technical Highlights
            </h4>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* All Project Visuals */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Technical Evidence &amp; Screenshots ({projectVisuals.length})
              </h4>
              <span className="text-xs text-slate-400">
                Click any item to inspect at full resolution
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectVisuals.map((visual, idx) => (
                <div
                  key={visual.id}
                  className="rounded-lg border border-slate-800 bg-[#090D16] overflow-hidden flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(projectVisuals, idx, project.title)}
                    className="group relative aspect-[16/10] w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
                  >
                    <ProjectSchematic visual={visual} lazy />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-lg bg-[#090D16]/95 border border-slate-700 px-3 py-1.5 text-xs font-medium text-white">
                        <Maximize2 className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                        <span>Open Lightbox</span>
                      </span>
                    </div>
                  </button>

                  <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] text-sky-400">{visual.stage}</p>
                      <h5 className="mt-0.5 text-sm font-semibold text-white">{visual.title}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        {visual.caption}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <button
                        type="button"
                        onClick={() => onOpenLightbox(projectVisuals, idx, project.title)}
                        className="text-xs font-medium text-sky-400 hover:text-sky-300 cursor-pointer"
                      >
                        Zoom &amp; Inspect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
