import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage } from '../utils/local-storage-fn';
import styled from 'styled-components';
import { theme } from '../theme';
import { getTodos } from '../utils/todo-fn.js';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

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

export default function TodoScreen() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

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

  const handleGetTodos = (todos) => {
    setTodos(todos);
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>Todo list</Title>
      <TodoWrapper>
        <TodoForm loadTodos={loadTodos} />
        {todos.length === 0 ? (
          <span>투두 리스트가 없습니다.</span>
        ) : (
          <TodoList todos={todos} loadTodos={loadTodos} />
        )}
      </TodoWrapper>
    </Wrapper>
  );
}
