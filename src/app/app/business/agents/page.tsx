import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Agents | Axionvera",
  description:
    "View campaign agents, activity, and claimable rewards.",
};

export default function BusinessAgentsPage() {
  return <BusinessDashboardClient />;
}
