
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BellIcon } from "lucide-react";
import { productCategories, regions, timePeriods } from "@/utils/mockData";

interface DashboardHeaderProps {
  timePeriod: string;
  setTimePeriod: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
}

export function DashboardHeader({
  timePeriod,
  setTimePeriod,
  category,
  setCategory,
  region,
  setRegion
}: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b pb-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">InsightIQ Dashboard</h1>
          <p className="text-muted-foreground">
            Your business metrics and AI-powered insights at a glance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <BellIcon className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-insight-error text-[10px] text-white">
              3
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-5">
        <div className="relative md:col-span-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search metrics, products..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={timePeriod} onValueChange={setTimePeriod}>
          <SelectTrigger>
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            {timePeriods.map((period) => (
              <SelectItem key={period.value} value={period.value}>
                {period.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {productCategories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger>
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((reg) => (
              <SelectItem key={reg.value} value={reg.value}>
                {reg.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
