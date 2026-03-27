"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { business } from "@/data/site-content";

const STORAGE_KEY = "mora-splash-loaded";

/**
 * Full-screen branded splash on first load per browser tab (session).
 */
export default function AppLoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) {
          setVisible(false);
        }
      } catch {
        /* private mode */
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!visible) return;

    let minDone = false;
    let loadDone = typeof document !== "undefined" && document.readyState === "complete";

    const finish = () => {
      setExiting(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      window.setTimeout(() => setVisible(false), 480);
    };

    const tryFinish = () => {
      if (minDone && loadDone) finish();
    };

    const minTimer = window.setTimeout(() => {
      minDone = true;
      tryFinish();
    }, 900);

    const onLoad = () => {
      loadDone = true;
      tryFinish();
    };

    if (!loadDone) {
      window.addEventListener("load", onLoad);
    } else {
      tryFinish();
    }

    return () => {
      window.clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1f14] transition-opacity duration-500 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(34, 197, 94, 0.18), transparent 55%), linear-gradient(180deg, #1f4d2b 0%, #0f1f14 45%, #0a1410 100%)"
      }}
    >
      <div className="flex max-w-md flex-col items-center px-6 text-center">
        <div className="relative mb-8 h-20 w-20 sm:h-24 sm:w-24">
          <Image
            src="/images/logo-mower.png"
            alt={`${business.name} — lawn care logo`}
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
        <p className="text-sm font-medium tracking-wide text-green-100/90">{business.name}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-green-300/70">Orlando, Florida</p>

        <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-black/30 sm:w-56">
          <div className="loading-bar h-full w-1/2 rounded-full bg-gradient-to-r from-green-600 via-green-400 to-green-500" />
        </div>
        <p className="mt-6 text-xs text-green-200/60">Loading experience…</p>
      </div>
    </div>
  );
}
