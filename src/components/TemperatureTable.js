import '../styles/TemperatureTable.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TemperatureRow from './TemperatureRow';

const TemperatureTable = () => {
  const cities = [
    "Vilnius",
    "Kaunas",
    "Klaipėda",
    "Šiauliai",
    "Alytus",
    "Marijampolė",
    "Palanga",
    "Druskininkai",
    "Nida"
  ];
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    cities.forEach(city => axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=33c92b0552e0eea71460739025382726")
    .then(response => {
      setTemperatureData(prevData => [...prevData, response.data] )
    }));
  }, []);

  return (
    <div>
      <h3>Current temperatures in Lithuanian cities</h3>
      <table className="border-cells">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Feels like</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {temperatureData?.map(city => <TemperatureRow
            city={city}
            key={cities.indexOf(city.name)}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default TemperatureTable;