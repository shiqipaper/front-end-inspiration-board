import PropTypes from 'prop-types';
import './Card.css'; 
import { useState } from 'react';

const Card = ({ id, message, rate, onDeleteCard, onRateCard}) => {
    const [rateLike, setRate] = useState(rate || 0);

    const deleteCard = () => {
        onDeleteCard(id)
    }
    const rateCard = () => {
        onRateCard(id);
        setRate(rateLike + 1);
    }

    return (
        <div className="card">
            <div className="message">{message}</div>
            <div className="actions">
                <span>{`${rateLike}❤️`}</span>
                <button className="rate-button" onClick={rateCard}>+1</button>
                <button className = "delete-button" onClick={deleteCard}>Delete</button>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    onDeleteCard: PropTypes.func,
    onRateCard: PropTypes.func
};

export default Card;