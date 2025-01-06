import PropTypes from 'prop-types';
import './CardList.css';
import Card from '../card/Card';
import { useState, useEffect } from 'react';

const CardList = ({ cards, onDeleteCard, onRateCard }) => {
    const [isSortByRate, setIsSortByRate] = useState(false);
    const [sortedCards, setSortedCards] = useState(cards);

    useEffect(() => {
        if (isSortByRate) {
            const sorted = [...cards].sort((a, b) => b.likes_count - a.likes_count);
            setSortedCards(sorted);
        } else {
            setSortedCards(cards);
        }
    }, [isSortByRate, cards]); 

    const handleSortByRate = () => {
        setIsSortByRate(true); 
    };

    const handleResetSorting = () => {
        setIsSortByRate(false);
    };

    return (
        <div className="card-list">
            <div className="sortcards">
                <button onClick={handleSortByRate}>Sort by Likes</button>
                <button onClick={handleResetSorting}>Reset</button>
            </div>
            {
                sortedCards.map(({ card_id, message, likes_count }) => <Card
                    key={card_id}
                    card_id={card_id}
                    message={message}
                    likes_count={likes_count}
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