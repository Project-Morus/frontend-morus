import styled from "styled-components";

export const CentralizerSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

export const WrapperSC = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 ${({ theme }) => theme.spacing[3]};
`;
