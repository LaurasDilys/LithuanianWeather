const TemperatureRow = ({city}) => {

  return (
    <tr>
      <td>{city.name}</td>
      <td>{city.main.temp}</td>
      <td>{city.main.feels_like}</td>
      <td>{city.main.humidity}</td>
    </tr>
  )
}

export default TemperatureRow;