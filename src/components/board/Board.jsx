import PropTypes from 'prop-types';
import './Board.css'; 

const Board = ({ id, title, onSelectBoard}) => {
    
    const handleClick = () => {
        onSelectBoard(id);
    }

    return (
        <div className="board-item" onClick={handleClick}>
            <h3>{id}. {title}</h3>
        </div>
    );
}

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onSelectBoard: PropTypes.func,
};

export default Board;