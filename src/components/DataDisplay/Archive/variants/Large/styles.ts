import styled from "styled-components";
import { BASE_STYLE, BASE_STYLE_TITLE } from "../styles";

export const ContainerSC = styled.main`
  width: 800px;
  padding: ${({ theme }) => theme.spacing[15]};

  ${BASE_STYLE}
`
export const TitleSC = styled.h1`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h2};
  ${BASE_STYLE_TITLE}
`


