import { Icon } from "../../../components"
import { ITableHeaderProps } from "../../../components/DataDisplay/Table/types"

const IconsSC = () => {
  return (
    <div style={{ display: 'flex', gap: '0.8rem' }}>
      <Icon name="ph-pencil-simple-line" size="20" />
      <Icon name="ph-trash" color="#CE323B" size="20" />
    </div>
  )
}

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: 'Id' },
  { colName: 'Nome' },
  { colName: 'Data' },
  { colName: 'Status' },
  { colName: 'Ações' },
]

export const ROW_NAME_CELLS = [
  { id: '1', name: 'Eduardo Simon', date: '20/12/2023', status: 'Em progresso', actions: <IconsSC /> },
  { id: '2', name: 'Eduardo Simon', date: '20/12/2023', status: 'Em progresso', actions: <IconsSC /> },
  { id: '3', name: 'Eduardo Simon', date: '20/12/2023', status: 'Em progresso', actions: <IconsSC /> },
  { id: '4', name: 'Eduardo Simon', date: '20/12/2023', status: 'Em progresso', actions: <IconsSC /> },
  { id: '5', name: 'Eduardo Simon', date: '20/12/2023', status: 'Em progresso', actions: <IconsSC /> }
]