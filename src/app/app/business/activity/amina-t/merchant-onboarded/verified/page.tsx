import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Activity Verified | Axionvera",
  description:
    "View verified campaign activity and reward allocation.",
};

export default function ActivityVerifiedPage() {
  return <BusinessDashboardClient />;
}
