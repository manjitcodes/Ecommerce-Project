import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CreatorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function CreatorButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: CreatorButtonProps) {
  const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
  const styles = variant === "primary"
    ? "bg-violet-700 text-white shadow-sm hover:bg-violet-800 hover:shadow-md"
    : "border border-stone-300 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800";

  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
