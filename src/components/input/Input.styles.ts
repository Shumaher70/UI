import styled, { css } from "styled-components";

export const StyledInput = styled.input<{ disabled?: boolean }>`
  display: relative;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  color: var(--text-white);
  background-color: transparent;
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    transition: border-color 0.2s ease;
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      backdrop-filter: bright(0.5);
    `}
`;
