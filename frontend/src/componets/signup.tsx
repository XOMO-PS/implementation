import React from "react";
import { Input } from "../ui/Input";

function Signup() {
  return (
    <div className="min-h-screen bg-blue flex flex-col justify-start items-center p-8">
      <header className="text-3xl font-bold text-white mb-12 self-start">XOMO</header>
      <div className="bg-white rounded-lg p-8 w-196 text-center">
        <h2 className="font-poppins text-base text-darkGreen font-bold mb-8">Create an account</h2>
        <div className="flex flex-row justify-between mb-4">
            
                <div className="w-64">
                    <Input
                    inputSize="small"
                    placeholder="Enter Value"
                    leftIcon={"email"}
                    rightIcon={"eyeOff"}
                    />
                </div>
                <div className="w-64">
                    <Input
                    inputSize="small"
                    placeholder="Enter Value"
                    leftIcon={"email"}
                    rightIcon={"eyeOff"}
                    />
                </div>
           
        </div>
        
       
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
