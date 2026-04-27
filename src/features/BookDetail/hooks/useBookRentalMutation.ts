import { useMutation, useQueryClient } from '@tanstack/react-query'
import { rentalBook, returnBook } from '../api'

export const useBookRentalMutation = (id: string) => {
  const queryClient = useQueryClient()

  const rentalMutation = useMutation({
    mutationFn: () => rentalBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'detail', id] })
      queryClient.invalidateQueries({ queryKey: ['books', 'rentals', id] })
    },
  })

  const returnMutation = useMutation({
    mutationFn: () => returnBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'detail', id] })
      queryClient.invalidateQueries({ queryKey: ['books', 'rentals', id] })
    },
  })

  return {
    rentalMutation,
    returnMutation,
  }
}
