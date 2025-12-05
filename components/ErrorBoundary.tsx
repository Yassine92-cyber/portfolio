"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-clarity-white flex items-center justify-center p-4">
          <div className="max-w-md text-center bg-clarity-white rounded-2xl p-8 shadow-lg border border-bridge-blue/20">
            <h1 className="text-2xl font-bold text-bridge-blue mb-4 font-heading">Something went wrong</h1>
            <p className="text-kind-gray mb-6 font-body">
              An unexpected error occurred. Please refresh the page or try again later.
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
            {this.state.error && (
              <details className="mt-6 text-left text-sm text-kind-gray font-body">
                <summary className="cursor-pointer mb-2 hover:text-bridge-blue">Error details</summary>
                <pre className="mt-2 p-4 bg-warm-blush/30 rounded overflow-auto text-xs">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

