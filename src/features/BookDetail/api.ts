import { axiosInstance } from '../../shared/api/axiosInstance'

export interface BookResponse {
  id: string
  title: string
  status: 'AVAILABLE' | 'RENTED'
}

export const getBookById = (id: string) => axiosInstance.get<BookResponse>(`/books/${id}`)

export const rentalBook = (id: string) => axiosInstance.post(`/books/${id}/rentals`)

export const returnBook = (id: string) => axiosInstance.patch(`/books/${id}/rentals/return`)
