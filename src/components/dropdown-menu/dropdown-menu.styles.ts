import styled from "styled-components";

export const StyledDropdownMenu = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: min-content;
`;
