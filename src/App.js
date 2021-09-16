import './styles/App.css';
import Clock from './components/Clock';
import TemperatureConverter from './components/TemperatureConverter';
import TemperatureTable from './components/TemperatureTable';

function App() {
  return (
    <div className="App">
      <h3>
        Current Lithuanian time
        <Clock />
      </h3>
      <TemperatureConverter/>
      <TemperatureTable/>
    </div>
  );
}

export default App;