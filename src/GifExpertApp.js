import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

  const [categories, setCategories] = useState(['One Punch']);

  /* const handleAdd = () => {
    setCategories([...categories,'HunterXHunter']);
  } */

  return (
    <div>
      <h2>GifExprertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr></hr>

      <ul>
        {
          categories.map( category => 
            < GifGrid 
              key={ category }  
              category = {category} />
          )
        }
      </ul>
    </div>
  )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
  