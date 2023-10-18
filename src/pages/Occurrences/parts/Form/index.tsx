import { Input, Modal } from "../../../../components";
import { usePostOcurrences } from "../../controller";

type FormTypes = {
  opened: boolean,
  handleModalClosed: () => void,
}

const Form = ({ opened, handleModalClosed }: FormTypes) => {
  const { handleSubmit, register, errors, isLoading } = usePostOcurrences({ handleModalClosed })

  return (
    <Modal
      variant="form"
      modalTitle="Cadastrar nova ocorrência"
      open={opened}
      closeModal={handleModalClosed}
      onConfirmModal={handleSubmit}
      isLoading={isLoading}
    >
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <Input
          id="titulo"
          label="Motivo"
          type="text"
          hasError={!!errors.titulo}
          errorText={errors.titulo?.message}
          {...register('titulo')}
        />
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
  );
}

export default Form;