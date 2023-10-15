import { Input } from "../../../../components";
import { usePostOcurrences } from "../../controller/usePostOccurence";

const Form = () => {
  const { register, errors } = usePostOcurrences()

  return (
    <form style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
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
    </form>
  );
}

export default Form;