import styled from "styled-components";

export const StyledDropdownMenuContent = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-text);
  border: 1px solid var(--bg-black);
  border-radius: 8px;
  justify-content: center;
  top: 0;
  min-width: 350px;
  transition:
    transform 0.1s ease,
    scale 0.1s ease,
    opacity 0.1s ease;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;

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
