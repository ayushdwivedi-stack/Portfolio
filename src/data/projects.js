// Add a new project by adding an object to this array. Keep links empty when
// unknown instead of inventing repositories, demos, metrics or outcomes.

export const projects = [
  {
    id: "wafer-defect-detection",
    number: "01",
    title: "Wafer Defect Detection System",
    category: "AI / Computer Vision",
    filters: ["AI", "Tools", "In Progress"],
    status: "In Progress",
    statusNote: "Functional prototype direction from hackathon work.",
    description:
      "An AI-powered semiconductor wafer defect detection and classification system using deep learning and visual explainability.",
    longDescription:
      "A multi-stage computer vision pipeline that classifies semiconductor wafer-map defect patterns and explains its own predictions, so an inspection operator can see which regions of the wafer drove the model's decision instead of trusting a black-box label.",
    problem:
      "Semiconductor quality workflows need faster inspection while still giving engineers enough context to understand why a wafer was flagged.",
    purpose:
      "Detect wafer defect patterns and make model decisions easier to review through confidence scores and visual explanations.",
    solution:
      "A computer-vision pipeline built around classification models, preprocessing, confidence scoring and Grad-CAM style explainability.",
    technologies: ["PyTorch", "ResNet50", "EfficientNet", "OpenCV", "Grad-CAM", "FastAPI", "Python"],
    image: "",
    video: "",
    github: "https://github.com/ayushdwivedi-stack/wafer-defect-detection",
    liveDemo: "",
    features: [
      "Multi-class wafer defect classification",
      "Grad-CAM based visual explainability layer",
      "Confidence scoring per prediction",
      "Dashboard direction for reviewing flagged wafers",
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
    learned:
      "Explainability is most useful when it is designed into the workflow, not added as decoration after a model already predicts a label.",
    outcome:
      "The project direction combines automated defect classification with confidence scores and visual explanations for semiconductor quality-control workflows.",
  },
  {
    id: "smart-helmet",
    number: "02",
    title: "Smart Helmet",
    category: "IoT / Embedded / Safety",
    filters: ["Tools", "In Progress"],
    status: "In Progress",
    statusNote: "Hardware-focused safety system.",
    description: "An intelligent crash detection and emergency alert system.",
    longDescription:
      "An embedded safety device that senses abnormal motion consistent with a crash and automatically triggers a GPS-tagged emergency alert over a cellular network - designed around a rider who cannot manually call for help.",
    problem:
      "In a serious riding accident, a person may not be able to call for help or share an accurate location quickly.",
    purpose:
      "Use motion sensing, GPS and GSM communication to support faster emergency notification after crash-like events.",
    solution:
      "An embedded prototype direction using an MPU6050 motion sensor, GPS module and GSM alert path.",
    technologies: ["Arduino", "MPU6050", "GPS NEO-6M", "SIM800L", "C++"],
    image: "",
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
    learned:
      "Embedded products need careful calibration because real-world sensor data is noisy and context-dependent.",
    outcome: "",
  },
  {
    id: "api-rate-limiter",
    number: "03",
    title: "API Rate Limiter",
    category: "Backend / System Design",
    filters: ["Backend", "Web", "Tools", "In Progress"],
    status: "In Progress",
    statusNote: "Backend/system-design project.",
    description:
      "A backend-focused API traffic control and rate limiting system designed to protect services from excessive requests.",
    longDescription:
      "Middleware-level traffic control for protecting an API from abusive or excessive request volume, with Redis-backed counters shared across instances so limits hold under horizontal scaling.",
    problem:
      "APIs need protection from accidental bursts, abusive clients and traffic patterns that can degrade service reliability.",
    purpose:
      "Explore common rate-limiting strategies and build a middleware-style control layer for request traffic.",
    solution:
      "A Redis-backed limiter direction with configurable request windows and clear HTTP 429 responses when a client exceeds a limit.",
    technologies: ["Node.js", "Express", "Redis", "Middleware", "REST APIs"],
    image: "",
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
    learned:
      "Small API infrastructure components become system-design exercises once multiple instances and distributed state are involved.",
    outcome: "",
  },
  {
    id: "offline-ai-assistant",
    number: "04",
    title: "Offline AI Assistant",
    category: "Local AI / Agents / Computer Vision",
    filters: ["AI", "Tools", "In Progress"],
    status: "In Progress",
    statusNote: "Local-first assistant direction.",
    description: "An offline-first AI study assistant designed around local AI models and tools.",
    longDescription:
      "A local-first study assistant that runs against on-device models instead of a cloud API, orchestrating PDF understanding, OCR, voice interaction, math solving, coding help and long-term memory through a single tool-calling agent loop - built so it can keep working without an internet connection.",
    problem:
      "Students often need help across PDFs, images, code and math, but cloud-only tools can be limited by privacy, cost and connectivity.",
    purpose:
      "Explore a private, local-first assistant that can coordinate study tools around an on-device model.",
    solution:
      "A tool-orchestration direction that connects local models with PDF understanding, OCR, voice, math, coding and memory tools.",
    technologies: [
      "Ollama",
      "Qwen (local LLM)",
      "OCR",
      "PDF understanding",
      "Voice interaction",
      "Agent / tool orchestration",
    ],
    image: "",
    video: "",
    github: "",
    liveDemo: "",
    flagship: true,
    features: [
      "Local inference direction without cloud API dependency",
      "PDF ingestion and understanding",
      "OCR for scanned/handwritten input",
      "Voice interaction layer",
      "Math solving and coding assistance tools",
      "Persistent memory direction across sessions",
    ],
    architecture: {
      root: "User",
      flow: ["AI Assistant", "Orchestrator"],
      branches: ["PDF", "OCR", "Voice", "Math", "Coding", "Memory", "Local Tools"],
      tail: ["Local LLM", "Response"],
    },
    challenges:
      "Keeping response latency usable on consumer hardware while running multiple tool calls through a single local model.",
    learned:
      "The orchestration layer matters as much as the model because useful assistants need reliable tool selection and predictable handoffs.",
    outcome: "",
  },
  {
    id: "ai-resume-analyzer",
    number: "05",
    title: "AI Resume Analyzer",
    category: "AI / NLP / Career Tech",
    filters: ["AI", "Tools", "In Progress"],
    status: "In Progress",
    statusNote: "GitHub and live demo links are placeholders until available.",
    description:
      "An AI project direction for analyzing resumes and returning useful structured feedback.",
    longDescription:
      "AI Resume Analyzer is an in-progress project exploring how local AI models can inspect resume content and provide practical feedback on structure, skills, experience, missing information, job relevance and overall improvements.",
    problem:
      "Resume feedback is often generic. A useful analyzer should help a candidate understand what information is present, what is missing and what could be improved for a target role.",
    purpose:
      "Analyze a resume and turn unstructured document content into clearer, structured feedback that can guide revisions.",
    solution:
      "An in-progress AI/NLP workflow around resume parsing, local LLM analysis and structured output design.",
    technologies: ["Ollama", "Local LLM", "Python", "AI/NLP", "Resume parsing", "Structured analysis"],
    image: "",
    video: "",
    github: "",
    liveDemo: "",
    features: [
      "Resume structure review direction",
      "Skills and experience extraction direction",
      "Missing information checks",
      "Possible improvement suggestions",
      "Job relevance analysis direction",
      "Structured feedback output direction",
    ],
    architecture: ["Resume", "Parsing", "Structured Extraction", "Local LLM", "Feedback"],
    challenges:
      "Keeping feedback useful and specific without overstating what the analyzer can infer from a resume.",
    learned:
      "Career-tech AI needs careful prompt design and structured outputs so feedback stays actionable instead of vague.",
    outcome: "",
  },
  {
    id: "mcp-project",
    number: "06",
    title: "MCP Project",
    category: "AI / Tools / Protocols",
    filters: ["AI", "Tools", "In Progress"],
    status: "Coming Soon",
    statusNote: "Exploration planned; not presented as a completed project.",
    description:
      "An ongoing project exploring the Model Context Protocol and how AI systems can interact with external tools and data.",
    longDescription:
      "MCP Project is an upcoming exploration around the Model Context Protocol: how AI clients can connect to tool servers, read structured resources and work with external systems through a cleaner interface.",
    problem:
      "AI applications often need reliable ways to connect to tools and data without hard-coding every integration into one application.",
    purpose:
      "Explore how MCP can make tool and data access more modular for AI systems.",
    solution:
      "A planned project around MCP clients, servers, tools, resources and API-backed workflows.",
    technologies: ["MCP", "AI", "APIs", "Tools", "TypeScript", "Python"],
    image: "",
    video: "",
    github: "",
    liveDemo: "",
    features: [
      "MCP concepts exploration",
      "Tool and resource workflow direction",
      "Client/server architecture notes",
      "API-backed integration direction",
    ],
    architecture: ["AI Client", "MCP Server", "Tools", "Resources", "External Data"],
    challenges:
      "Designing a project scope that demonstrates MCP clearly without pretending the implementation is already finished.",
    learned:
      "Current Progress: defining the project scope and studying how MCP clients, servers, tools and resources fit together.",
    outcome: "",
  },
]

export const projectFilters = ["All", "AI", "Web", "Backend", "Tools", "In Progress"]

export const getProjectById = (id) => projects.find((p) => p.id === id)
