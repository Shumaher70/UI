import { DropdownMenuProps } from "./dropdown-menu.types";
import { StyledDropdownMenu } from "./dropdown-menu.styles";
import { DropdownMenuProvider } from "./dropdown-menu-provider";

export const DropdownMenu = ({ children, ...props }: DropdownMenuProps) => {
  return (
    <DropdownMenuProvider>
      <StyledDropdownMenu {...props}>{children}</StyledDropdownMenu>
    </DropdownMenuProvider>
  );
};
