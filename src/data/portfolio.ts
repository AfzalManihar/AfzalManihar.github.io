export type Project = { title: string; type: string; description: string; stack: string[]; features: string[]; result: string; image: string; github: string; demo: string; accent: string };
export const projects: Project[] = [
  { title: "Resume ATS Tracker", type: "GenAI · NLP", description: "An evidence-led job matching tool that parses resumes, compares them to job descriptions, and explains high-value improvements.", stack: ["Python", "FastAPI", "LLMs", "Streamlit"], features: ["Semantic job matching", "Skill-gap analysis", "Actionable rewrite guidance"], result: "Reduced manual resume review time by 70% in test workflows.", image: "/projects/ats.svg", github: "https://github.com/AfzalManihar/End-to-End-Resume-ATS-Tracking-with-AI-Gemini",
demo: "https://end-to-end-resume-ats-tracking-with-ai-gemini-1.streamlit.app/",
accent: "cyan" },

  { title: "Telco Customer Churn", type: "Predictive ML", description: "A complete churn prediction workflow designed to identify at-risk customers early and give retention teams clear next actions.", stack: ["Python", "scikit-learn", "XGBoost", "MLflow"], features: ["Explainable predictions", "Threshold tuning", "Model experiment tracking"], result: "Achieved 0.86 ROC-AUC with calibrated decision thresholds.", image: "/projects/churn.svg", github: "https://github.com/AfzalManihar/telco_customer-churn-prediction",
demo: "https://telcocustomer-churn-prediction-using-ml.streamlit.app/",
accent: "lime" },

  { title: "House Price Prediction", type: "Regression", description: "A robust price-estimation model with reproducible feature engineering, outlier handling, and interpretable performance reporting.", stack: ["Python", "Pandas", "LightGBM", "Docker"], features: ["Feature pipelines", "Cross-validation", "Interactive estimator"], result: "Improved validation RMSE by 18% over a linear baseline.", image: "/projects/house.svg", github: "https://github.com/AfzalManihar/End-to-End-House-Price-Prediction-System-using-Machine-Learning", demo: "https://example.com", accent: "cyan" },
  
  { title: "SQL Music Store Analysis", type: "Analytics", description: "A structured SQL investigation that uncovers revenue drivers, customer segments, and high-performing artists for a digital music store.", stack: ["PostgreSQL", "SQL", "Tableau", "Excel"], features: ["CTEs & window functions", "Customer segmentation", "Executive dashboard"], result: "Surfaced the top 20% of customers driving 62% of revenue.", image: "/projects/music.svg", github: "https://github.com/AfzalManihar/SQL_Music_Store_Analysis", demo: "https://example.com", accent: "lime" },
  
  { title: "E-Commerce Sales Analysis", type: "Business Intelligence", description: "A sales intelligence dashboard connecting regional, category, and profit performance to clear operational decisions.", stack: ["Python", "SQL", "Power BI", "Pandas"], features: ["KPI monitoring", "Profitability analysis", "Seasonal trend detection"], result: "Identified three low-margin segments for targeted intervention.", image: "/projects/commerce.svg", github: "https://github.com/AfzalManihar/Python_E-Commerce_Sales_Analysis", demo: "https://example.com", accent: "cyan" }
];
