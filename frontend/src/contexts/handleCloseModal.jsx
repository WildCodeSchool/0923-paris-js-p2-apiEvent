import { createContext, useState, useContext, useMemo } from "react";

const handleCloseModalContext = createContext();

export function HandleCloseModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => {
    return { open, setOpen };
  }, [open]);

  console.info(value);
  return (
    <handleCloseModalContext.Provider value={value}>
      {children}
    </handleCloseModalContext.Provider>
  );
}

export default () => useContext(handleCloseModalContext);
