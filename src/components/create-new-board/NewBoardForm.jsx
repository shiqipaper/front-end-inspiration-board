import PropTypes from 'prop-types';
import './NewBoardForm.css'; 
import { useState } from 'react';

const NewBoardForm = ({ submitBoard }) => {
    const [ formData, setFormData ] = useState({
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
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if(!formData.title && !formData.owner){
            setError({
                owner: 'Required',
                title: 'Required'
            });
        }else if(!formData.title){
            setError({
                owner: '',
                title: 'Required'
            });
        } else if(!formData.owner){
            setError({
                title: '',
                owner: 'Required'
            });
        }
        
        if(formData.title && formData.owner){
            submitBoard(formData)
            setFormData({
                title: '',
                owner: '',
        
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
            <input value={formData.title} type="text" name="title" className="input-title" onChange={handleChange}/>
            <label htmlFor="board-title-error">{error.title}</label>

            <label htmlFor="board-owner">Owner's Name</label>
            <input value={formData.owner} type="text" name = "owner" className="input-owner" onChange={handleChange}/>
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