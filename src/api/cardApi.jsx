import axios from 'axios';

const kbaseURL = 'http://127.0.0.1:5000';
// TODO get cards from backend
// TODO add card to backend

export const likeCard = (card_id) => {
    return axios
        .put(`${kbaseURL}/cards/${card_id}/like`)
        .then((response) => response.data.card)
        .catch((error) => {
            console.error('Error liking card:', error);
            throw error;
        });
};

// export const deleteCard = (card_id) => {
//     return axios
//         .delete(`${kbaseURL}/cards/${card_id}`)
//         .catch((error) => {
//             console.error(`Error deleting card ${card_id}:`, error);
//             throw error;
//         });
// };