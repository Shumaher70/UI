import React from "react";

import {
  StyledInput,
  StyledWrapper,
  StyledInputFile,
  StyledInputFileText,
} from "./Input.styles";

import { Label } from "../label/Label";
import { InputProps } from "./Input.types";

export const Input = ({ id, className, type, ...props }: InputProps) => {
  const [fileName, setFileName] = React.useState<string>("No file chosen");
  const refInput = React.useRef<HTMLInputElement>(null);

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const file = event.target.files?.[0];
    setFileName(file?.name || "No file chosen");
  };

  const handleClick = () => refInput.current?.click();

  return type !== "file" ? (
    <StyledInput className={className} id={id} type={type} {...props} />
  ) : (
    <StyledWrapper>
      <Label htmlFor={id}>Hello</Label>
      <StyledInputFile className={className} onClick={handleClick}>
        <StyledInput
          id={id}
          type={type}
          {...props}
          ref={refInput}
          onChange={handleFileChange}
        />
        <StyledInputFileText>Choose File: {fileName}</StyledInputFileText>
      </StyledInputFile>
    </StyledWrapper>
  );
};
