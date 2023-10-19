import styled from "styled-components";

export const CommonAreaSectionSC = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  height: 80vh;
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 0 16px 16px 0;
`;

export const CommonAreaSVGContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[9]};
`;

export const CommonAreaTitleSC = styled.h1`
  color: ${({ theme }) => theme.colors.white[100]};
  text-align: center;
  font-size: 3.5rem;
  padding-right: ${({ theme }) => theme.spacing[9]};
`;