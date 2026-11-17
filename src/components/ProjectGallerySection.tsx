import React, { useState, useMemo } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import {
  GALLERY_VISUALS,
  type GalleryCategory,
  type ProjectVisual,
} from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematics';

interface ProjectGallerySectionProps {
  onOpenLightbox: (visuals: ProjectVisual[], index: number, groupTitle: string) => void;
}

const GALLERY_CATEGORIES: ('All' | GalleryCategory)[] = [
  'All',
  'Post-Route Analysis',
  'Routing Results',
  'Placement and CTS',
  'Physical Design Flow',
  'Timing and Design Rule Reports',
  'AES & Half-Cycle',
];

export const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredVisuals = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_VISUALS;
    return GALLERY_VISUALS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const displayedVisuals = useMemo(() => {
    if (showAll || activeCategory !== 'All') return filteredVisuals;
    return filteredVisuals.slice(0, 9);
  }, [filteredVisuals, showAll, activeCategory]);

  return (
    <section
      id="gallery"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                Project Image Gallery
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
                Cadence Genus &amp; Innovus Evidence Archive
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Browse actual tool screenshots organized across Physical Design Flow, Placement and CTS, Routing Results, Post-Route Analysis, and Timing &amp; Design Rule Reports. Click any image to view larger.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 tabular-nums shrink-0">
              <Layers className="h-4 w-4 text-sky-400" aria-hidden="true" />
              <span>{filteredVisuals.length} Artifacts</span>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery by evidence category"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0F1624] p-1.5"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === 'All'
                  ? GALLERY_VISUALS.length
                  : GALLERY_VISUALS.filter((v) => v.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedVisuals.map((visual, idx) => (
            <article
              key={visual.id}
              className="rounded-xl border border-slate-800 bg-[#0F1624] overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox(
                    filteredVisuals,
                    idx,
                    `${activeCategory === 'All' ? 'Full Evidence Archive' : activeCategory}`
                  )
                }
                aria-label={`Zoom ${visual.title}`}
                className="group relative aspect-[16/10] w-full overflow-hidden bg-[#070B12] border-b border-slate-800/80 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                <ProjectSchematic visual={visual} lazy />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-lg bg-[#090D16]/95 border border-slate-700 px-3 py-1.5 text-xs font-medium text-white">
                    <Maximize2 className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                    <span>Zoom Fullscreen</span>
                  </span>
                </div>
              </button>

              <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="text-sky-400 truncate">{visual.stage}</span>
                    <span className="text-slate-500 shrink-0">{visual.projectName}</span>
                  </div>
                  <h3 className="mt-1.5 text-sm font-semibold text-white leading-snug">
                    {visual.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {visual.caption}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{visual.category}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(
                        filteredVisuals,
                        idx,
                        `${activeCategory === 'All' ? 'Full Evidence Archive' : activeCategory}`
                      )
                    }
                    className="font-medium text-sky-400 hover:text-sky-300 cursor-pointer"
                  >
                    Inspect Report
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {activeCategory === 'All' && filteredVisuals.length > 9 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#0F1624] px-5 py-2.5 text-xs font-semibold text-slate-100 hover:border-sky-400/60 hover:text-sky-300 transition-colors cursor-pointer"
            >
              {showAll
                ? 'Show Curated Top 9 Artifacts'
                : `Show All ${filteredVisuals.length} Artifacts`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
