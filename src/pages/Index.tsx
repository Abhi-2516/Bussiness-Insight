
import { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { InsightsSection } from "@/components/dashboard/InsightsSection";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { kpiData, timePeriods, productCategories, regions } from "@/utils/mockData";
import { DollarSignIcon, PercentIcon, CreditCardIcon, UsersIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [timePeriod, setTimePeriod] = useState("30d");
  const [category, setCategory] = useState("all");
  const [region, setRegion] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Simulate data loading
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Show toast notification when data is loaded
      toast({
        title: "Dashboard updated",
        description: `Data refreshed for ${timePeriods.find(p => p.value === timePeriod)?.label || "Last 30 Days"}`,
      });
    }, 800);
    
    return () => clearTimeout(timer);
  }, [timePeriod, category, region, toast]);
  
  // Handle filter changes
  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
  };
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };
  
  const handleRegionChange = (value: string) => {
    setRegion(value);
  };

  return (
    <div className="container mx-auto px-4 py-6 animate-fade-in">
      <DashboardHeader
        timePeriod={timePeriod}
        setTimePeriod={handleTimePeriodChange}
        category={category}
        setCategory={handleCategoryChange}
        region={region}
        setRegion={handleRegionChange}
      />
      
      <div className="mt-6 grid grid-cols-12 gap-6">
        {/* KPI Cards */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <KPICard
            title="Total Revenue"
            value={isLoading ? "Loading..." : kpiData.totalRevenue.value}
            trend={kpiData.totalRevenue.trend}
            formattedTrend={kpiData.totalRevenue.formattedTrend}
            icon={<DollarSignIcon className="h-8 w-8" />}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <KPICard
            title="Average Order Value"
            value={isLoading ? "Loading..." : kpiData.avgOrderValue.value}
            trend={kpiData.avgOrderValue.trend}
            formattedTrend={kpiData.avgOrderValue.formattedTrend}
            icon={<CreditCardIcon className="h-8 w-8" />}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <KPICard
            title="Conversion Rate"
            value={isLoading ? "Loading..." : kpiData.conversionRate.value}
            trend={kpiData.conversionRate.trend}
            formattedTrend={kpiData.conversionRate.formattedTrend}
            icon={<PercentIcon className="h-8 w-8" />}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <KPICard
            title="Customer Acquisition"
            value={isLoading ? "Loading..." : kpiData.customerAcquisition.value}
            trend={kpiData.customerAcquisition.trend}
            formattedTrend={kpiData.customerAcquisition.formattedTrend}
            icon={<UsersIcon className="h-8 w-8" />}
          />
        </div>
        
        {/* Charts and Insights */}
        <ChartSection isLoading={isLoading} selectedPeriod={timePeriod} category={category} region={region} />
        <InsightsSection isLoading={isLoading} />
        
        {/* AI Assistant */}
        <AIAssistant />
      </div>
    </div>
  );
};

export default Index;
