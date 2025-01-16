import StyledButton from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  variant = "default",
  size = "md",
  disabled = false,
  asChild = false,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      as={asChild ? "div" : "button"}
      $variant={variant}
      size={size}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
