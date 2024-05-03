export const cache = (key: string) => {
  const collection = new Map()

  const set = <T>(value: T) => {
    collection.set(key, value)
  }

  const get = () => {
    return collection.get(key)
  }

  const remove = () => {
    if (collection.has(key)) {
      collection.delete(key)
    }
  }

  return { set, get, remove }
}
