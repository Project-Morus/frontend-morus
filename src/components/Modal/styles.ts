import styled from "styled-components";
import { BASE_STYLE, WIDTH_CONFIRMATION_MODAL } from "./stylesUtils";

export const ButtonsContainerSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChildrenContainerSC = styled.div`
  margin: ${({ theme }) => theme.spacing[8]} 0;
  text-align: center;

  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium};
`;

export const TitleSC = styled.h2`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h2};
  color: ${({ theme }) => theme.colors.grey[400]};
`

export const HeaderSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const ConfirmationModalSC = styled(BASE_STYLE)`
  background-color: white;
  width: 100%;
  max-width: ${WIDTH_CONFIRMATION_MODAL};
  overflow: auto;
`;

export const FormModalSC = styled(BASE_STYLE)`
  background-color: white;
  max-width: ${WIDTH_CONFIRMATION_MODAL};
`;
