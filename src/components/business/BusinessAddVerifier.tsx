"use client";

import Link from "next/link";
import { useState } from "react";

type VerifierType =
  | "Team verifier"
  | "Backend / API verifier";

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
      className="h-5 w-5"
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    </svg>
  );
}

export function BusinessAddVerifier() {
  const [name, setName] = useState("");
  const [type, setType] =
    useState<VerifierType>("Team verifier");
  const [description, setDescription] =
    useState("");
  const [error, setError] = useState("");
  const [created, setCreated] = useState(false);

  function handleAddVerifier() {
    if (!name.trim()) {
      setError("Enter a verifier name.");
      return;
    }

    setError("");
    setCreated(true);
  }

  if (created) {
    return (
      <div className="mx-auto flex w-full max-w-[620px] flex-col items-center py-8 pb-16">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1B2A22] bg-[#101813] text-[#02C763]">
          <CheckIcon />
        </div>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
          Verifier added
        </h2>

        <p className="mt-2 max-w-md text-center text-sm leading-6 text-[#9DA8A1]">
          {name} has been added as an authorised
          verifier in this UI preview.
        </p>

        <section className="mt-7 w-full rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
          <div className="flex items-center gap-3 border-b border-[#1B2A22] pb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#142019] text-[#02C763]">
              <ShieldIcon />
            </div>

            <div>
              <p className="font-display text-base font-semibold text-white">
                {name}
              </p>

              <p className="mt-0.5 text-xs text-[#718277]">
                {type}
              </p>
            </div>

            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#02C763]/10 px-2.5 py-0.5 text-xs font-medium text-[#02C763]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#02C763]" />
              Authorised
            </span>
          </div>

          {description && (
            <p className="pt-5 text-sm leading-6 text-[#A7B3AB]">
              {description}
            </p>
          )}
        </section>

        <div className="mt-6 flex w-full flex-col gap-3">
          <Link
            href="/app/business/verifiers"
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#02C763] px-5 py-3 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
          >
            View Verifiers
          </Link>

          <Link
            href="/app/business"
            className="inline-flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#718277] transition-colors hover:text-white"
          >
            <ArrowLeft />
            Back to Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl pb-16">

      {/* BREADCRUMB */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-[#718277]">
        <Link
          href="/app/business/verifiers"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <ArrowLeft />
          Verifiers
        </Link>

        <span className="text-[#294034]">
          /
        </span>

        <span className="font-medium text-white">
          Add verifier
        </span>
      </nav>

      {/* HEADER */}
      <header className="mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Add verifier
        </h2>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#A7B3AB]">
          Add a team or backend system that can confirm
          whether campaign activity meets its qualifying
          rules.
        </p>
      </header>

      {/* FORM */}
      <section className="rounded-2xl border border-[#1B2A22] bg-[#0C120F] p-6">
        <div className="border-b border-[#1B2A22] pb-4">
          <h3 className="font-display text-base font-semibold text-white">
            Verifier details
          </h3>

          <p className="mt-1 text-xs leading-5 text-[#718277]">
            These details identify the verifier when it
            is assigned to a campaign.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-6">

          <div>
            <label
              htmlFor="verifier-name"
              className="mb-2 block text-xs font-medium text-[#C0C8C2]"
            >
              Verifier name
            </label>

            <input
              id="verifier-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              placeholder="e.g. Merchant Operations Team"
              className="h-11 w-full rounded-[10px] border border-[#1B2A22] bg-[#101813] px-4 text-sm text-white outline-none placeholder:text-[#5A665E] focus:border-[#02C763]"
            />

            {error && (
              <p className="mt-2 text-xs text-[#F25F5C]">
                {error}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="verifier-type"
              className="mb-2 block text-xs font-medium text-[#C0C8C2]"
            >
              Verifier type
            </label>

            <select
              id="verifier-type"
              value={type}
              onChange={(event) =>
                setType(
                  event.target.value as VerifierType
                )
              }
              className="h-11 w-full rounded-[10px] border border-[#1B2A22] bg-[#101813] px-4 text-sm text-white outline-none focus:border-[#02C763]"
            >
              <option value="Team verifier">
                Team verifier
              </option>

              <option value="Backend / API verifier">
                Backend / API verifier
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="verifier-description"
              className="mb-2 block text-xs font-medium text-[#C0C8C2]"
            >
              Description{" "}
              <span className="text-[#718277]">
                (optional)
              </span>
            </label>

            <textarea
              id="verifier-description"
              rows={4}
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Describe what this verifier is responsible for."
              className="w-full resize-none rounded-[10px] border border-[#1B2A22] bg-[#101813] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5A665E] focus:border-[#02C763]"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[#1B2A22] bg-[#101813] p-4">
            <span className="mt-0.5 shrink-0 text-[#02C763]">
              <ShieldIcon />
            </span>

            <p className="text-xs leading-5 text-[#8A938D]">
              Authorised verifiers can confirm qualifying
              activity for campaigns they are assigned to.
              Reward allocation occurs only after successful
              verification.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <Link
          href="/app/business/verifiers"
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#9DA8A1] transition-colors hover:text-white"
        >
          <ArrowLeft />
          Cancel
        </Link>

        <button
          type="button"
          onClick={handleAddVerifier}
          className="rounded-[10px] bg-[#02C763] px-6 py-2.5 text-sm font-semibold text-[#050806] transition-colors hover:bg-[#02D86F]"
        >
          Add verifier
        </button>
      </div>
    </div>
  );
}
