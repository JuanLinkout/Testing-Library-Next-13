import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
  padding: 1rem;

  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
`

export const Input = styled.input`
  border: none;
  width: 90%;

  :focus {
    outline: none;
  }
`

export const AddButton = styled.button`
  border: none;
  padding: 0.3rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(53, 201, 157);
  color: white;
  font-weight: 900;
  cursor: pointer;
`
