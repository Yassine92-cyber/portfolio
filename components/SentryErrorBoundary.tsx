"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// Optional Sentry integration
// To enable: npm install @sentry/nextjs
// Then uncomment the Sentry imports and code below

class SentryErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to console in development
    console.error("SentryErrorBoundary caught an error:", error, errorInfo);

    // Uncomment to use Sentry (after installing @sentry/nextjs):
    // if (typeof window !== "undefined" && window.Sentry) {
    //   window.Sentry.captureException(error, {
    //     contexts: {
    //       react: {
    //         componentStack: errorInfo.componentStack,
    //       },
    //     },
    //   });
    // }
  }

  render() {
    if (this.state.hasError) {
      // Use the existing ErrorBoundary component for UI
      return (
        <ErrorBoundary fallback={
          <div className="min-h-screen bg-clarity-white flex items-center justify-center p-4">
            <div className="max-w-md text-center bg-clarity-white rounded-2xl p-8 shadow-lg border border-bridge-blue/20">
              <h1 className="text-2xl font-bold text-bridge-blue mb-4 font-heading">
                Something went wrong
              </h1>
              <p className="text-kind-gray mb-6 font-body">
                An error has been logged. Please refresh the page or try again later.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-6 py-3 bg-signal-teal text-white rounded-lg hover:bg-signal-teal/90 transition-colors focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 font-heading"
                aria-label="Reload page"
              >
                Reload Page
              </button>
            </div>
          </div>
        }>
          {this.props.children}
        </ErrorBoundary>
      );
    }

    return this.props.children;
  }
}

export { SentryErrorBoundary };

