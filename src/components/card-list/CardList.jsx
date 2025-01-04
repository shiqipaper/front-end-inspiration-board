import PropTypes from 'prop-types';
import './CardList.css';
import Card from '../card/Card';


const CardList = ({ cards, onRateCard, onDeleteCard }) => {
    return (
        <div className="card-list">
            {cards.map(({ id, message, likes_count }) => (
                <Card
                    key={id}
                    id={id}
                    message={message}
                    rate={likes_count}
                    onRateCard={onRateCard}
                    onDeleteCard={onDeleteCard}
                />
            ))}
        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    onRateCard: PropTypes.func.isRequired,
    onDeleteCard: PropTypes.func.isRequired
};

export default CardList;