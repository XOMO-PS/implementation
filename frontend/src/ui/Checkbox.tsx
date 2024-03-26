import { getIconType } from "../utils/getIconType";

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  testId?: string;
};
export function CheckBox({ isChecked, onChange, testId }: CheckboxProps) {
  const bgColor = isChecked ? "bg-darkGreen" : "bg-gray";
  const checkboxStyle = `${bgColor} w-6 h-6 rounded`;
  return (
    <div className={checkboxStyle} onClick={onChange} data-testid={testId}>
      {isChecked && (
        <div className="w-full h-full flex items-center text-lightBlue justify-center">
          {getIconType("tick")}
        </div>
      )}
    </div>
  );
}
