import React from 'react'
import './days.scss'
import Day from '../Day/Day'



const mapDay = new Map();
mapDay.set(0, 'Sunday');
mapDay.set(1, 'Monday');
mapDay.set(2, 'Tuesday');
mapDay.set(3, 'Wednesday');
mapDay.set(4, 'Thursday');
mapDay.set(5, 'Friday');
mapDay.set(6, 'Saturday');

mapDay.set(7, 'Sunday');
mapDay.set(8, 'Monday');
mapDay.set(9, 'Tuesday');
mapDay.set(10, 'Wednesday');
mapDay.set(11, 'Thursday');
mapDay.set(12, 'Friday');
mapDay.set(13, 'Saturday');

const Days = props => {
  return (
    <div className='days'>
      <Day
        id = {0}
        element = {0}
        weatherDescription = {props.days[0].day.weatherDescription}
        icon = {props.days[0].day.icon}
        main = {props.days[0].day.main}
        temperature = {props.days[0].day.temperature}
        wind = {props.days[0].day.wind}
        title = {mapDay.get(props.dayNumber)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Monday}
      />
      <Day
        id = {1}
        element = {7}
        weatherDescription = {props.days[1].day.weatherDescription}
        icon = {props.days[1].day.icon}
        main = {props.days[1].day.main}
        temperature = {props.days[1].day.temperature}
        wind = {props.days[1].day.wind}
        title = {mapDay.get(props.dayNumber + 1)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Tuesday}
      />
      <Day
        id = {2}
        element = {14}
        weatherDescription = {props.days[2].day.weatherDescription}
        icon = {props.days[2].day.icon}
        main = {props.days[2].day.main}
        temperature = {props.days[2].day.temperature}
        wind = {props.days[2].day.wind}
        title = {mapDay.get(props.dayNumber + 2)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Wednesday}
      />
      <Day
        id = {3}
        element = {21}
        weatherDescription = {props.days[3].day.weatherDescription}
        icon = {props.days[3].day.icon}
        main = {props.days[3].day.main}
        temperature = {props.days[3].day.temperature}
        wind = {props.days[3].day.wind}
        title = {mapDay.get(props.dayNumber + 3)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Thursday}
      />
      <Day
        id = {4}
        element = {28}
        weatherDescription = {props.days[4].day.weatherDescription}
        icon = {props.days[4].day.icon}
        main = {props.days[4].day.main}
        temperature = {props.days[4].day.temperature}
        wind = {props.days[4].day.wind}
        title = {mapDay.get(props.dayNumber + 4)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Friday}
      />
      <Day
        id = {5}
        element = {32}
        weatherDescription = {props.days[5].day.weatherDescription}
        icon = {props.days[5].day.icon}
        main = {props.days[5].day.main}
        temperature = {props.days[5].day.temperature}
        wind = {props.days[5].day.wind}
        title = {mapDay.get(props.dayNumber + 5)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Saturday}
      />
      <Day
        id = {6}
        element = {32}
        weatherDescription = {props.days[6].day.weatherDescription}
        icon = {props.days[6].day.icon}
        main = {props.days[6].day.main}
        temperature = {props.days[6].day.temperature}
        wind = {props.days[6].day.wind}
        title = {mapDay.get(props.dayNumber + 6)}
        handleClick = {props.handleClick}
        activeDay = {props.activeDay.Sunday}
      />
    </div>
  )
}

export default Days;