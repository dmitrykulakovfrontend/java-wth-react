import React, { useContext, useState } from "react";

const SearchDefaultValue = {
  search: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setSearch: (_state: string) => {},
};

const SearchContext = React.createContext(SearchDefaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export default function useSearch() {
  return useContext(SearchContext);
}

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState(SearchDefaultValue.search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
