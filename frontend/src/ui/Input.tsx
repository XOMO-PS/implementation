import { ComponentPropsWithoutRef } from "react";
import { IconType, getIconType } from "../utils/getIconType";

export type InputSize = "small" | "large";
interface InputProps extends ComponentPropsWithoutRef<"input"> {
  inputSize?: InputSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
}
export function Input({
  inputSize = "small",
  leftIcon = null,
  rightIcon = null,
  ...props
}: InputProps) {
  const inputHeight = inputSize === "small" ? "h-11" : "h-12";
  const focusStyle = `focus:border-2 focus:rounded-lg focus:outline-none focus:ring-0 focus:border-blue`;
  const fontStyle = "font-poppins font-regular text-base text-darkGreen";
  const leftPadding = leftIcon === null ? "pl-4" : "pl-12";
  const rightPadding = rightIcon === null ? "pr-4" : "pr-12";
  const padding = `${leftPadding} ${rightPadding}`;
  const placeholderStyle = "placeholder:text-darkGreen/80";
  const inputStyle = `w-full bg-lightGreen rounded-lg ${inputHeight} ${focusStyle} ${fontStyle} ${padding} ${placeholderStyle} truncate ...`;

  return (
    <div className="flex flex-row items-center relative">
      {leftIcon !== null && (
        <div className="absolute items-center flex ml-4 text-darkGreen">
          {getIconType(leftIcon)}
        </div>
      )}
      <input className={inputStyle} {...props} />
      {rightIcon !== null && (
        <div className="absolute items-center flex right-4 mr-4 text-darkGreen">
          {getIconType(rightIcon)}
        </div>
      )}
    </div>
  );
}
