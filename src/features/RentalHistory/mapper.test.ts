import { describe, it, expect } from 'vitest'
import { mapToRentalHistoryViewModel } from './mapper'
import { RentalResponse } from './api'

describe('RentalHistory mapper', () => {
  it('반납된 대여 기록을 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: RentalResponse = {
      id: 'rental-1',
      bookId: 'book-1',
      rentedAt: '2024-04-27T10:00:00Z',
      returnedAt: '2024-04-27T15:00:00Z',
    }

    // Act
    const result = mapToRentalHistoryViewModel(mockResponse)

    // Assert
    expect(result.id).toBe('rental-1')
    expect(result.isCurrentlyRented).toBe(false)
    expect(result.rentedDateText).toMatch(/^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}$/)
    expect(result.returnedDateText).toMatch(/^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}$/)
  })

  it('대여 중인 기록을 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: RentalResponse = {
      id: 'rental-2',
      bookId: 'book-1',
      rentedAt: '2024-04-28T09:00:00Z',
      returnedAt: null,
    }

    // Act
    const result = mapToRentalHistoryViewModel(mockResponse)

    // Assert
    expect(result.returnedDateText).toBe('대여 중')
    expect(result.isCurrentlyRented).toBe(true)
  })
})
