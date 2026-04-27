import { axiosInstance } from '../../shared/api/axiosInstance'

export interface BookResponse {
  id: string
  title: string
  status: 'AVAILABLE' | 'RENTED'
}

export const getBooks = () => axiosInstance.get<BookResponse[]>('/books')
