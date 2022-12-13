import styled from 'styled-components';
import Todo from './Todo';

const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function TodoList({ todos, loadTodos }) {
  return (
    <TodoListWrapper>
      {[...todos].reverse().map((todo) => {
        return <Todo key={todo.id} todo={todo} loadTodos={loadTodos} />;
      })}
    </TodoListWrapper>
  );
}
