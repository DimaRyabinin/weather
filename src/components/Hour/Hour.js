import './hour.scss'
import React from 'react'



const Hour = props => {
  return (
    <div>
      <div className='hour'>
        <div className='hour-wrapper'>
          <div className='hour__time'>{props.time}</div>
          <div className='hour__date'>{props.date}</div>
        </div>
        <img className='hour__icon' src={props.icon} />
        <div className='hour__temperature'>{props.temperature}<span className='circle'></span></div>
      </div>
      <hr />
    </div>
  )
}

export default Hour;