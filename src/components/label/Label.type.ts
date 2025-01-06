export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
  hidden?: boolean;
  className?: string;
  required?: boolean;
  hint?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
};
