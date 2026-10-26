import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Activity Details | Axionvera",
  description:
    "View the status and reward outcome of Agent activity.",
};

export default function AgentActivityDetailPage() {
  return <AgentDashboardClient />;
}
