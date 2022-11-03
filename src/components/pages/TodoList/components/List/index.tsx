// External Libraries
import React from 'react'

// Types
import { ITodo } from '../../../../../services/types/Todo'

// Styles
import { Container, ListContainer, TodoItem } from './styles'

interface Props {
  todos: ITodo[] | undefined
  onTaskStatusChange: (taskId: number) => void
}

export const List: React.FC<Props> = ({ todos, onTaskStatusChange }) => {
  // Functions
  function renderTodos() {
    return todos?.map(item => (
      <TodoItem key={item.id} onClick={() => onTaskStatusChange(item.id)}>
        {item.title} - {item.completed ? 'completed' : 'on going'}
      </TodoItem>
    ))
  }

  return (
    <Container>
      <ListContainer>{renderTodos()}</ListContainer>
    </Container>
  )
}
