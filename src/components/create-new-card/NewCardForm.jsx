import PropTypes from 'prop-types';
import './NewCardForm.css'; 
import { useState } from 'react';

const NewCardForm = ({ onAddCard }) => {
    const [formCard, setFormCard] = useState('');

    const handleCardChange = (event) => {
            setFormCard(event.target.value);
        };

    const handleCardSubmit = (event) => {
        event.preventDefault();
        const newCard = {
            message: formCard,
        };
        onAddCard(newCard);
        setFormCard('');
    };

    return (
        <form onSubmit={handleCardSubmit} className="card-form">
            <label htmlFor="card-message">Message</label>
            <input 
                type="text" 
                name="message" 
                className="input-message" 
                value={formCard}
                onChange={handleCardChange}
                />
            <label htmlFor="card-preview">{`Preview: ${formCard ? formCard : ''}`}</label>
            <button type='submit'>Submit</button>
        </form>
    );
}

NewCardForm.propTypes = {
    onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;