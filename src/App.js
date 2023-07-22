import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({})

  const apikey = "6ba1eb6781d4b032f1996f5194ce792b"


  function getData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then((result) => {
        console.log(result.data);
        setWeather(result.data)
      })
  }

  return (
    <div className='App'>

      <header className="App-header">

        <h1>kashish Weather App</h1><br />

        <div className="div">
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='Enter City' />
          <button onClick={getData}>Search</button>

          <br /><br />

          {
            !weather.main ?

              <h2>Please Enter Your City</h2>

              :

              <div className="div">
                <h1>{weather.name}</h1>

                <br />

                <h2>{weather.main.temp}&#176;C</h2>

                <br />
                <h2>{weather.weather[0].main}</h2>
              </div>


          }

        </div>

      </header>
    </div>
  )
}