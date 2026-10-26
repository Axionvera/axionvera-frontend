import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Manage Verifier Assignments | Axionvera",
  description:
    "Manage campaign assignments for an authorised verifier.",
};

export default function VerifierAssignmentsPage() {
  return <BusinessDashboardClient />;
}
