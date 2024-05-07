export const localStorageApi = () => {
  const get = <T>(key: string) => {
    const value = localStorage.getItem(key)
    console.log(value)

    return value ? (JSON.parse(value) as T) : null
  }

  const set = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const remove = (key: string) => localStorage.removeItem(key)

  return { get, set, remove }
}
