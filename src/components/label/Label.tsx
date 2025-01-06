import { LabelProps } from "./Label.type";
import { StyledLabel } from "./Label.styles";

export const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
