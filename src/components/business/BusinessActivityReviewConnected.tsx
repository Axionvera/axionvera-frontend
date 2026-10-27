"use client";

import {
  CURRENCY,
  businessActivities,
  requireAgent,
  requireCampaign,
  requireVerifier,
} from "@/lib/axionveraData";

import Link from "next/link";
import { useState } from "react";

type DecisionState =
  | "default"
  | "verify"
  | "reject"
  | "verified"
  | "rejected";

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
      strokeWidth="1.9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 12H5m5-5-5 5 5 5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12 2 2 4-4m5.6-8A12 12 0 0 1 12 3a12 12 0 0 1-8.6 3A12 12 0 0 0 3 9c0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1-.1-2-.4-3Z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        d="M12 11v5M12 8h.01"
      />
    </svg>
  );
}

function VerifyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.9"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 12 2.25 2.25L15.5 9.5"
      />
    </svg>
  );
}

function RejectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-[18px] w-[18px]"
      strokeWidth="1.9"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        d="m9 9 6 6m0-6-6 6"
      />
    </svg>
  );
}

const reviewActivity = (() => {
  const activity =
    businessActivities.find(
      (item) =>
        item.agentId === "amina-t" &&
        item.campaignId === "merchant-growth" &&
        item.activity === "Merchant onboarded" &&
        item.status === "pending"
    );

  if (!activity) {
    throw new Error(
      "Pending Merchant Growth activity for Amina was not found."
    );
  }

  return activity;
})();

const reviewAgent =
  requireAgent(reviewActivity.agentId);

const reviewCampaign =
  requireCampaign(reviewActivity.campaignId);

const reviewVerifier =
  reviewCampaign.verifierId
    ? requireVerifier(reviewCampaign.verifierId)
    : null;

const verificationReward =
  reviewCampaign.rewardPerVerifiedAction;

export function BusinessActivityReviewConnected() {
  const [decision, setDecision] =
    useState<DecisionState>("default");

  const verified = decision === "verified";
  const rejected = decision === "rejected";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 pb-16">

      {/* BREADCRUMB */}
      <nav className="flex flex-wrap items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/business/activity"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <ArrowLeft />
          Activity
        </Link>

        <span className="text-[#294034]">/</span>

        <span>{reviewAgent.name}</span>

        <span className="text-[#294034]">/</span>

        <span className="font-medium text-white">
          {reviewActivity.activity}
        </span>
      </nav>

      {/* HEADER */}
      <header className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Review activity
            </h2>

            {!verified && !rejected && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5B942]/10 px-3 py-1 text-xs font-medium text-[#F5B942]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F5B942]" />
                Pending verification
              </span>
            )}

            {verified && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-3 py-1 text-xs font-medium text-[#02C763]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                Verified
              </span>
            )}

            {rejected && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F25F5C]/10 px-3 py-1 text-xs font-medium text-[#F25F5C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F25F5C]" />
                Rejected
              </span>
            )}
          </div>

          <p className="mt-1.5 text-sm leading-6 text-[#8A938D]">
            Confirm whether this activity meets the
            campaign&apos;s qualifying action.
          </p>
        </div>
      </header>

      {/* ACTIVITY SUMMARY */}
      <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
        <div className="border-b border-[#1B2A22] pb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
            Activity summary
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xs text-[#718277]">
              Agent
            </span>

            <div className="mt-2 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#16281E] text-xs font-semibold text-white">{reviewAgent.initials}</div>

              <span className="text-sm font-medium text-white">
                {reviewAgent.name}
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Activity
            </span>

            <p className="mt-2 text-sm font-medium text-white">
              {reviewActivity.activity}
            </p>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Campaign
            </span>

            <p className="mt-2 text-sm font-medium text-white">
              {reviewCampaign.name}
            </p>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Submitted
            </span>

            <p className="mt-2 text-sm text-[#A7B3AB]">
              {reviewActivity.submittedLabel}
            </p>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Current status
            </span>

            <div className="mt-2">
              {!verified && !rejected && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5B942]/10 px-3 py-1 text-xs font-medium text-[#F5B942]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5B942]" />
                  Pending verification
                </span>
              )}

              {verified && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-3 py-1 text-xs font-medium text-[#02C763]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
                  Verified
                </span>
              )}

              {rejected && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F25F5C]/10 px-3 py-1 text-xs font-medium text-[#F25F5C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F25F5C]" />
                  Rejected
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN RULE */}
      <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
        <div className="border-b border-[#1B2A22] pb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#718277]">
            Campaign rule
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-5 sm:grid-cols-3">
          <div>
            <span className="text-xs text-[#718277]">
              Qualifying action
            </span>

            <p className="mt-2 text-sm font-medium text-white">
              {reviewActivity.activity}
            </p>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Reward after verification
            </span>

            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-lg font-semibold text-white">
                5
              </span>

              <span className="text-sm font-medium text-[#718277]">
                USDC
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs text-[#718277]">
              Verifier
            </span>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-[#718277]">
                <ShieldIcon />
              </span>

              <span className="text-sm font-medium text-white">
                {reviewVerifier?.name ?? "Not assigned"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-[10px] bg-[#101813] p-3.5">
          <span className="mt-0.5 shrink-0 text-[#718277]">
            <InfoIcon />
          </span>

          <p className="text-sm leading-5 text-[#8A938D]">
            A reward is allocated only after this
            activity is verified.
          </p>
        </div>
      </section>

      {/* DEFAULT DECISION */}
      {decision === "default" && (
        <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight text-white">
            Review decision
          </h3>

          <p className="mt-1 text-sm text-[#8A938D]">
            Confirm whether this activity meets the
            campaign&apos;s qualifying action.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setDecision("verify")}
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#02C763] px-6 py-2.5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
            >
              <VerifyIcon />
              Verify activity
            </button>

            <button
              type="button"
              onClick={() => setDecision("reject")}
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#101813] px-5 py-2.5 text-sm font-medium text-[#A7B3AB] transition-colors hover:bg-[#F25F5C]/10 hover:text-[#F25F5C]"
            >
              <RejectIcon />
              Reject activity
            </button>
          </div>
        </section>
      )}

      {/* VERIFY CONFIRMATION */}
      {decision === "verify" && (
        <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#02C763]/10 text-[#02C763]">
              <VerifyIcon />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white">
                Verify this activity?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A938D]">
                {reviewActivity.activity} by{" "}
                <span className="font-medium text-white">
                  {reviewAgent.name}
                </span>{" "}
                will be marked as verified.{" "}
                <span className="font-medium text-white">
                  {verificationReward} {CURRENCY}
                </span>{" "}
                will be allocated according to the
                campaign reward rule.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/app/business/activity/amina-t/merchant-onboarded/verified"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#02C763] px-6 py-2.5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
                >
                  <VerifyIcon />
                  Confirm verification
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setDecision("default")
                  }
                  className="rounded-[10px] bg-[#101813] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#142019]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* REJECT CONFIRMATION */}
      {decision === "reject" && (
        <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F25F5C]/10 text-[#F25F5C]">
              <RejectIcon />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white">
                Reject this activity?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A938D]">
                This activity will remain unverified
                and no reward will be allocated to{" "}
                <span className="font-medium text-white">
                  {reviewAgent.name}
                </span>
                .
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setDecision("rejected")
                  }
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#7A2020] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#922828]"
                >
                  <RejectIcon />
                  Confirm rejection
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setDecision("default")
                  }
                  className="rounded-[10px] bg-[#101813] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#142019]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VERIFIED OUTCOME */}
      {decision === "verified" && (
        <section className="rounded-2xl border border-[#294034] bg-[#142019] p-6">
          <div className="flex items-center gap-3">
            <span className="text-[#02C763]">
              <VerifyIcon />
            </span>

            <div>
              <h3 className="font-display text-base font-semibold text-[#02C763]">
                Activity verified successfully
              </h3>

              <p className="mt-1 text-sm text-[#8A938D]">
                {verificationReward} {CURRENCY} allocated according to campaign
                rules. Status updated.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* REJECTED OUTCOME */}
      {decision === "rejected" && (
        <section className="rounded-2xl border border-[#F25F5C]/25 bg-[#F25F5C]/5 p-6">
          <div className="flex items-center gap-3">
            <span className="text-[#F25F5C]">
              <RejectIcon />
            </span>

            <div>
              <h3 className="font-display text-base font-semibold text-[#F25F5C]">
                Activity rejected
              </h3>

              <p className="mt-1 text-sm text-[#8A938D]">
                This submission remains unverified. No
                rewards were allocated.
              </p>
            </div>
          </div>
        </section>
      )}

      {(verified || rejected) && (
        <div>
          <Link
            href="/app/business/activity"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A7B3AB] transition-colors hover:text-white"
          >
            <ArrowLeft />
            Back to Activity
          </Link>
        </div>
      )}
    </div>
  );
}
