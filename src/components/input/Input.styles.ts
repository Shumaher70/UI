import styled, { css } from "styled-components";
import { StyledInputTypes } from "./Input.types";

export const StyledInput = styled.input.attrs<StyledInputTypes>((props) => ({
  className: props.className,
}))`
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
    `}

  ${(props) =>
    props.type === "file" &&
    css`
      display: none;
    `}
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInputFile = styled.div`
  row-gap: 4px;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-white);
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledInputFileText = styled.span`
  size: 16px;
  color: var(--text-white);
  cursor: default;
`;
