import { Input, Modal } from "../../../../components";
import { usePostOcurrences } from "../../controller";
import { Checkbox, Label } from "./styles";

type FormTypes = {
  opened: boolean,
  handleModalClosed: () => void,
}

const Form = ({ opened, handleModalClosed }: FormTypes) => {
  const { handleSubmit, register, errors, isPending } = usePostOcurrences({ handleModalClosed })


  return (
    <Modal
      variant="form"
      modalTitle="Cadastrar nova ocorrência"
      open={opened}
      closeModal={handleModalClosed}
      onConfirmModal={handleSubmit}
      isLoading={isPending}
      iconName="ph-clipboard-text"
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Label htmlFor="isResolved">A ocorrência foi resolvida?</Label>
          <Checkbox type="checkbox" {...register('resolvido')} id='isResolved' />
        </div>
      </div>
    </Modal>
  );
}

export default Form;