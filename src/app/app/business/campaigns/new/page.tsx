import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Create Campaign | Axionvera",
  description:
    "Create a new Axionvera reward campaign.",
};

export default function CreateCampaignPage() {
  return <BusinessDashboardClient />;
}
