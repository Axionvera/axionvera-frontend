import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Agent Overview | Axionvera",
  description:
    "Track verified activity, pending submissions, and campaign rewards.",
};

export default function AgentOverviewPage() {
  return <AgentDashboardClient />;
}
