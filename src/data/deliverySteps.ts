import { DeliveryStage } from "@/types";

export const deliveryStages: DeliveryStage[] = [
  {
    step: "01",
    title: "Understand the Brief",
    portfolioName: "Client Coordination",
    description: "Establishing open, direct communication channels to fully comprehend architectural intent, milestone requirements, and project constraints from day one.",
    keyActions: [
      "In-depth discovery session with developer/client project heads",
      "Mapping architectural vision and trade expectations",
      "Setting baseline timelines and reporting cadence",
    ],
  },
  {
    step: "02",
    title: "Review Drawings & Scope",
    portfolioName: "Technical Analysis",
    description: "Detailed pre-construction technical analysis of architectural drawings, structural sections, and MEP layouts to spot discrepancies before site execution.",
    keyActions: [
      "Cross-discipline drawing overlay to identify clashes early",
      "Value-engineering evaluations and material suitability checks",
      "Confirmation of dimensional tolerances and finishing details",
    ],
  },
  {
    step: "03",
    title: "Plan Procurement & Work Fronts",
    portfolioName: "Material Procurement & Front Management",
    description: "Synchronizing material logistics with proactive front generation to ensure continuous workflow without bottleneck delays.",
    keyActions: [
      "Bulk material sourcing from vetted manufacturers with test certificates",
      "Strategic work-front generation to prevent team overcrowding",
      "Intelligent cutting schedules to minimize on-site material wastage",
    ],
  },
  {
    step: "04",
    title: "Coordinate Execution",
    portfolioName: "Single-Point Execution",
    description: "Deploying experienced civil engineers and dedicated finishing supervisors to coordinate wet and dry trades under one unified standard.",
    keyActions: [
      "Daily site coordination between civil, MEP, and finishing trades",
      "Substrate preparation audits prior to starting subsequent layers",
      "Clean-site discipline and safety protocol enforcement",
    ],
  },
  {
    step: "05",
    title: "Inspect Workmanship & Finishes",
    portfolioName: "Quality Assurance",
    description: "Multi-stage inspection protocols verifying every level, joint, reveal, and coating against exacting tolerance benchmarks.",
    keyActions: [
      "Laser-level and acoustic hollow-tap testing across tile and marble beds",
      "Cross-light halogen inspections on gypsum punning and painted surfaces",
      "24-hour hydrostatic pressure testing on concealed plumbing lines",
    ],
  },
  {
    step: "06",
    title: "Prepare Handover",
    portfolioName: "Handover & Snag Clearance",
    description: "Systematic snag rectification, final finish detailing, and structured documentation delivery for a seamless client handover.",
    keyActions: [
      "Zero-defect snag list verification prior to client walkthrough",
      "Protective surface cleaning and architectural polish detailing",
      "Handover dossier including warranties, test reports, and maintenance guidance",
    ],
  },
];
