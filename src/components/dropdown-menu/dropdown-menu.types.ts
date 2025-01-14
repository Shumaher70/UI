import {
  RadioGroupContextType,
  RadioGroupProviderProps,
} from "../radio-group/radio-group.types";

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export type dropdownMenuProviderType = RadioGroupContextType & {
  isOpen: boolean;
  isClose: boolean;
  setIsOpen: () => void;
  handleTriggerRef: (
    ref: React.RefObject<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  triggerCoordinates: {
    y: number;
    x: number;
  };
};
export type dropdownMenuProviderProps = RadioGroupProviderProps;
