// Add a new project by adding an object to this array — no component changes needed.
// Never fabricate URLs, results or stats. Use "" or null placeholders when unknown.

export const projects = [
  {
    id: "wafer-defect-detection",
    number: "01",
    title: "Wafer Defect Detection System",
    category: "AI / Computer Vision",
    description:
      "An AI-powered semiconductor wafer defect detection and classification system using deep learning and visual explainability.",
    longDescription:
      "A multi-stage computer vision pipeline that classifies semiconductor wafer-map defect patterns and explains its own predictions, so an inspection operator can see which regions of the wafer drove the model's decision instead of trusting a black-box label.",
    technologies: ["PyTorch", "ResNet50", "EfficientNet", "OpenCV", "Grad-CAM", "FastAPI", "Python"],
    image: "/assets/wafer-defect.jpg",
    video: "",
    github: "", // TODO: add repo link
    liveDemo: "",
    features: [
      "Multi-class wafer defect classification",
      "Grad-CAM based visual explainability layer",
      "Confidence scoring per prediction",
      "Dashboard for reviewing flagged wafers",
    ],
    architecture: [
      "Dataset",
      "Preprocessing",
      "Deep Learning Model",
      "Classification",
      "Confidence",
      "Grad-CAM",
      "Dashboard",
    ],
    challenges:
      "Balancing raw classification accuracy against interpretability, so the explainability layer stays useful to a non-ML operator rather than becoming a second black box.",
    outcome: "", // TODO: add verified outcome/status
  },
  {
    id: "smart-helmet",
    number: "02",
    title: "Smart Helmet",
    category: "IoT / Embedded / Safety",
    description: "An intelligent crash detection and emergency alert system.",
    longDescription:
      "An embedded safety device that senses abnormal motion consistent with a crash and automatically triggers a GPS-tagged emergency alert over a cellular network — designed around a rider who cannot manually call for help.",
    technologies: ["Arduino", "MPU6050", "GPS NEO-6M", "SIM800L", "C++"],
    image: "/assets/smart-helmet.jpg",
    video: "",
    github: "",
    liveDemo: "",
    features: [
      "Real-time motion sensing via MPU6050",
      "Crash-pattern detection logic",
      "GPS location tagging",
      "Automated SMS/GSM emergency alert via SIM800L",
    ],
    architecture: ["Helmet", "Motion Sensor", "Crash Detection", "GPS", "GSM", "Emergency Alert"],
    challenges:
      "Tuning motion thresholds to catch genuine crashes without false-triggering on normal riding vibration.",
    outcome: "",
  },
  {
    id: "api-rate-limiter",
    number: "03",
    title: "API Rate Limiter",
    category: "Backend / System Design",
    description:
      "A backend-focused API traffic control and rate limiting system designed to protect services from excessive requests.",
    longDescription:
      "Middleware-level traffic control for protecting an API from abusive or excessive request volume, with Redis-backed counters shared across instances so limits hold under horizontal scaling.",
    technologies: ["Node.js", "Express", "Redis", "Middleware", "REST APIs"],
    image: "/assets/rate-limiter.jpg",
    video: "",
    github: "",
    liveDemo: "",
    features: [
      "Configurable per-client request limits",
      "Redis-backed distributed counters",
      "HTTP 429 responses on limit breach",
      "Pluggable middleware architecture",
    ],
    architecture: ["Clients", "Request Stream", "Rate Limiter", "Allowed / Blocked", "API"],
    algorithms: [
      {
        name: "Fixed Window",
        detail: "Counts requests in a fixed time bucket; simple, but bursts can occur at window edges.",
      },
      {
        name: "Sliding Window",
        detail: "Smooths the fixed-window edge case by weighting the previous window's count.",
      },
      {
        name: "Token Bucket",
        detail: "Refills tokens at a fixed rate, allowing short bursts while capping sustained throughput.",
      },
    ],
    challenges:
      "Keeping counters consistent across multiple API instances without turning Redis into a bottleneck.",
    outcome: "",
  },
  {
    id: "offline-ai-assistant",
    number: "04",
    title: "Offline AI Assistant",
    category: "Local AI / Agents / Computer Vision",
    description: "An offline-first AI study assistant designed around local AI models and tools.",
    longDescription:
      "A local-first study assistant that runs against on-device models instead of a cloud API, orchestrating PDF understanding, OCR, voice interaction, math solving, coding help and long-term memory through a single tool-calling agent loop — built so it keeps working without an internet connection.",
    technologies: [
      "Ollama",
      "Qwen (local LLM)",
      "OCR",
      "PDF understanding",
      "Voice interaction",
      "Agent / tool orchestration",
    ],
    image: "/assets/offline-ai.jpg",
    video: "",
    github: "",
    liveDemo: "",
    flagship: true,
    features: [
      "Fully local inference — no cloud API dependency",
      "PDF ingestion and understanding",
      "OCR for scanned/handwritten input",
      "Voice interaction layer",
      "Math solving and coding assistance tools",
      "Persistent memory across sessions",
    ],
    architecture: {
      root: "User",
      flow: ["AI Assistant", "Orchestrator"],
      branches: ["PDF", "OCR", "Voice", "Math", "Coding", "Memory", "Local Tools"],
      tail: ["Local LLM", "Response"],
    },
    challenges:
      "Keeping response latency usable on consumer hardware while running multiple tool calls through a single local model.",
    outcome: "",
  },
]

export const getProjectById = (id) => projects.find((p) => p.id === id)
