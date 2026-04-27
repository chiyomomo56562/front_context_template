import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../api'
import { mapToBookViewModel } from '../mapper'

export const useBookListQuery = () => {
  return useQuery({
    queryKey: ['books', 'list'],
    queryFn: async () => {
      const { data } = await getBooks()
      return data.map(mapToBookViewModel)
    },
  })
}
