import { useQueryParams } from '@/hooks/useQueryParams'
import { cn } from '@/utils'
import { ChangeEvent, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useDebounceCallback } from 'usehooks-ts'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface Props {
  className?: string
  withButton?: boolean
  onActionEnd?: () => void
}

export const Search = ({ className, withButton, onActionEnd }: Props) => {
  const { queryParams, setQueryParams } = useQueryParams('search')
  const searchRef = useRef(queryParams.search ?? '')
  const navigate = useNavigate()
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const pathname = useLocation().pathname
  const debouncedCb = useDebounceCallback(onSetSearch, 1000)
  const showButton = withButton ?? pathname.includes('search')

  function onSetSearch() {
    setQueryParams('search', searchRef.current)
  }

  const onChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (showButton) {
        searchRef.current = e.target.value
        return
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        onActionEnd?.()
        searchRef.current = ''
        navigate(`search?search=${e.target.value}`)
        e.target.value = ''
      }, 1000)
    },
    [showButton]
  )

  return (
    <div
      className={cn(
        'max-w-[1140px] w-full mx-auto flex flex-col gap-y-4 md:flex-row md:gap-y-0 md:gap-x-5 ',
        className
      )}
    >
      <Input
        type="search"
        className="grow"
        onChange={onChangeSearch}
        variant="search"
        defaultValue={searchRef.current}
      />
      {showButton && (
        <Button onClick={debouncedCb} className=" md:max-w-[270px]">
          Поиск
        </Button>
      )}
    </div>
  )
}
