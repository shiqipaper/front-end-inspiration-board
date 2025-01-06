import PropTypes from 'prop-types';
import './SelectedBoard.css'; 

const SelectedBoard = ({ selectedTitle,selectedBoardID }) => {
    return (
        <div className="selected-board-item">
            <h3>{`${selectedBoardID}. ${selectedTitle}`}</h3>
        </div>
    );
}

SelectedBoard.propTypes = {
    selectedTitle: PropTypes.string.isRequired,
    selectedBoardID: PropTypes.number.isRequired
};

export default SelectedBoard;