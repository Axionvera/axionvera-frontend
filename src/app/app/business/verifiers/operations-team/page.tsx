import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Operations Team | Axionvera",
  description:
    "View verifier campaign assignments and verification activity.",
};

export default function OperationsTeamVerifierPage() {
  return <BusinessDashboardClient />;
}
