import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, Server, Code, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Generate random data for demo
const generateData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    time: `${i * 2}:00`,
    cpu: Math.floor(Math.random() * 40) + 30,
    memory: Math.floor(Math.random() * 30) + 40,
    requests: Math.floor(Math.random() * 500) + 200,
    errors: Math.floor(Math.random() * 10),
  }));
};

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

const MetricCard = ({ icon: Icon, label, value, change, positive }: MetricCardProps) => (
  <div className="p-4 rounded-xl bg-muted/50 border border-border">
    <div className="flex items-center justify-between mb-2">
      <Icon className="w-5 h-5 text-accent" />
      {change && (
        <span className={cn(
          "text-xs font-medium",
          positive ? "text-success" : "text-destructive"
        )}>
          {change}
        </span>
      )}
    </div>
    <p className="text-2xl font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

interface AlertItemProps {
  type: "success" | "warning" | "error";
  message: string;
  time: string;
}

const AlertItem = ({ type, message, time }: AlertItemProps) => {
  const icons = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertTriangle,
  };
  const colors = {
    success: "text-success",
    warning: "text-warning",
    error: "text-destructive",
  };
  const Icon = icons[type];

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <Icon className={cn("w-4 h-4 mt-0.5", colors[type])} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground truncate">{message}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
          <Clock className="w-3 h-3" />
          {time}
        </p>
      </div>
    </div>
  );
};

export const DashboardDemo = () => {
  const [data, setData] = useState(generateData());
  const [metrics, setMetrics] = useState({
    uptime: "99.97%",
    responseTime: "42ms",
    codeScore: "A+",
    activeServers: "24",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-2xl"
    >
      {/* Dashboard Header */}
      <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <span className="font-heading font-semibold text-foreground">Live Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Real-time data</span>
          <Activity className="w-4 h-4 text-accent animate-pulse" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 md:p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
          <MetricCard
            icon={Server}
            label="Uptime"
            value={metrics.uptime}
            change="+0.02%"
            positive
          />
          <MetricCard
            icon={Activity}
            label="Response Time"
            value={metrics.responseTime}
            change="-3ms"
            positive
          />
          <MetricCard
            icon={Code}
            label="Code Health"
            value={metrics.codeScore}
          />
          <MetricCard
            icon={Server}
            label="Active Servers"
            value={metrics.activeServers}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 p-4 rounded-xl bg-muted/30 border border-border">
            <h4 className="text-sm font-medium text-foreground mb-4">Infrastructure Performance</h4>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(40, 73%, 51%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(40, 73%, 51%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(154, 30%, 20%)" />
                  <XAxis dataKey="time" stroke="hsl(154, 10%, 65%)" fontSize={10} />
                  <YAxis stroke="hsl(154, 10%, 65%)" fontSize={10} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(154, 40%, 10%)",
                      border: "1px solid hsl(154, 30%, 20%)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(0, 0%, 98%)" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cpu"
                    stroke="hsl(40, 73%, 51%)"
                    fillOpacity={1}
                    fill="url(#colorCpu)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="memory"
                    stroke="hsl(142, 76%, 36%)"
                    fillOpacity={1}
                    fill="url(#colorMemory)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alerts Panel */}
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <h4 className="text-sm font-medium text-foreground mb-4">Recent Alerts</h4>
            <div className="space-y-2">
              <AlertItem
                type="success"
                message="Deployment successful on prod-server-01"
                time="2 min ago"
              />
              <AlertItem
                type="warning"
                message="High memory usage detected (78%)"
                time="15 min ago"
              />
              <AlertItem
                type="success"
                message="Code quality improved to A+"
                time="1 hour ago"
              />
              <AlertItem
                type="error"
                message="API latency spike resolved"
                time="2 hours ago"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
