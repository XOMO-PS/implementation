import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    validateAllFields();
    if (isFormValid()) {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };
      console.log(formData);

      navigate("/signupChoose", { state: { formData } });
    }
  };

  function validateAllFields() {
    validateData(firstName, lastName, email, password, confirmPassword);
  }
  function isFormValid() {
    return (
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === ""
    );
  }
  function validateData(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    // First name validation
    if (firstName === "") {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
    }

    // Last name validation
    if (lastName === "") {
      setLastNameError("Last name is required");
    } else {
      setLastNameError("");
    }

    // Email validation
    if (email === "") {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }

    // Password validation
    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    // Confirm password validation
    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-blue  items-center p-8">
      <p className="text-4xl text-white mb-8 self-start font-quicksand font-semibold">
        XOMO
      </p>
      <div className="flex flex-col justify-center gap-4 bg-white rounded-2xl p-10">
        <h2 className="font-poppins self-center text-2xl text-darkGreen  font-bold mb-8">
          Create an account
        </h2>
        <div className="lg:grid lg:grid-cols-2 gap-4 space-y-5 lg:space-y-0 p-10">
          <div className="col-span-1 space-y-5">
            <div>
              <Input
                inputSize="small"
                placeholder="First Name"
                leftIcon={"user"}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && <p className="text-red">{firstNameError}</p>}
            </div>

            <div>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                rightIcon={"eyeOff"}
                leftIcon={"lock"}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red">{passwordError}</p>}
            </div>
            <div>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                leftIcon={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red">{emailError}</p>}
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <div>
              <Input
                placeholder="Last Name"
                value={lastName}
                leftIcon={"user"}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <p className="text-red">{lastNameError}</p>}
            </div>

            <div>
              <Input
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                rightIcon={"eyeOff"}
                leftIcon={"lock"}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && (
                <p className="text-red">{confirmPasswordError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-56 self-center">
          <Button
            buttonType={"green"}
            buttonSize={"small"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
