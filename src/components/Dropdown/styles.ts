import styled, { css } from "styled-components";

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
  color: ${({ theme }) => theme.colors.primary[500]};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.colors.primary[500]};
  border-radius: 8px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
