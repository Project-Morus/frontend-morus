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

export const ModalButtonContainerSC = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const CardsContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 1rem;
`;
