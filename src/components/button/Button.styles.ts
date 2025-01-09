import styled, { css } from "styled-components";
import { ButtonSizeTypes, ButtonVariantTypes } from "./button.types";

const buttonStylesVariant = (variant: ButtonVariantTypes) => {
  switch (variant) {
    case "default":
      return css`
        color: var(--bg-black);
        background-color: var(--bg-white);

        &:hover {
          background-color: var(--bg-white-hover);
        }
      `;
    case "secondary":
      return css`
        color: var(--bg-black);
        background-color: var(--bg-black);

        &:hover {
          background-color: var(--bg-black) da;
        }
      `;
    case "destructive":
      return css`
        background-color: var(--bg-error);

        &:hover {
          background-color: var(--bg-error-hover);
        }
      `;
    case "outline":
      return css`
        background-color: var(--bg-black);
        border: 1px solid var(--bg-black);

        &:hover {
          background-color: var(--bg-black);
        }
      `;
    case "link":
      return css`
        text-underline-offset: 4px;
        &:hover {
          text-decoration: underline;
        }
      `;
    case "icon":
      return css`
        background-color: var(--bg-black);
        border: 1px solid var(--bg-black);
        padding: 0;
        &:hover {
          background-color: var(--bg-black);
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;

        &:hover {
          background-color: var(--bg-black);
        }
      `;
    default:
      return css``;
  }
};

const buttonStylesSize = (size: ButtonSizeTypes) => {
  switch (size) {
    case "sm":
      return css`
        padding: 4px 8px;
        font-size: 14px;
      `;
    case "md":
      return css``;
    case "lg":
      return css`
        padding: 12px 24px;
        font-size: 20px;
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button.attrs<{
  variant: ButtonVariantTypes;
  size: ButtonSizeTypes;
  disabled?: boolean;
}>((props) => ({
  className: props.className,
}))`
  font-weight: normal;
  color: var(--text-white);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.1s linear;

  ${(props) => buttonStylesVariant(props.variant)}
  ${(props) => buttonStylesSize(props.size)}
`;

export default StyledButton;
