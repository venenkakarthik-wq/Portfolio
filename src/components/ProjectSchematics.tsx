import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { ProjectVisual } from '../data/portfolioData';

interface ProjectSchematicProps {
  visual: ProjectVisual;
  className?: string;
  lazy?: boolean;
}

export const ProjectSchematic: React.FC<ProjectSchematicProps> = ({
  visual,
  className = '',
  lazy = true,
}) => {
  const [imgError, setImgError] = useState(false);

  if (visual.imageUrl) {
    if (imgError) {
      return (
        <div
          className={`w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-2 bg-[#070B12] p-6 text-center ${className}`}
        >
          <ImageOff className="h-6 w-6 text-slate-500" aria-hidden="true" />
          <p className="text-xs font-medium text-slate-300">{visual.title}</p>
          <p className="text-[11px] font-mono text-slate-500">{visual.stage}</p>
        </div>
      );
    }

    return (
      <img
        src={visual.imageUrl}
        alt={`${visual.title} — ${visual.stage}`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`w-full h-full object-contain bg-[#070B12] ${className}`}
      />
    );
  }

  switch (visual.kind) {
    case 'aes-placement':
      return (
        <svg
          viewBox="0 0 640 400"
          className={`w-full h-auto block bg-[#070B12] ${className}`}
          role="img"
          aria-label={visual.title}
        >
          <text
            x="24"
            y="28"
            fill="#94A3B8"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            ARCHITECTURAL FLOORPLAN SCHEMATIC · AES CORE (300 µm × 300 µm)
          </text>

          <rect
            x="84"
            y="54"
            width="290"
            height="290"
            rx="4"
            fill="#0B1220"
            stroke="#475569"
            strokeWidth="1.5"
          />
          <rect
            x="96"
            y="66"
            width="266"
            height="266"
            fill="none"
            stroke="#10B981"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <rect
            x="108"
            y="78"
            width="242"
            height="242"
            fill="#0F172A"
            stroke="#1E293B"
          />

          {Array.from({ length: 14 }).map((_, row) => (
            <line
              key={`aes-r-${row}`}
              x1="114"
              y1={90 + row * 17}
              x2="344"
              y2={90 + row * 17}
              stroke="#1E293B"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }).map((_, col) => (
            <line
              key={`aes-c-${col}`}
              x1={134 + col * 28}
              y1="82"
              x2={134 + col * 28}
              y2="316"
              stroke="#0EA5E9"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          ))}

          <rect
            x="128"
            y="108"
            width="92"
            height="72"
            rx="3"
            fill="#0EA5E9"
            fillOpacity="0.14"
            stroke="#38BDF8"
            strokeOpacity="0.6"
          />
          <rect
            x="236"
            y="108"
            width="94"
            height="86"
            rx="3"
            fill="#10B981"
            fillOpacity="0.14"
            stroke="#34D399"
            strokeOpacity="0.6"
          />
          <rect
            x="128"
            y="202"
            width="202"
            height="86"
            rx="3"
            fill="#0EA5E9"
            fillOpacity="0.12"
            stroke="#38BDF8"
            strokeOpacity="0.5"
          />

          <text
            x="229"
            y="244"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="11"
            fontWeight="600"
            fontFamily="JetBrains Mono, monospace"
          >
            ~10K STANDARD CELLS
          </text>
          <text
            x="229"
            y="262"
            textAnchor="middle"
            fill="#34D399"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            0 MACROS · 1 CLOCK (1.0 ns)
          </text>

          <text
            x="229"
            y="366"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            300 µm × 300 µm Square Core
          </text>

          <g transform="translate(406, 54)">
            <rect
              x="0"
              y="0"
              width="206"
              height="290"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />
            <text
              x="16"
              y="28"
              fill="#F8FAFC"
              fontSize="11.5"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              AES Core Specifications
            </text>
            <line x1="16" y1="38" x2="190" y2="38" stroke="#1E293B" />

            {[
              ['Standard Cells', '~10K'],
              ['Hard Macros', '0 (Macro-Free)'],
              ['Clock Domains', '1 Domain'],
              ['Clock Period', '1.0 ns (1 GHz)'],
              ['Die Size', '300 × 300 µm'],
              ['Synthesis', 'Completed (Genus)'],
              ['Placement', 'Completed (Innovus)'],
            ].map(([k, v], idx) => (
              <g key={k} transform={`translate(16, ${60 + idx * 32})`}>
                <text fill="#94A3B8" fontSize="9.5" fontFamily="DM Sans, sans-serif">
                  {k}
                </text>
                <text
                  y="14"
                  fill="#34D399"
                  fontSize="10.5"
                  fontWeight="600"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {v}
                </text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'aes-timing':
      return (
        <svg
          viewBox="0 0 640 400"
          className={`w-full h-auto block bg-[#070B12] ${className}`}
          role="img"
          aria-label={visual.title}
        >
          <text
            x="24"
            y="28"
            fill="#94A3B8"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            1.0 ns SINGLE-CLOCK TIMING &amp; STAGE SCHEMATIC · AES CORE
          </text>

          <g transform="translate(28, 56)">
            <rect
              x="0"
              y="0"
              width="584"
              height="160"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />
            <text
              x="20"
              y="28"
              fill="#F8FAFC"
              fontSize="12"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              Synchronous 1.0 ns Clock Period Constraint
            </text>

            <path
              d="M30 115 H70 V70 H130 V115 H190 V70 H250 V115 H310 V70 H370 V115 H430 V70 H490 V115 H550"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
            />
            <line x1="70" y1="60" x2="70" y2="128" stroke="#475569" strokeDasharray="3 3" />
            <line x1="190" y1="60" x2="190" y2="128" stroke="#475569" strokeDasharray="3 3" />
            <line x1="70" y1="138" x2="190" y2="138" stroke="#34D399" strokeWidth="1.5" />
            <text
              x="130"
              y="152"
              textAnchor="middle"
              fill="#34D399"
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
            >
              T = 1.0 ns (1 GHz)
            </text>
          </g>

          <g transform="translate(28, 236)">
            <rect
              x="0"
              y="0"
              width="584"
              height="130"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />
            <text
              x="20"
              y="28"
              fill="#F8FAFC"
              fontSize="12"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              Completed Implementation Milestones
            </text>
            {[
              ['RTL & SDC Constraints', '1 Clock Domain · 1.0 ns Target', 'Completed'],
              ['Cadence Genus Synthesis', '~10K Standard Cells Mapped', 'Completed'],
              ['Cadence Innovus Placement', '300 µm × 300 µm Macro-Free Core', 'Completed'],
            ].map(([stage, detail, status], i) => (
              <g key={stage} transform={`translate(20, ${54 + i * 26})`}>
                <text fill="#E2E8F0" fontSize="11" fontFamily="DM Sans, sans-serif">
                  {stage}
                </text>
                <text
                  x="220"
                  fill="#94A3B8"
                  fontSize="10.5"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {detail}
                </text>
                <text
                  x="544"
                  textAnchor="end"
                  fill="#34D399"
                  fontSize="10.5"
                  fontWeight="600"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {status}
                </text>
              </g>
            ))}
          </g>
        </svg>
      );

    case 'halfcycle-waveforms':
      return (
        <svg
          viewBox="0 0 640 400"
          className={`w-full h-auto block bg-[#070B12] ${className}`}
          role="img"
          aria-label={visual.title}
        >
          <text
            x="24"
            y="28"
            fill="#94A3B8"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            MULTI-CLOCK &amp; GENERATED CLOCK TIMING SCHEMATIC (1 ns / 2.2 ns / 4.4 ns)
          </text>

          <g transform="translate(28, 48)">
            <rect
              x="0"
              y="0"
              width="584"
              height="324"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />

            <text x="20" y="34" fill="#38BDF8" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              CLK_1 (1.0 ns)
            </text>
            <path
              d="M140 42 H160 V18 H180 V42 H200 V18 H220 V42 H240 V18 H260 V42 H280 V18 H300 V42 H320 V18 H340 V42 H360 V18 H380 V42 H400 V18 H420 V42 H440 V18 H460 V42 H480 V18 H500 V42 H540"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.6"
            />

            <text x="20" y="106" fill="#34D399" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              CLK_2 (2.2 ns)
            </text>
            <path
              d="M140 114 H160 V86 H204 V114 H248 V86 H292 V114 H336 V86 H380 V114 H424 V86 H468 V114 H512 V86 H540"
              fill="none"
              stroke="#34D399"
              strokeWidth="1.6"
            />

            <text x="20" y="178" fill="#F59E0B" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              CLK_3 (4.4 ns)
            </text>
            <path
              d="M140 186 H160 V158 H248 V186 H336 V158 H424 V186 H512 V158 H540"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.6"
            />

            <text x="20" y="250" fill="#A78BFA" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              GEN_CLK (Derived)
            </text>
            <path
              d="M140 258 H160 V230 H248 V258 H336 V230 H424 V258 H512 V230 H540"
              fill="none"
              stroke="#A78BFA"
              strokeWidth="1.6"
              strokeDasharray="6 2"
            />

            <line x1="160" y1="14" x2="160" y2="274" stroke="#334155" strokeDasharray="3 3" />
            <line x1="248" y1="14" x2="248" y2="274" stroke="#334155" strokeDasharray="3 3" />
            <line x1="336" y1="14" x2="336" y2="274" stroke="#334155" strokeDasharray="3 3" />

            <text
              x="20"
              y="302"
              fill="#CBD5E1"
              fontSize="11"
              fontFamily="DM Sans, sans-serif"
            >
              3 Primary Clock Domains · 1 Generated Clock · Synthesis &amp; Clock Relationship Analysis Completed (Genus)
            </text>
          </g>
        </svg>
      );

    case 'halfcycle-paths':
    default:
      return (
        <svg
          viewBox="0 0 640 400"
          className={`w-full h-auto block bg-[#070B12] ${className}`}
          role="img"
          aria-label={visual.title}
        >
          <text
            x="24"
            y="28"
            fill="#94A3B8"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            HALF-CYCLE LAUNCH &amp; CAPTURE TIMING PATH SCHEMATIC
          </text>

          <g transform="translate(28, 52)">
            <rect
              x="0"
              y="0"
              width="584"
              height="168"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />
            <text
              x="20"
              y="26"
              fill="#F8FAFC"
              fontSize="11.5"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              Posedge Launch Flip-Flop → Negedge Capture Flip-Flop
            </text>

            <rect x="64" y="54" width="90" height="72" rx="4" fill="#172554" stroke="#38BDF8" />
            <text x="109" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono, monospace">
              FF1 (Launch)
            </text>
            <text x="109" y="104" textAnchor="middle" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
              POSEDGE CLK
            </text>

            <rect x="218" y="64" width="144" height="52" rx="4" fill="#111C33" stroke="#475569" />
            <text x="290" y="94" textAnchor="middle" fill="#CBD5E1" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              Comb. Data Path
            </text>

            <rect x="426" y="54" width="94" height="72" rx="4" fill="#172554" stroke="#F59E0B" />
            <text x="473" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono, monospace">
              FF2 (Capture)
            </text>
            <text x="473" y="104" textAnchor="middle" fill="#F59E0B" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
              NEGEDGE CLK
            </text>

            <line x1="154" y1="90" x2="218" y2="90" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="362" y1="90" x2="426" y2="90" stroke="#F59E0B" strokeWidth="1.5" />
          </g>

          <g transform="translate(28, 238)">
            <rect
              x="0"
              y="0"
              width="584"
              height="132"
              rx="6"
              fill="#0F1624"
              stroke="#1E293B"
            />
            <text
              x="20"
              y="28"
              fill="#F8FAFC"
              fontSize="11.5"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              Half-Cycle Timing Relationships Evaluated
            </text>
            <text x="20" y="56" fill="#CBD5E1" fontSize="11" fontFamily="DM Sans, sans-serif">
              • Setup Check Window: Compressed to T / 2 (e.g., 0.5 ns on 1.0 ns domain, 1.1 ns on 2.2 ns domain)
            </text>
            <text x="20" y="82" fill="#CBD5E1" fontSize="11" fontFamily="DM Sans, sans-serif">
              • Hold Check Edge: Evaluated against prior edge relationship between launch and capture clocks
            </text>
            <text x="20" y="108" fill="#34D399" fontSize="11" fontFamily="DM Sans, sans-serif">
              • Status: Synthesis completed in Cadence Genus across 3 domains + 1 generated clock
            </text>
          </g>
        </svg>
      );
  }
};
