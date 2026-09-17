export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tooling", href: "/tooling" },
  { label: "Welding Fixtures", href: "/welding-fixtures" },
  { label: "R&D Test Lab", href: "/cae-lab" },
  { label: "People", href: "/careers#people" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Fixtures Delivered" },
  { value: 100, suffix: "+", label: "Tooling Projects" },
  { value: 6, suffix: "x", label: "Simulation Domains" },
  { value: 24, suffix: "/7", label: "Engineering Readiness" },
];

export const divisions = [
  {
    title: "Tooling / Die Division",
    href: "/tooling",
    tag: "Precision Manufacturing",
    items: ["Transfer Dies", "Progressive Dies", "Tandem Dies", "Precision Tool Manufacturing"],
    description:
      "High accuracy die engineering supported by simulation, tryout discipline, and production-led tooling feedback.",
  },
  {
    title: "Welding Fixture Division",
    href: "/welding-fixtures",
    tag: "Robotic Automation",
    items: ["BIW Fixtures", "Geo Fixtures", "Re-spot Fixtures", "Robotic Welding Cells"],
    description:
      "Fixture systems built for repeatable body accuracy, ergonomic access, and integrated robotic cell delivery.",
  },
  {
    title: "CAE & Testing Lab",
    href: "/cae-lab",
    tag: "Validation Intelligence",
    items: ["Structural Analysis", "Weld Validation", "Durability Testing", "Simulation Engineering"],
    description:
      "Simulation-driven validation that compresses loops between concept, manufacturing, physical testing, and launch.",
  },
];

export const technologies = [
  "CATIA",
  "NX",
  "HyperMesh",
  "ANSYS",
  "AutoCAD",
  "Process Simulate",
  "Robotic OLP",
  "Digital Metrology",
];

export const projects = [
  {
    title: "BIW Geo Fixture Program",
    type: "Fixtures",
    segment: "Passenger Vehicle",
    cycleTime: "42 sec",
    automation: "92%",
    challenge: "Stabilize body-side geometry across high-volume robotic welding.",
    solution: "Datum-led geo fixtures with poka-yoke clamps, robot access studies, and digital process simulation.",
    result: "Reduced launch rework and improved repeatability across pilot builds.",
    timeline: "14 weeks",
    tech: ["CATIA", "Process Simulate", "Robotic OLP"],
  },
  {
    title: "Progressive Die Development",
    type: "Tooling",
    segment: "EV Platform",
    cycleTime: "18 spm",
    automation: "Tooling",
    challenge: "Deliver tight tolerance panels with controlled springback and minimal tryout loops.",
    solution: "Formability simulation, compensated die surfaces, and staged tryout validation.",
    result: "Stable panel quality with accelerated line readiness.",
    timeline: "20 weeks",
    tech: ["CATIA", "NX", "AutoCAD"],
  },
  {
    title: "Weld Strength Validation",
    type: "CAE",
    segment: "Commercial Vehicle",
    cycleTime: "Virtual",
    automation: "CAE",
    challenge: "Validate weld layout against load cases before fixture freeze.",
    solution: "Structural models, weld sensitivity studies, and physical lab correlation.",
    result: "Optimized weld count while maintaining durability targets.",
    timeline: "6 weeks",
    tech: ["HyperMesh", "ANSYS", "Test Lab"],
  },
  {
    title: "Robotic Re-spot Cell",
    type: "Fixtures",
    segment: "SUV Line",
    cycleTime: "55 sec",
    automation: "88%",
    challenge: "Improve robot reach and fixture maintainability in a compact cell footprint.",
    solution: "Pedestal system redesign, reach envelope checks, and spark-safe cable routing.",
    result: "Higher uptime and simplified operator service access.",
    timeline: "12 weeks",
    tech: ["Process Simulate", "CATIA", "Digital Metrology"],
  },
  {
    title: "Transfer Die Tryout",
    type: "Tooling",
    segment: "Sheet Metal",
    cycleTime: "12 spm",
    automation: "Press Line",
    challenge: "Control wrinkles and splits in deep-draw panel geometry.",
    solution: "Binder pressure tuning, trim development, and reverse-engineered surface correction.",
    result: "Production capable die set with robust draw behavior.",
    timeline: "18 weeks",
    tech: ["NX", "CAE Forming", "CMM"],
  },
  {
    title: "Thermal Distortion Study",
    type: "CAE",
    segment: "Battery Enclosure",
    cycleTime: "Simulation",
    automation: "Digital",
    challenge: "Predict heat-induced distortion around joining zones.",
    solution: "Thermal-structural analysis with material sensitivity and weld sequence review.",
    result: "Revised joint sequence lowered distortion risk before build.",
    timeline: "5 weeks",
    tech: ["ANSYS", "HyperMesh", "Lab Correlation"],
  },
];

export const pageContent = {
  about: {
    eyebrow: "BU5 Tooling Business",
    title: "Engineering capability built for automotive launch discipline.",
    summary:
      "BU5 combines tooling, fixtures, CAE validation, and manufacturing feedback into one engineering operating system.",
    bullets: ["Company overview", "Mission and vision", "Engineering excellence", "Manufacturing capabilities"],
    process: ["Customer Need", "Concept Strategy", "Digital Engineering", "Manufacturing", "Validation", "Launch Support"],
  },
  tooling: {
    eyebrow: "Tooling Division",
    title: "Precision die tooling from concept surfaces to validated press readiness.",
    summary:
      "Transfer, progressive, and tandem tooling programs engineered for accuracy, manufacturability, and faster validation cycles.",
    bullets: ["Transfer Dies", "Progressive Dies", "Tandem Dies", "Reverse Engineering", "Tool Maintenance", "Tryout Support"],
    process: ["Concept", "Design", "Simulation", "Manufacturing", "Validation", "Delivery"],
  },
  welding: {
    eyebrow: "Welding Fixture Division",
    title: "Robotic fixture systems for repeatable body accuracy.",
    summary:
      "BIW fixture engineering, robotic cell integration, and welding process validation for high-volume automotive programs.",
    bullets: ["Geo Fixture", "Re-spot Fixture", "Pedestal Systems", "Robotic Cells", "Grippers", "Checking Fixtures"],
    process: ["Datum Strategy", "Fixture Design", "Robot Reach", "Build", "Tryout", "Commissioning"],
  },
  cae: {
    eyebrow: "CAE & Testing Lab",
    title: "Simulation and lab validation for faster engineering decisions.",
    summary:
      "Advanced structural, thermal, crash, weld, durability, and physical testing workflows that connect virtual and real-world evidence.",
    bullets: ["Structural Analysis", "Weld Strength Validation", "Crash Analysis", "Durability Testing", "Thermal Analysis", "Physical Testing"],
    process: ["Load Cases", "Meshing", "Solve", "Correlation", "Lab Test", "Design Release"],
  },
  technology: {
    eyebrow: "Technology Stack",
    title: "Digital manufacturing systems for Industry 4.0 execution.",
    summary:
      "Integrated software, smart manufacturing, simulation-led engineering, robotic planning, and digital validation.",
    bullets: ["Software stack", "Industry 4.0", "Digital manufacturing", "Simulation-driven engineering", "Smart manufacturing"],
    process: ["Model", "Simulate", "Plan", "Automate", "Measure", "Improve"],
  },
  careers: {
    eyebrow: "Careers",
    title: "Build systems that shape the next generation of mobility manufacturing.",
    summary:
      "A focused engineering environment for tooling designers, fixture engineers, CAE analysts, automation specialists, and project leaders.",
    bullets: ["Innovation culture", "Engineering environment", "Growth opportunities", "Manufacturing exposure"],
    process: ["Apply", "Technical Review", "Design Discussion", "Plant Interaction", "Offer", "Onboarding"],
  },
};

export const openPositions = [
  "Tool Design Engineer",
  "BIW Fixture Designer",
  "CAE Analyst",
  "Robotics Simulation Engineer",
  "Quality & Metrology Specialist",
  "Project Program Manager",
];
