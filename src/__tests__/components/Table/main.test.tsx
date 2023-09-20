import { render, screen } from '@testing-library/react'
import { withTheme } from '../../../helpers/withTheme'
import Table from '../../../components/Table'
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from './mockData'

const TableWithTheme = withTheme(Table)

describe('Table component', () => {
  test('Verify if component is rendering', () => {
    render(<TableWithTheme headerCells={HEADER_TABLE_CELLS} rowCells={ROW_NAME_CELLS} />)

    expect(screen.getByRole('table'))
  })

  test('Verify if emptyMessage is rendering', () => {
    render(<TableWithTheme headerCells={HEADER_TABLE_CELLS} rowCells={[]} emptyMessage="Vazio!" />)

    expect(screen.findByText('Vazio!'))
  })


  test('Snapshot Table', () => {
    const { asFragment } = render(
      <TableWithTheme headerCells={HEADER_TABLE_CELLS} rowCells={ROW_NAME_CELLS} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
