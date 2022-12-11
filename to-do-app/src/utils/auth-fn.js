import axios from 'axios';

export const API_URL = 'https://pre-onboarding-selection-task.shop';

const RES_MSG = {
  SUCCESS(SignState) {
    return `${HOME_TITLE[SignState]}에 성공하였습니다`;
  },
  FAIL(SignState) {
    return `${HOME_TITLE[SignState]}에 실패하였습니다. 재시도해주세요.`;
  },
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const HOME_TITLE = {
  SIGN_UP: '회원 가입',
  SIGN_IN: '로그인',
};
export const SUBMIT_BTN = {
  SIGN_UP: '계정 생성',
  SIGN_IN: '로그인',
};
export const TOGGLE_TEXT = {
  SIGN_UP: '로그인으로 이동하기',
  SIGN_IN: '회원 가입으로 이동하기',
};

const SIGN_URL = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/signin`,
};
export const postAuth = async (data, signState, handleResponse) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await axios
    .post(SIGN_URL[signState], data, config)
    .then(function (response) {
      console.log(response);
      handleResponse(
        RES_MSG.SUCCESS(signState),
        response.status,
        response.data.access_token,
      );
    })
    .catch(function (error) {
      console.log(error);
      handleResponse(RES_MSG.FAIL(signState), error.status);
    });
};
