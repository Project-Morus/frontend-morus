import { ToggleWrapper } from "./styles";
import { ToggleProps } from "./types";

const Toggle = ({ onClick, isChecked }: ToggleProps) => {
  return (
    <ToggleWrapper>
      <input type="checkbox" defaultChecked={isChecked} onClick={onClick} />
      <span />
    </ToggleWrapper>
  );
};

export default Toggle;
