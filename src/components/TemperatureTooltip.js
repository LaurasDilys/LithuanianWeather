import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { round, celsiusToFahrenheit } from "./TemperatureConverter";

const WhiteOnDarkBlueTooltip = withStyles({
  arrow: {
    color: "#2d3e50"
  },
  tooltip: {
    color: "white",
    backgroundColor: "#2d3e50",
    fontFamily: "Open Sans",
    fontSize: "12px"
  }
})(Tooltip);

const CelsiusToFahrenheitTooltip = props => {

  return (
    <WhiteOnDarkBlueTooltip title={round(celsiusToFahrenheit(props.temperature)) + " °F"} arrow>
      {props.children}
    </WhiteOnDarkBlueTooltip>
  )
}

export default CelsiusToFahrenheitTooltip;