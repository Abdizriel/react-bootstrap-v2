import { local } from '../utils/storage'

export function logOutEffect() {
  local.removeItem('token')
}
