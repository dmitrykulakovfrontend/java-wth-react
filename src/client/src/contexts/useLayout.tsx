import useWindowSize from "@/utils/useWindowSize";
import React, { useContext, useEffect, useState } from "react";

type LayoutContextState = {
  isMenuOpen: boolean;
  isNotificationsOpen: boolean;
};

const defaultLayoutState: LayoutContextState = {
  isMenuOpen: true,
  isNotificationsOpen: true,
};

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const setLayoutState = (_state: LayoutContextState) => {};

const LayoutContext = React.createContext({
  layout: defaultLayoutState,
  setLayout: setLayoutState,
});

// eslint-disable-next-line react-refresh/only-export-components
export default function useLayoutContext() {
  return useContext(LayoutContext);
}

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState(defaultLayoutState);

  const { width } = useWindowSize();

  useEffect(() => {
    if (!width) return;
    console.log(width);

    setLayout({
      isMenuOpen: width > 1024,
      isNotificationsOpen: width > 1350,
    });
  }, [width, setLayout]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
