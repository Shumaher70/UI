import { StyledDropdownMenuTrigger } from "./dropdown-menu-trigger.styles";
import { DropdownMenuTriggerProps } from "./dropdown-menu-trigger.types";

export const DropdownMenuTrigger = ({
  asChild,
  children,
  ...props
}: DropdownMenuTriggerProps) => {
  return (
    <StyledDropdownMenuTrigger as={asChild ? "div" : "button"} {...props}>
      {children}
    </StyledDropdownMenuTrigger>
  );
};
