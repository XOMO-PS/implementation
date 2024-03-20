import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import EditableDropdown from "../ui/Editabledropdown";
import { Button } from "../ui/Button";
import { MdOutlineDeleteForever } from "react-icons/md";
import FileUpload from "../ui/Fileupload";
import { FaPlus } from "react-icons/fa";

interface WorkExperience {
  company: string;
  profession: string;
  startDate: string;
  endDate: string;
}

export function ProviderSignup() {
  const [bio, setBio] = useState("");
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
    {
      company: "",
      profession: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [profession, setProfession] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const handleDelete = (index: number) => {
    setWorkExperience((prevWorkExperience) =>
      prevWorkExperience.filter((_, i) => i !== index)
    );
  };
  const handleAdd = () => {
    if (workExperience.length < 3) {
      setWorkExperience((prevWorkExperience) => [
        ...prevWorkExperience,
        {
          company: "",
          profession: "",
          startDate: "",
          endDate: "",
        },
      ]);
    } else {
      alert("You can only add up to 3 work experiences.");
    }
  };
  const handleSubmit = () => {
    const formData = {
      workExperience,
      profession,
      uploadedFile,
    };

    console.log(formData);
  };
  return (
    <div className="flex flex-col min-h-screen bg-blue justify-center items-center p-8">
      <header className="text-3xl font-bold text-white mb-12 self-start">
        XOMO
      </header>
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4  bg-white rounded-2xl lg:p-20">
        <div className="col-span-3 grid-rows-2 gap-4 items-start  p-10">
          <div>
            <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
              Great. Now write a bio about yourself
            </h2>
            <h4 className="font-poppins text-base text-black mb-8">
              Let people know about you in a glance
            </h4>
            <textarea
              className="focus:darkGreen h-44 w-5/6 border hover:border-blue rounded-2xl p-4 mb-8"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div>
            <div className="flex  text-darkGreen space-x-10 md:space-x-40">
              <h2 className="font-poppins text-2xl font-bold mb-8">
                Any previous work experience?
              </h2>
              <button onClick={handleAdd}>
                <FaPlus size={30} />
              </button>
            </div>

            <h4 className="font-poppins text-base text-black mb-8">
              Where have you worked?
            </h4>
            {workExperience.map((experience, index) => (
              <div key={index}>
                <EditableDropdown
                  value={experience}
                  onChange={(newExperience) => {
                    const newWorkExperience = [...workExperience];
                    newWorkExperience[index] = newExperience;
                    setWorkExperience(newWorkExperience);
                  }}
                />
                <div className="text-darkGreen">
                  <MdOutlineDeleteForever
                    size={40}
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            ))}
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
              options={[
                "Carpenter",
                "Plumber",
                "Electrician",
                "Mason",
                "Painter",
                "Welder",
                "Other",
              ]}
              value={profession}
              onChange={setProfession}
            />
          </div>
          <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
            Let us verify you
          </h2>
          <h3 className="font-poppins text-base text-black mb-8">
            Upload a pdf of your identification document, either national ID or
            passport
          </h3>

          <FileUpload onFileUpload={setUploadedFile} />
          <Button
            buttonType={"green"}
            buttonSize={"large"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
