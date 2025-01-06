export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  horizontal?: boolean;
}

export interface RadioGroupItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  selected?: boolean;
  id: string;
  onClick?: () => void;
}
export interface RadioGroupProviderProps {
  value?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export interface RadioGroupContextType {
  selectedValue: string;
  onChange: (value: string) => void;
}
