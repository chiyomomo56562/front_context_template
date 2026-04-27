import { useParams, Link } from 'react-router-dom'
import { DefaultLayout } from '../../shared/layouts/DefaultLayout'
import { BookDetailContainer } from '../../features/BookDetail/components/BookDetailContainer'
import { BookManagementContainer } from '../../features/BookManagement/components/BookManagementContainer'
import { RentalHistoryContainer } from '../../features/RentalHistory/components/RentalHistoryContainer'
import { Button } from '../../shared/ui/Button'

export const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) return null

  return (
    <DefaultLayout>
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" size="sm">
            ← 목록으로
          </Button>
        </Link>
      </div>

      <div className="space-y-8">
        <section>
          <BookDetailContainer bookId={id} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">관리 기능</h2>
            <BookManagementContainer bookId={id} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">대여 이력</h2>
            <RentalHistoryContainer bookId={id} />
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
