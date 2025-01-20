import styled from "styled-components";
import { StyledDropdownMenuContentProps } from "./dropdown-menu-content.types";

function changingLocationY(props: StyledDropdownMenuContentProps) {
  const { top, distanceFromBottomToBottomOfWindow, height } =
    props.$triggerSize;
  const { height: heightOwn } = props.$size;

  if (distanceFromBottomToBottomOfWindow < top) {
    return -height + -heightOwn + -10;
  } else {
    return 10;
  }
}

function changingLocationX(props: StyledDropdownMenuContentProps) {
  const { right, width: widthTrigger } = props.$triggerSize;

  const { width: widthOwn } = props.$size;

  if (right > widthOwn / 2 - -widthTrigger / 2 - -20) {
    return -widthOwn / 2 - -widthTrigger / 2;
  }

  if (right < widthOwn) {
    return -right - -widthTrigger - -20;
  }
}

export const StyledDropdownMenuContent = styled.div.attrs<StyledDropdownMenuContentProps>(
  (props) => ({
    className: props.className,
  }),
)`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-text);
  border: 1px solid var(--bg-black);
  border-radius: 8px;
  justify-content: center;
  min-width: 350px;
  transition:
    transform 0.1s ease,
    scale 0.1s ease,
    opacity 0.1s ease;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;

  transform: translate(
    ${(props) => changingLocationX(props)}px,
    ${(props) => changingLocationY(props)}px
  ) !important;

  &[data-state="true"] {
    animation-name: fadeIn;
  }

  &[data-state="false"] {
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`;
