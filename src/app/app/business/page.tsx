import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Business Overview | Axionvera",
  description:
    "Manage Axionvera reward campaigns and verified agent activity.",
};

export default function BusinessOverviewPage() {
  return <BusinessDashboardClient />;
}
