import { Modal } from "../../../../components";

interface IModalDeleteProps {
  opened: boolean,
  closeModal: () => void,
  onConfirmModal: () => void,
  isLoading: boolean,
}


export function ModalDelete({opened, closeModal, onConfirmModal, isLoading}: IModalDeleteProps) {
  return(
    <Modal 
      variant="warning" 
      open={opened} 
      closeModal={closeModal} 
      onConfirmModal={onConfirmModal} 
      isLoading={isLoading}
    >
      <p>Tem certeza que deseja excluir essa votação? Esta ação não poderá ser desfeita.</p>
    </Modal>
  )
}