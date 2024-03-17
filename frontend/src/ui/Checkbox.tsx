import { getIconType } from "../utils/getIconType";

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
};
export function CheckBox({ isChecked, onChange }: CheckboxProps) {
  const bgColor = isChecked ? "bg-darkGreen" : "bg-gray";
  const checkboxStyle = `${bgColor} w-6 h-6 rounded`;
  return (
    <div className={checkboxStyle} onClick={onChange}>
      {isChecked && (
        <div className="w-full h-full flex items-center text-lightBlue justify-center">
          {getIconType("tick")}
        </div>
      )}
    </div>
  );
}
