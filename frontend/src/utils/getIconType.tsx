import { FaEye, FaEyeSlash, FaLock, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export type IconType =
  | null
  | "user"
  | "email"
  | "lock"
  | "phone"
  | "eye"
  | "eyeOff";
export function getIconType(iconType: IconType) {
  switch (iconType) {
    case "user":
      return (
        <div className="w-6 h-6 text-darkGreen absolute mt-2">
          <FaRegUser />
        </div>
      );
    case "email":
      return (
        <div className="text-darkGreen absolute">
          <MdOutlineMail className="w-5 h-5" />
        </div>
      );
    case "phone":
      return (
        <div className="text-darkGreen absolute">
          <MdLocalPhone className="w-5 h-5" />
        </div>
      );

    case "lock":
      return (
        <div className="text-darkGreen absolute">
          <FaLock className="w-5 h-5" />
        </div>
      );
    case "eye":
      return (
        <div className="text-darkGreen absolute">
          <FaEye className="w-5 h-5" />
        </div>
      );
    case "eyeOff":
      return (
        <div className="text-darkGreen absolute">
          <FaEyeSlash className="w-5 h-5" />
        </div>
      );
    default:
      return <></>;
  }
}
