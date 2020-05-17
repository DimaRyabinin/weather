import './details.scss'
import React from 'react'
import Country from '../Country/Country'



const Details = props => {
  return (
    <div className='details'>
      <div className='details-wrap'>
        <div className='wrapper'>
          <img className='img' src={props.weatherData.activeIcon} /> 
          <div className='details__temperature'>
            <div className='details__temperature-wrap'>
              <div className='temp'>{props.weatherData.activeTemperature}
                <div className='circle'></div>
              </div>
              <span className='celsius'>C</span>
            </div>
          </div>
        </div>
        <Country
          city = {props.cityName}
        />
        <div className='details__wind'>{`wind – ${props.weatherData.activeWind} m/s`}</div>
      </div>
    </div>
  )
}

export default Details;