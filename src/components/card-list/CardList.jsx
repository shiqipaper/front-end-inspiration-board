import PropTypes from 'prop-types';
import './CardList.css'; 
import Card from '../card/Card'; 

const CardList = ({ cards, onDeleteCard, onRateCard}) => {

return (
    <div className="card-list">
            {
                cards.map(({id, message, rate}) => <Card
                    key={id}
                    id={id}
                    message={message}
                    rate={rate}
                    onDeleteCard={onDeleteCard}
                    onRateCard={onRateCard}
                />)
            }
    </div>
);
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    onDeleteCard: PropTypes.func.isRequired,
    onRateCard: PropTypes.func.isRequired
  };
export default CardList;