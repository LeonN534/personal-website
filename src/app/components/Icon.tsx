import type { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
  className?: string;
};

export function Icon({ children, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </Icon>
  );
}

export function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Icon>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </Icon>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  );
}

export function CoffeeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v3M10 2v3M14 2v3" />
    </Icon>
  );
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </Icon>
  );
}

export function FolderIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </Icon>
  );
}

export function FileTextIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </Icon>
  );
}

export function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Icon>
  );
}

export function HandHeartIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3v4Z" />
      <path d="M7 14V6a2 2 0 0 1 4 0v8" />
      <path d="M11 10V6a2 2 0 1 1 4 0v4" />
      <path d="M15 10V8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </Icon>
  );
}
