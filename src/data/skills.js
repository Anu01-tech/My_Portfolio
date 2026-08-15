// Skills grouped by category. `level` is intentionally qualitative
// ("learning" / "working" / "comfortable") rather than a fake percentage —
// edit freely as your experience with each tool grows.

export const skillGroups = [
  {
    title: "Programming",
    description: "Core languages used across projects and coursework.",
    items: [
      { name: "Python", level: "comfortable" },
      { name: "JavaScript", level: "working" },
      { name: "SQL", level: "working" },
      { name: "HTML / CSS", level: "working" },
    ],
  },
  {
    title: "AI / Machine Learning",
    description: "Concepts and techniques applied hands-on in projects.",
    items: [
      { name: "Machine Learning", level: "comfortable" },
      { name: "Deep Learning", level: "working" },
      { name: "Computer Vision", level: "comfortable" },
      { name: "YOLO / YOLOv8", level: "comfortable" },
      { name: "Scikit-learn", level: "comfortable" },
      { name: "NLTK", level: "learning" },
    ],
  },
  {
    title: "AI Frameworks & Libraries",
    description: "Frameworks used to build and train models.",
    items: [
      { name: "PyTorch", level: "working" },
      { name: "TensorFlow", level: "learning" },
      { name: "Keras", level: "learning" },
      { name: "Transformers", level: "learning" },
      { name: "OpenCV", level: "comfortable" },
    ],
  },
  {
    title: "Development & Tooling",
    description: "How projects get built, served, and shipped.",
    items: [
      { name: "Streamlit", level: "comfortable" },
      { name: "FastAPI", level: "working" },
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "Raspberry Pi", level: "working" },
    ],
  },
];
