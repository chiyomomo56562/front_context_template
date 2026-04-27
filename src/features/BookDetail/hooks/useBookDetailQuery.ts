import { useQuery } from '@tanstack/react-query'
import { getBookById } from '../api'
import { mapToBookDetailViewModel } from '../mapper'

export const useBookDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['books', 'detail', id],
    queryFn: async () => {
      const { data } = await getBookById(id)
      return mapToBookDetailViewModel(data)
    },
    enabled: !!id,
  })
}
