import styled from 'styled-components';
import { theme } from '../theme';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInWrapper = styled.div`
  background-color: white;
  width: 80%;
  height: 80%;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default function Home() {
  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <SignInWrapper>
        <Title>Homeee</Title>
      </SignInWrapper>
    </Wrapper>
  );
}
