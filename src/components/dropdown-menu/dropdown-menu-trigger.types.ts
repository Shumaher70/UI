import { AllHTMLAttributes, ReactNode } from "react";

export interface DropdownMenuTriggerProps
  extends AllHTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}
