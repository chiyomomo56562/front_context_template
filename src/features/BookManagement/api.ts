import { axiosInstance } from '../../shared/api/axiosInstance'

export interface RenameBookTitleRequest {
  title: string
}

export const renameTitle = (id: string, data: RenameBookTitleRequest) =>
  axiosInstance.patch(`/books/${id}/title`, data)

export const removeBook = (id: string) => axiosInstance.delete(`/books/${id}`)
