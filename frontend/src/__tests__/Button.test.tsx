import { render, screen } from "@testing-library/react";
import { Button } from "../ui/Button";

describe("Button Related", () => {
  test("Is button rendering correctly", () => {
    const buttonContent = "Button";
    render(
      <Button buttonSize="small" buttonType="blue">
        {buttonContent}
      </Button>
    );
    const button = screen.getByRole("button");
    const buttonText = screen.getByText(buttonContent);
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  test("Is button color correct", () => {
    render(
      <Button buttonSize="small" buttonType="blue">
        BlueButton
      </Button>
    );
    const blueButton = screen.getByRole("button", { name: "BlueButton" });
    expect(blueButton).toHaveClass(`bg-blue`);

    render(
      <Button buttonSize="small" buttonType="green">
        GreenButton
      </Button>
    );
    const greenButton = screen.getByRole("button", { name: "GreenButton" });
    expect(greenButton).toHaveClass("bg-green");

    render(
      <Button buttonSize="small" buttonType="red">
        RedButton
      </Button>
    );
    const redButton = screen.getByRole("button", { name: "RedButton" });
    expect(redButton).toHaveClass("bg-red");

    render(
      <Button buttonSize="small" buttonType="lightGreen">
        LightGreenButton
      </Button>
    );
    const lightGreenButton = screen.getByRole("button", {
      name: "LightGreenButton",
    });
    expect(lightGreenButton).toHaveClass("bg-lightGreen");
  });

  test("Is button height correct", () => {
    render(
      <Button buttonSize="small" buttonType="red">
        SmallButton
      </Button>
    );
    render(
      <Button buttonSize="medium" buttonType="red">
        MediumButton
      </Button>
    );
    render(
      <Button buttonSize="large" buttonType="red">
        LargeButton
      </Button>
    );
    render(
      <Button buttonSize="xlarge" buttonType="red">
        XlargeButton
      </Button>
    );
    const smallButton = screen.getByRole("button", { name: "SmallButton" });
    const mediumButton = screen.getByRole("button", { name: "MediumButton" });
    const largeButton = screen.getByRole("button", { name: "LargeButton" });
    const xLargeButton = screen.getByRole("button", { name: "XlargeButton" });

    expect(smallButton).toHaveClass("h-9");
    expect(mediumButton).toHaveClass("h-10");
    expect(largeButton).toHaveClass("h-11");
    expect(xLargeButton).toHaveClass("h-12");
  });

  test("Is button roundness correct", () => {
    render(
      <Button buttonSize="small" buttonType="blue" isRounded={false}>
        SmallNotRounded
      </Button>
    );
    render(
      <Button buttonSize="small" buttonType="blue" isRounded={true}>
        SmallRounded
      </Button>
    );
    render(
      <Button buttonSize="xlarge" buttonType="blue" isRounded={false}>
        xLargeNotRounded
      </Button>
    );
    render(
      <Button buttonSize="xlarge" buttonType="blue" isRounded={true}>
        xLargeRounded
      </Button>
    );

    const smallNotRoundedButton = screen.getByRole("button", {
      name: "SmallNotRounded",
    });
    const smallRoundedButton = screen.getByRole("button", {
      name: "SmallRounded",
    });
    const xlargeNotRoundedButton = screen.getByRole("button", {
      name: "xLargeNotRounded",
    });
    const xlargeRoundedButton = screen.getByRole("button", {
      name: "xLargeRounded",
    });

    expect(smallNotRoundedButton).toHaveClass("rounded-lg");
    expect(smallRoundedButton).toHaveClass("rounded-[20px]");
    expect(xlargeNotRoundedButton).toHaveClass("rounded-xl");
    expect(xlargeRoundedButton).toHaveClass("rounded-[28px]");
  });
});

describe("Button Text Related", () => {
  test("Is button text's shape correct", () => {
    render(
      <Button buttonSize="small" buttonType="green">
        SmallButton
      </Button>
    );
    render(
      <Button buttonSize="large" buttonType="green">
        LargeButton
      </Button>
    );

    const smallButtonText = screen.getByText("SmallButton");
    const largeButtonText = screen.getByText("LargeButton");

    expect(smallButtonText).toHaveClass("font-poppins text-base font-regular");
    expect(largeButtonText).toHaveClass("font-poppins text-xl font-regular");
  });

  test("Is button text's color correct", () => {
    render(
      <Button buttonSize="small" buttonType="red">
        ButtonWithWhiteText
      </Button>
    );
    render(
      <Button buttonSize="large" buttonType="lightGreen">
        ButtonWithDarkText
      </Button>
    );
    const buttonWithWhiteText = screen.getByText("ButtonWithWhiteText");
    const buttonWithDarkText = screen.getByText("ButtonWithDarkText");
    expect(buttonWithWhiteText).toHaveClass("text-white");
    expect(buttonWithDarkText).toHaveClass("text-darkGreen");
  });
});
