export const USER_KEY = 'user';
export const checkLocalStorage = () => {
  if (getUserToken()) {
    return true;
  }
  return false;
};

export const getUserToken = () => {
  return localStorage.getItem(USER_KEY);
};
