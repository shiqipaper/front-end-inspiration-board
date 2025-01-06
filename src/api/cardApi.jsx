import axios from 'axios';
const kbaseURL = 'https://back-end-inspiration-board-52p9.onrender.com';


//Get all cards
export const getAllCardsApi = (id) => {
    return axios.get(`${kbaseURL}/boards/${id}/cards`)
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
    return axios.post(`${kbaseURL}/boards/${board_id}/cards`, newCard)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};

//Update card
export const updateCardApi = (card_id, card) => {
    
    return axios.put(`${kbaseURL}/cards/${card_id}/like`, card)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};

//Delete card
export const deleteCardApi = (card_id, card) => {
    
    return axios.delete(`${kbaseURL}/cards/${card_id}`, card)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};