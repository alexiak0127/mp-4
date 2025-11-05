"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#f5f1e6] border-b border-slate-200 mb-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 className="text-base font-semibold tracking-tight">CS391 MP4</h1>
        <div className="flex gap-4 text-sm">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-slate-900 underline underline-offset-4"
                : "text-slate-700 hover:text-slate-900"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-slate-900 underline underline-offset-4"
                : "text-slate-700 hover:text-slate-900"
            }
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
