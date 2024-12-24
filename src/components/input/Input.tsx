import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};
