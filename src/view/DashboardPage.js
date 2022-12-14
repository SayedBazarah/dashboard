import React from "react";
import { Poll } from "@mui/icons-material";

import { StatisticCard } from "./../components/Dashboard";

export default function DashboardPage() {
  return (
    <div>
      <StatisticCard
        stats="$25.6k"
        icon={<Poll />}
        color="success"
        trendNumber="+42%"
        title="Total Profit"
        subtitle="Weekly Profit"
      />
    </div>
  );
}
