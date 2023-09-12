import styled from "styled-components";

export const FieldsetSC = styled.fieldset`
  border: none;
`


export const WrapperSC = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`