import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Verifiers | Axionvera",
  description:
    "Manage authorised campaign verifiers.",
};

export default function BusinessVerifiersPage() {
  return <BusinessDashboardClient />;
}
