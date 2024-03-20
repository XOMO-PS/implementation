import React, { useState } from "react";
import { FaCaretDown, FaMinus } from "react-icons/fa";

interface DropdownProps {
  title: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between border border-blue text-blue w-5/6 px-4 py-2 space-x-8 rounded flex items-center bg-transparent"
      >
        {title}
        {isOpen ? (
          <FaMinus className="ml-2 " />
        ) : (
          <FaCaretDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 py-2 w-5/6 bg-white border border-blue rounded-lg shadow-xl">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue hover:text-white"
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
