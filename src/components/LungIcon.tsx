export function LungIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v4" />
      <path d="M12 6c-3 0-5 2-5 5v3c0 2.5 1.5 4 4 4h0c1 0 1.5-1 1-2v-4" />
      <path d="M12 6c3 0 5 2 5 5v3c0 2.5-1.5 4-4 4h0c-1 0-1.5-1-1-2v-4" />
      <path d="M9 14h-1" />
      <path d="M15 14h1" />
      <path d="M8 11h-1" />
      <path d="M16 11h1" />
    </svg>
  );
}
