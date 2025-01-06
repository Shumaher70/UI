export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type StyledInputTypes = Pick<InputProps, "type"> & {
  disabled?: boolean;
};
