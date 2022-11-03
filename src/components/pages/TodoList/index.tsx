// External Libraries
import React, { useState } from 'react'

// Components
import { List } from './components/List'
import { AddInput } from './components/AddInput'

// Types
import { ITodo } from '../../../services/types/Todo'

// Styles
import { Container, Wrapper } from './styles'

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>()

  // Functions
  function handleAddTodo(todo: ITodo) {
    if (todos) setTodos([...todos, todo])
    else setTodos([todo])
  }

  function updateTaskStatus(taskId: number) {
    const updated = todos?.map(item => {
      if (item.id === taskId) return { ...item, completed: !item.completed }
      return item
    })

    setTodos(updated)
  }

  return (
    <Container>
      <Wrapper>
        <AddInput onAddTodo={handleAddTodo} />

        <List todos={todos} onTaskStatusChange={updateTaskStatus} />
      </Wrapper>
    </Container>
  )
}
