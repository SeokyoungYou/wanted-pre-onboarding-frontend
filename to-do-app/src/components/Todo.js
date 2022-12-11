import { theme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTrash,
  faX,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
import { updateTodo, deleteTodo } from '../utils/todo-fn';
const TodoWrapper = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TodoContents = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const TodoText = styled.span`
  font-size: 16px;
`;
const TodoInput = styled.input``;
const TodoCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background-color: ${(props) => props.bgColor};
`;
const Btns = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

const CHECKBOX_COLOR = {
  [true]: theme.btnColor,
  [false]: 'white',
};
// const CHECKBOX_MSG = {
//   [true]: "완료",
//   [false]: '미완료',
// };
export default function Todo({ todo, loadTodos }) {
  const [revise, setRevise] = useState(false);
  const [complete, setComplete] = useState(todo.isCompleted);
  const [text, setText] = useState('');

  const handleRevise = () => {
    setRevise(true);
    setText(todo.todo);
    setComplete(todo.isCompleted);
  };
  const handleDelete = () => {
    deleteTodo(todo.id, handleDeleteTodo);
  };
  const handleDeleteTodo = (status) => {
    if (status >= 200 && status <= 299) {
      loadTodos();
    }
  };
  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까?') === true) {
      return setRevise(false);
    }
  };
  const handleUpdate = () => {
    const newTodo = {
      todo: text,
      isCompleted: complete,
    };
    updateTodo(todo.id, newTodo, handleUpdateTodo);
  };
  const handleUpdateTodo = (status) => {
    if (status >= 200 && status <= 299) {
      setRevise(false);
      loadTodos();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleCheckClicked = () => {
    setComplete((prev) => {
      return !prev;
    });
  };
  return (
    <TodoWrapper>
      {!revise ? (
        <>
          <TodoContents>
            <TodoCheckbox bgColor={CHECKBOX_COLOR[todo.isCompleted]} />
            <TodoText>{todo.todo}</TodoText>
          </TodoContents>
          <Btns>
            <FontAwesomeIcon icon={faPen} onClick={handleRevise} />
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
          </Btns>
        </>
      ) : (
        <>
          <TodoContents>
            <TodoCheckbox
              onClick={handleCheckClicked}
              bgColor={CHECKBOX_COLOR[complete]}
            />
            <TodoInput value={text} onChange={handleInputChange} />
          </TodoContents>
          <Btns>
            <FontAwesomeIcon icon={faX} onClick={handleCancel} />
            <FontAwesomeIcon icon={faCheck} onClick={handleUpdate} />
          </Btns>
        </>
      )}
    </TodoWrapper>
  );
}
