import styled from "styled-components";
import { BASE_STYLE, BASE_STYLE_TITLE } from "../styles";

export const ContainerSC = styled.main`
  width: 600px;
  padding: ${({ theme }) => theme.spacing[10]};

  ${BASE_STYLE}
`

export const TitleSC = styled.h3`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
  
  ${BASE_STYLE_TITLE}
`




