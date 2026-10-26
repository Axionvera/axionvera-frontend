"use client";

import {
  useEffect,
  useRef,
} from "react";

import { usePathname } from "next/navigation";

const EASE =
  "cubic-bezier(0.22, 1, 0.36, 1)";

function reducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

function animateElement(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
) {
  if (reducedMotion()) {
    return;
  }

  element.animate(
    keyframes,
    {
      fill: "both",
      easing: EASE,
      ...options,
    }
  );
}

function animatePage() {
  const main =
    document.querySelector<HTMLElement>("main");

  if (!main) {
    return;
  }

  const pageRoot =
    main.firstElementChild as HTMLElement | null;

  if (!pageRoot) {
    return;
  }

  /*
   * Fade the entire page very slightly.
   * Child sections then stagger upward.
   */
  animateElement(
    pageRoot,
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 260,
    }
  );

  const children = Array.from(
    pageRoot.children
  ).filter(
    (
      child
    ): child is HTMLElement =>
      child instanceof HTMLElement
  );

  children
    .slice(0, 14)
    .forEach((element, index) => {
      animateElement(
        element,
        [
          {
            opacity: 0,
            transform:
              "translate3d(0, 10px, 0)",
          },
          {
            opacity: 1,
            transform:
              "translate3d(0, 0, 0)",
          },
        ],
        {
          duration: 360,
          delay: Math.min(
            index * 38,
            260
          ),
        }
      );
    });
}

function animateActiveNavigation(
  pathname: string
) {
  const links = Array.from(
    document.querySelectorAll<
      HTMLAnchorElement
    >("aside nav a[href]")
  );

  if (!links.length) {
    return;
  }

  const matches = links
    .filter((link) => {
      const href =
        link.getAttribute("href");

      if (
        !href ||
        href === "#" ||
        !href.startsWith("/")
      ) {
        return false;
      }

      return (
        pathname === href ||
        pathname.startsWith(
          `${href}/`
        )
      );
    })
    .sort(
      (a, b) =>
        (b.getAttribute("href")?.length ??
          0) -
        (a.getAttribute("href")?.length ??
          0)
    );

  const active = matches[0];

  if (!active) {
    return;
  }

  animateElement(
    active,
    [
      {
        transform:
          "translate3d(-3px, 0, 0)",
      },
      {
        transform:
          "translate3d(0, 0, 0)",
      },
    ],
    {
      duration: 280,
    }
  );
}

function animateDialog(
  dialog: HTMLElement
) {
  if (
    dialog.dataset.axionMotion ===
    "dialog"
  ) {
    return;
  }

  dialog.dataset.axionMotion =
    "dialog";

  animateElement(
    dialog,
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 180,
    }
  );

  const panel =
    dialog.firstElementChild;

  if (
    panel instanceof HTMLElement
  ) {
    animateElement(
      panel,
      [
        {
          opacity: 0,
          transform:
            "translate3d(0, 12px, 0) scale(0.975)",
        },
        {
          opacity: 1,
          transform:
            "translate3d(0, 0, 0) scale(1)",
        },
      ],
      {
        duration: 260,
      }
    );
  }
}

function animateMenu(
  menu: HTMLElement
) {
  if (
    menu.dataset.axionMotion ===
    "menu"
  ) {
    return;
  }

  menu.dataset.axionMotion =
    "menu";

  animateElement(
    menu,
    [
      {
        opacity: 0,
        transform:
          "translate3d(0, -6px, 0) scale(0.97)",
        transformOrigin:
          "top right",
      },
      {
        opacity: 1,
        transform:
          "translate3d(0, 0, 0) scale(1)",
        transformOrigin:
          "top right",
      },
    ],
    {
      duration: 190,
    }
  );
}

function findPopover(
  root: HTMLElement
) {
  const candidates = [
    root,
    ...Array.from(
      root.querySelectorAll<HTMLElement>(
        "div, nav, section"
      )
    ),
  ];

  for (const element of candidates) {
    const content =
      element.textContent ?? "";

    const isWalletMenu =
      content.includes(
        "Disconnect wallet"
      );

    const isCampaignMenu =
      (
        content.includes(
          "Pause Campaign"
        ) ||
        content.includes(
          "Pause campaign"
        )
      ) &&
      (
        content.includes(
          "Close Campaign"
        ) ||
        content.includes(
          "Close campaign"
        )
      );

    if (
      !isWalletMenu &&
      !isCampaignMenu
    ) {
      continue;
    }

    const absoluteParent =
      element.closest<HTMLElement>(
        '[class*="absolute"]'
      );

    if (absoluteParent) {
      return absoluteParent;
    }

    return element;
  }

  return null;
}

function processAddedNode(
  node: Node
) {
  if (
    !(node instanceof HTMLElement)
  ) {
    return;
  }

  const dialog =
    node.matches(
      '[role="dialog"]'
    )
      ? node
      : node.querySelector<HTMLElement>(
          '[role="dialog"]'
        );

  if (dialog) {
    animateDialog(dialog);
  }

  const menu =
    node.matches('[role="menu"]')
      ? node
      : node.querySelector<HTMLElement>(
          '[role="menu"]'
        );

  if (menu) {
    animateMenu(menu);
  }

  const popover =
    findPopover(node);

  if (popover) {
    animateMenu(popover);
  }
}

export function useDashboardMotion() {
  const pathname = usePathname();

  const initialised =
    useRef(false);

  /*
   * Animate route/page changes.
   */
  useEffect(() => {
    if (reducedMotion()) {
      return;
    }

    const frame =
      window.requestAnimationFrame(
        () => {
          animatePage();

          animateActiveNavigation(
            pathname
          );
        }
      );

    return () =>
      window.cancelAnimationFrame(
        frame
      );
  }, [pathname]);

  /*
   * Observe dynamically mounted UI such as:
   * - wallet dropdowns
   * - campaign menus
   * - confirmation modals
   */
  useEffect(() => {
    if (
      initialised.current ||
      reducedMotion()
    ) {
      return;
    }

    initialised.current = true;

    const observer =
      new MutationObserver(
        (mutations) => {
          for (
            const mutation of mutations
          ) {
            mutation.addedNodes.forEach(
              processAddedNode
            );
          }
        }
      );

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true,
      }
    );

    return () => {
      observer.disconnect();
      initialised.current =
        false;
    };
  }, []);
}
