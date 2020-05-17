import React from 'react'
import WriteCity from '../WriteCity/WriteCity'
import Information from '../Information/Information'



const Weather = props => {
  if (props.payload == '') {
    return <WriteCity />
  }
  else {
    return (
      <Information
        payload = {props.payload}
        activeDay = {props.activeDay}
      />
    )
  }
}

export default Weather;