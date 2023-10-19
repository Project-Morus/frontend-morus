import { styled } from "styled-components";

export const BlueTitleSC = styled.h1`
  color: ${({ theme }) => theme.colors.primary[400]};
  font-size: 3rem;
`;



export const MuralSectionSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;
`;

export const MuralImageSC = styled.img`
  margin-top: 3rem;
  border-radius: 16px;
  height: 650px;
  width: 1150px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);
`;
