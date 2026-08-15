// Experience timeline, sourced from Anugraha's resume.

export const experience = [
  {
    role: "Research Intern",
    org: "SRM Institute of Science and Technology (SRM IST)",
    duration: "Apr 2026 – Present",
    type: "Research Internship",
    responsibilities: [
      "[ADD SPECIFIC RESEARCH RESPONSIBILITIES HERE]",
    ],
    technologies: ["[ADD TECH HERE]"],
    outcome: "[ADD OUTCOME HERE]",
  },
  {
    role: "AI/ML Intern",
    org: "Aenexz",
    duration: "3 months",
    type: "Internship",
    responsibilities: [
      "Built data preprocessing pipelines for business-intelligence use cases",
      "Trained classification models on cleaned, pipeline-processed data",
    ],
    technologies: ["Python", "Scikit-learn", "SQL"],
    outcome: "[ADD OUTCOME / RESULT HERE — e.g. what the classification models were used for]",
  },
  {
    role: "AI Engineer Intern",
    org: "Netkathir Technologies Pvt. Ltd",
    duration: "1 month",
    type: "Internship",
    responsibilities: [
      "Built a YOLO-based real-time crowd counting system with sub-100ms inference",
      "Owned the full ML pipeline: training, preprocessing, and evaluation",
      "Built a Flutter mobile prototype for occupancy dashboards",
      "Translated raw vision-model outputs into operational crowd metrics for the team",
    ],
    technologies: ["Python", "YOLO", "OpenCV", "Flutter"],
    outcome: "[ADD OUTCOME HERE — e.g. how the system was used or received]",
  },
];

export const education = [
  {
    degree: "B.Tech Computer Science Engineering — Artificial Intelligence & Machine Learning",
    institution: "SRM University, Ramapuram, Chennai",
    duration: "2024 – 2028",
    detail:
      "Coursework and self-directed projects centered on machine learning, deep learning, and computer vision, applied through independent builds rather than classroom exercises alone.",
  },
  {
    degree: "Full Stack Development and Applied AI",
    institution: "NxtWave",
    duration: "Oct 2025",
    detail:
      "Certification program covering full-stack web development alongside applied AI fundamentals.",
  },
];

export const certifications = [
  {
    title: "AI-Enabled Applications for Customer Service",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "SQL",
    issuer: "NxtWave",
  },
  {
    title: "Static & Responsive Web Development",
    issuer: "NxtWave",
  },
];

export const research = [
  {
    title: "Computer vision for real-world constraint-limited environments",
    summary:
      "My project work has consistently returned to one question: how do you make a vision model useful outside a clean lab dataset? Training on CPU-only hardware, dealing with perspective distortion in a fixed mall camera, and hardening a pipeline against Raspberry Pi hardware failure are all instances of the same underlying problem — models are only useful once they survive contact with messy, real conditions.",
    tags: ["Computer Vision", "Applied ML", "Edge Deployment"],
  },
  {
    title: "AI for environmental & civic problems",
    summary:
      "Two of my projects — plastic waste detection and pothole detection — are direct attempts at using AI for civic and environmental problems relevant to India: waste management under the Swachh Bharat Mission, and road-condition monitoring. I'm interested in continuing to explore where computer vision can support public infrastructure and sustainability work.",
    tags: ["AI for Social Good", "Environmental Applications", "Civic Tech"],
  },
  {
    title: "Density estimation vs. object detection for crowded scenes",
    summary:
      "Building the occupancy monitoring system meant learning why standard object detectors break down in dense, occluded scenes, and why density-map regression (CSRNet) is the more principled approach for crowd counting. This is the research question I found most interesting so far, and the one I want to go deeper on.",
    tags: ["Crowd Counting", "CSRNet", "Deep Learning"],
  },
];

export const achievements = [
  {
    title: "AI-Enabled Applications for Customer Service",
    category: "Certification",
    date: "IBM SkillsBuild",
    description: "Certification covering applied AI patterns for customer-facing applications.",
  },
  {
    title: "SQL",
    category: "Certification",
    date: "NxtWave",
    description: "Certification covering relational database querying and data manipulation.",
  },
  {
    title: "Static & Responsive Web Development",
    category: "Certification",
    date: "NxtWave",
    description: "Certification covering responsive front-end web development fundamentals.",
  },
  {
    title: "Full Stack Development and Applied AI",
    category: "Certification",
    date: "Oct 2025 · NxtWave",
    description: "Program covering full-stack web development alongside applied AI fundamentals.",
  },
  {
    title: "MSME Hackathon",
    category: "Hackathon",
    date: "2025",
    description: "Participated and got selected for the first two rounds.",
  },
];

export const writing = [
  {
    title: "The Art of Disconnecting the Connection",
    description:
      "An essay on stepping back from constant connectivity — reflections on what we gain when we deliberately unplug. [UPDATE THIS DESCRIPTION TO MATCH YOUR ACTUAL ARTICLE]",
    url: "[ADD YOUR MEDIUM ARTICLE URL HERE]",
  },
  {
    title: "Emotions – The True Reason of Life",
    description:
      "A piece exploring emotion as a driving force behind human experience and motivation. [UPDATE THIS DESCRIPTION TO MATCH YOUR ACTUAL ARTICLE]",
    url: "[ADD YOUR MEDIUM ARTICLE URL HERE]",
  },
];
