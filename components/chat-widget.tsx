"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { business } from "@/data/site-content";

type Message = { id: string; role: "user" | "bot"; text: string };

/** Same asset as `SiteHeader` — white wordmark on green */
function ChatHeaderLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-white.png"
      alt=""
      width={1536}
      height={1024}
      className={className}
    />
  );
}

function botReply(userText: string): string {
  const t = userText.toLowerCase();
  if (/hello|hi\b|hey/.test(t)) {
    return `Hi! Thanks for visiting ${business.name}. How can we help with your lawn or landscape today?`;
  }
  if (/price|quote|cost|estimate|how much/.test(t)) {
    return "We’d be happy to give you a free quote. You can call us or use the contact form — tell us about your yard and we’ll follow up quickly.";
  }
  if (/phone|call|number/.test(t)) {
    return `You can reach us at ${business.phoneDisplay}. We’re licensed and insured and serve Orlando and nearby areas.`;
  }
  if (/service|mow|lawn|landscape|irrigation|turf|design/.test(t)) {
    return "We offer lawn maintenance, landscape design & installation, irrigation, artificial turf, cleanup, and more. Want details on a specific service?";
  }
  if (/hours|when|available/.test(t)) {
    return "Reach out by phone or the contact form and we’ll get back to you with availability. We’re happy to schedule a visit.";
  }
  if (/thanks|thank you/.test(t)) {
    return "You’re welcome! If you need anything else, we’re here — or call for the fastest response.";
  }
  return "Thanks for your message! For the fastest help, call us or request a quote on the contact page. Is there something specific about your property we can help with?";
}

export function ChatWidget() {
  const pathname = usePathname();
  const panelId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "welcome",
      role: "bot",
      text: `Welcome to ${business.name}! Ask about services, quotes, or lawn care — or tap below to get in touch.`
    }
  ]);

  const isVariantRoute =
    pathname.startsWith("/premium-dark") || pathname.startsWith("/fresh-light");

  const send = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, role: "bot", text: botReply(trimmed) }
      ]);
    }, 450);
  }, [input]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (isVariantRoute) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-[60] flex flex-col items-end md:bottom-8">
      <div
        id={panelId}
        role="dialog"
        aria-label="Chat with Mora's Landscaping"
        aria-hidden={!open}
        className={`pointer-events-auto mb-3 flex max-h-[min(420px,70vh)] w-[min(100vw-2rem,22rem)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-green-900/40 bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "visible scale-100 opacity-100"
            : "invisible pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-green-900/15 bg-[#1f4d2b] px-4 py-3 text-white">
          <div className="flex h-10 max-w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/15 px-1.5 py-1">
            <ChatHeaderLogo className="h-7 w-auto max-w-full object-contain object-left" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Mora&apos;s Landscaping</p>
            <p className="text-xs text-green-100/90">Usually replies within business hours</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="ml-auto rounded-lg p-1.5 text-white/90 transition hover:bg-white/15"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        <div
          ref={listRef}
          className="flex max-h-[260px] flex-col gap-3 overflow-y-auto bg-white px-3 py-3"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-pine-800 text-white"
                  : "mr-auto border border-pine-100 bg-earth/40 text-charcoal"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="border-t border-pine-100 bg-white px-3 pb-3 pt-2">
          <div className="mb-2 flex flex-wrap gap-1.5">
            <Link
              href="/contact#quote-form"
              className="rounded-full border border-pine-200 bg-pine-50 px-2.5 py-1 text-[11px] font-medium text-pine-900 transition hover:border-grass hover:bg-white"
              onClick={() => setOpen(false)}
            >
              Free quote
            </Link>
            <a
              href={business.phoneHref}
              className="rounded-full border border-pine-200 bg-pine-50 px-2.5 py-1 text-[11px] font-medium text-pine-900 transition hover:border-grass hover:bg-white"
            >
              Call us
            </a>
          </div>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="min-w-0 flex-1 rounded-full border border-pine-200 bg-white px-3 py-2 text-sm text-charcoal placeholder:text-charcoal/45 focus:border-pine-500 focus:outline-none focus:ring-2 focus:ring-pine-500/25"
              aria-label="Message input"
            />
            <button
              type="button"
              onClick={send}
              className="shrink-0 rounded-full bg-[#1f4d2b] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#2a6a3d] active:scale-[0.98]"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto flex h-12 max-w-[min(92vw,11rem)] items-center justify-center rounded-full border-2 border-green-400/50 bg-[#1f4d2b] px-3 py-2 text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:h-14 sm:max-w-[13rem] sm:px-3.5"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close chat" : "Open chat — Lawn care assistant"}
      >
        <ChatHeaderLogo className="h-8 w-auto max-w-full object-contain object-center sm:h-9" />
      </button>
    </div>
  );
}
