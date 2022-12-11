import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage } from '../utils/local-storage-fn';

export default function TodoScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    navigateHome(!checkLocalStorage());
  }, []);

  const navigateHome = (condition) => {
    if (condition) {
      navigate('/');
    }
  };
  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
}
