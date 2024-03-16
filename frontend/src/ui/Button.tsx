import { ComponentPropsWithoutRef } from "react";
import { getButtonFeatures } from "../utils/getButtonFeatures";

export type ButtonType = "blue" | "green" | "lightGreen" | "red";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  isRounded?: boolean;
}
export function Button({
  buttonType,
  buttonSize,
  isRounded = false,
  children,
  ...props
}: ButtonProps) {
  const {
    bgColor,
    borderRadius,
    buttonHeight,
    fontColor,
    fontType,
    fontSize,
    fontWeight,
  } = getButtonFeatures(buttonType, buttonSize, isRounded);

  const buttonStyle = `w-full ${bgColor} ${borderRadius} ${buttonHeight}`;
  const textStyle = `${fontColor} ${fontType} ${fontSize} ${fontWeight}`;
  return (
    <button className={buttonStyle} {...props}>
      <p className={textStyle}>{children}</p>
    </button>
  );
}
