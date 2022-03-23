import { EmptyPropsWithChildren } from "../types/react";
import { RollbarProvider } from "../lib/rollbar";
import React from "react";
import { ModalContainer } from "../features/modal/modal-container";

function AppProvider({ children }: EmptyPropsWithChildren) {
  return (
    <RollbarProvider>
      <React.Fragment>{children}</React.Fragment>
      <ModalContainer />
    </RollbarProvider>
  );
}

export { AppProvider };
