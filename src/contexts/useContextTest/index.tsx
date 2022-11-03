// Bibliotecas Externas
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import { ContextTestData } from './types'

const ContextTest = createContext<ContextTestData>({} as ContextTestData)

const ContextTestProvider: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const [count, setCount] = useState(0)

  function handleCountChange(value: number) {
    setCount(value)
  }

  return (
    <ContextTest.Provider
      value={{
        count,
        handleCountChange
      }}
    >
      {children}
    </ContextTest.Provider>
  )
}

function useContextTest(): ContextTestData {
  const context = useContext(ContextTest)

  if (!context) {
    throw new Error('useContextTest must be within an ContextoProvider')
  }

  return context
}

export { ContextTestProvider, useContextTest }
