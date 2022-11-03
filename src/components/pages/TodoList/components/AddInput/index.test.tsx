// External Libraries
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// Components
import { AddInput } from './index'

const mockedSetTodo = jest.fn()

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput onAddTodo={mockedSetTodo} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type into input', () => {
    render(<AddInput onAddTodo={mockedSetTodo} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } })
    expect((inputElement as HTMLInputElement).value).toBe('Go Grocery Shopping')
  })

  it('should be able to type into input and add todo', () => {
    render(<AddInput onAddTodo={mockedSetTodo} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } })
    const buttonElement = screen.getByRole('button', { name: /Add/i })
    fireEvent.click(buttonElement)
    expect(mockedSetTodo).toBeCalled()
  })

  it('should have empty input when add button is cliked', () => {
    render(<AddInput onAddTodo={mockedSetTodo} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } })
    const buttonElement = screen.getByRole('button', { name: /Add/i })
    fireEvent.click(buttonElement)
    expect((inputElement as HTMLInputElement).value).toBe('')
  })
})
