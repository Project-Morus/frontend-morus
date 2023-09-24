import styled from "styled-components";
import { BASE_STYLE } from "./stylesUtils";

export const ButtonsConainterSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChildrenContainerSC = styled.div`
  margin: ${({ theme }) => theme.spacing[8]} 0;
  text-align: center;
`;

export const HeaderSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const ConfirmationModalSC = styled(BASE_STYLE)`
  background-color: white;
  width: 620px;
  overflow: auto;
`;

export const FormModalSC = styled(BASE_STYLE)`
  background-color: white;
  width: 700px;
`;
