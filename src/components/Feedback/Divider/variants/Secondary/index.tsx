import { DividerSecondarySC } from "../../styles";
import { IDividerProps } from "../../types";

export const DividerSecondary = ({ maxWidth, marginTop, marginBottom, role }: Omit<IDividerProps, "variant">) => {
  return <DividerSecondarySC role={role} $maxWidth={maxWidth} $marginTop={marginTop} $marginBottom={marginBottom} />;
};
