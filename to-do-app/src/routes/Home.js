import styled from 'styled-components';
import { theme } from '../theme';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignInWrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 80%;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Form = styled.form``;
const InputWrapper = styled.div``;
const InputLabel = styled.span``;
const Input = styled.input`
  border: none;
  :valid {
    background-color: white;
  }
  :invalid {
    background-color: #ffcbd1;
  }
`;
const SubmitBtn = styled.input`
  border: none;
`;

export default function Home() {
  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>회원 가입</Title>
      <SignInWrapper>
        <Form>
          <InputWrapper>
            <InputLabel for="email">이메일 주소</InputLabel>
            <Input
              type="email"
              id="email"
              required
              placeholder="이메일 주소를 입력하세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel for="password">비밀번호</InputLabel>
            <Input type="password" id="password" minLength={8} required />
          </InputWrapper>
          <SubmitBtn type="submit" />
        </Form>
      </SignInWrapper>
    </Wrapper>
  );
}
