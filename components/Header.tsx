"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BUSINESS, MAIN_NAV, MOBILE_NAV } from "@/lib/site";

function useThemeLabel() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && theme === "dark";
  return {
    label: isDark ? "Light" : "Dark",
    toggle: () => setTheme(isDark ? "light" : "dark"),
  };
}

function Wordmark({ muted }: { muted?: boolean }) {
  return (
    <span className="wordmark">
      <span className="top">Shivansh</span>
      <span className="bottom" style={muted ? { color: "var(--on-deep-muted)" } : undefined}>
        Properties
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { label, toggle } = useThemeLabel();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="Shivansh Properties — home">
            <Image
              src="/brand/mark-tile.png"
              alt=""
              width={30}
              height={30}
              className="brand-mark"
              priority
            />
            <Wordmark />
          </Link>

          <nav className="nav-links" aria-label="Main">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <button className="theme-toggle" onClick={toggle} aria-label="Switch colour theme">
              {label}
            </button>
            <a className="btn-call" href={BUSINESS.telHref}>
              <span className="btn-call-word">Call </span>
              {BUSINESS.phoneShort}
            </a>
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mm-top">
            <Wordmark muted />
            <button className="mm-close" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav className="mm-links">
            {MOBILE_NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="mm-theme" onClick={toggle}>
            {label} mode
          </button>
          <div className="mm-foot">
            CM-52, Sector 144, Noida
            <br />
            <a href={BUSINESS.telHref}>{BUSINESS.phoneShort}</a> ·{" "}
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
