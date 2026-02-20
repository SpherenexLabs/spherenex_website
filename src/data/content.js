export const services = [
  {
    slug: 'robotic-design',
    title: 'Robotic Design Services',
    icon: 'Cpu',
    description:
      'We design complete smart technology systems, covering electronic and mechanical engineering from concept to specification.',
    link: '/services/robotic-design',
    image: 'robotics.jpg',
    detailedDescription: 'Our design services transform your vision into detailed technical specifications. We start by analyzing your business requirements and operational constraints, then develop a comprehensive system architecture that balances performance, cost, and manufacturability. Our team handles everything from mechanical CAD and motion analysis to electrical system design and control architecture, ensuring all subsystems work together seamlessly. We deliver complete design packages ready for prototyping and production.',
    processFlow: [
      { step: 'Requirements Analysis', description: 'Understanding business needs, constraints, and technical requirements', duration: '1-2 weeks' },
      { step: 'System Architecture', description: 'Defining overall system structure, interfaces, and subsystem interactions', duration: '2-3 weeks' },
      { step: 'Detailed Design', description: 'Creating CAD models, schematics, and technical specifications', duration: '4-6 weeks' },
      { step: 'Design Validation', description: 'FEA, simulation, and design review with stakeholders', duration: '1-2 weeks' },
      { step: 'Documentation', description: 'Complete design packages with drawings, BOMs, and specifications', duration: '1 week' },
    ],
    stats: [
      { label: 'Projects Completed', value: '50+' },
      { label: 'Average Time Saved', value: '30%' },
      { label: 'Success Rate', value: '95%' },
      { label: 'Client Satisfaction', value: '4.8/5' },
    ],
    keyFeatures: [
      { title: 'Complete System Architecture', detail: 'End-to-end design covering mechanical, electrical, and software layers with clear interfaces and specifications.' },
      { title: 'Risk Assessment & Mitigation', detail: 'Comprehensive FMEA analysis identifying potential failure modes and designing robust solutions from day one.' },
      { title: 'DFM/DFA Integration', detail: 'Design for Manufacturing and Assembly principles applied throughout to minimize cost and production complexity.' },
      { title: 'Regulatory Compliance', detail: 'Built-in consideration for safety standards, certifications, and industry regulations relevant to your market.' },
    ],
    details: {
      whatYouGet: [
        'System architecture, requirements, and risk assessment.',
        'Mechanical layouts, kinematics, and enclosure concepts.',
        'Electronics schematics and PCB stack-up recommendations.',
        'Control strategy definition and interface planning.',
        'Complete CAD models and technical drawings.',
        'Bill of materials with supplier recommendations.',
      ],
      whyUs: [
        'Cross-disciplinary team aligning hardware, firmware, and controls early.',
        'DFM/DFS baked in from the first revision to reduce iterations.',
        'Prototyping and validation support to de-risk before build.',
        '15+ years experience across industrial automation and smart systems.',
      ],
    },
  },
  {
    slug: 'hardware-engineering',
    title: 'Hardware Engineering',
    icon: 'Wrench',
    description:
      'Our engineering team develops custom hardware solutions, providing complete electronic design and integration for smart technology systems.',
    link: '/services/hardware-engineering',
    image: 'expertise.png',
    detailedDescription: 'We deliver production-ready electronic hardware that powers your smart technology systems. Our engineers specialize in mixed-signal design, power electronics, motor control, and high-speed digital interfaces. From initial schematic capture through PCB layout and validation testing, we ensure signal integrity, thermal management, and EMC compliance. We work closely with mechanical and software teams to optimize integration and reduce time-to-market.',
    processFlow: [
      { step: 'Requirements & Specs', description: 'Define electrical requirements, interfaces, and performance targets', duration: '1 week' },
      { step: 'Schematic Design', description: 'Circuit design, component selection, and power analysis', duration: '2-3 weeks' },
      { step: 'PCB Layout', description: 'Multi-layer board design with signal integrity optimization', duration: '2-3 weeks' },
      { step: 'Prototype & Testing', description: 'Board bring-up, functional testing, and validation', duration: '2-4 weeks' },
      { step: 'Production Release', description: 'Manufacturing documentation and DFM optimization', duration: '1 week' },
    ],
    stats: [
      { label: 'PCB Designs', value: '200+' },
      { label: 'First-Pass Success', value: '88%' },
      { label: 'Power Efficiency', value: '92%' },
      { label: 'EMC Compliance', value: '100%' },
    ],
    keyFeatures: [
      { title: 'Custom PCB Design', detail: 'Multi-layer boards with controlled impedance, advanced routing, and thermal management for reliable operation.' },
      { title: 'Power System Engineering', detail: 'Efficient power distribution, battery management, motor drives, and protection circuits tailored to your application.' },
      { title: 'Sensor Integration', detail: 'Selection and integration of sensors for vision, motion, force, temperature, and environmental monitoring.' },
      { title: 'EMC & Safety Compliance', detail: 'Design practices ensuring electromagnetic compatibility and adherence to safety standards like UL, CE, and FCC.' },
    ],
    details: {
      whatYouGet: [
        'Schematics, PCB layout, and SI/PI-aware stack-ups.',
        'Component selection, BOM optimization, and lifecycle checks.',
        'Firmware interfaces, motor drivers, sensors, and power design.',
        'Test plans and bring-up guides for fast validation.',
        'Gerber files and manufacturing documentation.',
        'Design verification and validation reports.',
      ],
      whyUs: [
        'Multi-domain expertise across compute, motion, and power.',
        'Close collaboration with mechanical and software teams.',
        'Production-ready documentation and DFM/DFT baked in.',
        'Proven track record with high-reliability applications.',
      ],
    },
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    icon: 'Code',
    description:
      'We develop embedded software, control systems, and application code to power your smart technology projects with reliable, optimized performance.',
    link: '/services/software-development',
    image: 'image1.jpg',
    detailedDescription: 'Our software engineers create the intelligence that drives your smart systems. We develop embedded firmware for microcontrollers, real-time control algorithms, communication protocols, and application software for user interfaces and cloud connectivity. Our code is optimized for performance, reliability, and maintainability, with comprehensive testing and documentation. We support the full software lifecycle from initial development through OTA updates and ongoing optimization.',
    processFlow: [
      { step: 'Architecture Design', description: 'Define software architecture, interfaces, and module structure', duration: '1-2 weeks' },
      { step: 'Core Development', description: 'Implement firmware, drivers, and control algorithms', duration: '4-8 weeks' },
      { step: 'Integration Testing', description: 'Hardware-software integration and system validation', duration: '2-3 weeks' },
      { step: 'Optimization', description: 'Performance tuning, memory optimization, and debugging', duration: '1-2 weeks' },
      { step: 'Deployment', description: 'Production firmware release with OTA update capability', duration: '1 week' },
    ],
    stats: [
      { label: 'Code Quality', value: '98%' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'Bug Resolution', value: '<24h' },
      { label: 'Uptime', value: '99.8%' },
    ],
    keyFeatures: [
      { title: 'Embedded Firmware', detail: 'Optimized C/C++ code for microcontrollers with real-time operating systems, device drivers, and peripheral management.' },
      { title: 'Control Algorithms', detail: 'Advanced motion control, PID tuning, trajectory planning, and sensor fusion for precise system behavior.' },
      { title: 'Cloud Integration', detail: 'Secure communication protocols, data logging, remote monitoring, and OTA update infrastructure.' },
      { title: 'Safety-Critical Systems', detail: 'Development following IEC 61508, ISO 26262, or DO-178C standards for high-reliability applications.' },
    ],
    details: {
      whatYouGet: [
        'Firmware, middleware, and control loop implementation.',
        'Real-time tuning, diagnostics, and OTA update pathways.',
        'Application-layer integrations and cloud connectivity.',
        'Performance profiling and reliability hardening.',
        'Comprehensive testing suites and CI/CD pipelines.',
        'Technical documentation and code maintenance guides.',
      ],
      whyUs: [
        'Deep experience across robotics and smart systems stacks.',
        'Hardware-aware software co-design with our electronics team.',
        'Focus on maintainability, safety, and uptime.',
        'Expertise in modern development tools and best practices.',
      ],
    },
  },
  {
    slug: 'prototyping-services',
    title: 'Prototyping Services',
    icon: 'Boxes',
    description:
      'We create functional prototypes to validate your concepts, enabling testing and optimization before moving to production.',
    link: '/services/prototyping-services',
    image: 'about.png',
    detailedDescription: 'Prototyping is where ideas meet reality. We build functional prototypes that allow you to test assumptions, gather user feedback, and validate technical approaches before committing to production tooling. Our rapid iteration process combines 3D printing, CNC machining, hand-assembly PCBs, and alpha firmware to create working systems quickly. Each prototype cycle generates valuable data that informs design refinements, reducing risk and accelerating your path to market.',
    processFlow: [
      { step: 'Concept Validation', description: 'Build proof-of-concept to test core assumptions', duration: '1-2 weeks' },
      { step: 'Alpha Prototype', description: 'First functional prototype with basic features', duration: '2-4 weeks' },
      { step: 'Beta Prototype', description: 'Refined prototype with full feature set for testing', duration: '3-5 weeks' },
      { step: 'User Testing', description: 'Real-world testing and feedback collection', duration: '1-2 weeks' },
      { step: 'Final Iteration', description: 'Production-ready prototype incorporating all learnings', duration: '2-3 weeks' },
    ],
    stats: [
      { label: 'Prototypes Built', value: '300+' },
      { label: 'Iteration Speed', value: '2 weeks' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Success Rate', value: '92%' },
    ],
    keyFeatures: [
      { title: 'Rapid Iteration', detail: 'Fast turnaround builds using additive manufacturing, off-the-shelf components, and agile development practices.' },
      { title: 'Functional Validation', detail: 'Real-world testing of mechanical fit, electrical performance, control behavior, and user interaction.' },
      { title: 'Performance Benchmarking', detail: 'Quantitative measurements of speed, accuracy, power consumption, and reliability under various conditions.' },
      { title: 'User Feedback Integration', detail: 'Structured testing with target users to identify usability issues and improvement opportunities early.' },
    ],
    details: {
      whatYouGet: [
        'Rapid proof-of-concepts for mechanical, electrical, and software layers.',
        'Iterative builds with usability and performance feedback loops.',
        'Bench testing, environmental checks, and reliability validation.',
        'Clear next-step plans toward pilot and production.',
        'Detailed test reports with photos, videos, and data logs.',
        'Design refinement recommendations based on findings.',
      ],
      whyUs: [
        'Tight integration with design and engineering teams for speed.',
        'Evidence-driven decisions to reduce risk and cost later.',
        'Transparent reporting on findings and recommendations.',
        'In-house fabrication capabilities for fast turnaround.',
      ],
    },
  },
  {
    slug: 'industrial-design',
    title: 'Industrial Design',
    icon: 'Layers',
    description:
      'We provide professional industrial design, ensuring seamless integration and coordination of all components in your smart technology system.',
    link: '/services/industrial-design',
    image: 'image3.png',
    detailedDescription: 'Great industrial design balances aesthetics, ergonomics, and engineering reality. We create product forms that communicate brand values, enhance user experience, and simplify manufacturing. Our designers work alongside engineers from day one, ensuring that visual concepts are grounded in mechanical feasibility and production economics. The result is cohesive products that look professional, feel intuitive, and can be manufactured efficiently at scale.',
    processFlow: [
      { step: 'Research & Insights', description: 'User research, market analysis, and brand discovery', duration: '1-2 weeks' },
      { step: 'Concept Development', description: 'Sketching, ideation, and preliminary 3D concepts', duration: '2-3 weeks' },
      { step: 'Refinement', description: 'Detailed CAD modeling, CMF selection, and engineering alignment', duration: '3-4 weeks' },
      { step: 'Visualization', description: 'Photorealistic renders and appearance prototypes', duration: '1-2 weeks' },
      { step: 'Production Support', description: 'Surface modeling, tooling review, and manufacturing coordination', duration: '2-3 weeks' },
    ],
    stats: [
      { label: 'Design Awards', value: '12+' },
      { label: 'User Satisfaction', value: '4.9/5' },
      { label: 'Manufacturing Cost', value: '-25%' },
      { label: 'Time to Market', value: '-20%' },
    ],
    keyFeatures: [
      { title: 'User-Centered Design', detail: 'Ergonomic analysis, interaction design, and accessibility considerations to create intuitive, comfortable products.' },
      { title: 'Brand Alignment', detail: 'Form language, color palette, and material choices that reinforce your brand identity and market positioning.' },
      { title: 'Manufacturing Optimization', detail: 'Design decisions driven by moldability, assembly efficiency, and cost targets for scalable production.' },
      { title: 'Visualization & Prototyping', detail: 'Photorealistic renderings and appearance models to validate design direction with stakeholders.' },
    ],
    details: {
      whatYouGet: [
        'Human-centered form language aligned to brand and use cases.',
        'CMF guidance for manufacturability and durability.',
        'Mechanical packaging and assembly intent with serviceability in mind.',
        'Visualization assets to align stakeholders quickly.',
        'Detailed surface modeling and A-surface development.',
        'Material and finish specifications for production.',
      ],
      whyUs: [
        'Designers and engineers co-create to avoid late-stage clashes.',
        'Grounded in real production constraints and supply realities.',
        'Consistent user experience across the full product line.',
        'Portfolio spanning consumer, industrial, and medical devices.',
      ],
    },
  },
  {
    slug: 'production-management',
    title: 'Production Management',
    icon: 'Factory',
    description:
      'We manage the entire production process with high-precision manufacturing, quality control, and delivery of your smart technology solutions.',
    link: '/services/production-management',
    image: 'image2.png',
    detailedDescription: 'Moving from prototype to production requires careful coordination of suppliers, tooling, quality systems, and logistics. We manage this transition seamlessly, leveraging our manufacturing network and quality expertise to deliver products that meet your specifications on time and on budget. Our team handles supplier selection, tooling oversight, pilot builds, validation, and ongoing production support—ensuring consistent quality as you scale from hundreds to thousands of units.',
    processFlow: [
      { step: 'Supplier Selection', description: 'Qualify vendors and negotiate pricing for components and assembly', duration: '2-3 weeks' },
      { step: 'Tooling Development', description: 'Design and validate injection molds, fixtures, and test jigs', duration: '6-10 weeks' },
      { step: 'Pilot Production', description: 'Small batch builds to validate process and quality systems', duration: '2-4 weeks' },
      { step: 'Validation & Certification', description: 'Full product testing, compliance verification, and documentation', duration: '3-5 weeks' },
      { step: 'Volume Production', description: 'Scale to full production with continuous monitoring and improvement', duration: 'Ongoing' },
    ],
    stats: [
      { label: 'Units Produced', value: '50K+' },
      { label: 'Quality Yield', value: '99.2%' },
      { label: 'On-Time Delivery', value: '96%' },
      { label: 'Cost Savings', value: '18%' },
    ],
    keyFeatures: [
      { title: 'Supplier Network Management', detail: 'Qualified vendor selection for PCB fabrication, assembly, machining, molding, and finishing operations.' },
      { title: 'Tooling Development', detail: 'Oversight of injection molds, fixtures, test jigs, and production tooling to ensure first-article quality.' },
      { title: 'Quality Systems', detail: 'Comprehensive inspection protocols, statistical process control, and traceability for regulatory compliance.' },
      { title: 'Scale-Up Support', detail: 'Transition planning from pilot runs through volume production with continuous yield improvement.' },
    ],
    details: {
      whatYouGet: [
        'Supplier coordination, tooling oversight, and pilot builds.',
        'Quality plans, validation protocols, and outgoing inspections.',
        'Logistics planning and packaging for safe delivery.',
        'Change management and sustaining engineering support.',
        'Production readiness reviews and risk mitigation plans.',
        'Ongoing monitoring of yield, cost, and schedule metrics.',
      ],
      whyUs: [
        'Proven handoff from design to production without surprises.',
        'Transparent tracking on schedule, cost, and yield.',
        'Long-term partner for continuous improvements post-launch.',
        'Global supplier relationships for competitive sourcing.',
      ],
    },
  },
]

export const advantages = [
  { name: 'Reactivity', detail: 'We are able to quickly adapt to any specific need you could have.' },
  { name: 'Climatic & Aging Tests', detail: 'We realize numerous tests to ensure the quality of the products we send you.' },
  { name: 'Precision Machinery', detail: 'Our technicians use high precision machines, ensuring the best quality possible.' },
  { name: 'In-house Design & Manufacture', detail: 'Products are designed and manufactured in the same place, limiting iterations and optimizing costs.' },
  { name: 'Multisectorial Experience', detail: 'We work with companies in various sectors, giving us good adaptability to any type of product.' },
  { name: 'Evolutionary R&D', detail: 'We aim to build long-term partnerships and keep optimizing your product over time.' },
]

export const processSteps = [
  {
    label: 'Project Idea',
    summary: 'The only thing you will have to provide—we take care of the rest!',
  },
  {
    label: 'Design',
    summary: 'Our engineers are experienced and know how to meet new challenges.',
  },
  {
    label: 'Production',
    summary: 'Our technicians use high-performance equipment to offer the best quality possible.',
  },
]

export const caseStudies = [
  {
    title: 'High-velocity sortation',
    metric: '11.2k picks/hour',
    result: 'AMR + arm co-work reduced travel by 38% and stabilized overnight throughput.',
  },
  {
    title: 'Aerospace fastening',
    metric: '±0.15 mm drift',
    result: 'Force-aware end effectors cut rework by 27% while meeting torque-critical specs.',
  },
  {
    title: 'Grid inspection',
    metric: '4x coverage',
    result: 'Autonomous patrols mapped anomalies with thermal overlays, compressing outage response.',
  },
]


