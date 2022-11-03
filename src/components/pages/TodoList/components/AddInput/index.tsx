// External Libraries
import React, { useState } from 'react'

// Types
import { ITodo } from '../../../../../services/types/Todo'

// Styles
import { AddButton, Container, Input } from './styles'

interface Props {
  onAddTodo: (todo: ITodo) => void
}

export const AddInput: React.FC<Props> = ({ onAddTodo }) => {
  // States
  const [value, setValue] = useState('')

  // Functions
  function handleAddClick() {
    if (!value) return
    onAddTodo({ id: Date.now(), title: value, completed: false })
    setValue('')
  }

  return (
    <Container>
      <Input
        data-testid="input-element"
        value={value}
        placeholder="Add a new task here..."
        onChange={e => setValue(e.target.value)}
      />
      <AddButton onClick={handleAddClick}>Add</AddButton>
    </Container>
  )
}
