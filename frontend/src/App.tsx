import React from "react";
import { Button } from "./ui/Button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="small">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="medium">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="large">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="xlarge">
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="small" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="medium" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="large" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="blue" buttonSize="xlarge" isRounded>
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="small">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="medium">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="large">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="xlarge">
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="small" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="medium" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="large" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="green" buttonSize="xlarge" isRounded>
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="small">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="medium">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="large">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="xlarge">
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="small" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="medium" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="large" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="lightGreen" buttonSize="xlarge" isRounded>
              Button
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="small">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="medium">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="large">
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="xlarge">
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="small" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="medium" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="large" isRounded>
              Button
            </Button>
          </div>
          <div className="w-48 mt-2">
            <Button buttonType="red" buttonSize="xlarge" isRounded>
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
