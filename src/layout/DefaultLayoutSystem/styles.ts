import styled from "styled-components";

export const ContainerSC = styled.div`
  display: flex;
`;

export const WrapperSC = styled.main`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[14]};
  background-color: ${({ theme }) => theme.colors.grey[50]};
`;

export const InternalWrapperSC = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[7]};
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-radius: 14px;
`;
