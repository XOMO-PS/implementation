import React, { useState } from "react";
import { FaCaretDown, FaMinus } from "react-icons/fa";
import { Input } from "./Input";
import { Button } from "./Button";

const EditableDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [value, setValue] = useState("");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between border border-blue text-blue px-4 py-2  w-3/4 rounded flex items-center bg-transparent"
      >
        Profession
        {isOpen ? (
          <FaMinus className="ml-20 " />
        ) : (
          <FaCaretDown className="ml-20" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bottom-0 left-0 mt-2 px-5 py-2 w-3/4 space-y-5 bg-white rounded-lg shadow-xl border border-blue">
          <label className="flex items-center space-x-2">
            <span>Company:</span>
            <div className="w-30">
              <Input inputSize="small" placeholder="" />
            </div>
          </label>
          <label className="flex items-center space-x-2">
            <span>Profession:</span>
            <div className="w-30">
              <Input inputSize="small" placeholder="" />
            </div>
          </label>
          <div></div>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <span>Start date:</span>
              <div className="w-30">
                <Input inputSize="small" placeholder="" />
              </div>
            </label>
            <label className="flex items-center space-x-3">
              <span>End Date:</span>
              <div className="w-30">
                <Input inputSize="small" placeholder="" />
              </div>
            </label>
          </div>
          <Button
            buttonType={"blue"}
            buttonSize={"small"}
            onClick={() => setIsOpen(false)}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableDropdown;
