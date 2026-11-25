export type Project = { title: string; type: string; description: string; stack: string[]; features: string[]; result: string; image: string; github: string; demo: string; accent: string };
export const projects: Project[] = [
  {
    title: "Priorly: AI Patent Prior-Art Search",
    type: "GenAI - RAG",
    description: "A patent discovery engine that finds semantically relevant prior art for a technical claim, then maps claim elements to evidence so novelty checks are fast and explainable.",
    stack: ["Python", "FastAPI", "Qdrant", "OpenSearch", "BGE Embeddings", "BM25", "Groq", "Docker"],
    features: ["Hybrid BM25 + BGE dense retrieval over 5,803 real patents", "LLM query expansion and technical terminology mapping", "Claim-level evidence: matching, partial and missing elements"],
    result: "Retrieval quality tracked with Recall@10 on 60 dev and 40 test queries.",
    image: "/projects/priorly.svg",
    github: "https://github.com/AfzalManihar/Priorly-AI-Patent-Search",
    demo: "https://priorly-ai-patent-search.vercel.app/wake.html",
    accent: "cyan"
  },
  {
    title: "TripMate AI: Multi-Agent Travel Planner",
    type: "Agentic AI - Multi-agent",
    description: "A supervisor-led LangGraph planner that researches flights, destinations and weather through external tools, then waits for your approval before finalizing the itinerary.",
    stack: ["LangGraph", "MCP", "FastAPI", "Tavily", "LangSmith", "Render"],
    features: ["Supervisor agent with guardrails", "Custom MCP weather server", "Human-in-the-loop itinerary approval and PDF export"],
    result: "Orchestrates 3 external tools with every run traceable in LangSmith.",
    image: "/projects/tripmate.svg",
    github: "https://github.com/AfzalManihar/TripMate-AI-Travel-Planner-Agent",
    demo: "https://tripmate-ai-travel-planner-agent.onrender.com/",
    accent: "lime"
  },
  {
    title: "Lumina Tutor: Instructional Design Agent",
    type: "Agentic AI - Multi-agent",
    description: "Three cooperating agents design a lesson, test it with a simulated learner, and improve it before delivery.",
    stack: ["LangGraph", "Groq", "Pydantic", "Python"],
    features: [
      "Multi-agent lesson design and evaluation",
      "Adaptive tutoring with progressive hints",
      "Dashboard with LangGraph execution traces"
    ],
    result: "Lessons validated using Gagné and Merrill instructional frameworks.",
    image: "/projects/lumina.svg",
    github: "https://github.com/AfzalManihar/lumina-ai-tutor",
    demo: "https://lumina-ai-tutor-b5229.containers.snapdeploy.app/",
    accent: "cyan"
  },
  {
    title: "SQL Music Store Analysis",
    type: "Data Analytics · SQL",
    description: "PostgreSQL analysis of customer spending, revenue trends, and top-performing artists in a digital music store.",
    stack: ["PostgreSQL", "SQL", "CTEs", "Window Functions"],
    features: [
      "CTEs and window functions for analysis",
      "Customer purchasing behaviour and segmentation",
      "Revenue and artist performance analysis"
    ],
    result: "Top 20% of customers contribute 62% of total revenue.",
    image: "/projects/music.svg",
    github: "https://github.com/AfzalManihar/SQL_Music_Store_Analysis",
    demo: "",
    accent: "lime"
  },
  {
    title: "Chatbot Agent",
    type: "GenAI - RAG",
    description: "A Streamlit chatbot powered by Groq-hosted LLMs for real-time conversations through a simple web interface.",
    stack: ["Python", "Streamlit", "Groq"],
    features: [
      "Interactive conversational chat interface",
      "Real-time Groq LLM responses",
      "Deployed on Streamlit Cloud"
    ],
    result: "Live AI chatbot available for users to try.",
    image: "/projects/chatbot.svg",
    github: "https://github.com/AfzalManihar/Chatbot-Agent-Streamlit",
    demo: "https://chatbot-agent-app.streamlit.app/",
    accent: "cyan"
  }
];
