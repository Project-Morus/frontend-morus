import { styled } from "styled-components";
import { WIDTH_IMAGE, HEIGHT_IMAGE } from "./stylesUtils";

export const BlueTitleSC = styled.h1`
  color: ${({ theme }) => theme.colors.primary[400]};
  font-size: 3rem;
`;

export const MuralSectionSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  margin: ${({ theme }) => theme.spacing[17]} 0;
`;

export const MuralImageSC = styled.img`
  width: ${WIDTH_IMAGE};
  height: ${HEIGHT_IMAGE};

  margin-top: ${({ theme }) => theme.spacing[13]};
  border-radius: 16px;

  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);
`;
