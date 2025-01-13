import { createContext, useContext, useEffect, useState } from "react";
import {
  dropdownMenuProviderProps,
  dropdownMenuProviderType,
} from "./dropdown-menu.types";

const dropdownMenuContext = createContext<dropdownMenuProviderType | undefined>(
  undefined,
);

const useDropdownMenu = (): dropdownMenuProviderType => {
  const context = useContext(dropdownMenuContext);

  if (!context) {
    throw new Error("useDropdownMenu must be used within a RadioGroup");
  }
  return context;
};

const DropdownMenuProvider = ({
  onValueChange,
  value,
  children,
}: dropdownMenuProviderProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    if (!selectedValue && value) {
      setSelectedValue(value);
    }
  }, [value, selectedValue]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <dropdownMenuContext.Provider
      value={{ selectedValue, onChange: handleChange }}
    >
      {children}
    </dropdownMenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useDropdownMenu, DropdownMenuProvider };
