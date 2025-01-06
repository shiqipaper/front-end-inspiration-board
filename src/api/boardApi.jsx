import axios from 'axios';
import { convertIdFromBackend, convertIdtoBackend } from '../utilities.jsx'

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

export const getAllBoardsApi = () => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards`)
    .then((response) => {
      const apiBoards = response.data;
      return apiBoards;
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
      throw error;
    });
};

export const createAllBoardApi = (newBoard) => {
  const boardWithBoardId = convertIdtoBackend(newBoard);
  return axios.post(`${VITE_APP_BACKEND_URL}/boards`, boardWithBoardId)
    .then((response) => {
      return convertIdFromBackend(response.data.board);
    })
    .catch((error) => {
      console.log("Error creating board:", error);
    });
};

export const getBoardIdApi = (id) => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards/${id}`)
    .then((response) => {
      return convertIdFromBackend(response.data.board);
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
};


