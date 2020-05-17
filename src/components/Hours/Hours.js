import './hours.scss'
import React from 'react'
import Hour from '../Hour/Hour'



const Hours = props => {
  return (
    <div className='hours'>
      <Hour
        time = {props.weatherDay[0].time}
        date = {props.weatherDay[0].date}
        temperature = {props.weatherDay[0].temperature}
        icon = {props.weatherDay[0].icon}
      />
      <Hour
        time = {props.weatherDay[1].time}
        date = {props.weatherDay[1].date}
        temperature = {props.weatherDay[1].temperature}
        icon = {props.weatherDay[1].icon}
      />
      <Hour
        time = {props.weatherDay[2].time}
        date = {props.weatherDay[2].date}
        temperature = {props.weatherDay[2].temperature}
        icon = {props.weatherDay[2].icon}
      />
      <Hour
        time = {props.weatherDay[3].time}
        date = {props.weatherDay[3].date}
        temperature = {props.weatherDay[3].temperature}
        icon = {props.weatherDay[3].icon}
      />
      <Hour
        time = {props.weatherDay[4].time}
        date = {props.weatherDay[4].date}
        temperature = {props.weatherDay[4].temperature}
        icon = {props.weatherDay[4].icon}
      />
      <Hour
        time = {props.weatherDay[5].time}
        date = {props.weatherDay[5].date}
        temperature = {props.weatherDay[5].temperature}
        icon = {props.weatherDay[5].icon}
      />
      <Hour
        time = {props.weatherDay[6].time}
        date = {props.weatherDay[6].date}
        temperature = {props.weatherDay[6].temperature}
        icon = {props.weatherDay[6].icon}
      />
      <Hour
        time = {props.weatherDay[7].time}
        date = {props.weatherDay[7].date}
        temperature = {props.weatherDay[7].temperature}
        icon = {props.weatherDay[7].icon}
      />
    </div>
  )
}

export default Hours;