import PropTypes from 'prop-types';
import './Board.css'; 

const Board = ({ id, title, owner }) => {
    return (
        <div className="board-item">
            <h3></h3>
            <h3>{id}. {title}</h3>
        </div>
    );
}

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

export default Board;