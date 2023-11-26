"use client"
import React, { createContext, ReactNode } from "react";

interface CompanyData {
  id: number;
  company: string;
  city: string;
}

interface AppContextType {
  data: CompanyData[];
}

const data: CompanyData[] = [
  {
    id: 1,
    company: "Google",
    city: "Multan",
  },
  {
    id: 2,
    company: "Facebook",
    city: "Karachi",
  },
  {
    id: 3,
    company: "Amazon",
    city: "Lahore",
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const contextValue: AppContextType = {
    data,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };



