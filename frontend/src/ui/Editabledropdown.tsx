import React, { useState } from "react";
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

  const handleInputChange = (field: keyof WorkExperience, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  const handleSaveClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between border-4 border-darkGreenv text-darkGreen px-4 py-2  w-5/6 rounded-lg flex items-center bg-transparent"
      >
        Profession
        {isOpen ? (
          <FaMinus className="ml-2 " />
        ) : (
          <FaCaretDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bottom-0 left-0 mt-2 px-5 py-2 w-5/6 space-y-5 bg-white rounded-lg shadow-xl border border-blue">
          <label className="md:flex items-center space-x-2">
            <span>Company:</span>
            <div className="w-30">
              <Input
                inputSize="small"
                value={value.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
          </label>
          <label className="md:flex items-center space-x-2">
            <span>Profession:</span>
            <div className="w-30">
              <Input
                inputSize="small"
                value={value.profession}
                onChange={(e) =>
                  handleInputChange("profession", e.target.value)
                }
              />
            </div>
          </label>
          <div className="md:flex md:space-x-4">
            <label className="md:flex items-center space-x-2">
              <span>Start date:</span>
              <div className="w-30">
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
            <label className="md:flex items-center space-x-3">
              <span>End Date:</span>
              <div className="w-30">
                <Input
                  type="date"
                  inputSize="small"
                  value={value.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
              </div>
            </label>
          </div>
          <Button
            buttonType={"blue"}
            buttonSize={"small"}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableDropdown;
