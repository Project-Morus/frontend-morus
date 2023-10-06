import { useState } from "react";
import { DropdownContainer, DropdownButton, DropdownMenu, DropdownItem, LabelContainer } from "./styles";
import { DropdownProps } from "./types";
import Icon from "../DataDisplay/Icon";
import { useTheme } from "styled-components";

function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <LabelContainer>
          {label}
          {isOpen ? (
            <Icon name="ph-caret-up" size="16px" stroke="bold" color={theme.colors.primary[500]} />
          ) : (
            <Icon name="ph-caret-down" size="16px" color={theme.colors.primary[500]} />
          )}
        </LabelContainer>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((item: string, index: number) => (
            <DropdownItem onClick={toggleDropdown} key={index}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
