import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { renameTitle, removeBook } from '../api'

export const useBookManagementActions = (id: string) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const renameMutation = useMutation({
    mutationFn: (title: string) => renameTitle(id, { title }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'detail', id] })
      queryClient.invalidateQueries({ queryKey: ['books', 'list'] })
    },
  })

  const removeMutation = useMutation({
    mutationFn: () => removeBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books', 'list'] })
      navigate('/')
    },
  })

  return {
    renameMutation,
    removeMutation,
  }
}
