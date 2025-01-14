import { createPortal } from "react-dom";
import { StyledDropdownMenuContent } from "./dropdown-menu-content.styled";
import { DropdownMenuContentProps } from "./dropdown-menu-content.types";
import { useDropdownMenu } from "./dropdown-menu-provider";

export const DropdownMenuContent = ({
  children,
  ...props
}: DropdownMenuContentProps) => {
  const { isOpen, isClose } = useDropdownMenu();

  return (
    <>
      {(isOpen || isClose) &&
        createPortal(
          <StyledDropdownMenuContent data-state={isClose} {...props}>
            {children}
          </StyledDropdownMenuContent>,
          document.body,
        )}
    </>
  );
};
