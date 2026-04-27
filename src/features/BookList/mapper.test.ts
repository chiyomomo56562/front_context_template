import { describe, it, expect } from 'vitest'
import { mapToBookViewModel } from './mapper'
import { BookResponse } from './api'

describe('BookList mapper', () => {
  it('AVAILABLE 상태의 도서를 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: BookResponse = {
      id: 'book-1',
      title: 'Test Book',
      status: 'AVAILABLE',
    }

    // Act
    const result = mapToBookViewModel(mockResponse)

    // Assert
    expect(result).toEqual({
      id: 'book-1',
      title: 'Test Book',
      statusText: '대여 가능',
      isRentable: true,
      statusColor: 'green',
    })
  })

  it('RENTED 상태의 도서를 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: BookResponse = {
      id: 'book-2',
      title: 'Rented Book',
      status: 'RENTED',
    }

    // Act
    const result = mapToBookViewModel(mockResponse)

    // Assert
    expect(result).toEqual({
      id: 'book-2',
      title: 'Rented Book',
      statusText: '대여 중',
      isRentable: false,
      statusColor: 'red',
    })
  })
})
