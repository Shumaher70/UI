import styled from "styled-components";

import { CheckboxProps } from "./checkbox.types";
import { StyledCheckbox } from "./checkbox.styles";
import { useState } from "react";

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleClick = () => {
    setChecked((priv) => !priv);
  };

  return (
    <StyledCheckbox
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={handleClick}
      {...props}
    >
      <StyledSpan>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={checked ? "black" : ""}
          stroke-width="2"
          className="h-4 w-4"
          style={{
            backgroundColor: checked ? "white" : "transparent",
          }}
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </StyledSpan>
    </StyledCheckbox>
  );
};
