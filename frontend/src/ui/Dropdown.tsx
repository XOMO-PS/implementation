import React, { useState } from "react";
import { FaCaretDown, FaMinus } from "react-icons/fa";

interface DropdownProps {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`justify-between border-4 border-darkGreen ${
          isOpen ? "rounded-b-none" : "rounded-lg"
        } text-darkGreen w-5/6 px-4 py-2 space-x-8 rounded-lg flex items-center bg-transparent`}
      >
        {value || title}
        {isOpen ? (
          <FaMinus className="ml-2 " />
        ) : (
          <FaCaretDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt- py-2 w-5/6 bg-white border-t-0 border-4 border-darkGreen rounded-t-none rounded-lg shadow-xl">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-lightGreen hover:text-darkGreen text-darkGreen"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
