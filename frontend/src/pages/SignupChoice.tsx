import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SignupChoose() {
  const navigate = useNavigate();

  const location = useLocation();
  const formData = location.state ? location.state.formData : {};

  const handleProviderSignup = () => {
    navigate("/providerSignup", { state: { formData } });
  };
  return (
    <div className="min-h-screen bg-bgBlue justify-start items-center p-8">
      <p className="text-4xl text-white mb-8 self-start font-quicksand font-semibold">
        XOMO
      </p>

      <div className="flex w-full justify-center md:flex-row flex-col items-center md:mt-48 mt-16">
        <div
          onClick={handleProviderSignup}
          className="bg-white rounded-3xl p-8 w-80 flex items-center flex-col"
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M117.801 141.6C115.401 141.6 113.401 139.6 113.401 137.2C113.401 134.8 115.401 132.8 117.801 132.8H138.201C140.601 132.8 142.601 134.8 142.601 137.2C142.601 139.6 140.601 141.6 138.201 141.6H117.801ZM46.6008 90.4C43.0008 90.4 39.8008 87.2 39.8008 83.6C39.8008 80 43.0008 76.8 46.6008 76.8H52.8008C55.0008 76.8 56.8008 75.2 56.8008 73C58.6008 48.2 73.6008 25.6 96.0008 14.4C97.0008 13.8 98.2008 13.6 99.0008 13.6C102.601 13.6 105.801 16.8 105.801 20.4V34.4C105.801 36.6 107.601 38.4 109.801 38.4C112.001 38.4 113.801 36.6 113.801 34.4V13.8C113.801 10.4 116.401 7.39998 119.601 6.99998C122.201 6.59998 125.001 6.59998 127.601 6.59998C130.601 6.59998 133.801 6.79998 136.401 6.99998C139.801 7.39998 142.201 10.2 142.201 13.8V34.2C142.201 36.4 144.001 38.2 146.201 38.2C148.401 38.2 150.201 36.4 150.201 34.2V20.4C150.201 16.8 153.401 13.6 157.001 13.6C157.801 13.6 159.001 13.8 160.201 14.4C183.001 26.2 197.601 48 199.401 73C199.601 75.2 201.201 76.8 203.401 76.8H209.601C213.201 76.8 216.401 80 216.401 83.6C216.401 87.2 213.201 90.4 209.601 90.4H46.6008ZM188.401 78.4C187.801 76.8 187.601 75.4 187.401 73.8C186.201 56.4 177.001 40.2 162.801 29.8V34.2C162.801 43 155.601 50.2 146.801 50.2C138.001 50.2 130.801 43 130.801 34.2V18.6H126.001V34C126.001 42.8 118.801 50 110.001 50C101.201 50 94.0008 42.8 94.0008 34V29.4C79.2008 39.8 70.0008 56.2 68.6008 73.8C68.4008 75.4 68.2008 76.8 67.6008 78.4H188.401Z"
              fill="#FF6060"
            />
            <path
              d="M20.8002 255.6C15.6003 255.6 10.8003 253.4 7.60025 249.6C4.80025 246.2 3.60026 241.8 4.60025 237.6C12.6003 196.6 50.0002 163 98.6002 153.4C80.0002 141.4 68.6002 119.4 68.6002 94.8001V93.4001H187.8V94.8001C187.8 119.2 176.4 141.4 157.6 153.4C206.2 163.2 243.6 196.8 251.6 237.6C252.4 241.8 251.4 246.2 248.6 249.6C245.4 253.4 240.6 255.6 235.4 255.6H20.8002ZM128 162.4C100.6 162.4 74.2002 170.4 53.6002 185.2C33.8002 199.4 20.6002 218.8 16.4003 239.8C16.2003 240.8 16.6003 241.6 17.0002 241.8C18.0002 243 19.2002 243.6 20.8002 243.6H235.6C237.2 243.6 238.6 243 239.4 242C239.6 241.8 240.2 241 239.8 240C235.8 218.8 222.6 199.4 202.6 185.2C181.8 170.4 155.4 162.4 128 162.4ZM81.2002 105.4C85.6002 131.4 105 150.2 127.8 150.2C150.6 150.2 170 131.4 174.4 105.4H81.2002Z"
              fill="#FF6060"
            />
          </svg>
          <h1 className="font-poppins text-base text-red font-bold mt-4">
            Are you a provider?
          </h1>
        </div>
        <Link
          to="/userSignup"
          className="w-80 flex flex-col text-decoration-none md:ml-32 md:mt-0 mt-12"
        >
          <div className="bg-white rounded-3xl p-8 flex w-full flex-col items-center mt-0 md:mt-0">
            <svg
              width="128"
              height="128"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128.001 106.667C151.565 106.667 170.667 87.5641 170.667 64C170.667 40.4358 151.565 21.3333 128.001 21.3333C104.437 21.3333 85.334 40.4358 85.334 64C85.334 87.5641 104.437 106.667 128.001 106.667Z"
                stroke="#00C3C9"
                strokeWidth="13"
              />
              <path
                d="M213.306 192C213.333 190.249 213.333 188.469 213.333 186.667C213.333 160.157 175.128 138.667 127.999 138.667C80.871 138.667 42.666 160.157 42.666 186.667C42.666 213.177 42.666 234.667 127.999 234.667C151.797 234.667 168.957 232.995 181.333 230.01"
                stroke="#00C3C9"
                strokeWidth="13"
                strokeLinecap="round"
              />
            </svg>

            <h1 className="font-poppins text-base text-darkGreen font-bold mt-4 text-green">
              Are you a customer?
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
