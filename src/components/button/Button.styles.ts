import styled, { css } from "styled-components";
import { ButtonSizeTypes, ButtonVariantTypes } from "./Button.types";

const buttonStylesVariant = (variant: ButtonVariantTypes) => {
  switch (variant) {
    case "default":
      return css`
        color: #1c1c1c;
        background-color: #f5f5f5;

        &:hover {
          background-color: #f5f5f5c3;
        }
      `;
    case "secondary":
      return css`
        color: #f5f5f5;
        background-color: #27272a;

        &:hover {
          background-color: #27272ada;
        }
      `;
    case "destructive":
      return css`
        background-color: #7f1d1d;

        &:hover {
          background-color: #7f1d1de1;
        }
      `;
    case "outline":
      return css`
        background-color: #000;
        border: 1px solid #27272a;

        &:hover {
          background-color: #27272a;
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
        background-color: #000;
        border: 1px solid #27272a;
        padding: 0;
        &:hover {
          background-color: #27272a;
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;

        &:hover {
          background-color: #27272a;
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

const StyledButton = styled.button<{
  variant: ButtonVariantTypes;
  size: ButtonSizeTypes;
  disabled?: boolean;
}>`
  font-weight: normal;
  color: #f5f5f5;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.1s linear;

  ${(props) => buttonStylesVariant(props.variant)}
  ${(props) => buttonStylesSize(props.size)}
`;

export default StyledButton;
