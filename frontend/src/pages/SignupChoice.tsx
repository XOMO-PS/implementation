import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaUserNurse } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SignupChoose() {
  const navigate = useNavigate();

  const location = useLocation();
  const formData = location.state ? location.state.formData : {};
  const formData2 = {
    first_name: formData["first_name"],
    last_name: formData["last_name"],
    email: formData["email"],
    password: formData["password"],
  };
  console.log(
    "inter choce" +
      formData2["email"] +
      formData2["password"] +
      formData2["first_name"] +
      formData2["last_name"]
  );
  const handleProviderSignup = () => {
    navigate("/providerSignup", { state: { formData2 } });
  };
  return (
    <div className="min-h-screen bg-blue justify-start items-center p-8">
      <header className="text-3xl font-bold text-white mb-32 self-start">
        XOMO
      </header>

      <div className="flex justify-center space-x-8">
        <div
          onClick={handleProviderSignup}
          className="bg-white rounded-3xl p-8 w-80 flex flex-col items-center justify-center"
        >
          <FaUserNurse className="w-32 h-32 mb-4 text-red" />
          <h1 className="font-poppins text-base text-red font-bold">
            Are you a provider?
          </h1>
        </div>
        <Link to="/userSignup" className="text-decoration-none">
          <div className="bg-white rounded-3xl p-8 w-80 flex flex-col items-center justify-center">
            <FaRegUser className="w-32 h-32 mb-4" />
            <h1 className="font-poppins text-base text-darkGreen font-bold">
              Are you a customer?
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
