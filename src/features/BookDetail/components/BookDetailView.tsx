import { BookDetailViewModel } from '../mapper'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { Skeleton } from '../../../shared/ui/Skeleton'
import { Card } from '../../../shared/ui/Card'

interface BookDetailViewProps {
  book: BookDetailViewModel | undefined
  isLoading: boolean
  isError: boolean
  isActionPending: boolean
  onAction: () => void
}

export const BookDetailView = ({
  book,
  isLoading,
  isError,
  isActionPending,
  onAction,
}: BookDetailViewProps) => {
  if (isLoading) {
    return (
      <Card>
        <Skeleton className="h-8 w-1/2 mb-4" />
        <Skeleton className="h-6 w-1/4 mb-6" />
        <Skeleton className="h-10 w-32" />
      </Card>
    )
  }

  if (isError || !book) {
    return (
      <div className="p-8 text-center text-red-600">
        도서 정보를 불러오는 중 오류가 발생했습니다.
      </div>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <div className="flex items-center gap-2">
            <Badge variant={book.statusColor}>{book.statusLabel}</Badge>
          </div>
        </div>
        <div>
          <Button
            size="lg"
            onClick={onAction}
            isLoading={isActionPending}
            className="w-full md:w-auto"
          >
            {book.actionButtonText}
          </Button>
        </div>
      </div>
    </Card>
  )
}
