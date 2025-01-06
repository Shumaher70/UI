import { createContext, useContext, useEffect, useState } from "react";
import {
  RadioGroupContextType,
  RadioGroupProviderProps,
} from "./radio-group.types";

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(
  undefined,
);

const useRadioGroup = (): RadioGroupContextType => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("useRadioGroup must be used within a RadioGroup");
  }
  return context;
};

const RadioGroupProvider = ({
  onValueChange,
  value,
  children,
}: RadioGroupProviderProps) => {
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
    <RadioGroupContext.Provider
      value={{ selectedValue, onChange: handleChange }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useRadioGroup, RadioGroupProvider };
