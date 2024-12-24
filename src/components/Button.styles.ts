import styled, { css } from "styled-components";
import { ButtonVariantTypes } from "./Button.types";

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

const StyledButton = styled.button<{
  variant: ButtonVariantTypes;
  size: string;
  disabled?: boolean;
}>`
  font-weight: normal;
  color: #f5f5f5;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  padding: 7px 14px;
  transition: background-color 0.1s linear;

  ${(props) => buttonStylesVariant(props.variant)}
`;

export default StyledButton;
