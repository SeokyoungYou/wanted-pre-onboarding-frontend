import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { createTodo } from '../utils/todo-fn';

const CreateTodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const CreateTodoInput = styled.input`
  border: none;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
`;
const CreateTodoSubmit = styled.input`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
`;

export default function TodoForm({ loadTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    createTodo(newTodo, handleCreateTodo);
  };

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleCreateTodo = (status) => {
    if (status >= 200 && status <= 299) {
      setNewTodo('');
      loadTodos();
    }
  };
  return (
    <CreateTodoForm onSubmit={handleSubmitTodo}>
      <CreateTodoInput
        type="text"
        id="new-todo"
        required
        placeholder="새로운 투두 리스트를 추가하세요."
        value={newTodo}
        onChange={handleNewTodoChange}
      />
      <CreateTodoSubmit type="submit" bgColor={theme.btnColor} value="추가" />
    </CreateTodoForm>
  );
}
