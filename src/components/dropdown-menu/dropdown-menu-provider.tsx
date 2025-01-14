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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [triggerCoordinates, setTriggerCoordinates] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
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

  const handleOpen = () => {
    if (isOpen) {
      setIsClose(false);
      setTimeout(() => setIsOpen(false), 100);
    } else {
      setIsClose(true);
      setTimeout(() => setIsOpen(true), 0);
    }
  };

  const handleTriggerRef = (
    ref: React.RefObject<HTMLDivElement | HTMLButtonElement>,
  ) => {
    if (ref.current) {
      const { right, top } = ref.current.getBoundingClientRect();
      setTriggerCoordinates((prev) => ({
        ...prev,
        x: right,
        y: top,
      }));
    }
  };

  return (
    <dropdownMenuContext.Provider
      value={{
        selectedValue,
        onChange: handleChange,
        setIsOpen: handleOpen,
        isClose,
        isOpen,
        handleTriggerRef,
        triggerCoordinates,
      }}
    >
      {children}
    </dropdownMenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useDropdownMenu, DropdownMenuProvider };
