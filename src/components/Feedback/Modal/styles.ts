import styled from "styled-components";
import { BASE_STYLE, WIDTH_CONFIRMATION_MODAL } from "./stylesUtils";

export const ButtonsContainerSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  margin-top: auto;
`;

export const ChildrenContainerSC = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing[8]} 0;

  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium};
`;

export const TitleSC = styled.h2`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h2};
  color: ${({ theme }) => theme.colors.grey[400]};
`;

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
  text-align: center;
`;

export const FormModalSC = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[7]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.large};
  border-radius: ${({ theme }) => theme.border.radius.large};
  background-color: ${({ theme }) => theme.colors.white[100]};
  margin: auto;
`;
