import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BookListPage } from './pages/BookList/BookListPage'
import { BookRegistrationPage } from './pages/BookRegistration/BookRegistrationPage'
import { BookDetailPage } from './pages/BookDetail/BookDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/books/register" element={<BookRegistrationPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
