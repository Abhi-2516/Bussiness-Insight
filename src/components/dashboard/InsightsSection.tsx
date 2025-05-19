
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aiInsights } from "@/utils/mockData";
import { Info, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

interface InsightsSectionProps {
  isLoading?: boolean;
}

export function InsightsSection({ isLoading = false }: InsightsSectionProps) {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-insight-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-insight-warning" />;
      case "info":
      default:
        return <Info className="h-5 w-5 text-insight-secondary" />;
    }
  };

  const getInsightBadge = (type: string) => {
    switch (type) {
      case "success":
        return <Badge className="bg-insight-success/10 text-insight-success border-insight-success/20">Opportunity</Badge>;
      case "warning":
        return <Badge className="bg-insight-warning/10 text-insight-warning border-insight-warning/20">Alert</Badge>;
      case "info":
      default:
        return <Badge className="bg-insight-secondary/10 text-insight-secondary border-insight-secondary/20">Insight</Badge>;
    }
  };

  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>AI-Generated Insights</span>
          <Badge variant="outline" className="ml-2">AUTO-UPDATED</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="text-center space-y-2">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Analyzing data...</p>
            </div>
          </div>
        ) : (
          aiInsights.map((insight) => (
            <Card key={insight.id} className="insight-card border-l-4 animate-fade-in" 
              style={{ 
                borderLeftColor: 
                  insight.type === "success" 
                    ? "#4caf50" 
                    : insight.type === "warning" 
                      ? "#ff9800" 
                      : "#039be5" 
              }}
            >
              <div className="flex gap-3 p-4">
                <div className="flex-shrink-0 mt-1">
                  {getInsightIcon(insight.type)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{insight.title}</h4>
                    {getInsightBadge(insight.type)}
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.content}</p>
                </div>
              </div>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
}
