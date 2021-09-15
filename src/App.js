import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock />
      <TemperatureCalculator />
      <TemperatureTable />
    </div>
  );
}

const TemperatureTable = () => {
  const cities = ["Vilnius", "Kaunas", "Klaipeda"];

  ////

  const TemperatureRow = ({city}) => {
    const [tempData, setTempData] = useState();

    useEffect(() => {
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      "33c92b0552e0eea71460739025382726").then(response => {
        console.log(response.data.main)
        //setTempData(response.data.main);
      });
    }, []);

    //console.log(tempData);

    return (
      <>
      </>
      // <tr>
      //   <td>{city}</td>
      //   <td>{tempData.temp}</td>
      //   <td>{tempData.feels_like}</td>
      //   <td>{tempData.humidity}</td>
      // </tr>
    )
  }

  ////

  return (
    <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Temperature feels like</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {/* {cities?.map(city => <TemperatureRow city={city}/>)} */}
          <TemperatureRow city="Vilnius"/>
        </tbody>
      </table>
  )
}

const TemperatureCalculator = () => {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const setTemps = (c, f) => {
    setCelsius(c);
    setFahrenheit(f)
  }

  const resetTemps = () => {
    setCelsius("");
    setFahrenheit("")
  }

  const handleCelsiusChange = (event) => {
    const c = event.target.value;
    if(isNumber(c)){
      setTemps(c, celsiusToFahrenheit(c));
    } else {
      resetTemps();
    }
  }

  const handleFahrenheitChange = (event) => {
    const f = event.target.value;
    if(isNumber(f)){
      setTemps(fahrenheitToCelsius(f), f);
    } else {
      resetTemps();
    }
  }

  const celsiusToFahrenheit = (celsius) => {
    return 9 / 5 * celsius + 32;
  }

  const fahrenheitToCelsius = (fahrenheit) => {
    return 5 / 9 * (fahrenheit - 32);
  }

  const isNumber = str => {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <p>Temperature Converter:</p>
          </td>
        </tr>
        <tr>
          <td>
            <input onChange={handleCelsiusChange} value={celsius}></input>
          </td>
          <td>
            °C
          </td>
        </tr>
        <tr>
          <td>
            <input onChange={handleFahrenheitChange} value={fahrenheit}></input>
          </td>
          <td>
            °F
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const Clock = () => {
  const [time, setTime] = useState(Date().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date().toString());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>{time}</p>
  );
}

export default App;
