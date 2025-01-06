import PropTypes from 'prop-types';
import './SelectedBoard.css'; 

const SelectedBoard = ({ selectedTitle, selectedBoardID, selectedBoardOwner }) => {
    return (
        <div className="selected-board-item">
            <h3>{`${selectedBoardID}. ${selectedTitle} - ${selectedBoardOwner}`}</h3>
        </div>
    );
}

SelectedBoard.propTypes = {
    selectedTitle: PropTypes.string.isRequired,
    selectedBoardID: PropTypes.number.isRequired,
    selectedBoardOwner: PropTypes.string.isRequired,
};

export default SelectedBoard;