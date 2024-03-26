import { render, screen } from "@testing-library/react";
import { CheckBox } from "../ui/Checkbox";
import user from "@testing-library/user-event";

test("Is checked checkbox rendering correctly", () => {
  render(<CheckBox isChecked={true} onChange={() => {}} />);

  const allDivsInCheckbox = screen.getAllByRole("generic");
  expect(allDivsInCheckbox).toHaveLength(4);
});

test("Is unchecked checkbox rendering correctly", () => {
  render(<CheckBox isChecked={false} onChange={() => {}} />);

  const allDivsInCheckbox = screen.getAllByRole("generic");
  expect(allDivsInCheckbox).toHaveLength(2);
});

test("Is background color correct", () => {
  render(
    <CheckBox
      isChecked={false}
      onChange={() => {}}
      testId="uncheckedCheckbox"
    />
  );
  render(
    <CheckBox isChecked={true} onChange={() => {}} testId="checkedCheckbox" />
  );
  const checkedCheckbox = screen.getByTestId("checkedCheckbox");
  const uncheckedCheckbox = screen.getByTestId("uncheckedCheckbox");
  expect(checkedCheckbox).toHaveClass("bg-darkGreen");
  expect(uncheckedCheckbox).toHaveClass("bg-gray");
});

test("Is clicking to checkbox works", async () => {
  let isCheckedProp = false;
  render(
    <CheckBox
      isChecked={isCheckedProp}
      onChange={() => {
        isCheckedProp = !isCheckedProp;
      }}
    />
  );
  const findDivsInCheckbox = screen.getAllByRole("generic");
  await user.click(findDivsInCheckbox[1]);
  expect(isCheckedProp).toEqual(true);
  await user.click(findDivsInCheckbox[1]);
  expect(isCheckedProp).toEqual(false);
});
