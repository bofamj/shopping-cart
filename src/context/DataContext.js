import { createContext, useState } from "react";

const DataContext = createContext({});

export const dataProvider = ({ chldren }) => {
  return <DataContext.Provider value={{}}>{chldren}</DataContext.Provider>;
};

export default DataContext;
