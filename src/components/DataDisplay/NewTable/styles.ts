import styled from 'styled-components';


export const CustomTable = styled.table`
  width: 100%;

  border-spacing: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.border.radius.regular};

  background-color: ${({ theme }) => theme.colors.white[100]};


  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  padding: ${({ theme }) => theme.spacing[4]};

  overflow-x: auto;
`

export const CustomTableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white[50]};

  tr {
    box-shadow: 0px 4px 4px 0px rgba(0, 74, 173, 0.15);
    border-radius: ${({ theme }) => theme.border.radius.regular}
  }
`
export const CustomTableHeader = styled.thead`
  text-align: left;
  color: ${({ theme }) => theme.colors.grey[200]};
`

export const CustomTableRow = styled.tr``

export const CustomTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
`

export const CustomTableCellHeader = styled.th`
  padding-left: ${({ theme }) => theme.spacing[4]};
`