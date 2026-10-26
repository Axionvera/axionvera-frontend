import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Assignments Updated | Axionvera",
  description:
    "Confirmation that verifier campaign assignments were updated.",
};

export default function AssignmentsSuccessPage() {
  return <BusinessDashboardClient />;
}
