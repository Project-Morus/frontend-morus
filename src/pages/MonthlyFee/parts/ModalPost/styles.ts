import styled from "styled-components";
import { DIAMENTER_DIMENSIONS } from "./stylesUtils";


export const Label = styled.label`
color: ${({ theme }) => theme.colors.grey[400]};

`

export const Checkbox = styled.input`
  width: ${DIAMENTER_DIMENSIONS};
  height: ${DIAMENTER_DIMENSIONS};

  cursor: pointer;
`