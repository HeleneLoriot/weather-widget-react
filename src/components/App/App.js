import { useState } from 'react';

// components
import SearchBar from '../SearchBar';
import WeatherWidget from '../WeatherWidget';

// style
import './style.scss';

function App() {
  // state
  const [city, setCity] = useState();
  const [inputValue, setInputValue] = useState('');


  return (
    <div className="app">
      <div className="container">
        <WeatherWidget city={city}/>
        <SearchBar value={inputValue} setValue={setInputValue} onSubmitForm={setCity}/>
      </div>
    </div>
  );
}

export default App;
