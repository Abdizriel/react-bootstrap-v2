import { local } from '../utils/storage'
import { history } from '../bootstrap/history'

export function signInEffect(token: string) {
  local.setItem('token', token)
  history.push('/')
}
