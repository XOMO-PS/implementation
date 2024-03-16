import React from "react";
import './css/checkbox.css'
interface checkboxProps {
    label : string,
    isChecked: boolean,
    onChange:(checked:boolean)=> void
}

const Checkbox : React.FC<checkboxProps> = ( {label,isChecked,onChange}) =>{
    const handleCheckboxChange = () =>{
        onChange(!isChecked);
    }
    return (
        <div className="checkbox-container">
            <label className="checkbox-label">

                <input
                    className="checkbox-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox-custom"></span>
                {label}
            </label>
        </div>
    );
}
export default Checkbox;