import { useTheme } from "styled-components";
import { NewTable, Icon, Loader } from "../../../../components";
import { HEADER_TABLE_CELLS } from "../mockData";
import Status from "../Status";
import { WrapperIcons } from "./styles";
import { ContentLoaderSC } from "../../../styles";
import { MonthlyFeeResponse } from "../../../../services/monthlyFeeService/get";
import { formatDate } from "../../../../helpers/date";
import { ModalDelete } from "../ModalDelete";
import { useDeleteMonthlyFee } from "../../controller/useDeleteMonthlyFee";
import { useEffect, useState } from "react";
import ModalPut from "../ModalPut";
import { usePutMonthlyFee } from "../../controller/usePutMonthlyFee";
import { PutParams } from "../../../../services/monthlyFeeService/put";

interface ITableMonthlFeeProps {
  data: MonthlyFeeResponse[];
  isLoading: boolean;
}

function TableMonthlyFee({ data, isLoading }: ITableMonthlFeeProps) {
  const theme = useTheme();

  const [id, setId] = useState<number>(0);
  const [monthlyFeeValue, setMonthlyFeeValue] = useState<PutParams>({
    id: 0,
    nome: "",
    valor: 0,
    recorrente: false,
    descricao: "",
    dataInicio: "",
    dataFim: "",
  });

  const {
    handleDelete,
    isPending,
    isShowingDelete,
    deleteOpened,
    deleteClosed,
  } = useDeleteMonthlyFee(id);

  const {
    handleSubmit: handleSubmitUpdate,
    register: registerUpdate,
    errors: errorsUpdate,
    isPending: isPendingEdit,
    isShowingEdit,
    putOpened,
    putClosed,
    reset,
  } = usePutMonthlyFee();

  const initiateDeletionProcess = (idFee: number) => {
    setId(idFee);

    deleteOpened();
  };

  const initiateUpdateProcess = async (item: PutParams) => {
    setMonthlyFeeValue(item);

    putOpened();
  };

  useEffect(() => {
    const initialValues = {
      id: monthlyFeeValue.id,
      nome: monthlyFeeValue.nome,
      valor: monthlyFeeValue.valor,
      recorrente: monthlyFeeValue.recorrente,
      descricao: monthlyFeeValue.descricao,
      dataInicio: monthlyFeeValue.dataInicio,
      dataFim: monthlyFeeValue.dataFim,
    };

    reset(initialValues);
  }, [monthlyFeeValue, reset, id]);

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  return (
    <>
      <NewTable.Container>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>
                {header.colName}
              </NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        {data.map((item) => (
          <NewTable.Body>
            <NewTable.Row>
              <NewTable.Cell>{item.nome}</NewTable.Cell>
              <NewTable.Cell>{item.descricao}</NewTable.Cell>
              <NewTable.Cell>R${item.valor}</NewTable.Cell>
              <NewTable.Cell>{formatDate(item.dataFim)}</NewTable.Cell>
              <NewTable.Cell>
                <Status recurring={item.recorrente} />
              </NewTable.Cell>
              <NewTable.Cell>
                <WrapperIcons>
                  <Icon
                    name="ph-pencil-simple-line"
                    onClick={() => initiateUpdateProcess(item)}
                  />
                  <Icon
                    name="ph-trash"
                    color={theme.colors.red[500]}
                    onClick={() => initiateDeletionProcess(item.id)}
                  />
                </WrapperIcons>
              </NewTable.Cell>
            </NewTable.Row>
          </NewTable.Body>
        ))}
      </NewTable.Container>

      <ModalDelete
        opened={isShowingDelete}
        closeModal={deleteClosed}
        onConfirmModal={handleDelete}
        isLoading={isPending}
      />

      <ModalPut
        opened={isShowingEdit}
        closeModal={putClosed}
        errors={errorsUpdate}
        isLoading={isPendingEdit}
        onConfirmModal={handleSubmitUpdate}
        register={registerUpdate}
      />
    </>
  );
}

export default TableMonthlyFee;
