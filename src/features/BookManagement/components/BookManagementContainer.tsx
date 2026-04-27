import { useState } from 'react'
import { useBookManagementActions } from '../hooks/useBookManagementActions'
import { BookManagementView } from './BookManagementView'

interface BookManagementContainerProps {
  bookId: string
}

export const BookManagementContainer = ({ bookId }: BookManagementContainerProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { renameMutation, removeMutation } = useBookManagementActions(bookId)

  const handleRename = (title: string) => {
    renameMutation.mutate(title, {
      onSuccess: () => {
        setIsEditModalOpen(false)
      },
    })
  }

  const handleDelete = () => {
    if (window.confirm('정말로 이 도서를 삭제하시겠습니까?')) {
      removeMutation.mutate()
    }
  }

  return (
    <BookManagementView
      isEditModalOpen={isEditModalOpen}
      onOpenEditModal={() => setIsEditModalOpen(true)}
      onCloseEditModal={() => setIsEditModalOpen(false)}
      onRename={handleRename}
      onDelete={handleDelete}
      isRenaming={renameMutation.isPending}
      isRemoving={removeMutation.isPending}
    />
  )
}
