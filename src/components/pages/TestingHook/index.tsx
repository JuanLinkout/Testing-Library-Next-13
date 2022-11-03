// External Libraries
import React from 'react'
import { useContextTest } from '../../../contexts/useContextTest'
import { useCount } from './hooks/useCount'

// Components

// Styles
import { Container } from './styles'

export const TestingHook: React.FC = () => {
  const { count } = useCount()

  return <Container></Container>
}
