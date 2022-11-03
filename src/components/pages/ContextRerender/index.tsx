// External Libraries
import React from 'react'
import { useContextTest } from '../../../contexts/useContextTest'
import { ContextTestButton } from './components/ContextTestButton'

// Components

// Styles
import { Container } from './styles'

export const ContextRerender: React.FC = () => {
  const { count } = useContextTest()

  console.log('Rendered ContextRerender')

  return (
    <Container>
      <h4>Context Rerender</h4>

      <p>Context value: {count}</p>

      <ContextTestButton />
    </Container>
  )
}
