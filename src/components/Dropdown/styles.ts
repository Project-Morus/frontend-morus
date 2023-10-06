import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white[50]};

  color: ${({ theme }) => theme.colors.primary[500]};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.border.radius.regular};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  top: 110%;
  left: 0;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    border-radius: ${({ theme }) => theme.border.radius.regular};
    background-color: #f1f1f1;
  }
`;
