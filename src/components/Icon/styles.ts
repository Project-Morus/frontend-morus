import styled from "styled-components";

export const IconSC = styled.div<{ $iconColor?: string }>`
  color: ${({ $iconColor, theme }) => {
    return $iconColor || theme.colors.primary[500]
  }};
`

export const PureIconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;

  width: fit-content;
  width:-moz-fit-content;

  height: fit-content;
  height:-moz-fit-content;
`