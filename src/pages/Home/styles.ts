import styled from "styled-components";

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const GraphContainerSC = styled.div`
  margin-top: ${({ theme }) => theme.spacing[10]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
