import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Approve Claim | Axionvera",
  description:
    "Approve a reward claim using the connected wallet.",
};

export default function AgentClaimApprovalPage() {
  return <AgentDashboardClient />;
}
