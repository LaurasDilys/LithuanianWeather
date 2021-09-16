import CelsiusToFahrenheitTooltip from "./TemperatureTooltip";

const TemperatureRow = ({city}) => {
  
  return (
    <tr>
      <td>{city.name}</td>
      <CelsiusToFahrenheitTooltip temperature={city.main.temp}>
        <td>{city.main.temp}</td>
      </CelsiusToFahrenheitTooltip>
      <CelsiusToFahrenheitTooltip temperature={city.main.feels_like}>
        <td>{city.main.feels_like}</td>
      </CelsiusToFahrenheitTooltip>
      <td>{city.main.humidity}</td>
    </tr>
  )
}

export default TemperatureRow;