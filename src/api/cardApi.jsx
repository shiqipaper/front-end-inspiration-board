import axios from 'axios';
const kbaseURL = 'https://back-end-inspiration-board-52p9.onrender.com/boards';


//Get all cards
export const getAllCardsApi = (id) => {
    return axios.get(`${kbaseURL}/${id}/cards`)
    .then((response) => {
        const apiCards = response.data;
        const newCards = apiCards.cards;
        return newCards;
    })
    .catch((error) => {
        console.error("Error fetching cards:", error);
        throw error;
    });
};

//Create card
export const createCardApi = (board_id, newCard) => {
    // console.log("Board with board_id:",boardWithBoardId);
    return axios.post(`${kbaseURL}/${board_id}/cards`, newCard)
    .then((response) => {
        console.log("card: ",response)
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};