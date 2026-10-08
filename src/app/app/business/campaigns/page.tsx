import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Campaigns | Axionvera",
  description:
    "Create, fund and manage Axionvera reward campaigns.",
};

export default function BusinessCampaignsPage() {
  return <BusinessDashboardClient />;
}
