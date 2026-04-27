import { axiosInstance } from '../../shared/api/axiosInstance'

export interface CreateBookRequest {
  title: string
}

export const createBook = (data: CreateBookRequest) => axiosInstance.post('/books', data)
