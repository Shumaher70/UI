import styled from "styled-components";

export const StyledInput = styled.input<{ disabled?: boolean }>`
  display: relative;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: black;
  width: 100%;
  color: var(--text-white);
  background-color: var(--bg-black);
`;
