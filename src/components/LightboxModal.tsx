import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectVisual } from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematics';

interface LightboxModalProps {
  visuals: ProjectVisual[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  visuals,
  initialIndex,
  projectTitle,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  const currentVisual = visuals[currentIndex];

  const handlePrev = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev - 1 + visuals.length) % visuals.length);
  }, [visuals.length]);

  const handleNext = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev + 1) % visuals.length);
  }, [visuals.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(3, +(z + 0.5).toFixed(1)));
      if (e.key === '-') setZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!currentVisual) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} visual viewer`}
      className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-sm"
    >
      {/* Top Toolbar */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 bg-[#090D16]/95 px-4 sm:px-6 py-3">
        <div className="min-w-0">
          <p className="text-xs font-mono text-sky-400 truncate">
            {projectTitle} · {currentVisual.stage}
          </p>
          <h3 className="text-sm sm:text-base font-semibold text-white truncate">
            {currentVisual.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)))}
            disabled={zoom <= 1}
            aria-label="Zoom out"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
          >
            <ZoomOut className="h-4 w-4" />
          </button>

          <span className="font-mono text-xs text-slate-300 w-12 text-center tabular-nums">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(3, +(z + 0.5).toFixed(1)))}
            disabled={zoom >= 3}
            aria-label="Zoom in"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
          >
            <ZoomIn className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setZoom(1)}
            aria-label="Reset zoom"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-white hover:bg-slate-700 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8">
        {visuals.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous visual"
            className="fixed left-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-slate-700 bg-[#0F1624]/90 p-2.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
          }}
          className="transition-transform duration-150 max-w-5xl w-full max-h-[75vh] flex items-center justify-center rounded-xl overflow-hidden border border-slate-800 bg-[#070B12]"
        >
          <ProjectSchematic
            visual={currentVisual}
            lazy={false}
            className="max-h-[74vh] w-auto max-w-full"
          />
        </div>

        {visuals.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next visual"
            className="fixed right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-slate-700 bg-[#0F1624]/90 p-2.5 text-slate-200 hover:bg-slate-800 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Caption & Technical Explanation Footer */}
      <div className="border-t border-slate-800 bg-[#090D16]/95 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-white">{currentVisual.caption}</p>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              {currentVisual.explanation}
            </p>
          </div>
          {visuals.length > 1 && (
            <span className="font-mono text-xs text-slate-400 shrink-0 tabular-nums">
              {currentIndex + 1} / {visuals.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
