import styled from "styled-components";

export const ContainerSC = styled.div`
  display: flex;
`

export const WrapperSC = styled.main`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[14]};
`