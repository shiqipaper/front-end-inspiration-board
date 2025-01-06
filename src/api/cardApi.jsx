import axios from 'axios';
const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL


//Get all cards
export const getAllCardsApi = (id) => {
    return axios.get(`${VITE_APP_BACKEND_URL}/boards/${id}/cards`)
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
    return axios.post(`${VITE_APP_BACKEND_URL}/boards/${board_id}/cards`, newCard)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};

//Update card
export const updateCardApi = (card_id, card) => {
    
    return axios.put(`${VITE_APP_BACKEND_URL}/cards/${card_id}/like`, card)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};

//Delete card
export const deleteCardApi = (card_id, card) => {
    
    return axios.delete(`${VITE_APP_BACKEND_URL}/cards/${card_id}`, card)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("Error creating board:", error);
    });
};