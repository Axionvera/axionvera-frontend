import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Merchant Growth Campaign | Axionvera",
  description:
    "View and manage the Merchant Growth Campaign.",
};

export default function MerchantGrowthCampaignPage() {
  return <BusinessDashboardClient />;
}
