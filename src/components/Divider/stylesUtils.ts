import styled from "styled-components";

export const BASE_STYLE = styled.div<{
  $maxWidth?: number;
  $marginTop?: number;
  $marginBottom?: number;
}>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom && $marginBottom}px;
  margin-top: ${({ $marginTop }) => $marginTop && $marginTop}px;
`;
