import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

import { authService } from "../../services/authService";
import { SignInParams } from "../../services/authService/signIn";
import { useAuth } from "../../hooks";


const schema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido!'),
  senha: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'A senha deve conter pelo menos 8 dígitos')
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data: SignInParams) => {
      return authService.signIn(data)
    }
  })

  const { signIn } = useAuth()

  const handleSubmit = hookFormSubmit(async (data) => {

    try {
      const { token } = await mutateAsync(data)
      toast.success('Logado com sucesso!')

      signIn(token)
    } catch (error) {
      toast.error('Usuário inválido!')
    }
  })

  return { register, handleSubmit, errors, isLoading }
}