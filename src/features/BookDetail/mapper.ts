import { BookResponse } from './api'

export interface BookDetailViewModel {
  id: string
  title: string
  statusLabel: string
  actionButtonText: '대여하기' | '반납하기'
  canRent: boolean
  canReturn: boolean
  statusColor: 'green' | 'red'
}

export const mapToBookDetailViewModel = (data: BookResponse): BookDetailViewModel => ({
  id: data.id,
  title: data.title,
  statusLabel: data.status === 'AVAILABLE' ? '현재 대여 가능' : '현재 대여 중',
  actionButtonText: data.status === 'AVAILABLE' ? '대여하기' : '반납하기',
  canRent: data.status === 'AVAILABLE',
  canReturn: data.status === 'RENTED',
  statusColor: data.status === 'AVAILABLE' ? 'green' : 'red',
})
