import styled from "styled-components";

export const FooterSectionSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white[100]};

  padding: ${({ theme }) => theme.spacing[9]};
`;

export const FooterTextContainerSC = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftSideSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const RightSideSC = styled.div`
  text-align: right;
`;

export const CopyrightTextSC = styled.span`
  margin-top: ${({ theme }) => theme.spacing[9]};
  color: ${({ theme }) => theme.colors.white[100]};
`;