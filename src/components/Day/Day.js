import React from 'react';
import './day.scss';



const Day = props => {
  return (
    <div className='day' onClick={(event) => {props.handleClick(props.id, props.temperature, props.weatherDescription, props.wind, props.element, props.list, event)}}>
      <div className='day-wrap'>
        <img className='day-wrap__icon' src={props.icon} />
        <div className='day-wrapper'>
          <div className='day-wrap__title'>{props.title}</div>
          <div className='day-wrap__subtitle'>{props.main}</div>
        </div>
      </div>
      <div className={`day__temperature ${props.activeDay}`}>
        <div className='day__temperature-wrap'>
          <div className='temp'>{props.temperature}
            <div className='circle'></div>
          </div>
          <span className='celsius'>C</span>
        </div>
      </div>
    </div>
  )
}

export default Day;