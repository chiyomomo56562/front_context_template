import { BookViewModel } from '../mapper'
import { Card } from '../../../shared/ui/Card'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { Skeleton } from '../../../shared/ui/Skeleton'

interface BookListViewProps {
  books: BookViewModel[]
  isLoading: boolean
  isError: boolean
  onNavigateDetail: (id: string) => void
  onNavigateRegister: () => void
  onRetry: () => void
}

export const BookListView = ({
  books,
  isLoading,
  isError,
  onNavigateDetail,
  onNavigateRegister,
  onRetry,
}: BookListViewProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-32">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/4" />
          </Card>
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="mb-4 text-red-600">도서 목록을 불러오는 중 오류가 발생했습니다.</p>
        <Button onClick={onRetry}>다시 시도</Button>
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="mb-4 text-gray-600">등록된 도서가 없습니다.</p>
        <Button onClick={onNavigateRegister}>도서 등록</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">도서 목록</h2>
        <Button onClick={onNavigateRegister}>도서 등록</Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Card
            key={book.id}
            onClick={() => onNavigateDetail(book.id)}
            className={!book.isRentable ? 'opacity-60' : ''}
          >
            <div className="flex flex-col h-full justify-between">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <div>
                <Badge variant={book.statusColor}>{book.statusText}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
