import { useState } from "react";
import { useTheme } from "styled-components";
import { Loader, NewTable, Icon, Modal } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { useGetOcurrences } from "../../controller/useGetOccurences";
import { HEADER_TABLE_CELLS } from "../../mockData";
import { ContentLoaderSC } from "../../styles";
import Status from "../Status";
import { WrapperIcons } from "./styles";
import { useModal } from "../../../../hooks";
import { useDeleteOcurrences } from "../../controller/useDeleteOccurences";


function TableOcurrence() {
  const { data, isError, isLoading, emptyData } = useGetOcurrences()
  const { handleDelete } = useDeleteOcurrences();

  const [idOccurence, setIdOcurrence] = useState(null);

  console.log(idOccurence)

  const {
    isShowing: isShowingDelete,
    handleModalOpened: deleteOpened,
    handleModalClose: deleteClosed } = useModal()

  const theme = useTheme()

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
            setIdOcurrence(item.id)

            return (
              <NewTable.Row key={item.id}>
                <NewTable.Cell>{item.titulo}</NewTable.Cell>
                <NewTable.Cell>{item.descricao}</NewTable.Cell>
                <NewTable.Cell>{formatDate(item.dataCadastro)}</NewTable.Cell>
                <NewTable.Cell><Status resolved={item.resolvido} /></NewTable.Cell>
                <NewTable.Cell>
                  <WrapperIcons>
                    <Icon name="ph-pencil-simple-line" />
                    <Icon name="ph-trash" color={theme.colors.red[500]} onClick={deleteOpened} />
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
        onConfirmModal={() => console.log('Delete')}
      >
        Tem certeza que deseja excluir a ocorrência Carro bateu na pilastra da garagem da lista de ocorrências do condomínio Ilha de Capri? Esta ação não poderá ser desfeita.
      </Modal>
    </>
  );
}

export default TableOcurrence;