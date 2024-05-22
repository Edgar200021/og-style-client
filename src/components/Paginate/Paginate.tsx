import { useQueryParams } from '@/hooks/useQueryParams'
import { cn } from '@/utils'
import ReactPaginate from 'react-paginate'
import arrowIcon from '../../assets/icons/pagination-arrow.svg'
import { Button } from '../ui/Button'

interface Props {
  className?: string
  totalPages: number
  initialPage?: number
}

export const Paginate = ({ className, totalPages, initialPage }: Props) => {
  const { setQueryParams } = useQueryParams()

  if (totalPages <= 1) return null

  const onPageChange = ({ selected }: { selected: number }) => {
    setQueryParams('page', String(selected + 1))
  }

  return (
    <ReactPaginate
      className={cn(
        'flex items-center gap-x-2 text-lg text-gray-500 ',
        className
      )}
      onPageChange={onPageChange}
      initialPage={initialPage !== undefined ? initialPage - 1 : 0}
      pageCount={totalPages}
      //  pageRangeDisplayed={1}

      pageLinkClassName="w-full h-full flex items-center justify-center"
      pageClassName="size-10 border-[1px] border-solid borer-gray-300 rounded-lg transition-colors duration-300 ease"
      activeClassName="bg-dark text-white"
      previousLabel={
        <Button
          disabled={initialPage === 1}
          className="size-10 border-[1px] border-solid borer-gray-300 rounded-lg flex items-center justify-center"
          variant="clear"
        >
          <img src={arrowIcon} alt="arrow" />
        </Button>
      }
      nextLabel={
        <Button
          disabled={initialPage === totalPages}
          className="size-10 border-[1px] border-solid borer-gray-300 rounded-lg flex items-center justify-center"
          variant="clear"
        >
          <img className="rotate-180" src={arrowIcon} alt="arrow" />
        </Button>
      }
      previousClassName="size-10 flex items-center justify-center border-gray-300 rounded-lg"
    />
  )
}
