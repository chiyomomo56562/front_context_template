import { useNavigate } from 'react-router-dom'
import { useCreateBookMutation } from '../hooks/useCreateBookMutation'
import { BookRegistrationView } from './BookRegistrationView'

export interface RegistrationFormValues {
  title: string
}

export const BookRegistrationContainer = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreateBookMutation()

  const handleSubmit = (values: RegistrationFormValues) => {
    mutate(
      { title: values.title.trim() },
      {
        onSuccess: () => {
          navigate('/')
        },
      },
    )
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <BookRegistrationView
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isLoading={isPending}
    />
  )
}
