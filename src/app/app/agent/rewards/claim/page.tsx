import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Review Claim | Axionvera",
  description:
    "Review claimable rewards before submitting a claim.",
};

export default function AgentClaimReviewPage() {
  return <AgentDashboardClient />;
}
