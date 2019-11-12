import { useEffect } from 'react'

export function useNoOpEffect(cb: Function, inputs: Array<any>) {
  useEffect(() => {
    cb()
  }, inputs)
}
