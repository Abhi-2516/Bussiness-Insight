
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { salesTrendData, revenueSourceData, customerSegmentData } from "@/utils/mockData";
import { Loader2 } from "lucide-react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

interface ChartSectionProps {
  isLoading?: boolean;
  selectedPeriod?: string;
  category?: string;
  region?: string;
}

export function ChartSection({ isLoading = false, selectedPeriod = "30d", category = "all", region = "all" }: ChartSectionProps) {
  // Filter chart data based on selected filters
  // In a real app, this would filter actual data from an API
  // Here we're just simulating different data views
  
  const getFilteredSalesData = () => {
    // Apply random variations based on filters to simulate different data sets
    return salesTrendData.map(item => ({
      ...item,
      sales: adjustValueByFilters(item.sales, selectedPeriod, category, region)
    }));
  };
  
  const getFilteredRevenueData = () => {
    // Apply random variations to simulate different data sets
    return revenueSourceData.map(item => ({
      ...item,
      value: adjustValueByFilters(item.value, selectedPeriod, category, region)
    }));
  };
  
  const getFilteredCustomerData = () => {
    // Apply random variations to simulate different data sets
    return customerSegmentData.map(item => ({
      ...item,
      count: adjustValueByFilters(item.count, selectedPeriod, category, region, 0.5)
    }));
  };
  
  // Helper to adjust values based on filters (simulates different data views)
  const adjustValueByFilters = (value: number, period: string, cat: string, reg: string, factor = 0.2) => {
    let adjustment = 1;
    
    // Period adjustments
    if (period === "7d") adjustment *= (1 - factor * 0.5);
    if (period === "90d") adjustment *= (1 + factor * 0.3);
    if (period === "12m") adjustment *= (1 + factor * 0.7);
    
    // Category adjustments  
    if (cat === "electronics") adjustment *= (1 + factor * 0.4);
    if (cat === "clothing") adjustment *= (1 - factor * 0.2);
    if (cat === "beauty") adjustment *= (1 + factor * 0.1);
    
    // Region adjustments
    if (reg === "north") adjustment *= (1 - factor * 0.1);
    if (reg === "south") adjustment *= (1 + factor * 0.3);
    if (reg === "east") adjustment *= (1 + factor * 0.2);
    if (reg === "west") adjustment *= (1 - factor * 0.1);
    
    return Math.round(value * adjustment);
  };
  
  const filteredSalesData = getFilteredSalesData();
  const filteredRevenueData = getFilteredRevenueData();
  const filteredCustomerData = getFilteredCustomerData();

  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Tabs defaultValue="sales">
            <TabsList className="mb-4">
              <TabsTrigger value="sales">Sales Trend</TabsTrigger>
              <TabsTrigger value="revenue">Revenue Sources</TabsTrigger>
              <TabsTrigger value="customers">Customer Segments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={filteredSalesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis
                      tickFormatter={(value) => `$${value.toLocaleString()}`} 
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#0d47a1"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="revenue" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={filteredRevenueData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {filteredRevenueData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="customers" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredCustomerData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="segment" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()} customers`, 'Count']} />
                    <Legend />
                    <Bar dataKey="count" fill="#039be5">
                      {filteredCustomerData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}
