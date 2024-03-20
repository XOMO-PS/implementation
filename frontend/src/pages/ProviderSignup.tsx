import React from "react";
import Dropdown from "../ui/Dropdown";
import EditableDropdown from "../ui/Editabledropdown";
import { GrUploadOption } from "react-icons/gr";
import { Button } from "../ui/Button";
import { MdOutlineDeleteForever } from "react-icons/md";

export function ProviderSignup() {
  return (
    <div className="min-h-screen bg-blue justify-start items-center p-8">
      <header className="text-3xl font-bold text-white mb-12 self-start">
        XOMO
      </header>
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4  bg-white rounded-2xl p-20">
        <div className="col-span-3 grid-rows-2 gap-4 items-start  p-10">
          <div>
            <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
              Great. Now write a bio about yourself
            </h2>
            <h4 className="font-poppins text-base text-black mb-8">
              Let people know about you in a glance
            </h4>
            <textarea className="h-44 w-5/6 border border-blue rounded-2xl mb-8"></textarea>
          </div>
          <div>
            <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
              Any previous work experience?
            </h2>
            <h4 className="font-poppins text-base text-black mb-8">
              Where have you worked?
            </h4>
            <div className="flex items-center ">
              <div className="w-3/4">
                <EditableDropdown />
              </div>
              <div className=" text-darkGreen">
                <MdOutlineDeleteForever size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid-rows-2 gap-4 items-start  p-10">
          <div className="mb-8">
            <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
              Select your profession
            </h2>
            <h4 className="font-poppins text-base text-black mb-8">
              Select the profession you are in
            </h4>
            <Dropdown
              title="Profession"
              options={["Carpenter", "Plumber", "Electrician"]}
            />
          </div>
          <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
            Let us verify you
          </h2>
          <h3 className="font-poppins text-base text-black mb-8">
            Upload a pdf of your identification document, either national ID or
            passport
          </h3>
          <div className="h-1/4 w-1/4 items-center justify-center flex ml-4 bg-lightGreen text-darkGreen rounded-2xl mb-8">
            <GrUploadOption size={50} />
          </div>
          <Button buttonType={"green"} buttonSize={"large"}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
