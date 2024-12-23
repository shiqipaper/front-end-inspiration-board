import PropTypes from 'prop-types';
import './BoardList.css'; 
import Board from './Board'; 

const BoardList = ({ boardData, onBoardTitle, onSelectedBoard}) => {
    const boardComponents = boardData.map((board,i) => {
    return (
        <Board
            key={i}
            id={board.id}
            title={board.title}
            owner={board.owner}
            onBoardTitle={onBoardTitle}
            onSelectedBoard={onSelectedBoard}
        />
);
});
return (
    <div className="board-list-container">
        <h2 className="heading-board">Boards</h2>
        <ul className="board-list">
            {boardComponents}
        </ul>
    </div>
);
};

BoardList.propTypes = {
    boardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
    ).isRequired,
    onBoardTitle: PropTypes.func.isRequired,
    onSelectedBoard: PropTypes.func.isRequired,
};
export default BoardList;