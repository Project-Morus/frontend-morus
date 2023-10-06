import { render, screen } from "@testing-library/react";
import { Archive } from "../../../components";
import { withTheme } from "../../../helpers/withTheme";

const ArchiveWithTheme = withTheme(Archive);

const role = "archive";

describe("Archive Component", () => {
  test("Verify if component is rendering", () => {
    render(<ArchiveWithTheme role={role} />);

    expect(screen.getByRole(role)).toBeVisible();
  })

  test("Snapshot Archive with variant default", () => {
    const { asFragment } = render(<ArchiveWithTheme role={role} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Snapshot Archive with variant small", () => {
    const { asFragment } = render(<ArchiveWithTheme variant="small" role={role} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
