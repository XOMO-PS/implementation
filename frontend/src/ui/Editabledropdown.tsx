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
        className="justify-between border border-blue text-blue px-4 py-2  w-5/6 rounded flex items-center bg-transparent"
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
              <Input inputSize="small" placeholder="" />
            </div>
          </label>
          <label className="md:flex items-center space-x-2">
            <span>Profession:</span>
            <div className="w-30">
              <Input inputSize="small" placeholder="" />
            </div>
          </label>
          <div className="md:flex md:space-x-4">
            <label className="md:flex items-center space-x-2">
              <span>Start date:</span>
              <div className="w-30">
                <Input inputSize="small" placeholder="" />
              </div>
            </label>
            <label className="md:flex items-center space-x-3">
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
