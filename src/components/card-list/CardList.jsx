import PropTypes from 'prop-types';
import './CardList.css';
import Card from '../card/Card';

const CardList = ({ cards, onDeleteCard, onRateCard }) => {
  return (
    <div className="card-list">
      {cards.map(({ card_id, message, likes_count }) => (
        <Card
          key={card_id}
          card_id={card_id}
          message={message}
          likes_count={likes_count}
          onDeleteCard={onDeleteCard}
          onRateCard={onRateCard}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
    onRateCard: PropTypes.func.isRequired
};
export default CardList;