import axios from 'axios';
import { convertIdFromBackend, convertIdtoBackend } from '../utilities.jsx'

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

export const getAllBoardsApi = () => {
    return axios.get(`${VITE_APP_BACKEND_URL}/boards`)
    .then((response) => {
        const apiBoards = response.data;
        // console.log("apiBoards:", apiBoards);
        //const newBoards = apiBoards.map(convertIdFromBackend);
        // console.log("newBoards:", newBoards);
        return apiBoards;
    })
    .catch((error) => {
        console.error("Error fetching boards:", error);
        throw error;
    });
};

export const createAllBoardApi = (newBoard) => {
    const boardWithBoardId = convertIdtoBackend(newBoard);
    // console.log("Board with board_id:",boardWithBoardId);
    return axios.post(`${VITE_APP_BACKEND_URL}/boards`, boardWithBoardId)
    .then((response) => {
        // console.log("Created board response:",response); 
        return convertIdFromBackend(response.data.board);
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};

export const getBoardIdApi = (id) => {
    // console.log("Fetching board with ID:", id);
    return axios.get(`${VITE_APP_BACKEND_URL}/boards/${id}`)
    .then((response) => {
        // console.log("Fetched board response:", response.data); 
        return convertIdFromBackend(response.data.board);
    })
    .catch((error) => {
        console.error("Error fetching boards:", error);
    });
};


