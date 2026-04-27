import { useState } from 'react'
import { Button } from '../../../shared/ui/Button'
import { Card } from '../../../shared/ui/Card'

interface BookManagementViewProps {
  isEditModalOpen: boolean
  onOpenEditModal: () => void
  onCloseEditModal: () => void
  onRename: (title: string) => void
  onDelete: () => void
  isRenaming: boolean
  isRemoving: boolean
}

export const BookManagementView = ({
  isEditModalOpen,
  onOpenEditModal,
  onCloseEditModal,
  onRename,
  onDelete,
  isRenaming,
  isRemoving,
}: BookManagementViewProps) => {
  const [newTitle, setNewTitle] = useState('')

  const handleRenameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTitle.trim()) {
      onRename(newTitle.trim())
    }
  }

  return (
    <div className="space-y-4">
      <Card className="flex items-center justify-between border-red-100 bg-red-50">
        <div className="text-red-700 font-medium">Danger Zone</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onOpenEditModal}>
            제목 수정
          </Button>
          <Button variant="danger" onClick={onDelete} isLoading={isRemoving}>
            도서 삭제
          </Button>
        </div>
      </Card>

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <h3 className="mb-4 text-xl font-bold">도서 제목 수정</h3>
            <form onSubmit={handleRenameSubmit}>
              <input
                type="text"
                className="mb-4 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="새로운 도서 제목을 입력하세요"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="secondary" onClick={onCloseEditModal}>
                  취소
                </Button>
                <Button type="submit" isLoading={isRenaming}>
                  수정 완료
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}
