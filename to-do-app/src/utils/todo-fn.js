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
  await axios
    .get(`${API_URL}/todos`, config)
    .then(function (response) {
      console.log(response);
      handleResponse(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
