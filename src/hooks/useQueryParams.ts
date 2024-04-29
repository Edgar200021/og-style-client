import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQueryParams = <T extends string[]>(
  ...keys: T
): {
  queryParams: Record<T[number], string>
  setQueryParams: (key: T[number], value: string) => void
} => {
  const [searchParams, setSearchParams] = useSearchParams(),
    map = new Map()

  for (const key of keys) {
    const queryValue = searchParams.get(key)
    if (!queryValue) continue

    map.set(key, queryValue)
  }

  const setQueryParams = useCallback((key: T[number], value: string) => {
    value.trim() === ''
      ? searchParams.delete(key)
      : searchParams.set(key, value)
    setSearchParams(searchParams)
  }, [])

  return { queryParams: Object.fromEntries(map), setQueryParams }
}
