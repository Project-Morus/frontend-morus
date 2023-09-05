import { render, screen } from "@testing-library/react";
import Aside from "../../../components/Aside";
import { withTheme } from "../../../helpers/withTheme";

const AsideWithTheme = withTheme(Aside);

const role = "asideWithLogo";

describe("Aside Component", () => {
  test("Verify if component is rendering", () => {
    render(<AsideWithTheme role={role}>Aside</AsideWithTheme>);

    expect(screen.getByRole(role)).toBeVisible();
  })

  test("Verify if children in Aside is rendering", () => {
    render(<AsideWithTheme role={role}>Aside</AsideWithTheme>);

    expect(screen.getByText('Aside')).toBeVisible();
  })

  test("Verify if component SVG in Aside is rendering", () => {
    render(<AsideWithTheme role={role}>Aside</AsideWithTheme>);

    expect(screen.getByRole('logoMorusWhite')).toBeVisible();
  })

  test("Snapshot Aside with position right (default)", () => {
    const { asFragment } = render(<AsideWithTheme role={role}>Aside</AsideWithTheme>);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Snapshot Aside with position left", () => {
    const { asFragment } = render(<AsideWithTheme role={role} position="left">Aside</AsideWithTheme>);
    expect(asFragment()).toMatchSnapshot();
  });
});
