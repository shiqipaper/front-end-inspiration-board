import axios from 'axios';
import { convertIdFromBackend, convertIdtoBackend } from '../utilities.jsx'

const kbaseURL = 'http://127.0.0.1:5000';

export const getAllBoardsApi = () => {
    return axios.get(`${kbaseURL}/boards`)
    .then((response) => {
        const apiBoards = response.data;
        // console.log("apiBoards:", apiBoards);
        const newBoards = apiBoards.map(convertIdFromBackend);
        // console.log("newBoards:", newBoards);
        return newBoards;
    })
    .catch((error) => {
        console.error("Error fetching boards:", error);
        throw error;
    });
};

export const createAllBoardApi = (newBoard) => {
    const boardWithBoardId = convertIdtoBackend(newBoard);
    // console.log("Board with board_id:",boardWithBoardId);
    return axios.post(`${kbaseURL}/boards`, boardWithBoardId)
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
    return axios.get(`${kbaseURL}/boards/${id}`)
    .then((response) => {
        // console.log("Fetched board response:", response.data); 
        return convertIdFromBackend(response.data.board);
    })
    .catch((error) => {
        console.error("Error fetching boards:", error);
    });
};

export const createCardApi = (boardId, newCard) => {
    // console.log("Creating card for board ID:", boardId); // Debugging statement
    // console.log("New card data:", newCard); // Debugging statement
    return axios.post(`${kbaseURL}/boards/${boardId}/cards`, newCard)
        .then((response) => {
            // console.log("Created card response:", response.data); // Debugging statement
            const card = convertIdFromBackend(response.data.card);
            card.rate = card.rate || 0;
            return card;
        })
        .catch((error) => {
            console.log("Error creating card:", error);
        });
};

