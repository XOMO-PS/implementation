import { FaEye, FaEyeSlash, FaLock, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export type IconType =
  | null
  | "user"
  | "email"
  | "lock"
  | "phone"
  | "eye"
  | "eyeOff"
  | "tick";

export function getIconType(iconType: IconType) {
  const iconStyle = "absolute";
  switch (iconType) {
    case "user":
      return (
        <div className={iconStyle}>
          <FaRegUser className="w-5 h-5" />
        </div>
      );
    case "email":
      return (
        <div className={iconStyle}>
          <MdOutlineMail className="w-5 h-5" />
        </div>
      );
    case "phone":
      return (
        <div className={iconStyle}>
          <MdLocalPhone className="w-5 h-5" />
        </div>
      );

    case "lock":
      return (
        <div className={iconStyle}>
          <FaLock className="w-5 h-5" />
        </div>
      );
    case "eye":
      return (
        <div className={iconStyle}>
          <FaEye className="w-5 h-5" />
        </div>
      );
    case "eyeOff":
      return (
        <div className={iconStyle}>
          <FaEyeSlash className="w-5 h-5" />
        </div>
      );
    case "tick":
      return (
        <div className={iconStyle}>
          <TiTick className="w-5 h-5" />
        </div>
      );
    default:
      return <></>;
  }
}
