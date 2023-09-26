import { DividerPrimarySC } from "../../styles";
import { IDividerProps } from "../../types";

export const DividerPrimary = ({ maxWidth, marginTop, marginBottom, role }: Omit<IDividerProps, "variant">) => {
  return <DividerPrimarySC
    role={role}
    $maxWidth={maxWidth}
    $marginTop={marginTop}
    $marginBottom={marginBottom}
  />;
};
