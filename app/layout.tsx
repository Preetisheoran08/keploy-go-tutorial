import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Keploy + Go: Beginner Quickstart",
  description: "A beginner-friendly tutorial for generating Go API tests with Keploy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
              <div className="flex items-center gap-3">
                <span className="font-semibold tracking-tight">
                  Keploy + Go Tutorial
                </span>
                <span className="hidden rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-500 sm:inline dark:border-slate-700 dark:text-slate-400">
                  Beginner Guide
                </span>
              </div>

              <ThemeToggle />
            </div>
          </header>

          <div className="mx-auto flex max-w-6xl gap-10 px-6 py-10">
            <article className="prose prose-slate min-w-0 max-w-none flex-1 dark:prose-invert prose-pre:my-0 prose-pre:border prose-pre:border-slate-200 prose-pre:bg-slate-50 prose-pre:text-slate-900 dark:prose-pre:border-slate-800 dark:prose-pre:bg-slate-900 dark:prose-pre:text-slate-100 prose-code:before:content-none prose-code:after:content-none">
              {children}
            </article>
            <aside className="hidden w-56 shrink-0 lg:block">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}