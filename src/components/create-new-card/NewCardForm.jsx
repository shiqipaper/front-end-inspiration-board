import PropTypes from 'prop-types';
import './NewCardForm.css';
import { useState } from 'react';

const NewCardForm = ({ onAddCard }) => {
  const [formCard, setFormCard] = useState('');
  const [error, setError] = useState('');
  const characterLimit = 40;
  const characterLimitError = `Card message must not exceed ${characterLimit} characters`;

  const handleCardChange = (event) => {
    setFormCard(event.target.value);
    if (event.target.value.length > characterLimit) {
      setError(characterLimitError);
    };
    if (event.target.value.length <= characterLimit && (event.target.value.trim() !== '')) {
      setError('');
    };
  };

  const handleCardSubmit = (event) => {
    event.preventDefault();

    if (!formCard) {
      setError('Required');
      return;
    }
    if (formCard.length > characterLimit) {
      setError(characterLimitError);
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
        className={`input-message ${error || formCard.length > characterLimit || !formCard ? 'input-error' : ''}`}
        value={formCard}
        onChange={handleCardChange}
      />
      <label htmlFor="card-error">{error}</label>
      <label htmlFor="card-preview">{`Preview: ${formCard ? formCard : ''}`}</label>
      <label htmlFor="card-character-count-preview">{`Characters remaining: ${formCard ? (characterLimit - formCard.length) : characterLimit}`}</label>
      <button type='submit'>Submit</button>
    </form>
  );
}

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;