import PropTypes from 'prop-types';
import './SelectedBoard.css'; 

const SelectedBoard = ({ selectedTitle }) => {
    return (
        <div className="selected-board-item">
            <h3>{selectedTitle}</h3>
        </div>
    );
}

SelectedBoard.propTypes = {
    selectedTitle: PropTypes.string.isRequired,
};

export default SelectedBoard;