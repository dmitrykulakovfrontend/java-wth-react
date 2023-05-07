import React, { useContext, useState } from "react";

const SearchDefaultValue = {
  search: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearch: (state: string) => {},
};

const SearchContext = React.createContext(SearchDefaultValue);

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
