import type { Metadata } from "next";

import {
  BusinessDashboardClient,
} from "@/components/business/BusinessDashboardClient";

export const metadata: Metadata = {
  title: "Add Verifier | Axionvera",
  description:
    "Add an authorised campaign verifier.",
};

export default function AddVerifierPage() {
  return <BusinessDashboardClient />;
}
