import { format } from 'date-fns'
import { RentalResponse } from './api'

export interface RentalHistoryViewModel {
  id: string
  rentedDateText: string
  returnedDateText: string
  isCurrentlyRented: boolean
}

export const mapToRentalHistoryViewModel = (data: RentalResponse): RentalHistoryViewModel => ({
  id: data.id,
  rentedDateText: format(new Date(data.rentedAt), 'yyyy.MM.dd HH:mm'),
  returnedDateText: data.returnedAt
    ? format(new Date(data.returnedAt), 'yyyy.MM.dd HH:mm')
    : '대여 중',
  isCurrentlyRented: data.returnedAt === null,
})
