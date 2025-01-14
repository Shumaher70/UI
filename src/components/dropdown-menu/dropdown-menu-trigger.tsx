import { useRef } from "react";
import { useDropdownMenu } from "./dropdown-menu-provider";
import { StyledDropdownMenuTrigger } from "./dropdown-menu-trigger.styles";
import { DropdownMenuTriggerProps } from "./dropdown-menu-trigger.types";

export const DropdownMenuTrigger = ({
  asChild = false,
  children,
  ...props
}: DropdownMenuTriggerProps) => {
  const triggerRef = useRef<HTMLDivElement | HTMLButtonElement>(null);

  const { setIsOpen, handleTriggerRef } = useDropdownMenu();

  const handleClick = () => {
    setIsOpen();
    handleTriggerRef(triggerRef);
  };

  return (
    <StyledDropdownMenuTrigger
      ref={triggerRef}
      onClick={handleClick}
      as={asChild ? "div" : "button"}
      {...props}
    >
      {children}
    </StyledDropdownMenuTrigger>
  );
};
