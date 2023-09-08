import styled from "styled-components";

export const BASE_STYLE = styled.div<{
  $maxWidth?: number;
  $marginTop?: string;
  $marginBottom?: string;
}>`
  width: 100%;

  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth}px;

  margin-bottom: ${({ $marginBottom }) => $marginBottom && $marginBottom};
  margin-top: ${({ $marginTop }) => $marginTop && $marginTop};

  border-width: ${({ theme }) => theme.border.width.regular};
  border-style: solid;
`;
