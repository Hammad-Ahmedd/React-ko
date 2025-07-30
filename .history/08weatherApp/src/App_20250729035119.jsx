import { useState } from 'react';
import './App.css';
import useWeather from './hooks/Useweather';

function App() {
  const [inputVal, setInputVal] = useState(""); // user input
  const [location, setLocation] = useState(""); // searched location
  const temperature = useWeather(location);

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(inputVal);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      {temperature !== null && (
        <p>Temperature in {location}: {temperature}°C</p>
      )}
    </>
  );
}

export default App;
