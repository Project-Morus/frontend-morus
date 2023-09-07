import { DividerPrimarySC } from "../../styles";
import { IDividerProps } from "../../types";

const DividerPrimary = ({ maxWidth, marginTop, marginBottom }: Omit<IDividerProps, "variant">) => {
  console.log("teste", maxWidth, marginTop, marginBottom);
  return <DividerPrimarySC $maxWidth={maxWidth} $marginTop={marginTop} $marginBottom={marginBottom} />;
};

export default DividerPrimary;
