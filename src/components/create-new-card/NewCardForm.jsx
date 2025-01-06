import PropTypes from 'prop-types';
import './NewCardForm.css'; 
import { useState } from 'react';

const NewCardForm = ({ onAddCard }) => {
    const [formCard, setFormCard] = useState('');
    const [error, setError] = useState('');

    const handleCardChange = (event) => {
            setFormCard(event.target.value);
            if (event.target.value.length <= 40 && (event.target.value.trim() !== '')) {
                setError('');
            };
        };

    const handleCardSubmit = (event) => {
        event.preventDefault();

        if (!formCard) {
            setError('Required');
            return;
        }
        if (formCard.length > 40) {
            setError('Card message must not exceed 40 characters');
            return;
        }
        if (!formCard.trim()) {
            setError('Invalid message');
            return;
        }
        
        const newCard = {
            message: formCard,
        };
        setError('');
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
            <label htmlFor="card-error">{error}</label>
            <label htmlFor="card-preview">{`Preview: ${formCard ? formCard : ''}`}</label>
            <label htmlFor="card-character-count-preview">{`${formCard ? formCard.length : '0'} / 40`}</label>
            <button type='submit'>Submit</button>
        </form>
    );
}

NewCardForm.propTypes = {
    onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;