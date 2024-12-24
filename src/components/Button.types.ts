export interface ButtonProps {
  size?: ButtonSize;
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariantTypes;
}

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariantTypes =
  | "link"
  | "icon"
  | "ghost"
  | "default"
  | "outline"
  | "secondary"
  | "destructive";

export interface StyledButtonPropsTypes {
  size: ButtonSize;
  disabled?: boolean;
  variant: ButtonVariantTypes;
}
