import { Link } from "react-router-dom";
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

export const LoginButtonSC = styled(Link)`
  text-decoration: none;
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

export const CommonAreaSectionSC = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  height: 80vh;
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 0 16px 16px 0;
`;

export const CommonAreaSVGContainer = styled.div`
  padding: 0 2rem;
`;

export const CommonAreaTitleSC = styled.h1`
  color: ${({ theme }) => theme.colors.white[100]};
  text-align: center;
  font-size: 3.5rem;
  padding-right: 2rem;
`;

export const MuralSectionSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;
`;

export const MuralImageContainerSC = styled.div`
  margin-top: 3rem;
  background-image: url("src/assets/png/InformationsMural.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 16px;
  height: 650px;
  width: 1150px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const CustomersSectionSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;
`;

export const CustomersRowSC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  gap: 3rem;
  margin: 3rem 0;
`;

export const CustomerCardContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CustomerNameSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 1.5rem;
`;

export const CustomerImageSC = styled.img`
  width: 250px;
`;

export const FooterSectionSC = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white[100]};
`;

export const FooterTextContainerSC = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftSideSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightSideSC = styled.div`
  text-align: right;
`;

export const CopyrightTextSC = styled.span`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.white[100]};
`;
