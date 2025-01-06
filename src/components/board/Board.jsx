import PropTypes from 'prop-types';
import './Board.css'; 

const Board = ({ boardId, title, onSelectBoard}) => {
    const handleClick = () => {
        onSelectBoard(boardId);
    }

    return (
        <div className="board-item" onClick={handleClick}>
            <h3>{boardId}. {title}</h3>
        </div>
    );
}

Board.propTypes = {
    boardId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onSelectBoard: PropTypes.func.isRequired,
};

export default Board;