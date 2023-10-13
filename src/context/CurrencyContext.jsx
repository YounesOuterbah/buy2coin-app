import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const setCurrency = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
