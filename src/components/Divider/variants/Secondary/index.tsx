import { DividerSecondarySC } from "../../styles";
import { IDividerProps } from "../../types";

const DividerSecondary = ({ maxWidth, marginTop, marginBottom }: Omit<IDividerProps, "variant">) => {
  return <DividerSecondarySC $maxWidth={maxWidth} $marginTop={marginTop} $marginBottom={marginBottom} />;
};

export default DividerSecondary;
