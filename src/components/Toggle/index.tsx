import { useState } from "react";
import { ToggleProps } from "./types";
import { Input, Span, ToggleWrapper } from "./styles";

export const Toggle = ({ toggled, onClick }: ToggleProps) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <ToggleWrapper>
      <Input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <Span />
    </ToggleWrapper>
  );
};

export default Toggle;
