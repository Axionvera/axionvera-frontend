import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Processing Claim | Axionvera",
  description:
    "View the processing state of a reward claim.",
};

export default function AgentClaimProcessingPage() {
  return <AgentDashboardClient />;
}
