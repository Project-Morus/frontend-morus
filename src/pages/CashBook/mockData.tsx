import { useState } from "react";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal";
import { ITableHeaderProps } from "../../components/Table/types";

const IconsSC = () => {
  const [opened, setOpened] = useState<boolean>(false)

  const handleOpenedModal = () => {
    setOpened(!opened)
  }

  const handleClosedModal = () => {
    setOpened(false)
  }

  return (
    <>

      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={() => console.log('Action Edit')} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={handleOpenedModal} />
      </div>

      <Modal
        open={opened}
        closeModal={handleClosedModal}
        variant="warning"
        onConfirmModal={() => console.log('Confirme Delete')}>
        <p>Tem certeza que deseja excluir o item da lista do Livro caixa do condôminio Ilha de Capri? Esta ação não poderá ser desfeita.</p>
      </Modal>
    </>
  );
};

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Torre" },
  { colName: "Descrição" },
  { colName: "Valor" },
  { colName: "Data" },
  { colName: "Categoria" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  {
    tower: "Todos",
    description: "Salário do porteiro",
    value: "-R$3.250,50",
    date: "05/02/2024",
    category: "Funcionário",
    actions: <IconsSC />,
  },
  {
    tower: "Norte",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Sul",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Sul",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Norte",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
];
