import styled from "styled-components";

export const StyledLabel = styled.label.attrs((props) => ({
  className: props.className,
}))`
  font-size: 16px;
  color: var(--text-white);
  font-weight: 600;
`;
