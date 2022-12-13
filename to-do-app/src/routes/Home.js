import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HOME_TITLE, SIGN_IN, SIGN_UP, TOGGLE_TEXT } from '../utils/auth-fn';
import { theme } from '../theme';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage, USER_KEY } from '../utils/local-storage-fn';
import SignForm from '../components/SignForm';
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

export default function Home() {
  const [signState, setSignState] = useState(SIGN_UP);

  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigateTodo(checkLocalStorage());
  }, []);

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
    if (signState === SIGN_IN && token) {
      localStorage.setItem(USER_KEY, token);
      return navigateTodo(status >= 200 && status <= 299);
    }
    if (status >= 200 && status <= 299) {
      return setSignState(SIGN_IN);
    }
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{HOME_TITLE[signState]}</Title>
      <FormWrapper>
        <ToggleBtn bgColor={theme.btnColor} onClick={handleToggleClick}>
          <ToggleText>{TOGGLE_TEXT[signState]}</ToggleText>
        </ToggleBtn>
        <SignForm signState={signState} handleResponse={handleResponse} />
        <Message>{msg}</Message>
      </FormWrapper>
    </Wrapper>
  );
}
