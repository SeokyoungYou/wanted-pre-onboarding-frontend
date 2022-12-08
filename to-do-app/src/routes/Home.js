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
  justify-content: center;
  align-items: center;
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
  background-color: ${(props) => props.bgColor};
  padding: 12px;
  border-radius: 10px;
  color: white;
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
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              minLength={8}
              required
            />
          </InputWrapper>
          <SubmitBtn type="submit" bgColor={theme.btnColor} />
        </Form>
      </SignInWrapper>
    </Wrapper>
  );
}
