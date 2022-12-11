import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage } from '../utils/local-storage-fn';
import styled from 'styled-components';
import { theme } from '../theme';
import { getTodos, createTodo } from '../utils/todo-fn.js';

import Todo from '../components/Todo';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const TodoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

export default function TodoScreen() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    navigateHome(!checkLocalStorage());
    loadTodos();
  }, []);

  const loadTodos = () => {
    getTodos(handleGetTodos);
  };

  const navigateHome = (condition) => {
    if (condition) {
      navigate('/');
    }
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    createTodo(newTodo, handleCreateTodo);
  };

  const handleCreateTodo = (status) => {
    if (status >= 200 && status <= 299) {
      setNewTodo('');
      loadTodos();
    }
  };

  const handleGetTodos = (todos) => {
    setTodos(todos);
  };

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>Todo list</Title>
      <TodoWrapper>
        <CreateTodoForm onSubmit={handleSubmitTodo}>
          <CreateTodoInput
            type="text"
            id="new-todo"
            required
            placeholder="새로운 투두 리스트를 추가하세요."
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <CreateTodoSubmit
            type="submit"
            bgColor={theme.btnColor}
            value="추가"
          />
        </CreateTodoForm>
        {todos.length === 0 ? (
          <span>투두 리스트가 없습니다.</span>
        ) : (
          <TodoList>
            {[...todos].reverse().map((todo) => {
              return <Todo key={todo.id} todo={todo} loadTodos={loadTodos} />;
            })}
          </TodoList>
        )}
      </TodoWrapper>
    </Wrapper>
  );
}
