const projects = [
    {
        title: "E-Commerce Profit Optimization Engine",

        category: "Business Analytics",

        stack: [
            "Python",
            "Pandas",
            "SQL",
            "SQLite",
            "Tableau",
            "Matplotlib",
            "Seaborn"
        ],

        metrics: [
            "~20% Revenue from Loss-Making Transactions",
            "Profitability Breakeven at 20–30% Discounts",
            "~25% Simulated Profit Improvement Potential"
        ],

        insight:
            "High-revenue products with deep discounts create the illusion of growth while actively eroding margins.",

        image: "local",

        imageAlt: "E-Commerce Profit Optimization Dashboard",

        github:
            "https://github.com/deepbanik0506-bit/ecommerce-profit-optimizer",

        featured: true,

        description:
            "Conducted an end-to-end profitability analysis using SQL, Python, and Tableau to identify discount-driven losses, weak-margin categories, and high-revenue loss-making products."
    },

    {
        title: "Discount-Profit Sensitivity Analyzer",

        category: "Business Analytics",

        stack: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn"
        ],

        metrics: [
            "~30% Overall Discount Breakeven Threshold",
            "Tables Become Unprofitable at ~20% Discount",
            "~30% Median Discount Applied to Tables"
        ],

        insight:
            "Blanket discounting is destroying Furniture margins, with Tables emerging as the single largest loss driver.",

        image:
            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",

        imageAlt: "Discount Profit Margin Analysis",

        github:
            "https://github.com/deepbanik0506-bit/discount-profit-sensitivity-analyzer",

        featured: true,

        description:
            "Analyzed retail discount sensitivity to uncover profitability thresholds, category-level margin deterioration, and high-risk pricing behavior."
    },

    {
        title: "Customer Churn Prediction",

        category: "Machine Learning / Business Analytics",

        stack: [
            "Python",
            "Pandas",
            "Scikit-learn"
        ],

        metrics: [
            "~69% Accuracy",
            "~70% Recall at Threshold 0.5",
            "~82% Recall at Threshold 0.4"
        ],

        insight:
            "Month-to-month subscribers represent the highest churn-risk segment and should be prioritized for retention efforts.",

        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

        imageAlt: "Customer Churn Project",

        github:
            "https://github.com/deepbanik0506-bit/customer-churn-prediction",

        featured: true,

        description:
            "Built a churn prediction model to identify high-risk customers and uncover the behavioral drivers most associated with customer attrition."
    },

    {
        title: "Credit Card Customer Segmentation",

        category: "Machine Learning / Business Analytics",

        stack: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "PCA",
            "K-Means"
        ],

        metrics: [
            "Silhouette Score Improved 0.28 → 0.37",
            "K = 2 Customer Clusters",
            "~8,950 Customers Analyzed"
        ],

        insight:
            "Customers split into high-intensity spenders and low-engagement users, requiring differentiated engagement strategies.",

        image:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904",

        imageAlt: "Customer Segmentation Clustering",

        github:
            "https://github.com/deepbanik0506-bit/credit-card-segmentation",

        featured: false,

        description:
            "Applied PCA and K-Means clustering to identify distinct customer behavior segments for targeted marketing and retention strategies."
    }
];

export default projects;