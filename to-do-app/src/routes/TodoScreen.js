import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage } from '../utils/local-storage-fn';
import styled from 'styled-components';
import { theme } from '../theme';
import { getTodos } from '../utils/todo-fn.js';

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
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Todo = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TodoText = styled.span`
  font-size: 16px;
`;
const TodoCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background-color: ${(props) => props.bgColor};
`;

const CHECKBOX_COLOR = {
  [true]: theme.btnColor,
  [false]: 'white',
};
export default function TodoScreen() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    navigateHome(!checkLocalStorage());
    getTodos(handleGetTodos);
  }, []);

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
        {todos.length === 0 ? (
          <span>투두 리스트가 없습니다.</span>
        ) : (
          <TodoList>
            {todos.map((todo) => {
              return (
                <Todo>
                  <TodoCheckbox bgColor={CHECKBOX_COLOR[todo.isCompleted]} />
                  <TodoText>{todo.todo}</TodoText>
                </Todo>
              );
            })}
          </TodoList>
        )}
      </TodoWrapper>
    </Wrapper>
  );
}
