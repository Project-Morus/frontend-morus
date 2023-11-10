import { Input, Modal } from "../../../../components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../controller/usePostVotes";

interface IModalPostProps {
  opened: boolean,
  closeModal: () => void,
  onConfirmModal: () => void,
  isLoading: boolean,
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>;
}

export function ModalPost({ register, errors, opened, closeModal, onConfirmModal, isLoading }: IModalPostProps) {
  return (
    <Modal
      variant="form"
      open={opened}
      closeModal={closeModal}
      onConfirmModal={onConfirmModal}
      isLoading={isLoading}
      modalTitle="Criar votação"
      iconName="ph-gavel"
    >
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Input
            id="tema"
            label="Tema"
            type="text"
            hasError={!!errors.tema}
            errorText={errors.tema?.message}
            {...register('tema')}
          />

          <Input
            id="dataExpiracao"
            label="Data de expiração"
            type="datetime-local"
            hasError={!!errors.dataExpiracao}
            errorText={errors.dataExpiracao?.message}
            {...register('dataExpiracao')}
          />
        </div>

        <Input
          id="descricao"
          label="Descrição"
          type="text"
          hasError={!!errors.descricao}
          errorText={errors.descricao?.message}
          {...register('descricao')}
        />
      </div>
    </Modal>
  )
}