import { useRollbar as originalUseRollbar, Provider } from "@rollbar/react";
import Rollbar, { Configuration } from "rollbar";
import React from "react";
import { EmptyPropsWithChildren } from "../types/react";

/*
 * [Configure your Rollbar instance](https://docs.rollbar.com/docs/react-ts)
 * Don't forget to change the return type of "useRollbar" when you configure it.
 */
const rollbarConfig: Configuration | undefined = undefined;

function useRollbar(): Rollbar | undefined {
  return rollbarConfig == undefined ? undefined : originalUseRollbar();
}

function RollbarProvider({ children }: EmptyPropsWithChildren) {
  return rollbarConfig == undefined ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Provider config={rollbarConfig}>{children}</Provider>
  );
}

export { useRollbar, RollbarProvider };
