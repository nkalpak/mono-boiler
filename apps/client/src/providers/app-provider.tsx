import { EmptyPropsWithChildren } from "../types/react";
import { RollbarProvider } from "../lib/rollbar";

function AppProvider({ children }: EmptyPropsWithChildren) {
  return <RollbarProvider>{children}</RollbarProvider>;
}

export { AppProvider };
