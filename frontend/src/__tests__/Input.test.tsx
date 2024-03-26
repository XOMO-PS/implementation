import { render, screen } from "@testing-library/react";
import { Input } from "../ui/Input";
import user from "@testing-library/user-event";

describe("Regarding input field", () => {
  test("Is height of input field correct", () => {
    render(<Input inputSize="small" />);
    render(<Input inputSize="large" />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveClass("h-11");
    expect(inputs[1]).toHaveClass("h-12");
  });

  test("Is margin of input field correct", () => {
    render(<Input inputSize="small" />);
    render(<Input inputSize="small" leftIcon={"city"} />);
    render(<Input inputSize="small" rightIcon={"email"} />);
    render(<Input inputSize="small" leftIcon={"email"} rightIcon={"eye"} />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveClass("pl-4 pr-4");
    expect(inputs[1]).toHaveClass("pl-12 pr-4");
    expect(inputs[2]).toHaveClass("pl-4 pr-12");
    expect(inputs[3]).toHaveClass("pl-12 pr-12");
  });

  test("Is writing functionality works", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    user.type(input, "testing purposes");
    expect(input).toHaveValue("testing purposes");
  });
});

describe("Regarding icon in the input field", () => {
  test("Is icon rendering works correctly", () => {
    render(<Input inputSize="small" leftIcon={"eye"} />);
    const leftIcon = screen.getByTestId("leftIcon");
    expect(leftIcon).toBeInTheDocument();
    render(<Input inputSize="small" rightIcon={"google"} />);
    const rightIcon = screen.getByTestId("rightIcon");
    expect(rightIcon).toBeInTheDocument();
  });

  test("Is right icon click works correctly", async () => {
    let testVariable = false;
    render(
      <Input
        inputSize="small"
        rightIcon={"google"}
        onClickToIcon={() => (testVariable = true)}
      />
    );
    const rightIcon = screen.getByTestId("rightIcon");
    await user.click(rightIcon);
    expect(testVariable).toEqual(true);
  });
});
