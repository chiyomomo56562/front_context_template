import { DefaultLayout } from '../../shared/layouts/DefaultLayout'
import { BookListContainer } from '../../features/BookList/components/BookListContainer'

export const BookListPage = () => {
  return (
    <DefaultLayout>
      <BookListContainer />
    </DefaultLayout>
  )
}
