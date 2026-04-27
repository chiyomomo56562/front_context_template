import { useNavigate } from 'react-router-dom'
import { useBookListQuery } from '../hooks/useBookListQuery'
import { BookListView } from './BookListView'

export const BookListContainer = () => {
  const navigate = useNavigate()
  const { data: books, isLoading, isError, refetch } = useBookListQuery()

  const handleNavigateDetail = (id: string) => {
    navigate(`/books/${id}`)
  }

  const handleNavigateRegister = () => {
    navigate('/books/register')
  }

  return (
    <BookListView
      books={books ?? []}
      isLoading={isLoading}
      isError={isError}
      onNavigateDetail={handleNavigateDetail}
      onNavigateRegister={handleNavigateRegister}
      onRetry={refetch}
    />
  )
}
