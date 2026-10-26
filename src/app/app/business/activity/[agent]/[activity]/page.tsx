import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Activity Details | Axionvera",
  description:
    "View verified campaign activity and reward details.",
};

export default function BusinessActivityDetailPage() {
  return <BusinessDashboardClient />;
}
