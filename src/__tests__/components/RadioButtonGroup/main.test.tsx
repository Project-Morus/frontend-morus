import { fireEvent, render, screen } from "@testing-library/react";
import RadioButtonGroup from "../../../components/RadioButtonGroup";
import { withTheme } from "../../../helpers/withTheme";
import { RADIO_BUTTON_GROUP_DATA } from "./mockData";

const RadioButtonGroupWithTheme = withTheme(RadioButtonGroup);

const mockOnChange = jest.fn()

const name = 'drink-types'

describe("RadioButtonGroup Component", () => {
  test("Verify if component is rendering", () => {
    render(<RadioButtonGroupWithTheme options={RADIO_BUTTON_GROUP_DATA} label="Name" onChange={mockOnChange} name={name} />);
    expect(screen.getByText(RADIO_BUTTON_GROUP_DATA[0].label)).toBeVisible()
  });

  test("Verify if label is rendering correctly", () => {
    render(<RadioButtonGroupWithTheme label="Name" options={RADIO_BUTTON_GROUP_DATA} onChange={mockOnChange} name={name} />);
    const labelElement = screen.getByText("Name");

    expect(labelElement).toBeVisible();
  });

  test('Correctly invokes onChange when selecting an option', () => {
    render(<RadioButtonGroupWithTheme label="Name" options={RADIO_BUTTON_GROUP_DATA} onChange={mockOnChange} name={name} />);

    fireEvent.click(screen.getByText(RADIO_BUTTON_GROUP_DATA[1].label));
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText(RADIO_BUTTON_GROUP_DATA[0].label));
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  test("Snapshot RadioButtonGroup", () => {
    const { asFragment } = render(<RadioButtonGroupWithTheme options={RADIO_BUTTON_GROUP_DATA} label="Name" onChange={mockOnChange} name={name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
