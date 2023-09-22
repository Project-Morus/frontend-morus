import styled from "styled-components";

export const TableSC = styled.table`
  width: 100%;

  border-spacing: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.border.radius.regular};

  background-color: ${({ theme }) => theme.colors.white[100]};
  
  padding: ${({ theme }) => theme.spacing[4]};

  thead {
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[200]};

    th {
      padding-left: ${({ theme }) => theme.spacing[4]};
    }
  }
`

export const TdSC = styled.td`
padding: ${({ theme }) => theme.spacing[5]};

font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium};
font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

color: ${({ theme }) => theme.colors.grey[400]};

`

export const TBodySC = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white[50]};
`

export const TrSC = styled.tr`
  box-shadow: 0px 4px 4px 0px rgba(0, 74, 173, 0.15);
  border-radius: ${({ theme }) => theme.border.radius.regular};
`

export const WrapperMessageSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.colors.primary[500]};

  background-color: ${({ theme }) => theme.colors.white[100]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
`