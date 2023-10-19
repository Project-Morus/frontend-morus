import { SpinnerProps } from "./interface";
import { LoaderSC } from "./styles";

const Spinner = ({ color = 'primary' }: SpinnerProps) => {
  return <LoaderSC $color={color} />;
};

export default Spinner;