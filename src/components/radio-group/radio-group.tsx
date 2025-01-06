import { RadioGroupProvider, useRadioGroup } from "./radio-group-provider";
import { RadioGroupItemProps, RadioGroupProps } from "./radio-group.types";
import { StyledRadioGroup, StyledRadioGroupItem } from "./radio-group.styles";

export const RadioGroup = ({
  onValueChange,
  defaultValue,
  children,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupProvider onValueChange={onValueChange} value={defaultValue}>
      <StyledRadioGroup {...props}>{children}</StyledRadioGroup>
    </RadioGroupProvider>
  );
};

export const RadioGroupItem = ({ value, ...props }: RadioGroupItemProps) => {
  const { selectedValue, onChange } = useRadioGroup();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <StyledRadioGroupItem
      type="button"
      onClick={handleClick}
      value={value}
      aria-pressed={selectedValue === value}
      {...props}
    />
  );
};
