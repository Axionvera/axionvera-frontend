import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Claim Successful | Axionvera",
  description:
    "Confirmation that an Agent reward claim completed successfully.",
};

export default function AgentClaimSuccessPage() {
  return <AgentDashboardClient />;
}
