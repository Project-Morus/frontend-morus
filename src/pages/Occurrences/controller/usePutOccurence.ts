import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({})

type FormData = z.infer<typeof schema>

export function usePostOcurrences() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })


  const handleSubmit = hookFormSubmit(async (data) => {
    console.log(data)
  })

  return { register, handleSubmit, control, errors, watch }
}