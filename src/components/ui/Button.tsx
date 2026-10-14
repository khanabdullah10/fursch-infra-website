import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  external?: boolean;
  download?: boolean | string;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  icon,
  external = false,
  download,
  ariaLabel,
}: ButtonProps) {
  // Base classes with >=44px touch targets on mobile/desktop
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[#090C15]";

  // Size variations
  const sizeClasses = {
    sm: "min-h-[44px] px-4 py-2 text-xs uppercase tracking-wider",
    md: "min-h-[48px] px-6 py-2.5 text-sm",
    lg: "min-h-[52px] px-8 py-3 text-base",
  }[size];

  // Modern Luxury Aesthetic variants:
  // Primary: Radiant Amber background (#E49F43) with Deep Charcoal/Obsidian text (#0A0D17) -> high contrast + glow
  // Secondary: Indigo background (#4A569D) with White text
  // Outline: Sleek glass border with White text
  // Ghost: Transparent with subtle glow hover
  const variantClasses = {
    primary:
      "bg-brand-amber hover:bg-brand-amber-dark text-[#0A0D17] font-bold shadow-[0_0_15px_rgba(228,159,67,0.25)] hover:shadow-[0_0_25px_rgba(228,159,67,0.45)] active:translate-y-[1px]",
    secondary:
      "bg-brand-indigo hover:bg-brand-indigo-light text-white font-medium shadow-xs active:translate-y-[1px]",
    outline:
      "border border-white/20 hover:border-white text-white hover:bg-white/10 bg-white/[0.03] backdrop-blur-xs",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5 bg-transparent",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
          download={download}
        >
          <span>{children}</span>
          {icon && (
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        <span>{children}</span>
        {icon && (
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {icon && (
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
