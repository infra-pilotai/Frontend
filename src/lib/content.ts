import { STRIPE_PRO_MONTHLY_URL, STRIPE_STARTER_MONTHLY_URL } from "@/lib/site";

export const programs = [
  {
    title: "Predictive Infrastructure Analytics",
    img: "/program-predictive.png",
    desc: "Forecasts outages before they occur, detects anomalies, and identifies performance degradation patterns.",
    overview: "Infra-PilotAI's predictive analytics engine continuously analyzes infrastructure behavior across cloud, Kubernetes, and GPU environments. Models forecast outages before they impact production, surface anomaly patterns in real time, and flag degradation trends — transforming reactive monitoring into proactive intelligence.",
    highlights: [
      "Outage forecasting with model-driven risk scoring",
      "Real-time anomaly detection across distributed systems",
      "Performance degradation pattern identification",
      "Predictive alerts with actionable remediation context",
    ],
  },
  {
    title: "Kubernetes Monitoring & Intelligence",
    img: "/program-kubernetes.png",
    desc: "Monitors cluster health and workload distribution, optimizes pod scheduling, and detects inefficiencies in real time.",
    overview: "Gain end-to-end visibility into every cluster, namespace, and workload. Infra-PilotAI monitors Kubernetes health at scale, optimizes pod scheduling and resource allocation, and surfaces scheduling inefficiencies before they cascade into production incidents.",
    highlights: [
      "Live cluster health and workload distribution dashboards",
      "Intelligent pod scheduling and resource optimization",
      "Real-time inefficiency detection across namespaces",
      "Multi-cluster visibility for platform engineering teams",
    ],
  },
  {
    title: "GPU & Compute Optimization",
    img: "/program-gpu.png",
    desc: "Optimizes GPU workloads for model training and inference tasks, balances compute-intensive operations, and reduces infrastructure costs and latency.",
    overview: "Model training and inference workloads demand specialized compute. Infra-PilotAI optimizes GPU utilization across training and inference pipelines, balances compute-intensive operations dynamically, and reduces both infrastructure cost and end-to-end latency for GPU-intensive environments.",
    highlights: [
      "GPU workload profiling and utilization heatmaps",
      "Dynamic compute balancing for model training pipelines",
      "Cost and latency optimization recommendations",
      "Support for multi-GPU and distributed training clusters",
    ],
  },
  {
    title: "Automated Remediation Agents",
    img: "/program-remediation.png",
    desc: "Automatically resolves infrastructure incidents and executes predefined and model-generated recovery actions to reduce MTTR.",
    overview: "When incidents occur, every second counts. Infra-PilotAI's intelligent remediation agents detect failures, correlate context across your stack, and execute predefined or model-generated recovery actions — dramatically reducing mean time to recovery without waiting for manual intervention.",
    highlights: [
      "Model-generated and predefined recovery action execution",
      "Automated incident resolution across cloud and clusters",
      "Guardrails, approval gates, and full audit trails",
      "Measurable MTTR reduction with post-incident timelines",
    ],
  },
  {
    title: "Infrastructure Operations Dashboard",
    img: "/program-dashboard.png",
    desc: "Displays system health and predictive alerts, visualizes cloud and cluster performance, and tracks cost and optimization metrics.",
    overview: "A command-center view of your entire infrastructure estate. The operations dashboard surfaces system health scores, predictive alerts, cloud topology visualizations, and Kubernetes cluster performance — giving DevOps, SRE, and platform teams a single pane of glass for autonomous operations.",
    highlights: [
      "Real-time system health and predictive alert views",
      "Cloud topology and Kubernetes cluster dashboards",
      "Cost, usage, and optimization metric tracking",
      "Role-based views for engineering and leadership teams",
    ],
  },
  {
    title: "Cloud Cost Optimization Engine",
    img: "/program-cost.png",
    desc: "Analyzes spend patterns, right-sizes resources, and delivers continuous cost efficiency across enterprise cloud estates.",
    overview: "Cloud costs are inefficient and unpredictable without intelligence. Infra-PilotAI continuously analyzes spend patterns, identifies over-provisioned resources, and recommends right-sizing actions across your cloud infrastructure — balancing reliability, performance, and cost efficiency at enterprise scale.",
    highlights: [
      "Continuous spend analysis and anomaly detection",
      "Right-sizing recommendations for compute and storage",
      "Reserved capacity and quota planning insights",
      "Cost vs. performance trade-off modeling",
    ],
  },
];

export const features = [
  { iconUrl: "/why-icon-predictive.png", title: "Predictive Intelligence", desc: "Forecast outages and performance degradation before they impact production — not after." },
  { iconUrl: "/why-icon-operations.png", title: "Intelligent Operations", desc: "Intelligent agents that predict failures, optimize resources, and self-heal cloud systems without manual intervention." },
  { iconUrl: "/why-icon-observability.png", title: "Full Observability", desc: "Unified observability and telemetry pipeline across cloud, Kubernetes, on-prem, and hybrid environments." },
  { iconUrl: "/why-icon-resilience.png", title: "Enterprise Resilience", desc: "Built for mission-critical infrastructure with RBAC, audit trails, and compliance-ready data pipelines." },
];

export const coreFeatures = [
  "Predictive Infrastructure Analytics Engine",
  "AIOps Monitoring System",
  "Kubernetes Optimization Layer",
  "GPU Workload Intelligence System",
  "Automated Incident Remediation Agents",
  "Cloud Cost Optimization Engine",
  "Observability & Telemetry Pipeline",
  "Scalable Intelligent Infrastructure Architecture",
];

export const architectureImages = [
  "/architecture-cloud.png",
  "/architecture-circuit.png",
  "/architecture-laptop.png",
  "/architecture-team.png",
];

export const quickPrograms = [
  {
    iconUrl: "/workflow-monitor.png",
    title: "Monitor & Observe",
    desc: "Ingest telemetry from cloud, clusters, and GPU fleets through a unified pipeline",
    overview: "Infra-PilotAI collects metrics, logs, traces, and events from multi-cloud, Kubernetes, on-prem, and GPU environments into a single observability pipeline — giving your teams continuous visibility without tool sprawl.",
    highlights: [
      "Unified telemetry ingestion across cloud, clusters, and GPU fleets",
      "Real-time health signals from nodes, pods, services, and workloads",
      "Normalized data layer for cross-environment correlation",
      "Integrations with cloud-native and third-party observability stacks",
    ],
  },
  {
    iconUrl: "/workflow-predict.png",
    title: "Predict & Analyze",
    desc: "Forecast outages and detect anomalies before they impact production workloads",
    overview: "Model-driven analytics continuously evaluate infrastructure behavior to forecast outages, surface anomalies, and identify degradation patterns — so teams act on risk before customers are affected.",
    highlights: [
      "Outage forecasting with predictive risk scoring",
      "Anomaly detection across distributed systems and GPU workloads",
      "Trend analysis for latency, saturation, and error-rate spikes",
      "Context-rich alerts tied to affected services and clusters",
    ],
  },
  {
    iconUrl: "/workflow-optimize.png",
    title: "Optimize Resources",
    desc: "Right-size Kubernetes workloads and GPU compute for cost and performance",
    overview: "Continuous optimization recommendations help you balance performance, reliability, and spend — from Kubernetes pod scheduling to GPU utilization for model training and inference pipelines.",
    highlights: [
      "Kubernetes workload right-sizing and scheduling insights",
      "GPU utilization profiling for training and inference jobs",
      "Cloud cost anomaly detection and spend optimization",
      "Performance vs. cost trade-off recommendations at scale",
    ],
  },
  {
    iconUrl: "/workflow-remediate.png",
    title: "Remediate Automatically",
    desc: "Intelligent agents execute recovery actions and reduce mean time to recovery",
    overview: "When incidents occur, intelligent remediation agents correlate signals across your stack and execute predefined or model-generated recovery actions — with guardrails, approval gates, and full audit trails.",
    highlights: [
      "Automated runbooks for common infrastructure failures",
      "Model-generated recovery actions with human-in-the-loop controls",
      "Cross-stack correlation for faster root-cause resolution",
      "Measurable MTTR reduction with post-incident timelines",
    ],
  },
  {
    iconUrl: "/workflow-govern.png",
    title: "Visualize & Govern",
    desc: "Command-center dashboards for health, alerts, cost, and cloud topology",
    overview: "Operations dashboards provide a single pane of glass for system health, predictive alerts, cloud topology, and cost metrics — with role-based views for engineering, SRE, and leadership teams.",
    highlights: [
      "Command-center views for health, alerts, and topology",
      "Role-based dashboards for DevOps, SRE, and platform teams",
      "Cost, usage, and optimization tracking in one interface",
      "Governance controls with RBAC and audit-ready reporting",
    ],
  },
];

export const plans = [
  { name: "Starter", price: 99, paymentUrl: STRIPE_STARTER_MONTHLY_URL, features: ["AIOps monitoring for up to 50 nodes", "Basic predictive alerting & dashboards", "Kubernetes cluster visibility", "Email support · 7-day data retention"] },
  { name: "Pro", price: 249, featured: true, paymentUrl: STRIPE_PRO_MONTHLY_URL, features: ["All Starter features", "GPU optimization module", "Automated remediation agents", "Usage-based scaling · 30-day retention"] },
  { name: "Enterprise", customPrice: true, features: ["Full enterprise AIOps licensing", "Custom deployment & API access", "Premium GPU optimization modules", "Dedicated success manager · unlimited retention"] },
];

export const productProblems = [
  "Infrastructure outages detected too late",
  "Cloud costs inefficient and unpredictable",
  "Kubernetes clusters difficult to manage at scale",
  "GPU workloads under-optimized",
  "Incident response manual and slow",
  "Monitoring tools reactive instead of predictive",
];

export const targetUsers = [
  "Cloud engineering teams",
  "DevOps and SRE teams",
  "Enterprise IT departments",
  "Intelligent infrastructure teams",
  "Kubernetes platform teams",
  "SaaS companies & cloud providers",
];

export const faqItems = [
  {
    question: "What is Infra-PilotAI?",
    answer:
      "Infra-PilotAI is an intelligent AIOps platform that monitors, predicts, and automates infrastructure operations across cloud, Kubernetes, and GPU-intensive environments — acting as an autonomous operations layer for enterprise IT teams.",
  },
  {
    question: "How is Infra-PilotAI different from traditional monitoring tools?",
    answer:
      "Traditional tools are reactive — they alert you after something breaks. Infra-PilotAI uses predictive analytics and intelligent agents to forecast outages, optimize resources, and self-heal systems before incidents impact production.",
  },
  {
    question: "Which infrastructure environments does Infra-PilotAI support?",
    answer:
      "Infra-PilotAI supports multi-cloud, hybrid, on-prem, and Kubernetes environments, with specialized modules for GPU workload optimization, cluster intelligence, and cloud cost management.",
  },
  {
    question: "What are automated remediation agents?",
    answer:
      "Remediation agents detect infrastructure incidents and execute predefined or model-generated recovery actions automatically — reducing mean time to recovery with guardrails, approval gates, and full audit trails.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Infra-PilotAI offers Starter ($99/mo), Pro ($249/mo), and Enterprise (custom pricing) tiers. Plans scale with your infrastructure footprint, with usage-based options and premium GPU optimization modules available on higher tiers.",
  },
  {
    question: "Can I integrate Infra-PilotAI with existing tools?",
    answer:
      "Yes. Infra-PilotAI provides API access for automation and monitoring, integrates with cloud-native observability stacks, and supports custom enterprise deployment for teams with existing DevOps and SRE workflows.",
  },
];
