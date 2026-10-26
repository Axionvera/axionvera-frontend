import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Activity | Axionvera",
  description:
    "Track campaign activity, verification status, and reward allocation.",
};

export default function BusinessActivityPage() {
  return <BusinessDashboardClient />;
}
