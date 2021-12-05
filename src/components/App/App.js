// components
import SearchBar from '../SearchBar';
import WeatherWidget from '../WeatherWidget';

// style
import './style.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <WeatherWidget />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
