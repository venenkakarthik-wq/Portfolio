import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Download, Mail, Cpu } from 'lucide-react';
import { HERO_KEY_METRICS, PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onInspectHeroVisual?: () => void;
}

const iso = (u: number, v: number, z = 0): [number, number] => {
  const x = 220 + 148 * (u - v);
  const y = 46 + 85.4 * (u + v) - z;
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
};

const pts = (coords: [number, number][]): string =>
  coords.map(([x, y]) => `${x},${y}`).join(' ');

interface IsoBlockProps {
  u1: number;
  v1: number;
  u2: number;
  v2: number;
  zBase: number;
  height: number;
  topFill: string;
  leftFill: string;
  rightFill: string;
  stroke: string;
  strokeWidth?: number;
}

const IsoBlock: React.FC<IsoBlockProps> = ({
  u1,
  v1,
  u2,
  v2,
  zBase,
  height,
  topFill,
  leftFill,
  rightFill,
  stroke,
  strokeWidth = 0.9,
}) => {
  const zTop = zBase + height;
  const topFace = pts([
    iso(u1, v1, zTop),
    iso(u2, v1, zTop),
    iso(u2, v2, zTop),
    iso(u1, v2, zTop),
  ]);
  const leftFrontFace = pts([
    iso(u1, v2, zTop),
    iso(u2, v2, zTop),
    iso(u2, v2, zBase),
    iso(u1, v2, zBase),
  ]);
  const rightFrontFace = pts([
    iso(u2, v1, zTop),
    iso(u2, v2, zTop),
    iso(u2, v2, zBase),
    iso(u2, v1, zBase),
  ]);

  return (
    <g>
      <polygon points={leftFrontFace} fill={leftFill} stroke={stroke} strokeOpacity="0.45" strokeWidth={strokeWidth * 0.8} />
      <polygon points={rightFrontFace} fill={rightFill} stroke={stroke} strokeOpacity="0.45" strokeWidth={strokeWidth * 0.8} />
      <polygon points={topFace} fill={topFill} stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const leadOffsets = [0.06, 0.17, 0.28, 0.39, 0.5, 0.61, 0.72, 0.83, 0.94];
  const traces: Array<{ path: [number, number][]; color: string }> = [
    { path: [[0.28, 0.22], [0.315, 0.22], [0.315, 0.29], [0.35, 0.29]], color: '#38BDF8' },
    { path: [[0.28, 0.51], [0.315, 0.51], [0.315, 0.62], [0.35, 0.62]], color: '#2DD4BF' },
    { path: [[0.30, 0.79], [0.33, 0.79], [0.33, 0.72], [0.35, 0.72]], color: '#38BDF8' },
    { path: [[0.65, 0.28], [0.685, 0.28], [0.685, 0.22], [0.72, 0.22]], color: '#2DD4BF' },
    { path: [[0.65, 0.42], [0.685, 0.42], [0.685, 0.51], [0.72, 0.51]], color: '#38BDF8' },
    { path: [[0.65, 0.76], [0.68, 0.76], [0.68, 0.80], [0.70, 0.80]], color: '#2DD4BF' },
    { path: [[0.46, 0.46], [0.46, 0.53]], color: '#38BDF8' },
    { path: [[0.54, 0.46], [0.54, 0.53]], color: '#2DD4BF' },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/70 silicon-grid-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-gradient-to-b from-sky-500/10 via-sky-500/5 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium tracking-wide text-sky-400 mb-3">
              {PERSONAL_INFO.title}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08] uppercase [text-wrap:balance]">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-4 text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-800 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <Download className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 cursor-pointer"
              >
                <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Isometric Semiconductor Chip Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-xl border border-slate-800 bg-[#0F1624] p-5 sm:p-6 flex flex-col">
              <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-800/80">
                <Cpu className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-100 truncate">
                  VLSI Physical Design Illustration
                </span>
              </div>

              <div className="mt-4 flex-1 rounded-lg border border-slate-800/90 bg-[#070B12] overflow-hidden flex items-center justify-center p-2">
                <svg
                  viewBox="0 0 440 264"
                  className="w-full h-56 sm:h-64 block"
                  role="img"
                  aria-label="3D isometric semiconductor chip illustration showing an organized digital physical design floorplan with SRAM macro blocks, standard-cell regions, and routing traces"
                >
                  <defs>
                    <radialGradient id="chipAmbientGlow" cx="50%" cy="50%" r="55%">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.22" />
                      <stop offset="55%" stopColor="#14B8A6" stopOpacity="0.07" />
                      <stop offset="100%" stopColor="#070B12" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="dieSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0F1C34" />
                      <stop offset="100%" stopColor="#091121" />
                    </linearGradient>
                    <linearGradient id="macroTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F2C6B" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="coreTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0D253F" />
                      <stop offset="100%" stopColor="#0A192F" />
                    </linearGradient>
                  </defs>

                  {/* Soft Ambient Lighting Behind Chip */}
                  <ellipse cx="220" cy="138" rx="185" ry="102" fill="url(#chipAmbientGlow)" />

                  {/* Subtle Isometric Background Grid */}
                  {[-0.2, 0, 0.25, 0.5, 0.75, 1, 1.2].map((g) => {
                    const [x1, y1] = iso(g, -0.25, -14);
                    const [x2, y2] = iso(g, 1.25, -14);
                    const [x3, y3] = iso(-0.25, g, -14);
                    const [x4, y4] = iso(1.25, g, -14);
                    return (
                      <g key={`grid-${g}`} stroke="#1E293B" strokeOpacity="0.35" strokeWidth="0.7">
                        <line x1={x1} y1={y1} x2={x2} y2={y2} />
                        <line x1={x3} y1={y3} x2={x4} y2={y4} />
                      </g>
                    );
                  })}

                  {/* External Package Leads / I/O Traces */}
                  {leadOffsets.map((t) => {
                    const [lx1, ly1] = iso(-0.07, t, -6);
                    const [lx2, ly2] = iso(-0.15, t, -6);
                    const [rx1, ry1] = iso(1.07, t, -6);
                    const [rx2, ry2] = iso(1.15, t, -6);
                    const [tx1, ty1] = iso(t, -0.07, -6);
                    const [tx2, ty2] = iso(t, -0.15, -6);
                    const [bx1, by1] = iso(t, 1.07, -6);
                    const [bx2, by2] = iso(t, 1.15, -6);
                    return (
                      <g key={`leads-${t}`} stroke="#0EA5E9" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round">
                        <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} />
                        <line x1={rx1} y1={ry1} x2={rx2} y2={ry2} />
                        <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} />
                        <line x1={bx1} y1={by1} x2={bx2} y2={by2} />
                      </g>
                    );
                  })}

                  {/* 3D Chip Package Substrate Base */}
                  <IsoBlock
                    u1={-0.07}
                    v1={-0.07}
                    u2={1.07}
                    v2={1.07}
                    zBase={-12}
                    height={12}
                    topFill="#0B1324"
                    leftFill="#08101E"
                    rightFill="#060B16"
                    stroke="#1E3A5F"
                    strokeWidth={1.1}
                  />

                  {/* Main Silicon Die Plate */}
                  <IsoBlock
                    u1={0}
                    v1={0}
                    u2={1}
                    v2={1}
                    zBase={0}
                    height={5}
                    topFill="url(#dieSurfaceGrad)"
                    leftFill="#0D223D"
                    rightFill="#09172B"
                    stroke="#38BDF8"
                    strokeWidth={1.1}
                  />

                  {/* Power Ring Perimeter Inside Floorplan */}
                  <polygon
                    points={pts([
                      iso(0.045, 0.045, 5.2),
                      iso(0.955, 0.045, 5.2),
                      iso(0.955, 0.955, 5.2),
                      iso(0.045, 0.955, 5.2),
                    ])}
                    fill="none"
                    stroke="#2DD4BF"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />

                  {/* Connecting Routes & Circuit Traces Between Blocks */}
                  {traces.map((trace, idx) => (
                    <g key={`trace-${idx}`}>
                      <polyline
                        points={pts(trace.path.map(([u, v]) => iso(u, v, 5.4)))}
                        fill="none"
                        stroke={trace.color}
                        strokeOpacity="0.72"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx={iso(trace.path[0][0], trace.path[0][1], 5.4)[0]}
                        cy={iso(trace.path[0][0], trace.path[0][1], 5.4)[1]}
                        r="1.7"
                        fill={trace.color}
                      />
                      <circle
                        cx={iso(trace.path[trace.path.length - 1][0], trace.path[trace.path.length - 1][1], 5.4)[0]}
                        cy={iso(trace.path[trace.path.length - 1][0], trace.path[trace.path.length - 1][1], 5.4)[1]}
                        r="1.7"
                        fill={trace.color}
                      />
                    </g>
                  ))}

                  {/* Upper Standard-Cell Core Region */}
                  <IsoBlock
                    u1={0.35}
                    v1={0.11}
                    u2={0.65}
                    v2={0.46}
                    zBase={5}
                    height={5}
                    topFill="url(#coreTopGrad)"
                    leftFill="#0F2A47"
                    rightFill="#0B1E36"
                    stroke="#2DD4BF"
                    strokeWidth={0.9}
                  />
                  {[0.17, 0.23, 0.29, 0.35, 0.41].map((vRow) => {
                    const [x1, y1] = iso(0.38, vRow, 10.2);
                    const [x2, y2] = iso(0.62, vRow, 10.2);
                    return (
                      <line
                        key={`std-u-${vRow}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#2DD4BF"
                        strokeOpacity="0.45"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Lower Standard-Cell Core Region */}
                  <IsoBlock
                    u1={0.35}
                    v1={0.53}
                    u2={0.65}
                    v2={0.89}
                    zBase={5}
                    height={5}
                    topFill="url(#coreTopGrad)"
                    leftFill="#102C4D"
                    rightFill="#0B1E36"
                    stroke="#38BDF8"
                    strokeWidth={0.9}
                  />
                  {[0.59, 0.65, 0.71, 0.77, 0.83].map((vRow) => {
                    const [x1, y1] = iso(0.38, vRow, 10.2);
                    const [x2, y2] = iso(0.62, vRow, 10.2);
                    return (
                      <line
                        key={`std-l-${vRow}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#38BDF8"
                        strokeOpacity="0.48"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Top-Left SRAM Macro #1 */}
                  <IsoBlock
                    u1={0.09}
                    v1={0.10}
                    u2={0.28}
                    v2={0.34}
                    zBase={5}
                    height={9}
                    topFill="url(#macroTopGrad)"
                    leftFill="#172E6E"
                    rightFill="#10204E"
                    stroke="#38BDF8"
                    strokeWidth={1}
                  />

                  {/* Mid-Left SRAM Macro #2 */}
                  <IsoBlock
                    u1={0.09}
                    v1={0.39}
                    u2={0.28}
                    v2={0.63}
                    zBase={5}
                    height={9}
                    topFill="url(#macroTopGrad)"
                    leftFill="#172E6E"
                    rightFill="#10204E"
                    stroke="#38BDF8"
                    strokeWidth={1}
                  />

                  {/* Bottom-Left Macro Block */}
                  <IsoBlock
                    u1={0.09}
                    v1={0.69}
                    u2={0.30}
                    v2={0.90}
                    zBase={5}
                    height={8}
                    topFill="#0F4C5C"
                    leftFill="#0B3B48"
                    rightFill="#082A34"
                    stroke="#2DD4BF"
                    strokeWidth={1}
                  />

                  {/* Top-Right SRAM Macro #3 */}
                  <IsoBlock
                    u1={0.72}
                    v1={0.10}
                    u2={0.91}
                    v2={0.34}
                    zBase={5}
                    height={9}
                    topFill="url(#macroTopGrad)"
                    leftFill="#172E6E"
                    rightFill="#10204E"
                    stroke="#38BDF8"
                    strokeWidth={1}
                  />

                  {/* Mid-Right SRAM Macro #4 */}
                  <IsoBlock
                    u1={0.72}
                    v1={0.39}
                    u2={0.91}
                    v2={0.63}
                    zBase={5}
                    height={9}
                    topFill="url(#macroTopGrad)"
                    leftFill="#172E6E"
                    rightFill="#10204E"
                    stroke="#38BDF8"
                    strokeWidth={1}
                  />

                  {/* Bottom-Right Functional Macro Block */}
                  <IsoBlock
                    u1={0.70}
                    v1={0.69}
                    u2={0.91}
                    v2={0.90}
                    zBase={5}
                    height={8}
                    topFill="#0F4C5C"
                    leftFill="#0B3B48"
                    rightFill="#082A34"
                    stroke="#2DD4BF"
                    strokeWidth={1}
                  />

                  {/* Subtle Top Highlight Stripes on Macros */}
                  {[
                    [0.12, 0.14, 0.25, 0.14],
                    [0.12, 0.43, 0.25, 0.43],
                    [0.75, 0.14, 0.88, 0.14],
                    [0.75, 0.43, 0.88, 0.43],
                  ].map(([uA, vA, uB, vB], idx) => {
                    const [x1, y1] = iso(uA, vA, 14.3);
                    const [x2, y2] = iso(uB, vB, 14.3);
                    return (
                      <line
                        key={`cap-${idx}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#7DD3FC"
                        strokeOpacity="0.75"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column KPI Row Below Hero Split */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_KEY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-800/90 bg-[#0F1624] p-4"
            >
              <p className="text-xs font-medium text-slate-400">{metric.label}</p>
              <p className="mt-1.5 font-mono text-xl font-semibold text-white tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{metric.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
