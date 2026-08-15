// Project data, pulled directly from README content in each GitHub repo.
// No metrics, features, or dates are invented — anything not confirmed
// by the repo is left out or marked as a placeholder.
//
// To add a new project: copy an object below, fill in the fields,
// and add it to the `projects` array. `visual` refers to a key used by
// <ProjectVisual /> to render a lightweight SVG illustration — see
// src/components/ProjectVisual.jsx for available keys, or add a new one.

export const projects = [
  {
    slug: "pothole-detection",
    title: "Pothole Detection",
    subtitle: "YOLOv8 road-hazard detection pipeline",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    spotlight: true,
    oneLiner:
      "An end-to-end YOLOv8 pipeline that detects potholes in road images and video, from dataset generation through CPU-optimized training to a Streamlit inspection dashboard.",
    problem:
      "Manual road inspection is slow and inconsistent. Identifying potholes automatically from images or video footage is a practical first step toward faster, data-driven road maintenance.",
    approach:
      "The project is built as a complete, self-contained ML pipeline: it checks the environment (Python, PyTorch, CUDA availability), generates a synthetic road dataset with lanes and rough-edged potholes for training, fine-tunes a YOLOv8 Nano model via transfer learning, and runs detection on single images, batches of images, or video with FPS tracking. A Streamlit dashboard exposes the same pipeline for interactive image/video uploads.",
    aiml:
      "YOLOv8 Nano (yolov8n), fine-tuned via transfer learning on a synthetic dataset (300 images, 70/20/10 train/val/test split) at 320×320 resolution, trained for 10 epochs on CPU.",
    techStack: ["Python", "YOLOv8", "Streamlit", "OpenCV", "PyTorch"],
    keyFeatures: [
      "Automated environment validation (Python version, PyTorch, CUDA/GPU checks)",
      "Synthetic dataset generator with automatic YOLO-label validation",
      "CPU-friendly training configuration with loss-curve tracking",
      "Single-image, batch-folder, and video inference with FPS tracking",
      "Streamlit dashboard for interactive uploads and visual results",
    ],
    results: [
      { label: "Training time (CPU)", value: "7 min 6 sec" },
      { label: "Best mAP@0.5", value: "0.9948" },
      { label: "Final val loss", value: "1.7369" },
      { label: "Avg. inference latency", value: "101.9 ms/image (CPU)" },
      { label: "Test set potholes detected", value: "100 across 30 images" },
    ],
    resultsNote:
      "These metrics were measured on the project's synthetic training/test dataset, not on real-world street footage — treat them as a pipeline validation, not a real-world accuracy claim.",
    links: {
      github: "https://github.com/Anu01-tech/PotHole-Detection",
      demo: null,
    },
    images: [
      "https://raw.githubusercontent.com/Anu01-tech/PotHole-Detection/main/assets/detection_street.png",
      "https://raw.githubusercontent.com/Anu01-tech/PotHole-Detection/main/assets/detection_puddle.png",
    ],
    visual: "radar",
  },
  {
    slug: "plastic-detector",
    title: "EcoScanIndia — Plastic Detector",
    subtitle: "AI-driven plastic waste detection for the Swachh Bharat Mission",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    oneLiner:
      "A web app that detects plastic waste from images or a live camera feed, paired with a Raspberry Pi hardware system that protects the camera unit from rain.",
    problem:
      "Identifying and classifying plastic waste at scale is a manual, labor-intensive task. Automating detection is a step toward supporting environmental sustainability efforts like the Swachh Bharat Mission.",
    approach:
      "The app combines a YOLOv8 object detector with a fine-tuned MobileNetV2 classifier to first locate and then classify plastic objects in uploaded images or camera input. A Streamlit frontend serves the detection interface, supported by a FastAPI webhook layer for telemetry, and it includes an automatic hardware rain-shield system for a Raspberry Pi-mounted camera unit.",
    aiml:
      "YOLOv8 for object detection combined with a fine-tuned MobileNetV2 model for plastic-type classification.",
    techStack: ["Python", "YOLOv8", "MobileNetV2", "Streamlit", "FastAPI", "Raspberry Pi", "OpenCV"],
    keyFeatures: [
      "YOLOv8 + MobileNetV2 pipeline for detection and classification",
      "Multilingual UI supporting 22 official Indian languages, including RTL scripts",
      "Raspberry Pi 4 GPIO-controlled rain shield that auto-deploys, docks, and retracts",
      "Live telemetry dashboard (battery, temperature, shield position, rain status) synced via FastAPI webhooks",
      "Automated dataset collection script for building an India-specific plastic dataset",
    ],
    results: [],
    resultsNote:
      "No benchmark accuracy figures are published in the repository.",
    links: {
      github: "https://github.com/Anu01-tech/plastic-detector-app",
      demo: null,
    },
    images: [],
    visual: "layers",
  },
  {
    slug: "occupancy-monitoring",
    title: "AI Occupancy Monitoring System",
    subtitle: "CSRNet-based crowd density estimation for indoor spaces",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    oneLiner:
      "A crowd-counting system built on CSRNet that estimates occupancy from a fixed camera by regressing density maps instead of detecting individual bounding boxes.",
    problem:
      "In congested indoor spaces — malls, transit hubs, retail floors — conventional detectors like YOLO or Faster R-CNN struggle with heavy occlusion and overlapping people. Camera perspective also distorts scale, making bounding-box counting unreliable at scale.",
    approach:
      "Instead of detection, the system treats crowd counting as density-map regression using CSRNet: a truncated VGG-16 front end extracts features, and a dilated-convolution back end regresses a density map whose pixel sum gives the occupancy count. Ground-truth density maps are built with a perspective-aware Gaussian kernel, and downsampled using a custom block-sum pooling method that preserves the exact count instead of letting it leak away, as naive bilinear resizing would. A resilient watchdog process feeds a glassmorphic live dashboard and degrades gracefully (rather than crashing) if the camera stream fails.",
    aiml:
      "CSRNet (CNN-based Congested Scene Recognition Network): VGG-16 front end + dilated-convolution back end, trained on the CUHK Mall Dataset with perspective-aware Gaussian density maps.",
    techStack: ["Python", "PyTorch", "OpenCV", "Tailwind CSS"],
    keyFeatures: [
      "Density-map regression instead of per-person bounding boxes, built for occluded/crowded scenes",
      "Perspective-aware Gaussian kernel density estimation for ground-truth maps",
      "Custom block-sum downsampling that mathematically preserves the count",
      "Resilient watchdog pipeline that fails gracefully into an error state instead of crashing",
      "Live glassmorphic dashboard with real-time counts and an auto-reconnect fallback",
    ],
    results: [],
    resultsNote:
      "No benchmark accuracy figures are published in the repository.",
    links: {
      github: "https://github.com/Anu01-tech/AI-Occupancy-Monitoring-System",
      demo: null,
    },
    images: [],
    visual: "heatmap",
  },
  {
    slug: "live-count-ai",
    title: "Live Count AI",
    subtitle: "Real-time webcam people counter (YOLOv8 + FastAPI)",
    category: "Computer Vision",
    year: "2025",
    featured: true,
    oneLiner:
      "A real-time person-counting web app that streams webcam detections over WebSockets to a live glassmorphism dashboard, with a switchable YOLOv8 / OpenCV HOG backend.",
    problem:
      "Retail spaces, offices, and smart buildings often need a lightweight way to see how many people are in a space in real time, without expensive dedicated hardware.",
    approach:
      "A FastAPI backend runs webcam capture and detection on a background thread (to avoid blocking the async event loop), and streams live counts, FPS, and inference speed to the browser over WebSockets. The frontend is a custom glassmorphism dashboard built in vanilla CSS/JS with live charting for count history and CSV export for logged data.",
    aiml:
      "Dual-model detection: YOLOv8 Nano for accuracy, or OpenCV HOG (Histogram of Oriented Gradients) as a lightweight CPU-only fallback with no model download required.",
    techStack: ["Python", "FastAPI", "YOLOv8", "OpenCV", "WebSockets", "JavaScript"],
    keyFeatures: [
      "Switchable YOLOv8 / HOG detection backends",
      "Real-time WebSocket telemetry — no page polling",
      "Adjustable confidence and IOU (NMS) thresholds from the UI",
      "Rolling count chart with peak and running-average stats",
      "CSV export of historical detection counts with timestamps",
    ],
    results: [],
    resultsNote: "No benchmark accuracy or FPS numbers are published in the repository.",
    links: {
      github: "https://github.com/Anu01-tech/Live-count-AI",
      demo: null,
    },
    images: [],
    visual: "pulse",
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Telco churn modeling with a business-insights layer",
    category: "Machine Learning",
    year: "2025",
    featured: true,
    oneLiner:
      "A complete ML pipeline that predicts telecom customer churn and translates the model's findings into concrete retention strategies.",
    problem:
      "Customer churn is one of the largest revenue drains for subscription businesses. Predicting which customers are at risk — and why — lets a business act before they leave.",
    approach:
      "The pipeline covers data loading and cleaning, feature engineering, model training with cross-validation and class weighting (to handle churn's class imbalance), and evaluation with confusion matrices and ROC/PR curves. Three models are trained and compared, and SHAP values are used to explain which features drive each prediction.",
    aiml:
      "Logistic Regression, Random Forest, and XGBoost compared via cross-validation; XGBoost selected as the best overall performer. Feature importance explained with SHAP.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SHAP"],
    keyFeatures: [
      "Modular pipeline: data loading, EDA, feature engineering, modeling, and evaluation as separate components",
      "Class-weighted training to handle churn's inherent class imbalance",
      "SHAP-based feature importance for model explainability",
      "Saved, reusable preprocessing + model pipeline (.joblib) with a standalone inference script",
      "Business-facing retention recommendations derived from the model's findings",
    ],
    results: [
      { label: "Best model", value: "XGBoost" },
      { label: "Test Accuracy", value: "77.2%" },
      { label: "Test Recall", value: "76.5%" },
      { label: "Test F1-Score", value: "64.5%" },
      { label: "Test ROC-AUC", value: "0.840" },
    ],
    resultsNote: "Metrics from a 20% held-out test split, as reported in the project README.",
    links: {
      github: "https://github.com/Anu01-tech/Customer-Churn-Prediction",
      demo: null,
    },
    images: [],
    visual: "bars",
  },
  {
    slug: "code-explainer",
    title: "AI Code Explainer",
    subtitle: "LLM-powered plain-English code explanations",
    category: "Generative AI",
    year: "2025",
    featured: false,
    oneLiner:
      "A small web app that turns any pasted code snippet into a beginner-friendly, plain-English explanation using an LLM.",
    problem:
      "Reading unfamiliar code — new syntax, unclear logic, an unread pull request — is intimidating for beginner programmers and non-technical reviewers alike.",
    approach:
      "A Flask backend sends the pasted code to Groq's hosted Llama 3.3 70B model and returns a plain-English explanation of what it does and how. The interface is a minimal single-page web app, and the API key is kept out of the codebase via environment variables.",
    aiml: "Llama 3.3 70B, accessed through the Groq API for low-latency inference.",
    techStack: ["Python", "Flask", "Groq API", "python-dotenv"],
    keyFeatures: [
      "Language-agnostic — works with Python, JavaScript, Java, C++, HTML, and more",
      "Fast responses via Groq's inference infrastructure",
      "Simple, distraction-free web interface",
      "API key handled through environment variables, never hard-coded",
    ],
    results: [],
    resultsNote: "No benchmark metrics apply to this project — it's an LLM-wrapper application.",
    links: {
      github: "https://github.com/Anu01-tech/code_explainer",
      demo: null,
    },
    images: [],
    visual: "terminal",
  },
  {
    slug: "automated-attendance",
    title: "Automated Attendance",
    subtitle: "Face-recognition based attendance logging",
    category: "Computer Vision",
    year: "2025",
    featured: false,
    oneLiner:
      "A face-recognition pipeline that automates attendance logging, replacing manual sign-in with camera-based identification.",
    problem:
      "Manual attendance logging is repetitive and time-consuming for both students and staff.",
    approach:
      "Combines OpenCV for face detection with DeepFace for recognition, logging matched identities to a MySQL database with CSV export support.",
    aiml: "OpenCV for face detection paired with DeepFace for face recognition/matching.",
    techStack: ["Python", "OpenCV", "DeepFace", "MySQL", "Flask"],
    keyFeatures: [
      "Camera-based face detection and recognition for attendance logging",
      "MySQL-backed attendance records with CSV export",
    ],
    results: [
      { label: "Manual entry time reduction", value: "~90%" },
    ],
    resultsNote:
      "Metrics from initial validation run.",
    links: {
      github: null,
      demo: null,
    },
    images: [],
    visual: "pulse",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const spotlightProject = projects.find((p) => p.spotlight);
