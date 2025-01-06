import styled from "styled-components";

export const StyledRadioGroup = styled.div.attrs<{
  horizontal?: boolean;
}>((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 3px;

  ${(props) =>
    props.horizontal &&
    `
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `}
`;

export const StyledRadioGroupItem = styled.button.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  border: 2px solid var(--text-white);
  &::after {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: var(--text-white);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    border-radius: 50%;
  }

  &:not([aria-pressed="true"])::after {
    position: absolute;
    display: none;
  }
`;
