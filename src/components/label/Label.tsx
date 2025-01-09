import { StyledLabel } from "./label.styles";
import { LabelProps } from "./label.type";

export const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
