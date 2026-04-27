import { useQuery } from '@tanstack/react-query'
import { getBookRentalHistory, RentalResponse } from '../api'
import { mapToRentalHistoryViewModel } from '../mapper'

export const useRentalHistoryQuery = (bookId: string) => {
  return useQuery({
    queryKey: ['books', 'rentals', bookId],
    queryFn: async () => {
      const { data } = await getBookRentalHistory(bookId)
      // Sort by rentedAt descending
      return data
        .sort(
          (a: RentalResponse, b: RentalResponse) =>
            new Date(b.rentedAt).getTime() - new Date(a.rentedAt).getTime(),
        )
        .map(mapToRentalHistoryViewModel)
    },
    enabled: !!bookId,
  })
}
