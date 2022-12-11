export const USER_KEY = 'user';
export const checkLocalStorage = () => {
  if (localStorage.getItem(USER_KEY)) {
    return true;
  }
  return false;
};
