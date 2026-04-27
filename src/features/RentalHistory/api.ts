import { axiosInstance } from '../../shared/api/axiosInstance'

export interface RentalResponse {
  id: string
  bookId: string
  rentedAt: string
  returnedAt: string | null
}

export const getBookRentalHistory = (id: string) =>
  axiosInstance.get<RentalResponse[]>(`/books/${id}/rentals`)
