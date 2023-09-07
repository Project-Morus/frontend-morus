import styled from "styled-components";

export const BASE_STYLE = styled.div<{
  $maxWidth?: number;
  $marginTop?: number;
  $marginBottom?: number;
}>`
  width: "100%";
  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth};
  margin-bottom: ${({ $marginBottom }) => $marginBottom && $marginBottom};
  margin-top: ${({ $marginTop }) => $marginTop && $marginTop};
`;
