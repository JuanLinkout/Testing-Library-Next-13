// External Libraries
import Link from 'next/link'
import React from 'react'

// Components

// Styles
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Link href={'/context-rerender'}>Context Rerender</Link>
      <Link href={'/testing-hooks'}>Testing Hooks</Link>
    </Container>
  )
}
