import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { EmptyPropsWithChildren } from "../types/react";
import { useRollbar } from "./rollbar";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function GlobalErrorBoundary({ children }: EmptyPropsWithChildren) {
  const rollbar = useRollbar();

  return (
    <ErrorBoundary
      onError={(error) =>
        rollbar?.critical("Global error boundary reached", error)
      }
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
}

export { GlobalErrorBoundary };
