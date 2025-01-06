import PropTypes from 'prop-types';
import './Card.css'; 


const Card = ({ card_id, message, likes_count, onDeleteCard, onRateCard}) => {
    
    const deleteCard = () => {
        onDeleteCard(card_id)
    }
    const rateCard = () => {
        onRateCard(card_id)
    }

    return (
        <div className="card">
            <div className="message">{message}</div>
            <div className="actions">
                <span>{`${likes_count}❤️`}</span>
                <button className="rate-button" onClick={rateCard}>+1</button>
                <button className = "delete-button" onClick={deleteCard}>Delete</button>
            </div>
        </div>
    );
}

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    onDeleteCard: PropTypes.func,
    onRateCard: PropTypes.func
};

export default Card;