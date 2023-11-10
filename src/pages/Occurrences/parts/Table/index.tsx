import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Loader, NewTable, Icon, Modal, Input } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { HEADER_TABLE_CELLS } from "../../mockData";
import Status from "../Status";
import { WrapperIcons } from "./styles";
import {
  useDeleteOcurrences,
  useGetOcurrences,
  usePutOcurrences,
} from "../../controller";
import { Checkbox, Label } from "../Form/styles";
import { PutParams } from "../../../../services/ocurrenceService/put";
import { ContentLoaderSC } from "../../../styles";

function TableOcurrence() {
  const theme = useTheme();
  const { data, isError, isLoading, emptyData } = useGetOcurrences();
  const {
    handleDelete,
    isShowingDelete,
    deleteOpened,
    deleteClosed,
    isPending,
  } = useDeleteOcurrences();
  const {
    handleSubmit,
    register,
    errors,
    isPending: isPendingEdit,
    isShowingEdit,
    handleModalOpenedEdit,
    handleModalClosedEdit,
    reset,
  } = usePutOcurrences();

  const [id, setId] = useState<number>(0);
  const [ocurrenceValue, setOcurrenceValue] = useState<PutParams>({
    idUsuario: 0,
    id: 0,
    resolvido: false,
    titulo: "",
    descricao: "",
    dataCadastro: "",
  });

  const initiateDeletionProcess = (idOccurence: number) => {
    setId(idOccurence);

    deleteOpened();
  };

  const initiateTestProcess = async (item: PutParams) => {
    setOcurrenceValue(item);

    handleModalOpenedEdit();
  };

  useEffect(() => {
    const initialValues = {
      idUsuario: 2,
      id: ocurrenceValue.id,
      resolvido: ocurrenceValue.resolvido,
      titulo: ocurrenceValue.titulo,
      descricao: ocurrenceValue.descricao,
      dataCadastro: ocurrenceValue.dataCadastro,
    };

    reset(initialValues);
  }, [ocurrenceValue, reset]);

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  return (
    <>
      <NewTable.Container empty={isError || emptyData}>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>
                {header.colName}
              </NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        <NewTable.Body>
          {data?.map((item) => {
            return (
              <NewTable.Row key={item.id}>
                <NewTable.Cell>{item.titulo}</NewTable.Cell>
                <NewTable.Cell>{item.descricao}</NewTable.Cell>
                <NewTable.Cell>{formatDate(item.dataCadastro)}</NewTable.Cell>
                <NewTable.Cell>
                  <Status resolved={item.resolvido} />
                </NewTable.Cell>
                <NewTable.Cell>
                  <WrapperIcons>
                    <Icon
                      name="ph-pencil-simple-line"
                      onClick={() => initiateTestProcess(item)}
                    />
                    <Icon
                      name="ph-trash"
                      color={theme.colors.red[500]}
                      onClick={() => initiateDeletionProcess(item.id)}
                    />
                  </WrapperIcons>
                </NewTable.Cell>
              </NewTable.Row>
            );
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
        Tem certeza que deseja excluir a ocorrência do condomínio Ilha de Capri?
        Esta ação não poderá ser desfeita.
      </Modal>

      <Modal
        variant="form"
        modalTitle="Cadastrar nova ocorrência"
        open={isShowingEdit}
        closeModal={handleModalClosedEdit}
        onConfirmModal={handleSubmit}
        isLoading={isPendingEdit}
      >
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Input
            id="titulo"
            label="Motivo"
            type="text"
            hasError={!!errors.titulo}
            errorText={errors.titulo?.message}
            {...register("titulo")}
          />
          <Input
            id="descricao"
            label="Descrição"
            type="text"
            hasError={!!errors.descricao}
            errorText={errors.descricao?.message}
            {...register("descricao")}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Label htmlFor="isResolved">A ocorrência foi resolvida?</Label>
            <Checkbox
              type="checkbox"
              {...register("resolvido")}
              id="isResolved"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TableOcurrence;
