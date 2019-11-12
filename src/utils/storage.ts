import { storageFactory } from 'storage-factory'
import isNil from 'lodash/isNil'

export const local = storageFactory(() => localStorage)
export const session = storageFactory(() => sessionStorage)

export function hasValue(storage: Storage, key: string): boolean {
  const value = storage.getItem(key)
  return !isNil(value) && value !== ''
}
