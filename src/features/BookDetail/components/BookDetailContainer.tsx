import { useBookDetailQuery } from '../hooks/useBookDetailQuery'
import { useBookRentalMutation } from '../hooks/useBookRentalMutation'
import { BookDetailView } from './BookDetailView'

interface BookDetailContainerProps {
  bookId: string
}

export const BookDetailContainer = ({ bookId }: BookDetailContainerProps) => {
  const { data: book, isLoading, isError } = useBookDetailQuery(bookId)
  const { rentalMutation, returnMutation } = useBookRentalMutation(bookId)

  const handleAction = () => {
    if (!book) return

    if (book.canRent) {
      rentalMutation.mutate()
    } else if (book.canReturn) {
      returnMutation.mutate()
    }
  }

  return (
    <BookDetailView
      book={book}
      isLoading={isLoading}
      isError={isError}
      isActionPending={rentalMutation.isPending || returnMutation.isPending}
      onAction={handleAction}
    />
  )
}
