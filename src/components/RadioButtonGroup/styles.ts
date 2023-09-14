import styled from "styled-components";

export const FieldsetSC = styled.fieldset`
  border: none;
  width: 100%;
`;

export const WrapperSC = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[10]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;
