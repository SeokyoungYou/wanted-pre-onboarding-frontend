import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HOME_TITLE,
  postAuth,
  SIGN_IN,
  SIGN_UP,
  SUBMIT_BTN,
  TOGGLE_TEXT,
} from '../utils/auth-fn';
import { theme } from '../theme';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage, USER_KEY } from '../utils/local-storage-fn';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 80%;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.span`
  font-size: 14px;
`;
const Input = styled.input`
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
  :valid {
    background-color: white;
  }
  :invalid {
    background-color: #eff5f5;
  }
`;
const SubmitBtn = styled.input`
  border: none;
  font-size: 16px;
  background-color: ${(props) => props.bgColor};
  padding: 12px;
  border-radius: 10px;
  color: white;
`;

const Message = styled.span`
  margin-top: 10px;
`;

const ToggleBtn = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
const ToggleText = styled.span`
  font-size: 14px;
  color: white;
`;
const initialForm = {
  email: '',
  password: '',
};
export default function Home() {
  const [signState, setSignState] = useState(SIGN_UP);
  const [form, setForm] = useState(initialForm);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigateTodo(checkLocalStorage());
  }, []);
  useEffect(() => {
    setForm(initialForm);
  }, [signState]);
  const handleChange = (e) => {
    setForm((prev) => {
      const newForm = { ...prev, [e.target.id]: e.target.value };
      return newForm;
    });
  };

  const handleToggleClick = () => {
    setSignState((prevState) => {
      if (prevState === SIGN_UP) {
        return SIGN_IN;
      }
      return SIGN_UP;
    });
  };

  const navigateTodo = (condition) => {
    if (condition) {
      navigate('/todo');
    }
  };

  const handleResponse = (messeage, status, token = '') => {
    setMsg(messeage);
    if (token) {
      localStorage.setItem(USER_KEY, token);
    }
    navigateTodo(status >= 200 && status <= 299);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAuth(form, signState, handleResponse);
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{HOME_TITLE[signState]}</Title>
      <FormWrapper>
        <ToggleBtn bgColor={theme.btnColor} onClick={handleToggleClick}>
          <ToggleText>{TOGGLE_TEXT[signState]}</ToggleText>
        </ToggleBtn>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputLabel for="email">이메일 주소</InputLabel>
            <Input
              type="email"
              id="email"
              required
              placeholder="이메일 주소를 입력하세요."
              value={form.email}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel for="password">비밀번호</InputLabel>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              minLength={8}
              value={form.password}
              required
              onChange={handleChange}
            />
          </InputWrapper>
          <SubmitBtn
            type="submit"
            bgColor={theme.btnColor}
            value={SUBMIT_BTN[signState]}
          />
        </Form>
        <Message>{msg}</Message>
      </FormWrapper>
    </Wrapper>
  );
}
