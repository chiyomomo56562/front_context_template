import { useForm } from 'react-hook-form'
import { Button } from '../../../shared/ui/Button'
import { RegistrationFormValues } from './BookRegistrationContainer'

interface BookRegistrationViewProps {
  onSubmit: (values: RegistrationFormValues) => void
  onCancel: () => void
  isLoading: boolean
}

export const BookRegistrationView = ({
  onSubmit,
  onCancel,
  isLoading,
}: BookRegistrationViewProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>()

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-6 text-2xl font-bold">도서 등록</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            도서 제목
          </label>
          <input
            id="title"
            type="text"
            className={`mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="도서 제목을 입력하세요"
            {...register('title', {
              required: '제목은 필수 입력 사항입니다.',
              minLength: {
                value: 2,
                message: '제목은 최소 2자 이상이어야 합니다.',
              },
              maxLength: {
                value: 100,
                message: '제목은 최대 100자 이하이어야 합니다.',
              },
            })}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div className="flex gap-2 pt-4">
          <Button type="button" variant="outline" className="flex-1" onClick={onCancel}>
            취소
          </Button>
          <Button type="submit" className="flex-1" isLoading={isLoading}>
            등록
          </Button>
        </div>
      </form>
    </div>
  )
}
