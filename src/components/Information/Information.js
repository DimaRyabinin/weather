import './information.scss'
import React from 'react'
import Days from '../Days/Days'
import Hours from '../Hours/Hours'
import Details from '../Details/Details'

import CloudMoon from '../../assets/images/icon/icon-cloud-moon.svg'
import SmallRain from '../../assets/images/icon/icon-cloud-smallRain.svg'
import Clouds from '../../assets/images/icon/icon-clouds.svg'
import HeavyCloud from '../../assets/images/icon/icon-HeavyCloud.svg'
import Moon from '../../assets/images/icon/icon-moon.svg'
import Snow from '../../assets/images/icon/icon-snow.svg'
import SunCload from '../../assets/images/icon/icon-sun-cloud.svg'
import Sun from '../../assets/images/icon/icon-sun.svg'



const key = 'd30857c9b0a2cdd8848d6b06dc0c5321';
let date = new Date();
let dayNumber = null;

const mapIconDay = new Map();
mapIconDay.set('broken clouds', HeavyCloud);
mapIconDay.set('light rain', SmallRain);
mapIconDay.set('overcast clouds', Clouds);
mapIconDay.set('scattered clouds', Clouds);
mapIconDay.set('few clouds', SunCload);
mapIconDay.set('light snow', Snow);
mapIconDay.set('snow', Snow);
mapIconDay.set('clear sky', Sun);
mapIconDay.set('moderate rain', SmallRain);

const mapIconNight = new Map();
mapIconNight.set('broken clouds', CloudMoon);
mapIconNight.set('light rain', SmallRain);
mapIconNight.set('overcast clouds', Clouds);
mapIconNight.set('scattered clouds', Clouds);
mapIconNight.set('few clouds', CloudMoon);
mapIconNight.set('light snow', Snow);
mapIconNight.set('snow', Snow);
mapIconNight.set('clear sky', Moon);
mapIconNight.set('moderate rain', SmallRain);

let weatherIcon = (date.getHours() > 18 || date.getHours() < 6) ? mapIconNight : mapIconDay

class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      list: [],
      activeWeather: {
        activeTemperature: null,
        activeIcon: null,
        activeWind: ''
      },
      activeDay: {
        Monday: 'active',
        Tuesday: 'inactive',
        Wednesday: 'inactive',
        Thursday: 'inactive',
        Friday: 'inactive',
        Saturday: 'inactive',
        Sunday: 'inactive'
      },
      weatherDay: [
        {firstHour: null},
        {secondHour: null},
        {thirdHour: null},
        {fourthHour: null},
        {fivethHour: null},
        {sixthHour: null},
        {seventhHour: null},
        {eighthHour: null},
      ],
      days: [
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        },
        {
          day: {
            weatherDescription: null,
            icon: null,
            main: null,
            temperature: null,
            wind: ''
          }
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.payload}&APPID=${key}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        city: data.city.name,
        list: data.list,
        activeWeather: {
          activeTemperature: Math.round(data.list[0].main.temp - 273.15),
          activeIcon: weatherIcon.get(data.list[0].weather[0].description),
          activeWind: data.list[0].wind.speed
        },
        weatherDay: [
          {
            time: data.list[0].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[0].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[0].main.temp - 273.15),
            icon: weatherIcon.get(data.list[0].weather[0].description),
          },
          {
            time: data.list[1].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[1].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[1].main.temp - 273.15),
            icon: weatherIcon.get(data.list[1].weather[0].description),
          },
          {
            time: data.list[2].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[2].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[2].main.temp - 273.15),
            icon: weatherIcon.get(data.list[2].weather[0].description),
          },
          {
            time: data.list[3].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[3].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[3].main.temp - 273.15),
            icon: weatherIcon.get(data.list[3].weather[0].description),
          },
          {
            time: data.list[4].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[4].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[4].main.temp - 273.15),
            icon: weatherIcon.get(data.list[4].weather[0].description),
          },
          {
            time: data.list[5].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[5].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[5].main.temp - 273.15),
            icon: weatherIcon.get(data.list[5].weather[0].description),
          },
          {
            time: data.list[6].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[6].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[6].main.temp - 273.15),
            icon: weatherIcon.get(data.list[6].weather[0].description),
          },
          {
            time: data.list[7].dt_txt.split(' ')[1].substr(0, 5),
            date: data.list[7].dt_txt.split(' ')[0].substr(5, 5),
            temperature: Math.round(data.list[7].main.temp - 273.15),
            icon: weatherIcon.get(data.list[7].weather[0].description),
          },
        ],



        days: [
          {
            day: {
              weatherDescription: data.list[0].weather[0].description,
              icon: weatherIcon.get(data.list[0].weather[0].description),
              main: data.list[0].weather[0].main,
              temperature: Math.round(data.list[0].main.temp - 273.15),
              wind: data.list[0].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[8].weather[0].description,
              icon: weatherIcon.get(data.list[8].weather[0].description),
              main: data.list[8].weather[0].main,
              temperature: Math.round(data.list[8].main.temp - 273.15),
              wind: data.list[8].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[16].weather[0].description,
              icon: weatherIcon.get(data.list[16].weather[0].description),
              main: data.list[16].weather[0].main,
              temperature: Math.round(data.list[16].main.temp - 273.15),
              wind: data.list[16].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[24].weather[0].description,
              icon: weatherIcon.get(data.list[24].weather[0].description),
              main: data.list[24].weather[0].main,
              temperature: Math.round(data.list[24].main.temp - 273.15),
              wind: data.list[24].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[32].weather[0].description,
              icon: weatherIcon.get(data.list[32].weather[0].description),
              main: data.list[32].weather[0].main,
              temperature: Math.round(data.list[32].main.temp - 273.15),
              wind: data.list[32].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[39].weather[0].description,
              icon: weatherIcon.get(data.list[39].weather[0].description),
              main: data.list[39].weather[0].main,
              temperature: Math.round(data.list[39].main.temp - 273.15),
              wind: data.list[39].wind.speed
            }
          },
          {
            day: {
              weatherDescription: data.list[39].weather[0].description,
              icon: weatherIcon.get(data.list[39].weather[0].description),
              main: data.list[39].weather[0].main,
              temperature: Math.round(data.list[39].main.temp - 273.15),
              wind: data.list[39].wind.speed
            }
          }
        ]
      })
    })
    date = new Date();
    dayNumber = date.getDay();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.payload !== this.props.payload) {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.payload}&APPID=${key}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.city.name,
          list: data.list,
          activeWeather: {
            activeTemperature: Math.round(data.list[0].main.temp - 273.15),
            activeIcon: weatherIcon.get(data.list[0].weather[0].description),
            activeWind: data.list[0].wind.speed
          },
          weatherDay: [
            {
              time: data.list[0].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[0].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[0].main.temp - 273.15),
              icon: weatherIcon.get(data.list[0].weather[0].description),
            },
            {
              time: data.list[1].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[1].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[1].main.temp - 273.15),
              icon: weatherIcon.get(data.list[1].weather[0].description),
            },
            {
              time: data.list[2].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[2].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[2].main.temp - 273.15),
              icon: weatherIcon.get(data.list[2].weather[0].description),
            },
            {
              time: data.list[3].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[3].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[3].main.temp - 273.15),
              icon: weatherIcon.get(data.list[3].weather[0].description),
            },
            {
              time: data.list[4].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[4].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[4].main.temp - 273.15),
              icon: weatherIcon.get(data.list[4].weather[0].description),
            },
            {
              time: data.list[5].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[5].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[5].main.temp - 273.15),
              icon: weatherIcon.get(data.list[5].weather[0].description),
            },
            {
              time: data.list[6].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[6].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[6].main.temp - 273.15),
              icon: weatherIcon.get(data.list[6].weather[0].description),
            },
            {
              time: data.list[7].dt_txt.split(' ')[1].substr(0, 5),
              date: data.list[7].dt_txt.split(' ')[0].substr(5, 5),
              temperature: Math.round(data.list[7].main.temp - 273.15),
              icon: weatherIcon.get(data.list[7].weather[0].description),
            },
          ],
          days: [
            {
              day: {
                weatherDescription: data.list[0].weather[0].description,
                icon: weatherIcon.get(data.list[0].weather[0].description),
                main: data.list[0].weather[0].main,
                temperature: Math.round(data.list[0].main.temp - 273.15),
                wind: data.list[0].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[8].weather[0].description,
                icon: weatherIcon.get(data.list[8].weather[0].description),
                main: data.list[8].weather[0].main,
                temperature: Math.round(data.list[8].main.temp - 273.15),
                wind: data.list[8].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[16].weather[0].description,
                icon: weatherIcon.get(data.list[16].weather[0].description),
                main: data.list[16].weather[0].main,
                temperature: Math.round(data.list[16].main.temp - 273.15),
                wind: data.list[16].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[24].weather[0].description,
                icon: weatherIcon.get(data.list[24].weather[0].description),
                main: data.list[24].weather[0].main,
                temperature: Math.round(data.list[24].main.temp - 273.15),
                wind: data.list[24].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[32].weather[0].description,
                icon: weatherIcon.get(data.list[32].weather[0].description),
                main: data.list[32].weather[0].main,
                temperature: Math.round(data.list[32].main.temp - 273.15),
                wind: data.list[32].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[39].weather[0].description,
                icon: weatherIcon.get(data.list[39].weather[0].description),
                main: data.list[39].weather[0].main,
                temperature: Math.round(data.list[39].main.temp - 273.15),
                wind: data.list[39].wind.speed
              }
            },
            {
              day: {
                weatherDescription: data.list[39].weather[0].description,
                icon: weatherIcon.get(data.list[39].weather[0].description),
                main: data.list[39].weather[0].main,
                temperature: Math.round(data.list[39].main.temp - 273.15),
                wind: data.list[39].wind.speed
              }
            }
          ]
        })
      })
    }
    dayNumber = date.getDay();
  }

  handleClick(dayActive, activeTemp, activeIcon, activeWind, element, event) {
    this.setState({
      activeWeather: {
        activeTemperature: activeTemp,
        activeIcon: weatherIcon.get(activeIcon),
        activeWind: activeWind
      },


      weatherDay: [
        {
          time: this.state.list[element].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element].weather[0].description),
        },
        {
          time: this.state.list[element + 1].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 1].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 1].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 1].weather[0].description),
        },
        {
          time: this.state.list[element + 2].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 2].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 2].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 2].weather[0].description),
        },
        {
          time: this.state.list[element + 3].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 3].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 3].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 3].weather[0].description),
        },
        {
          time: this.state.list[element + 4].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 4].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 4].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 4].weather[0].description),
        },
        {
          time: this.state.list[element + 5].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 5].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 5].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 5].weather[0].description),
        },
        {
          time: this.state.list[element + 6].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 6].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 6].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 6].weather[0].description),
        },
        {
          time: this.state.list[element + 7].dt_txt.split(' ')[1].substr(0, 5),
          date: this.state.list[element + 7].dt_txt.split(' ')[0].substr(5, 5),
          temperature: Math.round(this.state.list[element + 7].main.temp - 273.15),
          icon: weatherIcon.get(this.state.list[element + 7].weather[0].description),
        },
      ]


    })
    if (dayActive === 0) {
      this.setState({
        activeDay: {
          Monday: 'active',
          Tuesday: 'inactive',
          Wednesday: 'inactive',
          Thursday: 'inactive',
          Friday: 'inactive',
          Saturday: 'inactive',
          Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 1) {
      console.log('jjjj')
      this.setState({
        activeDay: {
        Monday: 'inactive',
        Tuesday: 'active',
        Wednesday: 'inactive',
        Thursday: 'inactive',
        Friday: 'inactive',
        Saturday: 'inactive',
        Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 2) {
      this.setState({
        activeDay: {
          Monday: 'inactive',
          Tuesday: 'inactive',
          Wednesday: 'active',
          Thursday: 'inactive',
          Friday: 'inactive',
          Saturday: 'inactive',
          Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 3) {
      this.setState({
        activeDay: {
          Monday: 'inactive',
          Tuesday: 'inactive',
          Wednesday: 'inactive',
          Thursday: 'active',
          Friday: 'inactive',
          Saturday: 'inactive',
          Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 4) {
      this.setState({
        activeDay: {
          Monday: 'inactive',
          Tuesday: 'inactive',
          Wednesday: 'inactive',
          Thursday: 'inactive',
          Friday: 'active',
          Saturday: 'inactive',
          Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 5) {
      this.setState({
        activeDay: {
          Monday: 'inactive',
          Tuesday: 'inactive',
          Wednesday: 'inactive',
          Thursday: 'inactive',
          Friday: 'inactive',
          Saturday: 'active',
          Sunday: 'inactive'
        }
      })
    }
    else if (dayActive === 6) {
      this.setState({
        activeDay: {
          Monday: 'inactive',
          Tuesday: 'inactive',
          Wednesday: 'inactive',
          Thursday: 'inactive',
          Friday: 'inactive',
          Saturday: 'inactive',
          Sunday: 'active'
        }
      })
    }
  }

  
  render() {
    return (
      <div className='information'>
        <Days
          dayNumber = {dayNumber}
          handleClick = {this.handleClick}
          activeDay = {this.state.activeDay}
          days = {this.state.days}
        />
        <Hours
          weatherDay = {this.state.weatherDay}
        />
        <Details
          cityName = {this.state.city}
          weatherData = {this.state.activeWeather}
        />
      </div>
    )
  }
}

export default Information;