'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center min-h-screen bg-[#030303] text-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-white/60 mb-6">
              We encountered an unexpected error. Please refresh the page.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

