import { render, screen } from "@testing-library/react";
import Input from "../Input";
import "@testing-library/jest-dom";
import { defaultTheme } from "../../styles/themes/default";

// Teste de renderização básica
test("Renders Input component correctly", () => {
  render(<Input label="Name" />);
  const labelElement = screen.getByText("Name");
  const inputElement = screen.getByRole("textbox");

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test("Renders Input component with error correctly", () => {
  render(<Input hasError={true} helperText="Error Message" label="Name" />);
  const labelElement = screen.getByText("Name");
  const inputElement = screen.getByRole("textbox");
  const errorMessage = screen.getByText("Error Message");

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
  expect(inputElement).toHaveStyle(`
    color: ${defaultTheme.colors.red[500]},
    border-color: ${defaultTheme.colors.red[500]}
`);
});
