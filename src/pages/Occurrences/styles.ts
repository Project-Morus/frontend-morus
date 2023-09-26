import styled from "styled-components";

export const HeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[9]};
`;

export const InputAndButtonsContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: baseline;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const ButtonContainerSC = styled.div`
  width: 200px;
  height: 50px;
  align-self: last baseline;
`;