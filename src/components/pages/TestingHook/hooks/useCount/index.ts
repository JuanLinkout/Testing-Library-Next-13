import { useState } from 'react'
import { IUseCount } from './types'

export const useCount = (): IUseCount => {
  const [count, setCount] = useState(0)

  function handleAddCount() {
    setCount(prev => prev + 1)
  }

  function handleRemoveCount() {
    setCount(prev => prev - 1)
  }

  function handleClearCount() {
    setCount(0)
  }

  return {
    handleAddCount,
    handleClearCount,
    handleRemoveCount,
    count
  }
}
