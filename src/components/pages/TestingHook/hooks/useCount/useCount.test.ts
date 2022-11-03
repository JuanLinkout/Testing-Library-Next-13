import { act, renderHook } from '@testing-library/react'
import { useCount } from '.'

describe('test useCountHook', () => {
  it('should add 1 to the counter', () => {
    const { result } = renderHook(useCount)
    act(result.current.handleAddCount)
    expect(result.current.count).toBe(1)
  })

  it('should remove 1 from the counter', () => {
    const { result } = renderHook(useCount)
    act(result.current.handleRemoveCount)
    expect(result.current.count).toBe(-1)
  })

  it('should clear the counter', () => {
    const { result } = renderHook(useCount)
    act(result.current.handleClearCount)
    expect(result.current.count).toBe(0)
  })
})
