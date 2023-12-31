import { styled } from "styled-components";
import { BASE_STYLE } from "./stylesUtils";

export const DividerPrimarySC = styled(BASE_STYLE)`
  border-color: ${({ theme }) => theme.colors.primary[50]};
`;

export const DividerSecondarySC = styled(BASE_STYLE)`
  border-color: ${({ theme }) => theme.colors.grey[75]};
`;
