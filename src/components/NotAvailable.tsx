export default function NotAvailable() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4">
      <FrownIcon className="h-10 w-10" />
      <h1 className="text-3xl font-bold">Not Available yet</h1>
      <p className="muted-2 max-w-[24rem] text-center">
        This section is not yet available. We apologize for any inconvenience
        and are working diligently to make it accessible as soon as possible.
      </p>
    </div>
  );
}

function FrownIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
