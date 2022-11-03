import styled from 'styled-components'

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  margin-top: 2rem;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
`

export const ListContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const TodoItem = styled.button`
  display: flex;
  padding: 1rem 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.082);
`
