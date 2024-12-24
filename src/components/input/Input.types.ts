export interface InputProps {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "checkbox"
    | "radio"
    | "date"
    | "file"
    | "range"
    | "tel"
    | "url"
    | "search"
    | "color"
    | "datetime-local"; // Можно добавить другие типы по необходимости
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  id?: string;
  required?: boolean;
  autofocus?: boolean;
  readonly?: boolean;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  step?: number;
  min?: number;
  max?: number;
  size?: number;
  list?: string;
  autocomplete?: "on" | "off";
  inputmode?: "text" | "numeric" | "tel" | "email" | "url";
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: "get" | "post";
  formnovalidate?: boolean;
  formtarget?: "_self" | "_blank" | "_parent" | "_top";
  ariaLabel?: string; // для доступности
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
