import {
  RadioGroupContextType,
  RadioGroupProviderProps,
} from "../radio-group/radio-group.types";

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export type dropdownMenuProviderType = RadioGroupContextType;
export type dropdownMenuProviderProps = RadioGroupProviderProps;
