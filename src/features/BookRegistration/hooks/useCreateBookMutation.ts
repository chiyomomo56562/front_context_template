import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBook } from '../api'

export const useCreateBookMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'list'] })
    },
  })
}
