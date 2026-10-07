"use client";

import { useEffect } from "react";

export function TextMotionController() {
  useEffect(() => {
    /*
      One-time text reveal.

      Each text element:
      hidden -> enters viewport -> reveals -> stays visible.

      Scrolling back upward does not replay the animation.

      Cleanup fully resets the element so React Strict Mode
      can safely run this effect twice during development.
    */

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    );

    const animatedElements: HTMLElement[] = [];

    sections.forEach((section) => {
      const candidates = Array.from(
        section.querySelectorAll<HTMLElement>(
          "h1, h2, h3, h4, p, span"
        )
      );

      const eligible = candidates.filter((element) => {
        /*
          Never animate text contained inside controls,
          navigation or footer links.
        */
        if (
          element.closest("button") ||
          element.closest("a") ||
          element.closest("header") ||
          element.closest("footer")
        ) {
          return false;
        }

        const tag = element.tagName.toLowerCase();

        if (
          tag === "h1" ||
          tag === "h2" ||
          tag === "h3" ||
          tag === "h4" ||
          tag === "p"
        ) {
          return true;
        }

        if (tag === "span") {
          const classes = element.className;

          return (
            typeof classes === "string" &&
            (
              classes.includes("uppercase") ||
              classes.includes("tracking-[")
            )
          );
        }

        return false;
      });

      eligible.forEach((element, index) => {
        element.classList.add("ax-text-motion");

        const tag = element.tagName.toLowerCase();

        if (
          tag === "h1" ||
          tag === "h2" ||
          tag === "h3" ||
          tag === "h4"
        ) {
          element.classList.add("ax-text-heading");
        } else if (tag === "p") {
          element.classList.add("ax-text-body");
        } else {
          element.classList.add("ax-text-label");
        }

        /*
          Gentle text stagger within each section.
        */
        const delay = Math.min(index * 45, 225);

        element.style.setProperty(
          "--ax-text-delay",
          `${delay}ms`
        );

        animatedElements.push(element);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          /*
            Reveal once.
          */
          element.classList.add("ax-text-visible");

          /*
            Stop observing permanently for this mounted page.
            Scrolling back up will not animate it again.
          */
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    /*
      Give the browser one frame to paint the hidden
      starting position before observing.
    */
    const frame = requestAnimationFrame(() => {
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();

      /*
        IMPORTANT:
        React Strict Mode runs effects twice in development.

        Fully undo this effect during cleanup so the second
        execution can register everything correctly.
      */
      animatedElements.forEach((element) => {
        element.classList.remove(
          "ax-text-motion",
          "ax-text-heading",
          "ax-text-body",
          "ax-text-label",
          "ax-text-visible"
        );

        element.style.removeProperty(
          "--ax-text-delay"
        );
      });
    };
  }, []);

  return null;
}
