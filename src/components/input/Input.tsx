import React from "react";
import { InputProps } from "./input.types";
import {
  StyledInput,
  StyledInputFile,
  StyledInputFileText,
  StyledWrapper,
} from "./input.styles";

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
