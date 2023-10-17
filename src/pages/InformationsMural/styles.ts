import styled from "styled-components";
import { MAX_WIDTH_BUTTONS } from "./stylesUtils";

export const HeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[9]};
`;

export const InputAndButtonsContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: baseline;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const NotificationEmailSC = styled.div`
  text-align: end;
`;

export const ButtonContainerSC = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH_BUTTONS};

  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-self: last baseline;
`;
4;
