import styled from "styled-components";
import { MAX_MARGIN_LEFT } from "./stylesUtils";

export const ContainerSC = styled.div`
  display: flex;  
  overflow-y: auto;
`;

export const WrapperSC = styled.main`
  width: 100%;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[14]};
  margin-left: ${MAX_MARGIN_LEFT};
`;

export const InternalWrapperSC = styled.div`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[7]};
  background-color: ${({ theme }) => theme.colors.white[50]};
  border-radius: ${({ theme }) => theme.border.radius.large};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  overflow-x: auto;
`;
