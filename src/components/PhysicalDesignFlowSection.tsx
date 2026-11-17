import React, { useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PD_FLOW_STAGES, type FlowStageStatus } from '../data/portfolioData';

function getStatusLabel(status: FlowStageStatus): string {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'latest':
      return 'Latest Stage';
  }
}

function getStatusIcon(status: FlowStageStatus) {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />;
    case 'latest':
      return <Sparkles className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />;
  }
}

export const PhysicalDesignFlowSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('post-route-analysis');
  const activeStage =
    PD_FLOW_STAGES.find((stage) => stage.id === selectedStageId) ?? PD_FLOW_STAGES[7];

  return (
    <section
      id="pd-flow"
      className="py-16 lg:py-20 border-b border-slate-800/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Physical Design Flow
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
              CVA6 Physical Design Progression — Post-Route Completed
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Progressed sequentially through routing into Post-Route Analysis. Select any stage from RTL Design through Post-Route Analysis to inspect deliverables and tool outputs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 tabular-nums">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>7 Stages Completed</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1.5 text-sky-400 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              <span>Latest: 08 Post-Route Analysis</span>
            </span>
          </div>
        </div>

        {/* Interactive Flow Diagram Grid + Detail Panel */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0F1624] p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PD_FLOW_STAGES.map((stage, index) => {
                const isSelected = stage.id === activeStage.id;
                const isLatest = stage.status === 'latest';

                return (
                  <div key={stage.id} className="relative flex flex-col">
                    <button
                      type="button"
                      onClick={() => setSelectedStageId(stage.id)}
                      aria-pressed={isSelected}
                      className={`w-full text-left rounded-lg border p-4 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                        isSelected
                          ? 'border-sky-400 bg-sky-500/12'
                          : isLatest
                          ? 'border-sky-500/60 bg-[#121E36] hover:border-sky-400'
                          : 'border-slate-800 bg-[#11192A] hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-slate-400 tabular-nums">
                          {stage.stepNumber}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                            isLatest ? 'text-sky-400 font-semibold' : 'text-emerald-400'
                          }`}
                        >
                          {getStatusIcon(stage.status)}
                          <span>{getStatusLabel(stage.status)}</span>
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                          {stage.name}
                        </h3>
                        {index < PD_FLOW_STAGES.length - 1 && (
                          <ArrowRight
                            className="hidden sm:block h-3.5 w-3.5 text-slate-600 shrink-0"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <p className="mt-1 font-mono text-[11px] text-slate-400">
                        {stage.tools}
                      </p>
                    </button>

                    {index < PD_FLOW_STAGES.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex sm:hidden justify-center py-1 text-slate-600"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Linear Flow Sequence Bar */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max text-xs font-mono">
                {PD_FLOW_STAGES.map((stage, idx) => (
                  <React.Fragment key={`seq-${stage.id}`}>
                    <button
                      type="button"
                      onClick={() => setSelectedStageId(stage.id)}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer whitespace-nowrap ${
                        stage.id === activeStage.id
                          ? 'bg-sky-500 text-slate-950 font-semibold'
                          : stage.status === 'latest'
                          ? 'text-sky-300 font-semibold hover:bg-slate-800'
                          : 'text-emerald-300 hover:bg-slate-800'
                      }`}
                    >
                      {stage.shortLabel}
                    </button>
                    {idx < PD_FLOW_STAGES.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Stage Detail Inspector */}
          <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-[#0F1624] p-6">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div>
                <p className="font-mono text-xs text-slate-400 tabular-nums">
                  Stage {activeStage.stepNumber} of 08
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {activeStage.name}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold">
                {getStatusIcon(activeStage.status)}
                <span
                  className={
                    activeStage.status === 'latest'
                      ? 'text-sky-400'
                      : 'text-emerald-400'
                  }
                >
                  {getStatusLabel(activeStage.status)}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-medium text-slate-400">Tools &amp; Artifacts</p>
              <p className="mt-1 font-mono text-sm text-sky-300">{activeStage.tools}</p>
            </div>

            <div className="mt-4">
              <p className="text-xs font-medium text-slate-400">Stage Scope &amp; Evidence</p>
              <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                {activeStage.summary}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80">
              <p className="text-xs font-medium text-slate-400 mb-3">
                Key Stage Checkpoints
              </p>
              <ul className="space-y-2.5">
                {activeStage.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                        activeStage.status === 'latest'
                          ? 'bg-sky-400'
                          : 'bg-emerald-400'
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
