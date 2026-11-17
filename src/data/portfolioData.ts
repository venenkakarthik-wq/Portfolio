export interface PersonalInfo {
  name: string;
  title: string;
  identity: string;
  heroSubtitle: string;
  intro: string;
  careerObjective: string;
  educationShort: string;
  training: string;
  email: string;
  phone: string;
  linkedin: string;
  strengths: string[];
  languages: string[];
  resumeUrl: string;
  resumeFileName: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  items: string[];
}

export type FlowStageStatus = 'completed' | 'latest';

export interface PdFlowStage {
  id: string;
  stepNumber: string;
  name: string;
  shortLabel: string;
  status: FlowStageStatus;
  tools: string;
  summary: string;
  deliverables: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export type GalleryCategory =
  | 'Physical Design Flow'
  | 'Placement and CTS'
  | 'Routing Results'
  | 'Post-Route Analysis'
  | 'Timing and Design Rule Reports'
  | 'AES & Half-Cycle';

export interface ProjectVisual {
  id: string;
  projectId: 'cva6-processor' | 'aes-core' | 'half-cycle-timing';
  projectName: string;
  category: GalleryCategory;
  stage: string;
  title: string;
  caption: string;
  explanation: string;
  imageUrl?: string;
  kind?: 'aes-placement' | 'aes-timing' | 'halfcycle-waveforms' | 'halfcycle-paths';
}

export interface ProjectItem {
  id: 'cva6-processor' | 'aes-core' | 'half-cycle-timing';
  code: string;
  title: string;
  status: 'Post-Route Completed' | 'Completed Stages';
  statusDetail: string;
  completedStages: string[];
  inProgressStages: string[];
  tools: string[];
  summary: string;
  implementation: string;
  highlights: string[];
  metrics: ProjectMetric[];
}

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  detail: string;
}

export interface CertificationRecord {
  id: string;
  title: string;
  provider: string;
  type: 'Training' | 'Certification';
  description: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Venenka Karthik',
  title: 'VLSI Physical Design Engineer',
  identity: 'VLSI Physical Design Engineer | Electronics and Communication Engineering Graduate',
  heroSubtitle:
    'Building knowledge and practical experience in semiconductor physical design, RTL-to-GDS implementation and timing optimization.',
  intro:
    'I am an Electronics and Communication Engineering graduate currently undergoing VLSI Physical Design training at Sumedha IT. I have practical exposure to the RTL-to-physical-design flow using Cadence Genus and Innovus. My technical interests include synthesis, floorplanning, macro placement, power planning, placement, clock tree synthesis, routing, and post-route timing and congestion analysis.',
  careerObjective:
    'Seeking an entry-level VLSI Physical Design role where I can apply my tool-flow knowledge and analytical skills.',
  educationShort: 'B.Tech – ECE (CGPA 7.72)',
  training: 'VLSI Physical Design Training – Sumedha IT',
  email: 'venenkakarthik@gmail.com',
  phone: '9392820161',
  linkedin: 'https://www.linkedin.com/in/venenka-karthik-1a9617357',
  strengths: [
    'Analytical problem solving',
    'Attention to detail',
    'Report-based debugging',
    'Quick learner',
  ],
  languages: ['English', 'Telugu', 'Hindi'],
  resumeUrl: '/assets/aistudio/karthik_resume_PD_12b74fff.pdf',
  resumeFileName: 'Venenka_Karthik_Resume_PD.pdf',
};

export const HERO_KEY_METRICS = [
  { label: 'CVA6 Block Scale', value: '~100K', sublabel: '24 Macros · ~8K Ports' },
  { label: 'CVA6 Current Stage', value: 'Post-Route', sublabel: 'Routing & DRC Analysis Done' },
  { label: 'Core Utilization', value: '79.4%', sublabel: '936 µm × 972 µm Floorplan' },
  { label: 'DRC Progress', value: '1,000 → 11', sublabel: 'Post-Route verify_drc Clean-up' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'eda-tools',
    category: 'EDA Tools',
    description: 'Hands-on RTL synthesis and block-level physical implementation in Cadence tools.',
    items: ['Cadence Genus', 'Cadence Innovus'],
  },
  {
    id: 'physical-design',
    category: 'Physical Design',
    description: 'Core RTL-to-GDS physical implementation stages through routing and post-route analysis.',
    items: [
      'Synthesis',
      'Floorplanning',
      'Macro Placement',
      'Power Planning',
      'Placement',
      'CTS',
      'Routing',
    ],
  },
  {
    id: 'timing-analysis',
    category: 'Timing Analysis',
    description: 'Static timing verification, multi-clock constraints, and DRV violation debugging.',
    items: [
      'Setup and Hold Analysis',
      'WNS',
      'TNS',
      'FEP',
      'Clock Skew',
      'Max Transition',
      'Max Fanout',
      'Half-Cycle Paths',
      'Generated Clocks',
    ],
  },
  {
    id: 'design-analysis',
    category: 'Design Analysis',
    description: 'Report-driven layout diagnostics, physical cell insertion, and floorplan hygiene.',
    items: [
      'Congestion Analysis',
      'Hotspot Analysis',
      'Core Utilization',
      'Module Density',
      'Placement Blockages',
      'Macro Halos',
      'PG Planning',
      'IO/Port Placement',
      'Tap Cells',
      'End-Cap Cells',
    ],
  },
  {
    id: 'programming-scripting',
    category: 'Programming and Scripting',
    description: 'Flow scripting, collection queries, Unix workspace automation, and RTL.',
    items: ['TCL', 'Linux', 'Python', 'Verilog'],
  },
];

export const PD_FLOW_STAGES: PdFlowStage[] = [
  {
    id: 'rtl-design',
    stepNumber: '01',
    name: 'RTL Design',
    shortLabel: 'RTL Design',
    status: 'completed',
    tools: 'Verilog · SystemVerilog · SDC',
    summary:
      'Reviewed RTL filelists, hierarchy, and timing constraint intent including clock period definitions (1.5 ns CVA6; 1.0 ns AES; multi-clock testcases) and path groups.',
    deliverables: ['Verilog / SV RTL sources', 'cva6_sdc timing constraints', 'Unresolved module checks'],
  },
  {
    id: 'synthesis',
    stepNumber: '02',
    name: 'Synthesis',
    shortLabel: 'Synthesis',
    status: 'completed',
    tools: 'Cadence Genus',
    summary:
      'Completed generic, technology-mapped, and optimized synthesis (syn.tcl) across CVA6 Processor (201,568 leaf instances), AES Core, and Half-Cycle Timing Testcases.',
    deliverables: ['syn_generic / syn_map / syn_opt', 'Gate-level netlist & DB', 'Genus QoR & cost-group reports'],
  },
  {
    id: 'floorplanning',
    stepNumber: '03',
    name: 'Floorplanning',
    shortLabel: 'Floorplanning',
    status: 'completed',
    tools: 'Cadence Innovus',
    summary:
      'Initialized die/core dimensions (936 µm × 972 µm CVA6; 300 µm × 300 µm AES), arranged 24 SRAM macros into banks with routing corridors, and checked 8,416 IO pins.',
    deliverables: ['Die/core initialization', '24-macro placement & channels', 'check_pin_assignment verification'],
  },
  {
    id: 'power-planning',
    stepNumber: '04',
    name: 'Power Planning',
    shortLabel: 'Power Planning',
    status: 'completed',
    tools: 'Cadence Innovus',
    summary:
      'Constructed VDD/VSS power grid rings, stripes, and follow-pin rails across upper/lower metal layers and audited via connectivity using verify_power_via.',
    deliverables: ['Core & macro power grid', 'DCAP / tap / end-cap planning', 'verify_power_via diagnostics'],
  },
  {
    id: 'placement',
    stepNumber: '05',
    name: 'Placement',
    shortLabel: 'Placement',
    status: 'completed',
    tools: 'Cadence Innovus',
    summary:
      'Completed standard-cell placement on AES Core (~10K cells) and CVA6 Processor (79.409% core utilization, 63.7% module density, 0.1156 pin density, 0.05% H / 0.82% V overflow).',
    deliverables: ['Standard-cell legalization', 'Pin density & congestion maps', 'Module hotspot & unevenness reports'],
  },
  {
    id: 'cts',
    stepNumber: '06',
    name: 'Clock Tree Synthesis (CTS)',
    shortLabel: 'CTS',
    status: 'completed',
    tools: 'Cadence Innovus',
    summary:
      'Completed clock tree synthesis and multi-corner timing checks (setup WNS -0.273 ns with 0 real max_tran; hold WNS -0.168 ns reduced to 73 paths) plus filler insertion.',
    deliverables: ['Clock tree buffering (cts_opt)', 'Multi-corner setup & hold checks', 'Post-CTS congestion (0.06% H / 0.82% V)'],
  },
  {
    id: 'routing',
    stepNumber: '07',
    name: 'Routing',
    shortLabel: 'Routing',
    status: 'completed',
    tools: 'Cadence Innovus',
    summary:
      'Completed full-die signal routing across the 936 µm × 972 µm CVA6 core with 100.000% cell density with fillers (99.03% uniform bin coverage, 0.000% unevenness ratio).',
    deliverables: ['Global & detailed signal routing', '100.000% density with fillers', 'Full-die routed metal grid'],
  },
  {
    id: 'post-route-analysis',
    stepNumber: '08',
    name: 'Post-Route Analysis',
    shortLabel: 'Post-Route Analysis',
    status: 'latest',
    tools: 'Cadence Innovus STA & Verify DRC',
    summary:
      'Latest active stage on CVA6 Processor: progressed through routing into post-route timing (Setup WNS -0.414 ns / Hold WNS -0.203 ns across 53,605 paths), connectivity, and verify_drc analysis (reduced from 1,000 initial violations down to 11 geometry violations).',
    deliverables: ['Post-route setup & hold STA', 'verify_drc (11 geometry violations)', 'Violation Browser & connectivity audit'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cva6-processor',
    code: 'Project 01',
    title: 'CVA6 Processor – Physical Design',
    status: 'Post-Route Completed',
    statusDetail: 'Post-Route Completed · Progressed through Routing into Post-Route Timing & DRC Analysis',
    completedStages: [
      'RTL Design & SDC Constraints',
      'Synthesis (Cadence Genus)',
      'Floorplanning & 24-Macro Placement',
      'Power Planning & PG Grid',
      'Placement & Congestion Checks',
      'Clock Tree Synthesis (CTS)',
      'Full-Die Routing & Fillers',
      'Post-Route Analysis (Timing & DRC)',
    ],
    inProgressStages: [],
    tools: ['Cadence Genus', 'Cadence Innovus', 'TSMC N28', 'TCL'],
    summary:
      'Full block-level RTL-to-physical-design implementation of the RISC-V CVA6 processor (~100K instances, 24 macros, ~8K ports) running on a single 1.5 ns clock across a 936 µm × 972 µm die. The project has progressed through routing and is now at the Post-Route Analysis stage.',
    implementation:
      'Progressed sequentially through Genus synthesis, 24-macro floorplanning, PG grid construction, placement, CTS, filler insertion, and full-die routing in Cadence Innovus. In the current Post-Route Analysis stage, evaluated post-route multi-corner setup/hold timing (Setup WNS -0.414 ns, Hold WNS -0.203 ns with 100.000% filler density), inspected Violation Browser geometry markers, and reduced verify_drc violations from 1,000 down to 11.',
    highlights: [
      '~100K instances (~0.1M), 24 SRAM macros, ~8K ports (8,416 top pins checked) on a 936 µm × 972 µm die (1.5 ns clock)',
      'Progressed through Routing into Post-Route Analysis with 100.000% density with fillers (0.000% unevenness ratio)',
      'Core utilization ~79.4% (79.409%), average module density 63.7%, and routed congestion overflow 0.06% H / 0.82% V (placement: 0.05% H / 0.82% V)',
      'Post-Route multi-corner STA reports: Setup WNS -0.414 ns / TNS -673.139 ns; Hold WNS -0.203 ns / TNS -11.546 ns (511 hold violating paths)',
      'Post-Route verify_drc violations reduced from 1,000 initial hits down to 11 geometry violations (CutEol 5, WMJ 4, MetSpc 2)',
    ],
    metrics: [
      { label: 'Instances / Macros', value: '~100K / 24', detail: '~8K ports (8,416 pins)' },
      { label: 'Die & Clock', value: '936 × 972 µm', detail: '1.5 ns single clock' },
      { label: 'Core Utilization', value: '79.4%', detail: 'Avg module density: 63.7%' },
      { label: 'Filler Density', value: '100.000%', detail: '55.279% active std-cell' },
      { label: 'Congestion Overflow', value: '0.06% H / 0.82% V', detail: '0.05% H / 0.82% V base' },
      { label: 'Post-Route Setup', value: '-0.414 ns', detail: 'TNS -673.139 ns (SS)' },
      { label: 'Post-Route Hold', value: '-0.203 ns', detail: 'TNS -11.546 ns (FF)' },
      { label: 'Post-Route DRC', value: '11 Viols', detail: 'Down from 1,000 initial' },
    ],
  },
  {
    id: 'aes-core',
    code: 'Project 02',
    title: 'AES Core – Synthesis and Placement',
    status: 'Completed Stages',
    statusDetail: 'Synthesis & Placement Completed',
    completedStages: [
      'RTL Constraint Review',
      'Synthesis (Cadence Genus)',
      'Floorplanning (300 × 300 µm)',
      'Standard-Cell Placement (Innovus)',
    ],
    inProgressStages: [],
    tools: ['Cadence Genus', 'Cadence Innovus', 'Verilog'],
    summary:
      'Single-clock-domain cryptographic AES core physical implementation featuring ~10K standard cells and zero hard macros inside a compact 300 µm × 300 µm core.',
    implementation:
      'Completed RTL-to-gate synthesis in Cadence Genus and standard-cell placement in Cadence Innovus under a 1 ns single-clock timing constraint.',
    highlights: [
      'Approximately 10K standard cells with zero hard macros',
      'Single synchronous clock domain operating at a 1 ns clock period',
      'Compact 300 µm × 300 µm floorplan dimensions',
      'Synthesis and placement stages completed cleanly',
    ],
    metrics: [
      { label: 'Standard Cells', value: '~10K', detail: 'Macro-free core' },
      { label: 'Macros', value: '0', detail: 'Pure standard-cell design' },
      { label: 'Clock Domains', value: '1', detail: 'Single clock domain' },
      { label: 'Clock Period', value: '1.0 ns', detail: '1 GHz target' },
      { label: 'Dimensions', value: '300 × 300 µm', detail: 'Die dimensions' },
      { label: 'Status', value: 'Completed', detail: 'Synthesis & Placement' },
    ],
  },
  {
    id: 'half-cycle-timing',
    code: 'Project 03',
    title: 'RTL Half-Cycle Timing Testcases',
    status: 'Completed Stages',
    statusDetail: 'Synthesis & Half-Cycle Timing Analysis Completed',
    completedStages: [
      'Multi-Clock SDC Modeling',
      'Synthesis (Cadence Genus)',
      'Half-Cycle Path & Clock Relationship Analysis',
    ],
    inProgressStages: [],
    tools: ['Cadence Genus', 'Verilog', 'SDC'],
    summary:
      'Multi-clock static timing testcase design evaluating three primary clock domains (1 ns, 2.2 ns, and 4.4 ns) alongside one derived generated clock.',
    implementation:
      'Completed synthesis in Cadence Genus and analyzed half-cycle launch-to-capture timing paths, edge alignments, and inter-clock timing relationships.',
    highlights: [
      'Three clock domains with periods of 1 ns, 2.2 ns, and 4.4 ns',
      'One derived generated clock modeled in SDC',
      'Synthesis completed in Cadence Genus',
      'Analyzed half-cycle setup/hold paths and clock edge relationships',
    ],
    metrics: [
      { label: 'Clock Domains', value: '3', detail: 'Primary clock groups' },
      { label: 'Generated Clocks', value: '1', detail: 'Derived clock' },
      { label: 'Clock Periods', value: '1 / 2.2 / 4.4 ns', detail: 'Multi-frequency targets' },
      { label: 'Milestone', value: 'Synthesis Done', detail: 'Cadence Genus' },
      { label: 'Path Focus', value: 'Half-Cycle', detail: 'Launch/capture edges' },
      { label: 'Analysis', value: 'Setup & Hold', detail: 'Clock relationships' },
    ],
  },
];

export const GALLERY_VISUALS: ProjectVisual[] = [
  // Category: Post-Route Analysis (Latest Stage)
  {
    id: 'cva6-postroute-setup',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Post-Route Analysis',
    stage: 'Post-Route Analysis (Setup STA)',
    title: 'Post-Route Multi-Corner Setup Timing Summary (time_design #1)',
    caption: 'Post-route setup report with 100.000% filler density (55.279% std-cell) showing WNS -0.414 ns, TNS -673.139 ns, and 10,082 / 53,605 violating paths.',
    explanation:
      'Executed post-route setup timing analysis across func_setup_ss125c_rcw and func_setup_ssm40c_cw views after Reset AAE Options, capturing real max_cap (0), max_tran (1,111), and max_fanout (1,488) DRV counts.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_160752_b11b4b54.png',
  },
  {
    id: 'cva6-postroute-hold',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Post-Route Analysis',
    stage: 'Post-Route Analysis (Hold STA)',
    title: 'Post-Route Multi-Corner Hold Timing Summary (time_design #2)',
    caption: 'Post-route hold timing across ff125c_rcb & ffm40c_cb views showing WNS -0.203 ns (-0.016 ns reg2reg, -0.203 ns reg2mem), TNS -11.546 ns, and 511 violating paths.',
    explanation:
      'Evaluated post-route hold slack with 100.000% filler density across all 53,605 paths; in2reg, reg2out, in2out, and default groups remain hold-clean with violations isolated to reg2reg (102) and reg2mem (409).',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_161550_1d813e0f.png',
  },
  {
    id: 'cva6-postroute-drc-summary',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Post-Route Analysis',
    stage: 'Post-Route Analysis (Verify DRC)',
    title: 'Post-Route Verify DRC Summary (11 Geometry Violations)',
    caption: 'Post-route verify_drc report confirming 11 total violations across M2 (2 MetSpc), VIA3 (2 CutEol), M4 (4 WMJ), and VIA4 (3 CutEol).',
    explanation:
      'Tracks post-route DRC closure progress from the initial 1,000-violation limit down to 11 localized spacing and cut-EOL geometry checks across the full 936 × 972 µm die.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_162421_58a6bcab.png',
  },
  {
    id: 'cva6-postroute-violation-browser',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Post-Route Analysis',
    stage: 'Post-Route Analysis (Violation Browser)',
    title: 'Post-Route Innovus Violation Browser (11/11 Geometry)',
    caption: 'Interactive Violation Browser classifying all 11 remaining geometry hits: Cut_EOL_Spacing (5), Metal_JogToJog_Spacing (4), and Parallel_Run_Length_Spacing (2).',
    explanation:
      'Pinpoints exact post-route violating instances and nets (gen_cache_wt.i_cache_subsystem, issue_stage_i, ex_stage_i) for final signoff cleanup.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_161727_25e540d7.png',
  },

  // Category: Routing Results
  {
    id: 'cva6-routed-die-layout',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Routing Results',
    stage: 'Routing (Full-Die Layout)',
    title: 'Full Routed CVA6 Processor Die with 11 Remaining DRC Markers',
    caption: 'Full-die Cadence Innovus layout after detailed routing showing dense multi-layer metal interconnect and only 11 isolated white DRC markers.',
    explanation:
      'Demonstrates completed signal routing across the 936 µm × 972 µm CVA6 core, reducing widespread early-route markers down to 11 localized points.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_161703_9e0099fc.png',
  },
  {
    id: 'cva6-density-postfiller',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Routing Results',
    stage: 'Routing Preparation (Filler Insertion)',
    title: 'Post-Filler Uniform Density Report (0.000% Unevenness)',
    caption: 'report_density_map after filler cell insertion showing 99.03% of core bins (10,506 / 10,609) in the (0.950–1.000] range with 0.000% unevenness ratio.',
    explanation:
      'Confirms continuous standard-cell row well/implant alignment (100.000% density with fillers) prior to final routing and post-route signoff checks.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_153931_5e19a7e3.png',
  },
  {
    id: 'cva6-routed-congestion',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Routing Results',
    stage: 'Post-CTS / Route Congestion',
    title: 'Global Routing Congestion & Hotspot Report (0.06% H / 0.82% V)',
    caption: 'report_congestion -overflow -hotspot showing 26.3% H / 36.8% V usage, 0.06% H / 0.82% V overflow, and normalized max hotspot 3.38.',
    explanation:
      'Evaluates horizontal and vertical routing track utilization and maps remaining localized hotspot bounding boxes including ex_stage_i.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_154139_7474cdf7.png',
  },

  // Category: Placement and CTS
  {
    id: 'cva6-placement-view',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'Placement',
    title: 'Standard-Cell Placement Around 24 SRAM Macros',
    caption: 'Cadence Innovus placement view showing ~100K standard cells legalized inside the central and upper corridors between 24 SRAM macros.',
    explanation:
      'Displays standard-cell row population around the macro channels inside the 936 µm × 972 µm CVA6 floorplan.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_095806_8b68a84b.png',
  },
  {
    id: 'cva6-pin-density-heatmap',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'Placement Diagnostics',
    title: 'Pin Density Thermal Overlay Heatmap',
    caption: 'Innovus Pin Density overlay identifying high pin-concentration zones along SRAM macro boundaries and the central standard-cell corridor.',
    explanation:
      'Spatial pin-density thermal visualization used to inspect cell spreading and mitigate local routing hotspots before CTS and routing.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_105708_96d4897f.png',
  },
  {
    id: 'cva6-module-highlight',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'Placement Module Analysis',
    title: 'Execution Stage (ex_stage_i) Module Clustering',
    caption: 'Innovus GUI highlight isolating ex_stage_i standard-cell placement across the central and upper regions.',
    explanation:
      'Correlates critical datapath timing and localized congestion hotspots back to the CVA6 execution stage hierarchy.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_105413_a5045506.png',
  },
  {
    id: 'cva6-utilization-report',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'Placement Metrics',
    title: 'Core Utilization (79.4%) & Module Density (63.7%) Report',
    caption: 'Innovus utilization report confirming Core utilization = 79.409%, Average module density = 0.637, and Pin Density = 0.1156.',
    explanation:
      'Documents standard-cell area (205,006 µm²) versus allocated core area (322,016 µm²) and zero off-track pre-routes.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-03_185512_da42743b.png',
  },
  {
    id: 'cva6-cts-setup',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'CTS (Setup Timing)',
    title: 'CTS Multi-Corner Setup Report (0 Real max_tran Violations)',
    caption: 'CTS time_design #1 showing Setup WNS -0.273 ns, TNS -171.369 ns, 1,681 violating paths, and real max_tran cleared to 0.',
    explanation:
      'Post-CTS setup timing checkpoint across ss125c_rcw and ssm40c_cw corners prior to final detailed routing.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_152827_138f40ff.png',
  },
  {
    id: 'cva6-cts-hold',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Placement and CTS',
    stage: 'CTS (Hold Timing)',
    title: 'CTS Multi-Corner Hold Report (Reduced to 73 Paths)',
    caption: 'CTS time_design #2 showing Hold WNS -0.168 ns, TNS -3.132 ns, and violating hold paths reduced from 1,605 down to 73.',
    explanation:
      'Post-CTS hold timing optimization checkpoint showing zero hold violations on in2reg, reg2out, and in2out groups.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_153107_9a1799ed.png',
  },

  // Category: Physical Design Flow
  {
    id: 'cva6-syn-tcl',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'Synthesis (Genus)',
    title: 'CVA6 Synthesis Run Script (syn.tcl)',
    caption: 'TSMC N28 standard cell + SRAM library setup, clock gating insertion, syn_generic, syn_map, and syn_opt execution.',
    explanation:
      'Genus Tcl script configuring LVT/SVT/HVT standard cell libraries and 256x128 / 256x45 SRAM macro libs for CVA6 synthesis.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-16_220724_f77e021c.png',
  },
  {
    id: 'cva6-sdc',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'RTL & Constraints (SDC)',
    title: 'CVA6 Timing Constraints (cva6_sdc)',
    caption: '1.5 ns clk_i definition, 0.3 ns setup / 0.025 ns hold uncertainty, path groups, OCV derates, and CPPR settings.',
    explanation:
      'Defines input/output delays, max transition (0.3 ns), max fanout (32), path weights, and early/late timing derates.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-16_220623_9b0f47da.png',
  },
  {
    id: 'cva6-genus-qor',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'Synthesis (Genus QoR)',
    title: 'Genus QoR, Cost Group Slack & Leaf Instance Summary',
    caption: 'Post-synthesis summary showing clk_i 1.500 ns period, 201,568 leaf instances, 23,677 sequential cells, and 615,350.5 cell area.',
    explanation:
      'Captures timing cost groups (cg_enable_group_clk_i, in2reg, reg2mem, reg2out, reg2reg) right after Genus synthesis optimization.',
    imageUrl: '/assets/aistudio/Screenshot_2026-10-12_100447_62f0e33a.png',
  },
  {
    id: 'cva6-macro-floorplan',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'Floorplanning & Power',
    title: '24-Macro Floorplan & Power Stripe Architecture',
    caption: 'Cadence Innovus layout showing 24 SRAM macros arranged into banks with macro channels and VDD/VSS power stripes.',
    explanation:
      'Floorplan arrangement inside the 936 µm × 972 µm CVA6 block preserving wide standard-cell corridors.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_095837_64f5e4cb.png',
  },
  {
    id: 'cva6-pin-assignment',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'Floorplanning (IO Pins)',
    title: 'Pin Assignment Check (8,416 Top-Level Pins)',
    caption: 'Innovus check_pin_assignment summary verifying 8,414 legal pins out of 8,416 total ports on cva6.',
    explanation:
      'Top-level I/O port legality verification conducted prior to placement and routing.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-16_220323_207acdb9.png',
  },
  {
    id: 'cva6-power-mesh',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Physical Design Flow',
    stage: 'Power Planning',
    title: 'Power Grid & Multi-Layer Metal Routing Mesh',
    caption: 'Innovus GUI view displaying VDD/VSS power rings, stripes, and rail alignment across the CVA6 core.',
    explanation:
      'Visual verification of power distribution rails across core and SRAM macro regions.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-16_220054_c72f8647.png',
  },

  // Category: Timing and Design Rule Reports
  {
    id: 'cva6-timing-summary-initial',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Pre-CTS Timing & DRV',
    title: 'Baseline Timing & DRV Summary (report_timing_summary)',
    caption: 'Setup WNS -0.294 ns, TNS -168.908 ns, FEP 1,795, alongside max_transition and max_fanout DRV checks.',
    explanation:
      'Early-stage baseline timing summary across all path groups plus clock min_period and min_pulse_width diagnostics.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-03_185612_b776f3ad.png',
  },
  {
    id: 'cva6-congestion-baseline',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Placement Congestion Report',
    title: 'Placement Congestion Overflow Report (0.05% H / 0.82% V)',
    caption: 'report_congestion -overflow -hotspot showing 0.05% horizontal overflow, 0.82% vertical overflow, and normalized max hotspot 3.47.',
    explanation:
      'Documents the baseline horizontal and vertical routing overflow metrics verified during placement.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-03_185545_1380f7c6.png',
  },
  {
    id: 'cva6-hold-path-reg2reg',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Timing Path Trace',
    title: 'Detailed reg2reg Hold Path Report (-0.028 ns Slack)',
    caption: 'Path trace from issue_stage_i to ex_stage_i/lsu_i showing launch/capture latency, cts_opt buffer, and cell delays.',
    explanation:
      'Detailed hold path inspection across the 1.500 ns clock edge in fast corner func_hold_ffm40c_cb.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-07_131044_eb05aff9.png',
  },
  {
    id: 'cva6-hold-path-reg2mem',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Timing Path Trace',
    title: 'Reg2Mem Hold Violation Path (i_cache_subsystem)',
    caption: 'Detailed -0.168 ns hold violation trace in func_hold_ff125c_rcb between cache registers and SRAM interface.',
    explanation:
      'Identifies clock skew delta (0.551 ns capture vs. 0.349 ns launch net latency) driving the reg2mem hold check.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-10_102741_d6c34cf9.png',
  },
  {
    id: 'cva6-drc-early-comparison',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Initial DRC Baseline',
    title: 'Early-Stage Verify DRC Summary (1,000 Violations Limit)',
    caption: 'Initial verify_drc run hitting the 1,000-violation cap (Mar 405, EncEdg 274, Short 164, MetSpc 57) before post-route cleanup to 11.',
    explanation:
      'Provides quantitative before-and-after evidence of systematic DRC resolution down to 11 geometry items.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_103022_cf87135f.png',
  },
  {
    id: 'cva6-connectivity-powervia',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Connectivity & Power Via Check',
    title: 'Verify Connectivity & Power Via Diagnostics',
    caption: 'verify_connectivity and verify_power_via output identifying dangling wires, open terminals, and M5-M6 VSS via checks.',
    explanation:
      'Physical connectivity and power-via audit executed while resolving post-route open/via items.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_103053_90604e8f.png',
  },
  {
    id: 'cva6-hotspot-exstage',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Hotspot Report',
    title: 'Module Hotspot Attribution (ex_stage_i)',
    caption: 'Hotspot report mapping top congestion score (3.86) directly to ex_stage_i bounding box (274.44, 460.80).',
    explanation:
      'Links Innovus congestion hotspot bounding boxes to CVA6 functional modules for targeted analysis.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_110634_2ce5d73c.png',
  },
  {
    id: 'cva6-density-map-bins',
    projectId: 'cva6-processor',
    projectName: 'CVA6 Processor',
    category: 'Timing and Design Rule Reports',
    stage: 'Density Report',
    title: 'Pre-Filler Density Distribution Map (report_density_map)',
    caption: '103 × 103 bin density histogram showing 65.23% bins > 0.750 and 13.707% unevenness ratio prior to filler insertion.',
    explanation:
      'Baseline bin-by-bin density breakdown later brought to 99.03% uniform coverage (0.000% unevenness) with fillers.',
    imageUrl: '/assets/aistudio/Screenshot_2026-11-17_110718_e5b7e5b6.png',
  },

  // Category: AES & Half-Cycle (Preserved Projects)
  {
    id: 'aes-placement-schematic',
    projectId: 'aes-core',
    projectName: 'AES Core',
    category: 'AES & Half-Cycle',
    stage: 'Placement (Architectural Schematic)',
    title: 'AES Core 300 µm × 300 µm Standard-Cell Floorplan Diagram',
    caption: 'Architectural diagram of the ~10K standard-cell, macro-free 300 µm × 300 µm core (1.0 ns clock).',
    explanation:
      'Metric-accurate architectural schematic illustrating completed synthesis and placement parameters for the AES Core.',
    kind: 'aes-placement',
  },
  {
    id: 'aes-timing-schematic',
    projectId: 'aes-core',
    projectName: 'AES Core',
    category: 'AES & Half-Cycle',
    stage: 'Timing Target (Architectural Schematic)',
    title: 'AES Core 1.0 ns Single-Clock Constraint Diagram',
    caption: '1.0 ns synchronous clock target and completed Genus synthesis / Innovus placement milestone summary.',
    explanation:
      'Schematic representation of the single-clock-domain 1 ns timing constraint verified through synthesis and placement.',
    kind: 'aes-timing',
  },
  {
    id: 'halfcycle-waveforms-schematic',
    projectId: 'half-cycle-timing',
    projectName: 'RTL Half-Cycle Timing Testcases',
    category: 'AES & Half-Cycle',
    stage: 'Synthesis (Timing Schematic)',
    title: 'Multi-Clock & Generated Clock Relationship Diagram',
    caption: 'Clock period relationships across 1 ns, 2.2 ns, 4.4 ns primary domains and 1 generated clock.',
    explanation:
      'Illustrates clock edge alignments and derived generated clock behavior analyzed during Cadence Genus synthesis.',
    kind: 'halfcycle-waveforms',
  },
  {
    id: 'halfcycle-paths-schematic',
    projectId: 'half-cycle-timing',
    projectName: 'RTL Half-Cycle Timing Testcases',
    category: 'AES & Half-Cycle',
    stage: 'Timing Analysis (Schematic)',
    title: 'Half-Cycle Launch-to-Capture Path Analysis',
    caption: 'Posedge-launch to negedge-capture timing window compression across multi-clock domains.',
    explanation:
      'Visualizes how half-cycle constraints halve the available setup window and shift hold edge checks.',
    kind: 'halfcycle-paths',
  },
];

export const EDUCATION_RECORDS: EducationRecord[] = [
  {
    id: 'btech',
    degree: 'B.Tech – Electronics and Communication Engineering',
    institution: 'Sree Chaitanya Institute of Technological Sciences',
    scoreLabel: 'CGPA',
    scoreValue: '7.72',
    detail: 'Core foundation in digital electronics, CMOS VLSI, semiconductor physics, and signal processing.',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate (MPC)',
    institution: 'Sree Chaitanya Junior College',
    scoreLabel: 'Percentage',
    scoreValue: '85.8%',
    detail: 'Higher secondary education in Mathematics, Physics, and Chemistry.',
  },
  {
    id: 'ssc',
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Sri Srinivasa Ramanujan High School',
    scoreLabel: 'GPA',
    scoreValue: '10.0 GPA',
    detail: 'Completed secondary schooling with a 10.0 GPA.',
  },
];

export const CERTIFICATIONS: CertificationRecord[] = [
  {
    id: 'sumedha-it',
    title: 'VLSI Physical Design Training',
    provider: 'Sumedha IT',
    type: 'Training',
    description:
      'Intensive hands-on RTL-to-GDS physical design training using Cadence Genus and Innovus across synthesis, floorplanning, macro placement, power planning, placement, CTS, routing, and post-route timing and congestion analysis.',
  },
  {
    id: 'skill-dzire',
    title: 'Introduction to VLSI Certification',
    provider: 'Skill Dzire',
    type: 'Certification',
    description:
      'Foundational certification covering VLSI design flow concepts, digital design principles, and semiconductor engineering fundamentals.',
  },
];
