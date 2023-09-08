import { DividerPrimarySC } from "../../styles";
import { IDividerProps } from "../../types";

const DividerPrimary = ({ maxWidth, marginTop, marginBottom, role }: Omit<IDividerProps, "variant">) => {
  return <DividerPrimarySC
    role={role}
    $maxWidth={maxWidth}
    $marginTop={marginTop}
    $marginBottom={marginBottom}
  />;
};

export default DividerPrimary;
