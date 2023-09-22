import { Link } from "react-router-dom";
import styled from "styled-components";
import { MAX_WIDTH_MENU } from "./stylesUtils";

export const ContainerSC = styled.aside`
  position: fixed;

  width: 100%;
  max-width: ${MAX_WIDTH_MENU};
  height: 100%;
  
  padding: ${({ theme }) => theme.spacing[9]};
  background: ${({ theme }) => theme.colors.white[50]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LiSC = styled.li`
  list-style: none;
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
  
`

export const MenuSC = styled.div`
`

export const LinkSC = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  text-decoration: none;
`

export const WrapperMenuSC = styled.menu`
 margin-top: ${({ theme }) => theme.spacing[12]};
`


export const FooterSC = styled.footer`
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};
  color: ${({ theme }) => theme.colors.grey[300]};
  text-align: center;
`
