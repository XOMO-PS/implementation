import {
  FaCaretDown,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaMinus,
  FaRegUser,
  FaMapMarkedAlt,
  FaCity,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaHouse, FaFlag } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { GrUploadOption } from "react-icons/gr";

import { MdOutlineDeleteForever, MdOutlineMail } from "react-icons/md";
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
  | "tick"
  | "upload"
  | "dropdown"
  | "dropup"
  | "trash"
  | "password"
  | "house"
  | "map"
  | "city"
  | "flag"
  | "google"
  | "facebook";

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
    case "upload":
      return (
        <div className={iconStyle}>
          <GrUploadOption className="w-5 h-5" />
        </div>
      );
    case "dropdown":
      return (
        <div className={iconStyle}>
          <FaCaretDown className="w-5 h-5" />
        </div>
      );
    case "dropup":
      return (
        <div className={iconStyle}>
          <FaMinus className="w-5 h-5" />
        </div>
      );
    case "trash":
      return (
        <div className={iconStyle}>
          <MdOutlineDeleteForever className="w-9 h-9" />
        </div>
      );
    case "password":
      return (
        <div className={iconStyle}>
          <CiLock className="w-6 h-6" />
        </div>
      );
    case "house":
      return (
        <div className={iconStyle}>
          <FaHouse className="w-5 h-5" />
        </div>
      );
    case "map":
      return (
        <div className={iconStyle}>
          <FaMapMarkedAlt className="w-5 h-5" />
        </div>
      );
    case "city":
      return (
        <div className={iconStyle}>
          <FaCity className="w-5 h-5" />
        </div>
      );
    case "flag":
      return (
        <div className={iconStyle}>
          <FaFlag className="w-5 h-5" />
        </div>
      );
    case "google":
      return (
        <div className={iconStyle}>
          <FcGoogle className="w-5 h-5" />
        </div>
      );
    case "facebook":
      return (
        <div className={iconStyle}>
          <FaFacebook className="w-4 h-4" />
        </div>
      );
    default:
      return <></>;
  }
}
