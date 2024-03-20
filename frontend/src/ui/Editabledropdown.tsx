import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaMinus } from "react-icons/fa";
import { Input } from "./Input";
import { Button } from "./Button";

interface WorkExperience {
  company: string;
  profession: string;
  startDate: string;
  endDate: string;
}

interface EditableDropdownProps {
  value: WorkExperience;
  onChange: (value: WorkExperience) => void;
}

const EditableDropdown: React.FC<EditableDropdownProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (field: keyof WorkExperience, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  const handleSaveClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(
          event.target as HTMLElement
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative flex w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between border-[3px] w-full border-darkGreen text-darkGreen px-4 py-2 rounded-lg flex items-center bg-transparent font-poppins font-medium"
      >
        Profession
        {isOpen ? (
          <FaMinus className="ml-2 " />
        ) : (
          <FaCaretDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bottom-0 left-0 flex flex-col w-full mt-2 px-5 bg-white rounded-lg shadow-xl border border-blue items-center justify-center">
          <label className="flex items-center justify-center space-x-2 w-full mt-4 mb-4">
            <span>Company:</span>
            <div className="w-56">
              <Input
                inputSize="small"
                value={value.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
          </label>
          <label className="flex items-center space-x-2 w-full justify-center mb-4">
            <span>Profession:</span>
            <div className="w-56">
              <Input
                inputSize="small"
                value={value.profession}
                onChange={(e) =>
                  handleInputChange("profession", e.target.value)
                }
              />
            </div>
          </label>
          <div className="flex flex-col w-full">
            <label className="md:flex items-center space-x-2 w-full flex justify-center mb-4">
              <span>Start date:</span>
              <div className="w-56">
                <Input
                  type="date"
                  inputSize="small"
                  value={value.startDate}
                  onChange={(e) =>
                    handleInputChange("startDate", e.target.value)
                  }
                />
              </div>
            </label>
            <label className="md:flex items-center space-x-2 w-full flex justify-center mb-8">
              <span>End Date:</span>
              <div className="w-56">
                <Input
                  type="date"
                  inputSize="small"
                  value={value.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
              </div>
            </label>
          </div>

          <div className="w-full items-center justify-center flex mb-4">
            <div className="w-32 items-center">
              <Button
                buttonType={"blue"}
                buttonSize={"small"}
                onClick={handleSaveClick}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableDropdown;
