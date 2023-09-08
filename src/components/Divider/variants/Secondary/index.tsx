import { DividerSecondarySC } from "../../styles";
import { IDividerProps } from "../../types";

const DividerSecondary = ({ maxWidth, marginTop, marginBottom, role }: Omit<IDividerProps, "variant">) => {
  return <DividerSecondarySC role={role} $maxWidth={maxWidth} $marginTop={marginTop} $marginBottom={marginBottom} />;
};

export default DividerSecondary;
