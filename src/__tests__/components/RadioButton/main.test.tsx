import { render, screen } from "@testing-library/react";
import { RadioButton } from "../../../components";
import { withTheme } from "../../../helpers/withTheme";

const RadioButtonWithTheme = withTheme(RadioButton);

const idName = "idname";
const role = "radiogroup";

describe("RadioButton Component", () => {
  test("Verify if component is rendering", () => {
    render(<RadioButtonWithTheme label="Name" id={idName} role={role} />);


    expect(screen.getByRole(role)).toBeVisible();
  });

  test("Verify if label is rendering correctly", () => {
    render(<RadioButtonWithTheme id={idName} label="Name" role={role} />);
    const labelElement = screen.getByText("Name");

    expect(labelElement).toBeVisible();
  });
  test("Verify if RadioButton disabled is rendering correctly", () => {
    render(<RadioButtonWithTheme id={idName} disabled label="Name" role={role} />);
    const radioButtonElement = screen.getByRole("radiogroup");
    expect(radioButtonElement).toBeDisabled();
  });

  test("Snapshot RadioButton", () => {
    const { asFragment } = render(<RadioButtonWithTheme id={idName} label="Name" role={role} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
