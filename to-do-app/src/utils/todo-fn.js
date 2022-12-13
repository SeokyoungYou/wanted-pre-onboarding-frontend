import axios from 'axios';
import { API_URL } from './auth-fn';
import { getUserToken } from './local-storage-fn';

export const getTodos = async (handleResponse) => {
  const token = getUserToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(`${API_URL}/todos`, config)
    .then((response) => {
      handleResponse(response.data);
    })
    .catch((error) => {});
};
export const createTodo = async (newTodo, handleResponse) => {
  const token = getUserToken();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(`${API_URL}/todos`, { todo: newTodo }, config)
    .then((response) => {
      handleResponse(response.status);
    })
    .catch((error) => {});
};
export const updateTodo = async (id, newTodo, handleResponse) => {
  const token = getUserToken();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .put(`${API_URL}/todos/${id}`, newTodo, config)
    .then((response) => {
      handleResponse(response.status);
    })
    .catch((error) => {});
};
export const deleteTodo = async (id, handleResponse) => {
  const token = getUserToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .delete(`${API_URL}/todos/${id}`, config)
    .then((response) => {
      handleResponse(response.status);
    })
    .catch((error) => {});
};
