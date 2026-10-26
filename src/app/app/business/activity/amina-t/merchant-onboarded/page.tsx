import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Review Activity | Axionvera",
  description:
    "Review qualifying campaign activity.",
};

export default function BusinessActivityReviewPage() {
  return <BusinessDashboardClient />;
}
