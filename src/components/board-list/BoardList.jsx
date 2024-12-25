import PropTypes from 'prop-types';
import './BoardList.css'; 
import Board from '../board/Board'; 

const BoardList = ({ boards, onSelectBoard}) => {

return (
    <div className="board-list-container">
        <h2 className="heading-board">Boards</h2>
        <ul className="board-list">
            {
                boards.map(({id, title}) => <Board
                    key={id}
                    id={id}
                    title={title}
                    onSelectBoard={onSelectBoard}
                />)
            }
        </ul>
    </div>
);
};

BoardList.propTypes = {
    boards: PropTypes.array.isRequired,
    onSelectBoard: PropTypes.func.isRequired,
  };
export default BoardList;