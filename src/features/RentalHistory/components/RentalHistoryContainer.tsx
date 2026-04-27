import { useRentalHistoryQuery } from '../hooks/useRentalHistoryQuery'
import { RentalHistoryView } from './RentalHistoryView'

interface RentalHistoryContainerProps {
  bookId: string
}

export const RentalHistoryContainer = ({ bookId }: RentalHistoryContainerProps) => {
  const { data: history, isLoading, isError } = useRentalHistoryQuery(bookId)

  return (
    <RentalHistoryView
      history={history ?? []}
      isLoading={isLoading}
      isError={isError}
    />
  )
}
