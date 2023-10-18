import { styled } from "styled-components";

export const HeroSectionSC = styled.section`
  background-image: url("src/assets/png/heroSectionBackground.png");
  background-position: center;
  height: 100vh;
`;

export const NavigationHeaderSC = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

export const NavButtonContainerSC = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: large;
`;

export const NavButtonSC = styled.a`
  color: ${({ theme }) => theme.colors.white[100]};
  text-decoration: none;

  transition: 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const LoginButtonSC = styled.button`
  padding: 0.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 1.2rem;
  border-radius: 6px;
  border: none;

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
  font-size: 4rem;
  width: 450px;
  color: ${({ theme }) => theme.colors.white[100]};
  font-family: ${({ theme }) => theme.typography.FONT_FAMILIES.openSans};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;

export const StartNowButtonSC = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  border-radius: 6px;
  border: none;
  width: 300px;

  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const InformationSectionSC = styled.section`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[15]};
`;

export const CardsRowSC = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[15]};
`;

export const BlueTitleSC = styled.h1`
  color: ${({ theme }) => theme.colors.primary[400]};
  font-size: 3rem;
`;
