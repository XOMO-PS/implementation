import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import EditableDropdown from "../ui/Editabledropdown";
import { Button } from "../ui/Button";
// import FileUpload from "../ui/Fileupload";
import { FaPlus } from "react-icons/fa";
import { getIconType } from "../utils/getIconType";
import { useLocation } from "react-router-dom";

interface WorkExperience {
  company: string;
  profession: string;
  startDate: string;
  endDate: string;
}

export function ProviderSignup() {
  const location = useLocation();
  const formData1 = location.state ? location.state.formData : {};
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
  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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
    if (formData1) {
      const formData = {
        // workExperience,
        first_name: formData1.first_name,
        last_name: formData1.last_name,
        email: formData1.email,
        password: formData1.password,
        profile_info: {
          expertise: profession,
        },
        // uploadedFile,
      };
      callAPI(formData);
    }
  };

  function callAPI(formData: any) {
    fetch(
      "https://4tlf1crmpf.execute-api.eu-north-1.amazonaws.com/V1/register-provider",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Successfully registered");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue  items-center p-8">
      <p className="text-4xl text-white mb-8 self-start font-quicksand font-semibold">
        XOMO
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 bg-white rounded-2xl lg:p-4">
        <div className="col-span-3 grid-rows-2 gap-4 items-start p-10">
          <div>
            <h2 className="font-poppins text-2xl text-darkGreen  font-bold mb-8">
              Great. Now write a bio about yourself
            </h2>
            <h4 className="font-poppins text-base text-black mb-8">
              Let people know about you in a glance
            </h4>
            <textarea
              className="h-44 w-5/6 border hover:border-darkGreen rounded-2xl p-4 mb-8 focus:border-darkGreen focus:ring-0 focus:outline-none focus:border-2"
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
              <div key={index} className="flex flex-row w-5/6 mb-2">
                <div className="z-50 w-full">
                  <EditableDropdown
                    value={experience}
                    onChange={(newExperience) => {
                      const newWorkExperience = [...workExperience];
                      newWorkExperience[index] = newExperience;
                      setWorkExperience(newWorkExperience);
                    }}
                  />
                </div>
                <div
                  className="text-darkGreen flex justify-center items-center ml-8"
                  onClick={() => handleDelete(index)}
                >
                  <div className="w-full flex justify-center items-center text-red">
                    {getIconType("trash")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 grid-rows-2 justify-between gap-4 items-start p-10">
          <div className="mb-8">
            <h2 className="font-poppins text-2xl text-darkGreen font-bold mb-8">
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
            {/* <h2 className="font-poppins text-2xl text-darkGreen font-bold mb-8">
            Let us verify you
          </h2>
          <h3 className="font-poppins text-base text-black mb-8">
            Upload a pdf of your identification document, either national ID or
            passport
          </h3> */}

            {/* <FileUpload onFileUpload={setUploadedFile} /> */}
            <div className="md: mt-24 mt:10">
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
      </div>
    </div>
  );
}
