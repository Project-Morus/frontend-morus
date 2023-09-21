import styled from "styled-components";

export const ModalSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[7]};
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  margin: auto;
`;

export const BackdropSC = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
