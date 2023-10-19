import { Link } from "react-router-dom";
import styled from "styled-components";
import { BUTTON_WIDTH, TITLE_WIDTH } from "./stylesUtils";

export const ContainerSC = styled.section`
  background-image: url("src/assets/png/heroSectionBackground.png");
  background-position: center;
  height: 100vh;
`;

export const NavigationHeaderSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 ${({ theme }) => theme.spacing[9]};

`;

export const NavButtonContainerSC = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.large};
`;

export const NavButtonSC = styled.a`
  color: ${({ theme }) => theme.colors.white[100]};
  text-decoration: none;

  cursor: pointer;

  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const LoginButtonSC = styled(Link)`
  background-color: ${({ theme }) => theme.colors.white[100]};
  color: ${({ theme }) => theme.colors.primary[500]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  border: none;

  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.large};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  text-decoration: none;

  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[13]};

  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const HeroSectionTitleContainerSC = styled.div`
  margin-left: ${({ theme }) => theme.spacing[26]};
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeroSectionTitleSC = styled.h1`
  width: ${TITLE_WIDTH};

  font-size: 4rem;
  font-family: ${({ theme }) => theme.typography.FONT_FAMILIES.openSans};

  color: ${({ theme }) => theme.colors.white[100]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};

`;

export const StartNowButtonSC = styled.button`
  width: ${BUTTON_WIDTH};

  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[9]};

  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  background-color: ${({ theme }) => theme.colors.white[100]};
  color: ${({ theme }) => theme.colors.primary[500]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  border: none;

  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;