import { BookResponse } from './api'

export interface BookViewModel {
  id: string
  title: string
  statusText: '대여 가능' | '대여 중'
  isRentable: boolean
  statusColor: 'green' | 'red'
}

export const mapToBookViewModel = (data: BookResponse): BookViewModel => ({
  id: data.id,
  title: data.title,
  statusText: data.status === 'AVAILABLE' ? '대여 가능' : '대여 중',
  isRentable: data.status === 'AVAILABLE',
  statusColor: data.status === 'AVAILABLE' ? 'green' : 'red',
})
