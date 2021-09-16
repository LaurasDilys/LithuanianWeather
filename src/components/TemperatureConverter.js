import { useState } from 'react';

const celsiusToFahrenheit = celsius => {
  return 9 / 5 * celsius + 32;
}

const fahrenheitToCelsius = fahrenheit => {
  return 5 / 9 * (fahrenheit - 32);
}

const isNumber = str => {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

const round = num => {
  return Math.round(num * 100) / 100;
}

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const resetTemps = () => {
    setCelsius("");
    setFahrenheit("")
  }

  const handleCelsiusChange = event => {
    const c = event.target.value;
    if(isNumber(c)){
      setCelsius(c);
      setFahrenheit(round(celsiusToFahrenheit(c)))
    } else {
      resetTemps();
    }
  }

  const handleFahrenheitChange = event => {
    const f = event.target.value;
    if(isNumber(f)){
      setCelsius(round(fahrenheitToCelsius(f)));
      setFahrenheit(f);
    } else {
      resetTemps();
    }
  }

  return (
    <form>
      <h3>Temperature converter</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <input onChange={handleCelsiusChange} type="number" value={celsius}></input>
            </td>
            <td>
              °C
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={handleFahrenheitChange} type="number" value={fahrenheit}></input>
            </td>
            <td>
              °F
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export { round, celsiusToFahrenheit };
export default TemperatureConverter;