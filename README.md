# Venenka Karthik — VLSI Physical Design Portfolio

Personal semiconductor engineering portfolio built with React, TypeScript, Tailwind CSS v4, Lucide React, and Motion. All metrics, project deliverables, academic credentials, and Cadence Genus / Innovus screenshots are sourced directly from the uploaded resume and tool outputs.

## Key Sections

- **Hero**: Identity, RTL-to-GDS focus, CVA6 Innovus layout showcase, KPI summary, and resume / contact actions.
- **About Me**: ECE engineering background, Sumedha IT VLSI Physical Design training, strengths, languages, and career objective.
- **Technical Skills**: Interactive skill groups covering EDA Tools, Physical Design, Timing Analysis, Design Analysis, and Programming & Scripting.
- **Project Experience**:
  - `CVA6 Processor – Physical Design` (Ongoing: Synthesis, Floorplan, Power & Placement completed; CTS, timing & DRC analysis ongoing)
  - `AES Core – Synthesis and Placement` (Synthesis & Placement completed)
  - `RTL Half-Cycle Timing Testcases` (Synthesis & Half-Cycle path analysis completed)
- **Project Image Gallery**: Filterable archive of real Cadence Genus and Innovus reports and layouts with fullscreen zoom lightbox.
- **Physical Design Flow**: 8-stage RTL-to-Signoff pipeline distinguishing Completed, Ongoing (`CTS`), and Upcoming (`Routing`, `Signoff`) stages.
- **Education & Certifications**: B.Tech ECE (`7.72 CGPA`), Intermediate (`85.8%`), SSC (`10.0 GPA`), Sumedha IT training, and Skill Dzire certification.
- **Resume & Contact**: PDF download, open-in-tab, inline preview, email/phone copy actions, and LinkedIn profile link.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Vercel Deployment

```bash
npm run build
```

Deploy directly to Vercel using the included `vercel.json` configuration (`buildCommand: "npm run build"`, `outputDirectory: "dist"`).
