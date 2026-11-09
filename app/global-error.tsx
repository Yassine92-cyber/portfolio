'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#090B10", color: "#F6F4F0", fontFamily: "system-ui, sans-serif" }}>
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
            <p className="mb-6 opacity-70">
              We encountered an unexpected error. Please refresh the page.
            </p>
            <button
              onClick={reset}
              style={{ background: "#F6F4F0", color: "#090B10", border: 0, borderRadius: 9999, padding: "12px 24px", fontWeight: 500, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

