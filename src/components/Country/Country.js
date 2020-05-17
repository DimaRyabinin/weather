import './country.scss'
import React from 'react'



const Country = props => {
  return (
    <div className='country-wrapper'>
      <div className='details__city'>{props.city}</div>
    </div>
  )
}

export default Country;