
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  formattedTrend: string;
  icon?: React.ReactNode;
}

export function KPICard({ title, value, trend, formattedTrend, icon }: KPICardProps) {
  const isPositiveTrend = trend > 0;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "kpi-card overflow-hidden transition-all duration-300 relative",
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between p-4">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">{title}</div>
          <div className="text-2xl font-bold mb-1">{value}</div>
          <div
            className={cn("flex items-center text-sm", {
              "text-insight-success": isPositiveTrend,
              "text-insight-error": !isPositiveTrend && trend !== 0,
              "text-muted-foreground": trend === 0,
            })}
          >
            {isPositiveTrend ? (
              <ArrowUp className="mr-1 h-4 w-4" />
            ) : trend < 0 ? (
              <ArrowDown className="mr-1 h-4 w-4" />
            ) : null}
            <span>{formattedTrend}</span>
          </div>
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      
      {/* Visual indicator of trend */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div 
          className={cn("h-full transition-all", {
            "bg-insight-success": isPositiveTrend,
            "bg-insight-error": !isPositiveTrend && trend !== 0,
            "bg-muted": trend === 0
          })}
          style={{ width: `${Math.min(Math.abs(trend * 5), 100)}%` }}
        ></div>
      </div>
    </Card>
  );
}
