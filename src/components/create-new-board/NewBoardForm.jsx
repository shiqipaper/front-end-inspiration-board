import PropTypes from 'prop-types';
import './NewBoardForm.css';
import { useState } from 'react';

const NewBoardForm = ({ submitBoard }) => {
  const [formData, setFormData] = useState({
    title: '',
    owner: '',

  });
  const [error, setError] = useState({
    title: '',
    owner: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (value.trim()) {
      setError((prevError) => ({ ...prevError, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({
      title: !formData.title.trim() ? (formData.title ? 'Invalid title' : 'Required') : '',
      owner: !formData.owner.trim() ? (formData.owner ? 'Invalid owner' : 'Required') : ''
    });
    if (formData.title.trim() && formData.owner.trim()) {
      submitBoard(formData);
      setFormData({
        title: '',
        owner: ''
      });
      setError({
        title: '',
        owner: ''
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="board-form">
      <label htmlFor="board-title">Title</label>
      <input value={formData.title} type="text" name="title" className={`input-title ${error.title || !formData.title ? 'input-error' : ''}`} onChange={handleChange} />
      <label htmlFor="board-title-error">{error.title}</label>

      <label htmlFor="board-owner">Owner&apos;s Name</label>
      <input value={formData.owner} type="text" name="owner" className={`input-owner ${error.owner || !formData.owner ? 'input-error' : ''}`} onChange={handleChange} />
      <label htmlFor="board-owner-error">{error.owner}</label>

      <label htmlFor="board-preview">{`Preview: ${formData.title ? formData.title : ''} - ${formData.owner ? formData.owner : ''}`}</label>
      <button type='submit'>Submit</button>
    </form>
  );
}

NewBoardForm.propTypes = {
  submitBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;