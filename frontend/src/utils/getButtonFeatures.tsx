import { ButtonSize, ButtonType } from "../ui/Button";

export function getButtonFeatures(
  buttonType: ButtonType,
  buttonSize: ButtonSize,
  isRounded: boolean
) {
  let bgColor = "";
  let borderRadius = "";
  let buttonHeight = "";
  let fontSize = "";
  let fontColor = "text-white";
  let fontType = "font-poppins";
  let fontWeight = "font-regular";

  switch (buttonType) {
    case "blue":
      bgColor = "bg-blue";
      break;
    case "green":
      bgColor = "bg-green";
      break;
    case "lightGreen":
      bgColor = "bg-lightGreen";
      fontColor = "text-darkGreen";
      break;
    case "red":
      bgColor = "bg-red";
      break;
  }
  switch (buttonSize) {
    case "small":
      borderRadius = isRounded ? "rounded-[20px]" : "rounded-lg";
      buttonHeight = "h-9";
      fontSize = "text-base";
      break;
    case "medium":
      borderRadius = isRounded ? "rounded-[20px]" : "rounded-lg";
      buttonHeight = "h-10";
      fontSize = "text-base";
      break;
    case "large":
      borderRadius = isRounded ? "rounded-[28px]" : "rounded-xl";
      buttonHeight = "h-11";
      fontSize = "text-xl";
      break;
    case "xlarge":
      borderRadius = isRounded ? "rounded-[28px]" : "rounded-xl";
      buttonHeight = "h-12";
      fontSize = "text-xl";
      break;
  }

  return {
    bgColor: bgColor,
    borderRadius: borderRadius,
    buttonHeight: buttonHeight,
    fontColor: fontColor,
    fontType: fontType,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
}
