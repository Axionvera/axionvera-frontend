import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Rewards | Axionvera",
  description:
    "View earned, claimable, and claimed rewards.",
};

export default function AgentRewardsPage() {
  return <AgentDashboardClient />;
}
