import styled from "styled-components";

import { StyledCheckboxType } from "./checkbox.types";

export const StyledCheckbox = styled.button.attrs<StyledCheckboxType>(
  (props) => ({
    className: props.className,
  }),
)`
  height: 18px;
  width: 18px;
  overflow: hidden;
  background-color: transparent;
  border: 1px solid var(--text-white);
  border-radius: 5px;
  &:focus-visible {
    outline-width: 2px;
    outline-offset: 2px;
    outline-style: solid;
    outline-color: var(--text-white);
  }
`;
