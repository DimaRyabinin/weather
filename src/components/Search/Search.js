import React from 'react';
import './Search.scss';
import magnifier from '../../assets/images/magnifier.svg';



const Search = props => {
  return (
    <form className='search' onSubmit={(event) => props.handleSubmit(event.target.lastChild.value)}>
      <label htmlFor='search'><img src={magnifier} alt="" className='search__img'/></label>
      <input value={props.value} onChange={(event) => props.handleChange(event.target.value)} type="text" placeholder='Search' id='search' className='search__input'/>
    </form>
  )
}

export default Search;