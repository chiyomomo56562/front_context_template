import { RentalHistoryViewModel } from '../mapper'
import { Skeleton } from '../../../shared/ui/Skeleton'
import { Card } from '../../../shared/ui/Card'

interface RentalHistoryViewProps {
  history: RentalHistoryViewModel[]
  isLoading: boolean
  isError: boolean
}

export const RentalHistoryView = ({
  history,
  isLoading,
  isError,
}: RentalHistoryViewProps) => {
  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-600">
        대여 이력을 불러오는 중 오류가 발생했습니다.
      </div>
    )
  }

  if (history.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 italic">
        대여 이력이 없습니다.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {history.map((item) => (
        <Card key={item.id} className="p-3 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-gray-700">대여:</span> {item.rentedDateText}
            </div>
            <div className={item.isCurrentlyRented ? 'font-bold text-blue-600' : ''}>
              <span className="font-semibold text-gray-700">반납:</span> {item.returnedDateText}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
