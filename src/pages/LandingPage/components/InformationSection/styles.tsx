import styled from "styled-components";

export const InformationSectionSC = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[15]};

  margin: ${({ theme }) => theme.spacing[21]} 0;
`;

export const CardsRowSC = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[15]};
`;