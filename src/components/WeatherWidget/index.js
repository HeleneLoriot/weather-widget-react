import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// style
import './style.scss';

export default function WeatherWidget({ city }) {
  // local state
  const [description, setDescscription] = useState('');
  const [temperature, setTemperature] = useState('');
  const [iconId, setIconId] = useState('02d');
  const [error, setError] = useState(false);

  useEffect(() => {
      // secret key for https://openweathermap.org/ API
      const apiKey = process.env.REACT_APP_API_KEY;

      setError(false);

      //call api open weather
      const loadData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appId=${apiKey}`);
          const { main: { temp }, weather } = response.data;
          setTemperature(Math.round(temp));
          setIconId(weather[0].icon)
          setDescscription(weather[0].description)
        }
        catch (error) {
          setTemperature('-');
          setIconId('11d');
          setDescscription('');
          setError(true);
        }
      };

    loadData();
  },[city])


  let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`

  const errorClassName = error ? '--error' : '';

  return (
    <div className="weather-widget">
        <div className="weather-widget__iconContainer">
          <img className="weather-widget__icon"src={icon} alt="weather icon" />
        </div>
        <div className={`weather-widget__infos weather-widget__infos${errorClassName}`}>
          {error ? <p className="weather-widget__errorMessage">Cette ville n'existe pas</p> : <p className="weather-widget__city">{city}</p> }
          <p className="weather-widget__description">{description}</p>
        </div>
        <div className={`weather-widget__temperature weather-widget__temperature${errorClassName}`}>{temperature}<sup>°</sup>C</div>
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string,
};

WeatherWidget.defaultProps = {
  city: 'Paris',
};