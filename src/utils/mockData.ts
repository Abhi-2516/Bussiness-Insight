
// Mock data for our dashboard

// Time periods for filters
export const timePeriods = [
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "90d", label: "Last 90 Days" },
  { value: "12m", label: "Last 12 Months" },
];

// Product categories for filters
export const productCategories = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home & Garden" },
  { value: "beauty", label: "Beauty & Health" },
];

// Regions for filters
export const regions = [
  { value: "all", label: "All Regions" },
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "east", label: "East" },
  { value: "west", label: "West" },
];

// KPI Data
export const kpiData = {
  totalRevenue: {
    value: "$127,894",
    trend: 12.5,
    previousValue: "$113,682",
    formattedTrend: "+12.5%",
  },
  avgOrderValue: {
    value: "$78.42",
    trend: 3.2,
    previousValue: "$75.99",
    formattedTrend: "+3.2%",
  },
  conversionRate: {
    value: "3.8%",
    trend: -0.7,
    previousValue: "3.9%",
    formattedTrend: "-0.7%",
  },
  customerAcquisition: {
    value: "$24.18",
    trend: -5.1,
    previousValue: "$25.48",
    formattedTrend: "-5.1%",
  },
};

// Revenue by source data for pie chart
export const revenueSourceData = [
  { name: "Online Store", value: 65000 },
  { name: "Marketplaces", value: 37500 },
  { name: "Social Media", value: 15200 },
  { name: "Retail Partners", value: 10194 },
];

// Sales trend data for line chart
export const salesTrendData = [
  { month: "Jan", sales: 15000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 17000 },
  { month: "Apr", sales: 22000 },
  { month: "May", sales: 19500 },
  { month: "Jun", sales: 24500 },
  { month: "Jul", sales: 28700 },
  { month: "Aug", sales: 26300 },
  { month: "Sep", sales: 31200 },
  { month: "Oct", sales: 29800 },
  { month: "Nov", sales: 33500 },
  { month: "Dec", sales: 40500 },
];

// Customer segment data for bar chart
export const customerSegmentData = [
  { segment: "New", count: 1254 },
  { segment: "Returning", count: 4310 },
  { segment: "Loyal", count: 2876 },
  { segment: "VIP", count: 954 },
];

// AI Insights (pre-generated)
export const aiInsights = [
  {
    id: 1,
    title: "Revenue Growth in Electronics",
    content:
      "Your electronics category has shown a 23% increase in revenue over the last 30 days, outperforming all other categories. Consider allocating more marketing budget to this high-performing segment.",
    type: "success",
  },
  {
    id: 2,
    title: "Customer Acquisition Cost Alert",
    content:
      "Your customer acquisition cost has increased by 5.1% compared to the previous period. This may be due to decreased effectiveness of Facebook ad campaigns, which are showing a 12% lower conversion rate.",
    type: "warning",
  },
  {
    id: 3,
    title: "Product Opportunity",
    content:
      "Analysis shows that customers who purchase item A often look for item B, but only 12% complete that purchase. Consider creating a bundle or targeted recommendation to increase cross-selling opportunities.",
    type: "info",
  },
];

// AI Assistant Responses
export const aiAssistantResponses = {
  "why did revenue drop last month": 
    "Revenue dropped 8% last month primarily due to three factors: 1) Seasonal decrease in the clothing category (-15%), 2) Stock outages in your top 3 electronics products, and 3) A 24-hour website outage on the 15th that coincided with your email campaign. Recommendation: Improve inventory forecasting for electronics and implement a contingency plan for website maintenance periods.",
  
  "which products should we promote": 
    "Based on current trends, your highest ROI opportunities are: 1) The 'Smart Home' product line, which has a 32% higher conversion rate than other categories, 2) Your 'Premium Skincare' collection, which has the highest customer retention rate (68%), and 3) The 'Fitness Trackers', which show strong cross-selling potential with your supplements category.",
  
  "how can we improve conversion rate": 
    "Your data indicates three main conversion bottlenecks: 1) Mobile checkout abandonment is 34% higher than desktop - I recommend simplifying the mobile payment process, 2) Customers spend 40% less time on product pages without videos - add more video content, and 3) Your shipping costs appear late in the checkout process - consider showing estimated shipping earlier.",
    
  "sales forecast": 
    "Based on current trends and seasonal patterns, I project Q2 sales to increase by 14-18% over Q1, with the 'Electronics' and 'Beauty' categories leading growth. I'm detecting a potential inventory challenge for your bestselling wireless headphones around week 7 - I recommend increasing your order by 25% now to avoid stockouts.",
    
  "pricing strategy": 
    "Your current pricing data indicates potential for optimization. A/B testing shows customers are price insensitive to your premium items (items over $200), suggesting a 5-8% price increase would maximize revenue without hurting sales. Meanwhile, your mid-tier products ($50-120) are highly competitive and would benefit from bundle promotions rather than discounting.",
    
  "marketing recommendations": 
    "Your marketing budget allocation analysis reveals: 1) Social media ads are delivering 2.3x better ROI than search ads this quarter, 2) Email campaigns to your loyalty segment have a 34% higher conversion rate - double down here, and 3) Your influencer collaborations are underperforming except in the beauty category. I recommend reallocating 30% of your influencer budget to targeted social media campaigns.",
    
  "customer retention": 
    "Customer retention data shows three key insights: 1) First-time buyers who purchase within 30 days have a 72% higher lifetime value, 2) Your 'Welcome Series' emails have a 38% open rate but only 2.1% conversion - optimize this touchpoint, and 3) Customers who engage with your loyalty program have 24% lower churn. Consider featuring the loyalty program more prominently in your post-purchase communications.",
    
  "inventory management": 
    "Inventory analysis reveals: 1) You're currently overstocked on seasonal clothing items by approximately 22%, 2) Your electronics inventory turnover rate is excellent at 12.3 days, and 3) You have potential stockout risk for your top 5 beauty products within 14 days. Recommendation: Implement a 15% discount strategy on slow-moving clothing items and expedite your beauty products reorder.",
};

// Suggested questions for the AI assistant
export const suggestedQuestions = [
  "Why did revenue drop last month?",
  "Which products should we promote?",
  "How can we improve conversion rate?",
  "What's our sales forecast?",
  "Suggest a pricing strategy",
  "Give marketing recommendations",
  "How can we improve customer retention?",
  "Analyze our inventory management",
];
