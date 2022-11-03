// External Libraries
import React from 'react'
import { useContextTest } from '../../../../../contexts/useContextTest'

// Components

// Styles
import { Container } from './styles'

export const ContextTestButton: React.FC = () => {
  const { count, handleCountChange } = useContextTest()

  console.log('Rendered ContextTextButton')

  return (
    <Container>
      <button onClick={() => handleCountChange(count + 1)}>Add 1</button>
    </Container>
  )
}
