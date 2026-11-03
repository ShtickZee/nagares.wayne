export interface Project {
  id: string
  title: string
  category: 'Flagship' | 'Mobile' | 'Web' | 'Full-Stack' | 'AI/ML'
  summary: string
  description: string
  role: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  githubUrl?: string
  liveUrl?: string
  apkUrl?: string
  featured?: boolean
  highlights: string[]
}

export const PERSONAL_INFO = {
  name: 'Wayne Yzon Nagares',
  title: 'BSIT Web & Mobile Developer | Edge ML Engineer',
  institution: 'Manuel S. Enverga University Foundation (MSEUF)',
  program: 'Bachelor of Science in Information Technology (BSIT)',
  specialization: 'Web & Mobile Application Development',
  email: 't22-34844@student.mseuf.edu.ph',
  location: 'Lucena City, Philippines',
  status: 'Open for Internships & Junior Developer Roles',
  bio: 'BSIT Web and Mobile student with specialized expertise in applied Edge AI (YOLOv8, TFLite), cross-platform mobile engineering (Flutter), and resilient backend web systems (Django REST Framework). Lead ML engineer on production-deployed agricultural intelligence systems.',
  github: 'https://github.com/Cbolea23/niyosense-capstone',
  linkedin: 'https://www.linkedin.com',
}

export const NIYOSENSE_DETAILS = {
  title: 'NiyoSense: Web & Mobile Coconut Maturity Profiling and Valuation System',
  status: 'Production Live • v1.5.2',
  liveUrl: 'https://niyosense.me',
  apkUrl: 'https://github.com/Cbolea23/niyosense-capstone/releases/download/v1.5.2/niyosense.apk',
  releaseUrl: 'https://github.com/Cbolea23/niyosense-capstone/releases/tag/v1.5.2',
  githubUrl: 'https://github.com/Cbolea23/niyosense-capstone',
  myRole: 'Lead Machine Learning Engineer & Supporting Full-Stack Developer',
  problem: 'In commercial coconut farming, young green coconuts (Malauhog vs. Buko) are traditionally graded using destructive splitting or subjective knuckle tapping. Human error causes severe crop loss and commercial revenue leakage during wholesale batch transactions.',
  solution: 'A non-destructive, offline-first agricultural intelligence platform combining on-device computer vision and acoustic digital signal processing to objectively grade young coconuts in under 1 second without internet connection.',
  mlArchitecture: {
    visualModel: 'YOLOv8-cls (img_best_v2.tflite) analyzing exocarp surface texture & hue ([1, 224, 224, 3] tensor)',
    acousticModel: 'YOLOv8-cls (spec_best_v2.tflite) analyzing 128-band Mel-spectrogram generated via pure-Dart STFT from 4.0s knuckle knocks',
    decisionFormula: 'P_final = (0.70 × P_audio) + (0.30 × P_visual)',
    whyAudio: 'Internal endosperm meat density modulates acoustic shell resonance significantly more than subtle exterior husk coloration.',
    quantization: '8-bit integer post-training quantization reducing latency to < 1.0s on standard Android mobile CPUs.',
    guardrails: [
      'Visual Gate: HSV luminance & color distribution check to discard non-coconut targets',
      'Acoustic Gate: RMS energy & knock cadence validation (requires 2–4 distinct strikes)',
      'Conflict Veto: Flags inconclusive scan if audio and visual models diverge by > 40%',
    ],
  },
  fullStackContributions: [
    'Collaborated on centralized Django 6.1 & Django REST Framework backend APIs',
    'Integrated offline-first SQLite 3 caching queue in Flutter for remote sheds (kamalig)',
    'Supported atomic batch sync engine connecting local device manifests to Render-hosted PostgreSQL 16',
    'Assisted in Cloudflare Edge CDN & Cloudinary media audit pipeline configuration',
  ],
  stack: [
    'Flutter 3.x',
    'Dart',
    'YOLOv8',
    'TensorFlow Lite',
    'Django 6.1',
    'Django REST Framework',
    'PostgreSQL 16',
    'SQLite 3 (ACID Offline)',
    'Digital Signal Processing (STFT)',
    'Cloudflare Edge',
    'Render Cloud',
    'Cloudinary CDN',
  ],
}

export const SUPPORTING_PROJECTS: Project[] = [
  {
    id: 'agritrace-inventory',
    title: 'GeoHarvest: Offline-First Field Asset & Batch Tracker',
    category: 'Mobile',
    summary: 'Cross-platform mobile application with offline SQLite caching, barcode/QR scanning, and background GPS geo-tagging for agricultural harvests.',
    description: 'Designed to solve inventory tracking in rural farms with spotty network coverage. Field workers record batch harvests offline with automatic geospatial coordinates and sync whenever cellular data is detected.',
    role: 'Mobile & Database Developer',
    tags: ['Flutter', 'SQLite', 'Geolocator', 'QR Scanner', 'Offline-First'],
    metrics: [
      { label: 'Sync Resilience', value: '100% Offline' },
      { label: 'Lookup Speed', value: '< 25ms' },
    ],
    highlights: [
      'Implemented local SQLite relational store with conflict resolution timestamps',
      'Integrated real-time hardware camera QR barcode scanning for quick batch logging',
      'Optimized battery consumption during background GPS coordinate logging',
    ],
    githubUrl: 'https://github.com/Cbolea23/niyosense-capstone',
  },
  {
    id: 'rest-auth-suite',
    title: 'SecureGate: Multi-Tenant Role-Based Auth & Session API',
    category: 'Web',
    summary: 'A production-hardened Django REST authentication backend featuring JWT refresh rotation, rate limiting, and granular permission gates.',
    description: 'A modular authentication and authorization microservice built for Web and Mobile client applications. Includes encrypted session tokens, OTP verification, and administrative audit logs.',
    role: 'Backend Developer',
    tags: ['Python', 'Django REST', 'PostgreSQL', 'SimpleJWT', 'Redis'],
    metrics: [
      { label: 'Auth Standard', value: 'OAuth 2.0 / JWT' },
      { label: 'Security Score', value: 'A+ Rated' },
    ],
    highlights: [
      'Implemented secure JWT refresh token rotation with blacklist revocation',
      'Role-based access control (RBAC) supporting Admin, Field Supervisor, and Client tiers',
      'Database connection pooling and rate-limiting middleware to guard against brute-force attacks',
    ],
    githubUrl: 'https://github.com/Cbolea23/niyosense-capstone',
  },
  {
    id: 'audio-dsp-lab',
    title: 'AcousticSpectra: Audio Signal Processing & Feature Extraction',
    category: 'AI/ML',
    summary: 'Python audio DSP toolkit converting raw acoustic vibrations into 128-band Mel-spectrograms for real-time neural network inference.',
    description: 'The experimental research sandbox used to prototype and benchmark the acoustic knuckle-knock analysis pipeline for agricultural grading. Evaluated FFT window lengths, hop sizes, and sample rates for edge mobile inference.',
    role: 'Lead ML / DSP Researcher',
    tags: ['Python', 'NumPy', 'Librosa', 'SciPy', 'YOLOv8', 'Torch'],
    metrics: [
      { label: 'FFT Window', value: '2048 / 512 Hop' },
      { label: 'Spectrogram Bands', value: '128 Mel' },
    ],
    highlights: [
      'Developed audio preprocessing routines to normalize ambient background noise',
      'Generated custom Mel-spectrogram training datasets for acoustic classification models',
      'Benchmark pipeline converted to pure-Dart DSP for direct on-device execution in Flutter',
    ],
    githubUrl: 'https://github.com/Cbolea23/niyosense-capstone',
  },
]

export const SKILLS_CATEGORIES = [
  {
    title: 'Edge AI & Machine Learning',
    icon: 'Brain',
    accent: 'emerald',
    skills: [
      { name: 'YOLOv8 (Object Detection & Classification)', level: 'Advanced / Lead Trainer' },
      { name: 'TensorFlow Lite (TFLite) & Model Quantization (INT8)', level: 'Specialist' },
      { name: 'Digital Signal Processing (STFT, Mel-Spectrograms)', level: 'Advanced' },
      { name: 'Python, NumPy, Librosa, OpenCV', level: 'Proficient' },
      { name: 'Multimodal Sensor Late Fusion Algorithms', level: 'Practical Production' },
    ],
  },
  {
    title: 'Mobile Application Engineering',
    icon: 'Smartphone',
    accent: 'cyan',
    skills: [
      { name: 'Flutter & Dart (Cross-Platform Android/iOS)', level: 'Advanced' },
      { name: 'Offline-First Architecture & SQLite 3 (ACID)', level: 'Advanced' },
      { name: 'On-Device Edge Inference (tflite_flutter)', level: 'Specialist' },
      { name: 'Camera Reticle & Microphone Audio Stream Controllers', level: 'Proficient' },
      { name: 'State Management (Provider / Bloc / Riverpod)', level: 'Proficient' },
    ],
  },
  {
    title: 'Web & Backend Development',
    icon: 'Server',
    accent: 'amber',
    skills: [
      { name: 'Python & Django 6.x', level: 'Advanced' },
      { name: 'Django REST Framework (DRF) & API Design', level: 'Advanced' },
      { name: 'Authentication & Security (SimpleJWT, RBAC, Passkeys)', level: 'Proficient' },
      { name: 'PostgreSQL 16 & Relational Schema Modeling', level: 'Proficient' },
      { name: 'Frontend Web (HTML5, Tailwind CSS, React, TypeScript)', level: 'Proficient' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tooling',
    icon: 'Cloud',
    accent: 'purple',
    skills: [
      { name: 'Git & GitHub Version Control (Branching, PRs, Commits)', level: 'Daily Workflow' },
      { name: 'Render Cloud Host & Dockerized Deployments', level: 'Working Knowledge' },
      { name: 'Cloudflare Edge CDN, DNS & SSL Configuration', level: 'Working Knowledge' },
      { name: 'Cloudinary CDN Media Pipelines', level: 'Working Knowledge' },
      { name: 'GitHub Actions (CI/CD Automated Testing & Build)', level: 'Practical' },
    ],
  },
]
