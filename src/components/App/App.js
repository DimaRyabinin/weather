import React from 'react'
import './App.scss'
import Search from '../Search/Search'
import Weather from '../Weather/Weather'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payload: '',
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (payload) {
    event.preventDefault()
    this.setState({
      payload: payload,
      value: ''
    })
  }

  handleChange (value) {
    event.preventDefault()
    this.setState({
      value: value
    })
  }

  
  render() {
    return (
    <div className='container'>
      <div className="App">
        <div className='App__search'>
          <Search
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            value = {this.state.value}
          />
        </div>
        <div className='contant'>
          <Weather
            payload = {this.state.payload}
            activeDay = {this.state.activeDay}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default App;