import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { getIconType } from "../utils/getIconType";
import { useNavigate } from "react-router-dom";
import { useUserRegistrationMutation } from "../react-query/hooks";
import { sha256 } from "js-sha256";

export function UserSignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [houseNoError, setHouseNoError] = useState("");
  const [postalError, setPostalError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");

  const navigate = useNavigate();

  function validateData(): boolean {
    // First name validation
    let isFormValid: boolean = true;
    if (firstName === "") {
      setFirstNameError("First name is required");
      isFormValid = false;
    } else {
      setFirstNameError("");
    }

    // Last name validation
    if (lastName === "") {
      setLastNameError("Last name is required");
      isFormValid = false;
    } else {
      setLastNameError("");
    }

    // Email validation
    if (email === "") {
      setEmailError("Email is required");
      isFormValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isFormValid = false;
    } else {
      setEmailError("");
    }

    // Phone validation
    if (phone === "") {
      setPhoneError("Phone is required");
      isFormValid = false;
    } else {
      let numericError: boolean = false;
      for (let i = 0; i < phone.length; i++) {
        if (
          !(
            (i === 0 && phone[i] === "+") ||
            (phone[i] >= "0" && phone[i] <= "9")
          )
        ) {
          numericError = true;
          break;
        }
      }
      if (numericError) {
        setPhoneError("Only digits are allowed!");
        isFormValid = false;
      } else {
        setPhoneError("");
      }
    }

    // Password validation
    if (password === "") {
      setPasswordError("Password is required");
      isFormValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm password validation
    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required");
      isFormValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isFormValid = false;
    } else {
      setConfirmPasswordError("");
    }

    // Street validation
    if (street === "") {
      setStreetError("Street is required");
      isFormValid = false;
    } else {
      setStreetError("");
    }

    // House no validation
    if (house === "") {
      setHouseNoError("House no is required");
      isFormValid = false;
    } else {
      let numericError: boolean = false;
      for (let i = 0; i < house.length; i++) {
        if (house[i] < "0" || house[i] > "9") {
          numericError = true;
          break;
        }
      }
      if (numericError) {
        setHouseNoError("Only digits are allowed!");
        isFormValid = false;
      } else {
        setHouseNoError("");
      }
    }

    // Postal validation
    if (postal === "") {
      setPostalError("Postal is required");
      isFormValid = false;
    } else {
      let numericError: boolean = false;
      for (let i = 0; i < postal.length; i++) {
        if (postal[i] < "0" || postal[i] > "9") {
          numericError = true;
          break;
        }
      }
      if (numericError) {
        setPostalError("Only digits!");
        isFormValid = false;
      } else {
        setPostalError("");
      }
    }

    // City validation
    if (city === "") {
      setCityError("City is required");
      isFormValid = false;
    } else {
      setCityError("");
    }

    // Country validation
    if (country === "") {
      setCountryError("Country is required");
      isFormValid = false;
    } else {
      setCountryError("");
    }
    return isFormValid;
  }

  const userRegistrationMutation = useUserRegistrationMutation({
    onSuccess: (res) => {
      console.log(res);
      navigate("/signupChoice");
    },
    onError: (error) => {
      console.log("ERROR: " + error);
    },
  });

  const submitForm = () => {
    if (validateData()) {
      userRegistrationMutation.mutate({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password_hash: sha256(password),
        street_name: street,
        house: house,
        postal_code: postal,
        city: city,
        country: country,
      });
    }
  };

  return (
    <div className="bg-blue flex flex-col min-h-screen">
      <p className="text-4xl text-white self-start font-quicksand font-semibold ml-12 mt-10">
        XOMO
      </p>
      <div className="bg-white flex flex-col mx-auto rounded-[64px] mt-8 mb-8">
        <p className="font-poppins font-semibold text-darkGreen text-center text-2xl mt-8">
          Create an account
        </p>
        <div className="flex flex-col px-12 md:px-16 lg:px-32">
          <div className="flex md:flex-row flex-col mt-8 justify-center">
            <div className="w-72">
              <Input
                inputSize="small"
                leftIcon={"user"}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && <p className="text-red">{firstNameError}</p>}
            </div>
            <div className="w-72 md:ml-9 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"user"}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <p className="text-red">{lastNameError}</p>}
            </div>
          </div>
          <div className="flex flex-row mt-4 justify-center md:flex-row flex-col">
            <div className="w-72">
              <Input
                inputSize="small"
                leftIcon={"email"}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red">{emailError}</p>}
            </div>
            <div className="w-72 md:ml-9 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"phone"}
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && <p className="text-red">{phoneError}</p>}
            </div>
          </div>
          <div className="flex flex-row mt-4 justify-center md:flex-row flex-col">
            <div className="w-72">
              <Input
                inputSize="small"
                leftIcon={"password"}
                rightIcon={isHidden ? "eyeOff" : "eye"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isHidden ? "password" : ""}
                onClickToIcon={() => setIsHidden(!isHidden)}
              />
              {passwordError && <p className="text-red">{passwordError}</p>}
            </div>
            <div className="w-72 md:ml-9 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"password"}
                rightIcon={isConfirmPasswordHidden ? "eyeOff" : "eye"}
                placeholder="Confirm Password"
                value={confirmPassword}
                type={isConfirmPasswordHidden ? "password" : ""}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onClickToIcon={() =>
                  setIsConfirmPasswordHidden(!isConfirmPasswordHidden)
                }
              />
              {confirmPasswordError && (
                <p className="text-red">{confirmPasswordError}</p>
              )}
            </div>
          </div>
          <p className="mt-8 text-darkGreen font-poppins font-regular justify-start">
            Address
          </p>
          <div className="outline outline-1 outline-darkGreen"></div>
          <div className="flex md:flex-row flex-col mt-8 justify-center">
            <div className="w-60">
              <Input
                inputSize="small"
                leftIcon={"map"}
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              {streetError && <p className="text-red">{streetError}</p>}
            </div>
            <div className="w-44 md:ml-4 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"house"}
                placeholder="House No"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
              {houseNoError && <p className="text-red">{houseNoError}</p>}
            </div>
            <div className="w-36 md:ml-4 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"email"}
                placeholder="Postal"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
              />
              {postalError && <p className="text-red">{postalError}</p>}
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:ml-9 mt-4 md:mt-5 justify-center">
            <div className="w-64">
              <Input
                inputSize="small"
                leftIcon={"city"}
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {cityError && <p className="text-red">{cityError}</p>}
            </div>
            <div className="w-64 md:ml-4 mt-4 md:mt-0">
              <Input
                inputSize="small"
                leftIcon={"flag"}
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              {countryError && <p className="text-red">{countryError}</p>}
            </div>
          </div>
          <div className="w-36 mx-auto mt-8">
            <Button
              buttonType="green"
              buttonSize="medium"
              isRounded
              onClick={submitForm}
            >
              Sign Up
            </Button>
          </div>
          <div className="bg-transparentBlue w-64 rounded-lg h-9 flex flex-row items-center justify-center mt-8 mx-auto">
            <div className="flex justify-center items-center">
              {getIconType("google")}
            </div>
            <p className="font-poppins font-semibold text-sm text-sharpBlue ml-4">
              Google
            </p>
          </div>
          <div className="bg-transparentBlue w-64 rounded-lg h-9 flex flex-row items-center justify-center mt-2 mx-auto mb-8">
            <div className="flex justify-center text-sharpBlue items-center">
              {getIconType("facebook")}
            </div>
            <p className="font-poppins font-semibold text-sm text-sharpBlue ml-4">
              Facebook
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
