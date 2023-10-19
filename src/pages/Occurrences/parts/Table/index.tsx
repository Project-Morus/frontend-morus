import { useState } from "react";
import { useTheme } from "styled-components";
import { Loader, NewTable, Icon, Modal } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { HEADER_TABLE_CELLS } from "../../mockData";
import { ContentLoaderSC } from "../../styles";
import Status from "../Status";
import { WrapperIcons } from "./styles";
import { useDeleteOcurrences, useGetOcurrences } from "../../controller";


function TableOcurrence() {
  const theme = useTheme()
  const { data, isError, isLoading, emptyData } = useGetOcurrences()
  const { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending } = useDeleteOcurrences();

  const [id, setId] = useState<number>(0)

  const initiateDeletionProcess = (idOccurence: number) => {
    setId(idOccurence)

    deleteOpened()
  }

  if (isLoading) return <ContentLoaderSC><Loader /></ContentLoaderSC>

  return (
    <>
      <NewTable.Container empty={isError || emptyData}>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>{header.colName}</NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        <NewTable.Body>
          {data?.map(item => {
            return (
              <NewTable.Row key={item.id}>
                <NewTable.Cell>{item.titulo}</NewTable.Cell>
                <NewTable.Cell>{item.descricao}</NewTable.Cell>
                <NewTable.Cell>{formatDate(item.dataCadastro)}</NewTable.Cell>
                <NewTable.Cell><Status resolved={item.resolvido} /></NewTable.Cell>
                <NewTable.Cell>
                  <WrapperIcons>
                    {/* <Icon name="ph-pencil-simple-line" /> */}
                    <Icon name="ph-trash" color={theme.colors.red[500]} onClick={() => initiateDeletionProcess(item.id)} />
                  </WrapperIcons>
                </NewTable.Cell>
              </NewTable.Row>
            )
          })}
        </NewTable.Body>
      </NewTable.Container>

      <Modal
        variant="warning"
        open={isShowingDelete}
        closeModal={deleteClosed}
        onConfirmModal={() => handleDelete(id)}
        isLoading={isPending}
      >
        Tem certeza que deseja excluir a ocorrência do condomínio Ilha de Capri? Esta ação não poderá ser desfeita.
      </Modal>
    </>
  );
}

export default TableOcurrence;