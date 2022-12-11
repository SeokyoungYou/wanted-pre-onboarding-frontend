# 프로젝트 배포 링크

https://SeokyoungYou.github.io/wanted-pre-onboarding-frontend

# 프로젝트의 실행 방법

실행 경로: `wanted-pre-onboarding-frontend/to-do-app`

실행 커맨드: `$ npm run start`

# 데모 영상

![signup](https://user-images.githubusercontent.com/79842380/206914944-fd03f05b-1d2f-4ca8-a74d-40f5d7fd7a92.gif)
[회원 가입 데모]

![login](https://user-images.githubusercontent.com/79842380/206914972-05a6a23c-2040-450e-8f66-07f07b3d0a58.gif)
[로그인 데모]

![todo_screen](https://user-images.githubusercontent.com/79842380/206914985-e05fd664-85c1-44e7-93e4-ddf49c596b74.gif)
[투두 리스트 CRUD 데모]

![home_redirection](https://user-images.githubusercontent.com/79842380/206915056-0b3525e4-638f-46ac-84ff-117129bd3a47.gif)
[로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트]

![todo_redirection](https://user-images.githubusercontent.com/79842380/206915107-0966aeeb-68b2-47b1-9320-da401960948e.gif)
[로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트]

# 사용한 라이브러리

- React Router
- HTTP Client 라이브러리: Axios
- 스타일링 관련 라이브러리: Styled Component
- 아이콘 등 UI 관련 라이브러리:Font-Awesome

# 기능 구현 목록

## 1. 로그인/회원가입 기능

- `/` : 이메일, 비밀번호, 제출 입력창 ✅
- 로그인 <=> 회원가입 이동 ✅

### Assignment1 이메일/비밀번호 유효성 검사

- 이메일 조건: @ 포함 ✅
- 비밀번호 조건: 8자 이상 ✅
- 조건 만족 시에만 버튼 활성화 ✅

### Assignment2 로그인 구현

- 로그인 API 호출: 올바른 응답 시 `/todo`로 이동 ✅
- 로그인 성공 시 Response Body의 JWT를 로컬 스토리지에 저장 ✅

### Assignment3 로그인 여부 > 리다이렉트 처리

- 로컬 스토리지에 토큰이 있는 상태로 `/` 접속 => `/todo` 로 리다이렉트 ✅
- 로컬 스토리지에 토큰이 없는 상태로 `/todo`접속 => `/` 로 리다이렉트 ✅

## 2. 투두 리스트

### Assignment4 투두 리스트 CREATE & READ

- getTodos: `/todo` 경로에서 투두 리스트 목록 확인 ✅
  - 투두 내용과 완료여부 표시 ✅
- createTodo: 입력창과 추가 버튼 ✅
  - 추가 버튼을 클릭하면 새로운 투두 리스트 추가 ✅

### Assignment5 투두 리스트 UPDATE & DELETE

- updateTodo: 개별 아이템 우측에 수정 버튼 > 클릭 시 수정모드 활성화 ✅
  - 수정모드: 개별 아이템 우측에 제출/취소 버튼 ✅
- deleteTodo: 개별 아이템 우측에 삭제버튼 > 클릭시 투두 리스트 삭제 ✅
