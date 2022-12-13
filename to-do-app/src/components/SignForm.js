import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { postAuth, SUBMIT_BTN } from '../utils/auth-fn';
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
const initialForm = {
  email: '',
  password: '',
};

export default function SignForm({ signState, handleResponse }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setForm(initialForm);
  }, [signState]);

  const handleChange = (e) => {
    setForm((prev) => {
      const newForm = { ...prev, [e.target.id]: e.target.value };
      return newForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAuth(form, signState, handleResponse);
  };
  return (
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
  );
}
