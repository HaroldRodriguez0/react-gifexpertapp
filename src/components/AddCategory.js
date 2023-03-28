import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('Escriba la serie a buscar');
  const handleinputChange = (e) => {
    setinputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2){
      setCategories(categ => [inputValue,...categ]);
      setinputValue('');
    }
  }
  const handleSubmitClick = () => {
    setinputValue('');
  }
  
  return (
    <form onSubmit={ handleSubmit } onClick={ handleSubmitClick }>
      <input 
        types="text" 
        value={inputValue}
        onChange = { handleinputChange}  
      />
    </form>
  )
} 

AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
}

export default AddCategory
