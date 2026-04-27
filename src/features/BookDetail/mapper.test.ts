import { describe, it, expect } from 'vitest'
import { mapToBookDetailViewModel } from './mapper'
import { BookResponse } from './api'

describe('BookDetail mapper', () => {
  it('AVAILABLE 상태의 도서 상세 정보를 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: BookResponse = {
      id: 'book-1',
      title: 'Test Book',
      status: 'AVAILABLE',
    }

    // Act
    const result = mapToBookDetailViewModel(mockResponse)

    // Assert
    expect(result).toEqual({
      id: 'book-1',
      title: 'Test Book',
      statusLabel: '현재 대여 가능',
      actionButtonText: '대여하기',
      canRent: true,
      canReturn: false,
      statusColor: 'green',
    })
  })

  it('RENTED 상태의 도서 상세 정보를 올바른 UI 모델로 변환해야 한다', () => {
    // Arrange
    const mockResponse: BookResponse = {
      id: 'book-2',
      title: 'Rented Book',
      status: 'RENTED',
    }

    // Act
    const result = mapToBookDetailViewModel(mockResponse)

    // Assert
    expect(result).toEqual({
      id: 'book-2',
      title: 'Rented Book',
      statusLabel: '현재 대여 중',
      actionButtonText: '반납하기',
      canRent: false,
      canReturn: true,
      statusColor: 'red',
    })
  })
})
