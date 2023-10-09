import React from "react";
import { createContext } from "react";

const apiContext = createContext();

export const context = ({ children }) => {
  return <apiContext.Provider>{children}</apiContext.Provider>;
};
