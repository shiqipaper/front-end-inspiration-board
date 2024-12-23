import PropTypes from 'prop-types';
import './Board.css'; 

const Board = ({ id, title, owner, onBoardTitle, onSelectedBoard }) => {
    
    const handleClick = () => {
        onBoardTitle(id);
        onSelectedBoard(id);
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
    owner: PropTypes.string.isRequired,
    onBoardTitle: PropTypes.func.isRequired,
    onSelectBoard: PropTypes.func,
};

export default Board;