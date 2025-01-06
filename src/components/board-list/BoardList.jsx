import PropTypes from 'prop-types';
import './BoardList.css'; 
import Board from '../board/Board'; 

const BoardList = ({ boards, onSelectBoard}) => {
    return (
        <div className="board-list-container">
            <h2 className="heading-board">Boards</h2>
            <ul className="board-list">
                {boards.map(({board_id: boardId, title}) => (
                        <li key={boardId}>
                            <Board
                                boardId={boardId}
                                title={title}
                                onSelectBoard={onSelectBoard}
                            />
                    </li>
                ))}
            </ul>
        </div>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSelectBoard: PropTypes.func.isRequired,
};
export default BoardList;