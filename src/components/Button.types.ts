export interface ButtonProps {
  size?: ButtonSizeTypes;
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariantTypes;
}

export type ButtonSizeTypes = "sm" | "md" | "lg";

export type ButtonVariantTypes =
  | "link"
  | "icon"
  | "ghost"
  | "default"
  | "outline"
  | "secondary"
  | "destructive";

export interface StyledButtonPropsTypes {
  size: ButtonSizeTypes;
  disabled?: boolean;
  variant: ButtonVariantTypes;
}
