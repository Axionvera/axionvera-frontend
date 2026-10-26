import type { Metadata } from "next";

import {
  AgentDashboardClient,
} from "@/components/agent/AgentDashboardClient";

export const metadata: Metadata = {
  title: "Activity | Axionvera",
  description:
    "View Agent qualifying activity and verification status.",
};

export default function AgentActivityPage() {
  return <AgentDashboardClient />;
}
