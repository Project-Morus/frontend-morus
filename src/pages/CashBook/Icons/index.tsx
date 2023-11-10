import { useEffect, useState } from "react";
import { Icon, Modal } from "../../../components";
import { useDeleteCashBook, usePutCashBook } from "../controller";
import EditForm from "../parts/EditForm";
import { CashBookResponse } from "../../../services/cashBookService/types";

export const IconsSC = (cashBookdata: CashBookResponse) => {
  const [openedEditModal, setOpenedEditModal] = useState<boolean>(false);

  const { handleDelete, deleteOpened, isShowingDelete, deleteClosed, isPending } = useDeleteCashBook();

  const { reset } = usePutCashBook();

  const [id, setId] = useState<number>(0);

  const initiateDeletionProcess = (idCashBook: number) => {
    setId(idCashBook);

    deleteOpened();
  };

  const [cashBookValue, setCashBookValue] = useState<CashBookResponse>({
    id: 0,
    descricaoTransacao: "",
    categoria: "",
    torre: "",
    dataTransacao: "",
    valorTransacao: 0,
    tipoTransacao: 0,
  });

  const handleOpenEditModal = (item: CashBookResponse) => {
    setCashBookValue(item);

    setOpenedEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenedEditModal(false);
  };

  useEffect(() => {
    const initialValues = {
      id: cashBookValue.id,
      descricaoTransacao: cashBookValue.descricaoTransacao,
      categoria: cashBookValue.categoria,
      torre: cashBookValue.torre,
      dataTransacao: cashBookValue.dataTransacao,
      valorTransacao: cashBookValue.valorTransacao,
      tipoTransacao: cashBookValue.tipoTransacao,
    };

    reset(initialValues);
  }, [cashBookValue, reset]);

  return (
    <>
      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={() => handleOpenEditModal(cashBookdata)} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={() => initiateDeletionProcess(cashBookdata.id)} />
      </div>

      <Modal
        open={isShowingDelete}
        isLoading={isPending}
        closeModal={deleteClosed}
        variant="warning"
        onConfirmModal={() => handleDelete(id)}
      >
        <p>
          Tem certeza que deseja excluir a transação "{cashBookdata.descricaoTransacao}" do livro caixa do condomínio
          Ilha de Capri? Esta ação não poderá ser desfeita.
        </p>
      </Modal>

      <EditForm opened={openedEditModal} handleModalClosed={handleCloseEditModal} cashBookValue={cashBookValue} />
    </>
  );
};
