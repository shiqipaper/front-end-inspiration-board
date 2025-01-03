import axios from 'axios';

const kbaseURL = 'http://127.0.0.1:5000';

export const getAllBoardsApi = () => {
    return axios.get(`${kbaseURL}/boards`)
    .then((response) => {
        const apiBoards = response.data;
        return apiBoards.map(board => ({
        id: board.id,
        title: board.title,
        owner: board.owner
    }));
    })
    .catch((error) => {
        console.error("Error fetching boards:", error);
    });
};

export const createAllBoardApi = (newBoard) => {
    return axios.post(`${kbaseURL}/boards`, newBoard)
    .then((response) => {
        return response.data.board;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};