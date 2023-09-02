import { render, screen } from "@testing-library/react";
import Input from "../../../components/Input";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { withTheme } from "../../../helpers/withTheme";

const InputWithTheme = withTheme(Input);

const idName = "idname";

describe("Input Component", () => {
  test("Verify if component is rendering", () => {
    render(<InputWithTheme label="Name" id={idName} />);

    const role = "textbox";

    expect(screen.getByRole(role)).toBeInTheDocument();
  });

  test("Verify if label is rendering correctly", () => {
    render(<InputWithTheme id={idName} label="Name" />);
    const labelElement = screen.getByText("Name");

    expect(labelElement).toBeInTheDocument();
  });

  test("Verify if error message is rendering correctly", () => {
    render(<InputWithTheme id={idName} hasError errorText="Error Message" label="Name" />);
    const errorMessage = screen.getByText("Error Message");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Verify if input disabled is rendering correctly", () => {
    render(<InputWithTheme id={idName} disabled label="Name" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("Snapshot Input", () => {
    const { asFragment } = render(<InputWithTheme id={idName} label="Name" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
